import React, { useState } from "react";

const initialProperties = [
  {
    id: 1,
    title: "منزل للبيع في بغداد",
    type: "سكني",
    price: "100,000 دولار",
    location: "بغداد - الكرادة",
    image: "https://via.placeholder.com/400x200?text=منزل+للبيع",
  },
];

function App() {
  const [properties, setProperties] = useState(initialProperties);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProperty = (e) => {
    e.preventDefault();
    const newProperty = { ...formData, id: Date.now() };
    setProperties([...properties, newProperty]);
    setFormData({ title: "", location: "", price: "", type: "", image: "" });
    setShowForm(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <header className="bg-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">منصة عقارات العراق</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">العقارات المتاحة</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            {showForm ? "إلغاء" : "+ أضف عقار"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleAddProperty}
            className="bg-white p-4 rounded shadow-md mb-6 grid gap-4 md:grid-cols-2"
          >
            <input
              type="text"
              name="title"
              placeholder="عنوان العقار"
              value={formData.title}
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="location"
              placeholder="الموقع"
              value={formData.location}
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="price"
              placeholder="السعر"
              value={formData.price}
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="type"
              placeholder="النوع (سكني، تجاري، زراعي)"
              value={formData.type}
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="image"
              placeholder="رابط صورة"
              value={formData.image}
              onChange={handleChange}
              className="border p-2 rounded md:col-span-2"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded md:col-span-2"
            >
              حفظ العقار
            </button>
          </form>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{property.title}</h3>
                <p className="text-sm text-gray-600">الموقع: {property.location}</p>
                <p className="text-sm text-gray-600">النوع: {property.type}</p>
                <p className="text-sm text-green-600 font-semibold mt-2">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-800 text-white text-center py-4 mt-8">
        © 2025 منصة عقارات العراق - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}

export default App;
