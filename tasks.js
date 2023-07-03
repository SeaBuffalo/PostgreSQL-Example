require("dotenv").config();
const pg = require("pg");

const db = new pg.Client();

const task = process.argv[2];

const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS tasks_doc
(id SERIAL, doc jsonb);`;

const INSERT_TASK_SQL = `
INSERT INTO tasks_doc (doc)
VALUES ($1);`;

const GET_TASKS_SQL = `SELECT * FROM tasks_doc;`;

const GET_DOG_SQL = `
SELECT * FROM tasks_doc 
WHERE doc @> '{"task": "Walk the dog."}';`;

db.connect((err) => {
  if (err) throw err;
  db.query(CREATE_TABLE_SQL, (err) => {
    if (err) throw err;
    if (task) {
      db.query(INSERT_TASK_SQL, [task], (err) => {
        if (err) throw err;
        listTasks();
        // checkForDogs();
      });
    } else {
      listTasks();
      // checkForDogs();
    }
  });
});

function listTasks() {
  db.query(GET_TASKS_SQL, (err, results) => {
    if (err) throw err;
    console.log(results.rows);
  });
}

function checkForDogs() {
  db.query(GET_DOG_SQL, (err, results) => {
    if (err) throw err;
    console.log(results.rows);
    db.end();
  });
}