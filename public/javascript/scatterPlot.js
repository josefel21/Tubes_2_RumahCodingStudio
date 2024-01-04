// public/javascript/scatterPlot.js
document.addEventListener('DOMContentLoaded', () => {
    // Gunakan fetch untuk mendapatkan daftar atribut dari server
    fetch('/api/getAttributes')  // Sesuaikan dengan rute yang benar
        .then(response => response.json())
        .then(attributes => {
            // Isi dropdown sumbu x dan y dengan daftar atribut
            fillDropdown('xDropdown', attributes);
            fillDropdown('yDropdown', attributes);
  
            // Setel fungsi untuk merender scatter plot saat dropdown berubah
            const xDropdown = document.getElementById('xDropdown');
            const yDropdown = document.getElementById('yDropdown');
  
            xDropdown.addEventListener('change', renderScatterPlot);
            yDropdown.addEventListener('change', renderScatterPlot);
  
            // Render scatter plot untuk atribut default saat halaman dimuat
            renderScatterPlot();
        })
        .catch(error => {
            console.error('Error fetching attributes:', error);
        });
  
    function fillDropdown(dropdownId, options) {
        const dropdown = document.getElementById(dropdownId);
  
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            dropdown.appendChild(optionElement);
        });
    }
  
    function renderScatterPlot() {
      const xAttribute = xDropdown.value;
      const yAttribute = yDropdown.value;
    
      // Gunakan fetch untuk mendapatkan data dari server berdasarkan atribut yang dipilih
      fetch(`/api/scatterData?x=${xAttribute}&y=${yAttribute}`)
        .then(response => response.json())
        .then(data => {
          // Hapus scatter plot yang ada
          d3.select("#scatter-plot-container").selectAll("*").remove();
    
          // Buat elemen SVG di dalam container
          const margin = { top: 20, right:20, bottom: 50, left: 50 };
          const width = 700 - margin.left - margin.right;
          const height = 500 - margin.top - margin.bottom;
    
          const svg = d3.select("#scatter-plot-container")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
          const colorScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.x)])
            .range(['blue', 'red']);
    
          const sizeScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .range([3, 10]); // Sesuaikan range sesuai kebutuhan
    
          // Buat skala untuk sumbu x dan y
          const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.x)])
            .range([0, width]);
    
          const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .range([height, 0]);
    
          // Gambar titik-titik pada scatter plot
          svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d.x))
            .attr("cy", d => yScale(d.y))
            .attr("r", d => sizeScale(d.y))
            .attr("fill", d => colorScale(d.x));
    
          // Tambahkan sumbu x dan y
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale));
    
          svg.append("g")
            .call(d3.axisLeft(yScale));
    
          // Tambahkan label sumbu x
          svg.append("text")
            .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 30) + ")")
            .style("text-anchor", "middle")
            .text(xAttribute);
    
          // Tambahkan label sumbu y
          svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left )
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(yAttribute);
        })
        .catch(error => {
          console.error('Error fetching scatter data:', error);
        });
    }
  });