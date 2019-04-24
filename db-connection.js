const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'goranlj',
  host: '138.68.87.73',
  database: 'db_goranlj',
  password: '&>q4CT!D',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'goranlj',
  host: '138.68.87.73',
  database: 'db_goranlj',
  password: '&>q4CT!D',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})