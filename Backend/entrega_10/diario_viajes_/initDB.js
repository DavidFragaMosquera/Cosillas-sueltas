require('dotenv').config();
const bcrypt = require('bcrypt');
const faker = require('faker/locale/es');
const { random } = require('lodash');

const { getConnection } = require('./db');
const { formatDateToDB } = require('./helpers');

const args = process.argv;

const addData = args[2] === '--data';

async function main() {
  // Get reference to db
  const connection = await getConnection();

  console.log('Dropping tables');
  await connection.query('DROP TABLE IF EXISTS diary_votes');
  await connection.query('DROP TABLE IF EXISTS diary');
  await connection.query('DROP TABLE IF EXISTS users');

  // Create table users
  await connection.query(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      registrationDate DATETIME NOT NULL,
      lastPasswordUpdate DATETIME NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) UNIQUE NOT NULL,
      role ENUM("normal", "admin") DEFAULT "normal" NOT NULL,
      active BOOLEAN DEFAULT false NOT NULL,
      realName VARCHAR(255),
      avatar VARCHAR(255),
      registrationCode VARCHAR(255)
    )
`);

  // Create table diary
  await connection.query(`
    CREATE TABLE diary (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      date DATETIME NOT NULL,
      description TEXT NOT NULL,
      place VARCHAR(255) NOT NULL,
      image VARCHAR(255),
      user_id INTEGER,
      CONSTRAINT FK_entry_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL 
    )
  `);

  // Create table diary votes
  await connection.query(`
    CREATE TABLE diary_votes (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      entry_id INTEGER NOT NULL,
      vote INTEGER NOT NULL,
      date DATETIME NOT NULL,
      user_id INTEGER,
      CONSTRAINT FK_votes_entry FOREIGN KEY (entry_id) REFERENCES diary(id) ON DELETE CASCADE,
      CONSTRAINT FK_votes_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  // Create initial user
  const password = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 10);

  await connection.query(`
        INSERT INTO users(registrationDate, lastPasswordUpdate, email, password, role, realName, active)
        VALUES(NOW(), NOW(), "berto@ber.to", "${password}", "admin", "Berto Yáñez", true)
      `);

  if (addData) {
    console.log('Adding initial data');

    const users = 5;

    for (let index = 0; index < users; index++) {
      // Create random user
      const email = faker.internet.email();
      const password = await bcrypt.hash(faker.internet.password(), 10);

      await connection.query(`
        INSERT INTO users(registrationDate, lastPasswordUpdate, email, password, role, realName, active)
        VALUES(NOW(), NOW(), "${email}", "${password}", "normal", "${faker.name.findName()}", true)
      `);
    }

    const entries = 10;

    for (let index = 0; index < entries; index++) {
      const userId = random(2, users + 1);

      await connection.query(`
      INSERT INTO diary (date, description, place, user_id) 
      VALUES ("${formatDateToDB(
        faker.date.recent()
      )}", "${faker.lorem.sentence()}", "${faker.address.city()}", ${userId})
    `);
    }

    const votes = 100;

    for (let index = 0; index < votes; index++) {
      const userId = random(2, users + 1);

      await connection.query(`
      INSERT INTO diary_votes (entry_id, vote, date, user_id) 
      VALUES ("${random(1, entries)}", "${random(1, 5)}", "${formatDateToDB(
        faker.date.recent()
      )}", ${userId})
      `);
    }
  }

  console.log('Initial structure created');

  connection.release();
  process.exit();
}

main();
