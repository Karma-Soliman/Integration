require("dotenv").config()
const express = require("express")
const { Client } = require("pg")

const app = express()
app.use(express.json())

const client = new Client({
  port: 5432,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
})

async function connectDb() {
  try {
    await client.connect()
    console.log("Connected to the database")
  } catch (e) {
    console.error("Error connecting to the database:", e)
    throw new Error("Error connecting to the database")
  }
}

connectDb()
