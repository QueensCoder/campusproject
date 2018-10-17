const { db, Student, Campus } = require('./server/db');
const { green, red } = require('chalk');
//require db student and campus from db/index
//now we can sync db and seed db

// const students = [
//   { firstName: 'Oz', lastName: 'Zero', email: 'oz@ozcorp.com', imageURL: }
// ];

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
