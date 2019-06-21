const { db, Student, Campus } = require('./server/db');
const { green, red } = require('chalk');

//require db student and campus from db/index
//now we can sync db and seed db

const students = [
  {
    firstName: 'Oz',
    lastName: 'Zero',
    email: 'oz@ozcorp.com',
    imageURL: './images/user.jpeg',
    gpa: 3.5,
    campusId: 1
  },
  {
    firstName: 'rena',
    lastName: 'Ser',
    email: 'ser@ozcorp.com',
    imageURL: './images/default.jpeg',
    gpa: 4.0,
    campusId: 2
  },
  {
    firstName: 'filler',
    lastName: 'Ser',
    email: 'ser@ozcorp.com',
    imageURL: './images/user.jpeg',
    gpa: 4.0,
    campusId: 1
  },
  {
    firstName: 'burt',
    lastName: 'zert',
    email: 'ser@ozcorp.com',
    imageURL: './images/user.jpeg',
    gpa: 4.0,
    campusId: 2
  },
  {
    firstName: 'gurt',
    lastName: 'yoyo',
    email: 'ser@ozcorp.com',
    imageURL: './images/default.jpeg',
    gpa: 4.0,
    campusId: 2
  }
];

const campuses = [
  {
    name: 'Titan',
    imageUrl: './images/titan.jpeg',
    description: 'a reall big campus',
    address: '190-90'
  },
  {
    name: 'Venus',
    imageUrl: './images/Venus.jpeg',
    description: 'chemicals and acid rain',
    address: '2 from the Sun'
  },
  {
    name: 'Mars',
    imageUrl: './images/Mars.jpeg',
    description: 'second most habitable after earth',
    address: 'Before asteriod belt'
  }
];

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  try {
    await campuses.map(campus => Campus.create(campus));
    await students.map(student => Student.create(student));
    console.log(green('Seeding success!'));
    //await db.close(); //had to remove this for async call to work
  } catch (err) {
    console.log(red(err));
  }
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
