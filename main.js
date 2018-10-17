'use strict';

const { db } = require('./server/db');
const app = require('./server');
const PORT = 1337;

//force true drops all tables so you can add and edit new or old fields
db.sync({ force: true }) // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () =>
      console.log(`studiously serving silly sounds on port ${PORT}`)
    );
  });
