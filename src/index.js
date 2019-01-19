// import express from "express";
// import path from "path";

const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const path = require('path');     //core nodejs module

const app = express();

app.post("/api/auth", (req, res) => {
    res.status(400).json({ errors: { global: "Invalid credentials"} });
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, console.log("Running on localhost:8080"));


// important for babelrc
// "@babel/preset-env",
// "@babel/preset-react"