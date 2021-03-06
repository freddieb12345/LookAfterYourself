const { Entry } = require('../models');

const entryData = [
  {
    id: 1,
    water: 5,
    exercise: 80,
    sleep: 360,
    mood: 10,
    user_id: 1,
    entry_date: "7-6-2021",
    notes: "hello my name is freddie 07/0"
  },
  {
    id: 2,
    water: 2,
    exercise: 60,
    sleep: 460,
    mood: 10,
    user_id: 2,
    entry_date: "7-6-2021",
    notes: "hello my name is dana"
  },
  {
    id: 3,
    water: 3,
    exercise: 50,
    sleep: 260,
    mood: 10,
    user_id: 3,
    entry_date: "8-6-2021",
    notes: "hello my name is jack"
  },
  {
    id: 4,
    water: 8,
    exercise: 100,
    sleep: 260,
    mood: 9,
    user_id: 1,
    entry_date: "8-6-2021",
    notes: "hello my name is freddie 07/0"
  },
];

const seedEntrys = () => Entry.bulkCreate(entryData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedEntrys;