const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB Connected...'))
   .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/item'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
