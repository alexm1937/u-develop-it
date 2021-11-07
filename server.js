
const express = require('express');
const db = require('./db/connection');
//will find default index.js router in apiRoutes and use
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//use apiRouters after /api
app.use('/api', apiRoutes);

//default res for any other req (not found)
app.use((req, res) => {
    res.status(404).end();
});

db.connect(err=> {
  if(err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});