import dbConnect from "./database.js";


const width = 550;
const height = 450;

// Buat elemen SVG di dalam container
const svg = d3.select("#scatter-plot-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Buat skala untuk sumbu x dan y
const xScale = d3.scaleLinear()
  .range([0, width]);

const yScale = d3.scaleLinear()
  .range([height, 0]);

// Ambil data dari database MySQL
const sqlQuery = 'SELECT Education, Income FROM customer';

console.log(sqlQuery);

const connection = dbConnect();

connection.query(sqlQuery, (error, results) => {
  if (error) throw error;

  // Gunakan data hasil query untuk scatter plot
  const dataFromDB = results.map(row => ({
    x: row.Education,
    y: row.Income
  }));

  // Atur domain skala berdasarkan data dari database
  xScale.domain([0, d3.max(dataFromDB, d => d.x)]);
  yScale.domain([0, d3.max(dataFromDB, d => d.y)]);

  // Gambar titik-titik pada scatter plot
  svg.selectAll("circle")
    .data(dataFromDB)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 5); // Radius titik

  // Tambahkan sumbu x dan y
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .call(d3.axisLeft(yScale));

     // Tutup koneksi setelah selesai menggunakan data
  connection.end();
});
