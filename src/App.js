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
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">منصة عقارات العراق</h1>
          <p className="mt-2">بيع، شراء، إيجار، استثمار</p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">العقارات المتاحة</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            + أضف عقار
          </button>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{property.title}</h3>
                <p className="text-sm text-gray-600">الموقع: {property.location}</p>
                <p className="text-sm text-gray-600">النوع: {property.type}</p>
                <p className="text-sm text-green-600 font-semibold mt-2">{property.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4 mt-8">
        © 2025 منصة عقارات العراق - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}

export default App;
