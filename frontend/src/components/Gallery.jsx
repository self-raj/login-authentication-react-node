import React, { useState } from "react";
import axios from "axios";

const categories = ["Nature", "Animals", "Architecture", "Technology", "People", "Abstract"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleFileChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategory) return alert("Please select category");
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("category", selectedCategory);
    formData.append("image", image); // 👈 backend me upload.single("images") use ho raha hai

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/gallery", formData, {
       
        
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("red",res);
      alert(res.data.message);
      setSelectedCategory("");
      setImage(null);
      e.target.reset(); // reset form
    } catch (err) {
      console.error(err);
      alert("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Upload Image</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Category Select */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Image Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded px-3 py-2"
        />

        {/* Upload Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default Gallery;
