// 1. instantiate plotly API KEY - aEMLfycIhGCp09dL8COU
const path = require('path')
const express = require('express')
const app = express()

app.get('/',function(req,res) {
    const plotly = require('plotly')("Joeretz", "aEMLfycIhGCp09dL8COU")

// 2. define data

const trace1 = {
    x: ["monday", "tuesday", "wednesday","thursday","friday"],
    y: [52, 17, 52,17,209],
    name: "fare",
    type: "bar"
  };
  const trace2 = {
    x: ["monday", "tuesday", "wednesday","thursday","friday"],
    y: [40, 40, 40,40,40],
    name: "food",
    type: "bar"
  };
  const trace3 = {
    x: ["monday", "tuesday", "wednesday","thursday","friday"],
    y: [30, 30, 30,30,30],
    name: "food after gym",
    type: "bar"
  };
  const data = [trace1, trace2,trace3];
  const layout = {barmode: "group"};
  const graphOptions = {layout: layout, filename: "grouped-bar", fileopt: "overwrite"};
  plotly.plot(data, graphOptions, function (err, msg) {
      console.log(msg);
      res.end(`<a href=${msg.url}>view my plot</a>`);
  });

  



})

const PORT = process.env.PORT || 5000
app.listen(PORT)

console.log(`server running on ${PORT}`)

 
// 3. graph options

// 4. graph plot

