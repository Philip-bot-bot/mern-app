const mongoose = require('mongoose');
const config = require('config');
const Category = require('./models/Category'); // adjust this if needed

const mongoURI = config.get('mongoURI');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected');

  await Category.insertMany([
    { name: 'Work' },
    { name: 'Personal' },
    { name: 'Chores' },
    { name: 'School' }
  ]);

  console.log('✅ Categories inserted successfully');
  process.exit();
})
.catch(err => {
  console.error('❌ Error connecting to MongoDB:', err.message);
  process.exit(1);
});
