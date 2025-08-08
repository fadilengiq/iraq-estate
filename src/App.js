const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// // MongoDB Connection (Optional for now, use mock data)
// mongoose.connect('mongodb://localhost:27017/real_estate', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// Mock Data (Replace with MongoDB later)
const properties = [
  { id: 1, title: 'منزل فاخر في بغداد', description: 'منزل جميل مع حديقة كبيرة', price: '500,000 دولار', location: 'بغداد' },
  { id: 2, title: 'شقة في اربيل', description: 'شقة حديثة في وسط المدينة', price: '250,000 دولار', location: 'أربيل' },
  { id: 3, title: 'أرض زراعية في البصرة', description: 'أرض خصبة مناسبة للزراعة', price: '100,000 دولار', location: 'البصرة' },
];

// API Endpoint to get all properties
app.get('/api/properties', (req, res) => {
  res.json(properties);
});

// API Endpoint to get a specific property by ID
app.get('/api/properties/:id', (req, res) => {
  const propertyId = parseInt(req.params.id);
  const property = properties.find(p => p.id === propertyId);

  if (property) {
    res.json(property);
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
