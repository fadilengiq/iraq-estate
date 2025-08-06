import React from "react";

const properties = [
  {
    id: 1,
    title: "منزل للبيع في بغداد",
    type: "سكني",
    price: "100,000 دولار",
    location: "بغداد - الكرادة",
    image: "https://via.placeholder.com/400x200?text=منزل+للبيع",
  },
  {
    id: 2,
    title: "أرض زراعية للإيجار",
    type: "زراعي",
    price: "500 دولار/شهر",
    location: "بابل - الهاشمية",
    image: "https://via.placeholder.com/400x200?text=أرض+زراعية",
  },
];

function App() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">عقارات العراق</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-sm text-gray-600">الموقع: {property.location}</p>
              <p className="text-sm text-gray-600">النوع: {property.type}</p>
              <p className="text-sm text-green-600 font-bold mt-2">{property.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                عرض التفاصيل
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
