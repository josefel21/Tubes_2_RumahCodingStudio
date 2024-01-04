document.addEventListener('DOMContentLoaded', () => {
  // Gunakan fetch untuk mendapatkan daftar atribut dari server
  fetch('/api/getAttributes')  // Sesuaikan dengan rute yang benar
      .then(response => response.json())
      .then(attributes => {
          // Isi dropdown dengan atribut
          const excludedOptions = ['ID', 'Z_CostContact','Z_Revenue'];
          fillDropdown('att1', attributes, excludedOptions);

          // Setel fungsi untuk merender barChart saat dropdown berubah
          const att1 = document.getElementById('att1');

          att1.addEventListener('change', renderBarChart);

          // Render BarChart untuk atribut default saat halaman dimuat
          renderBarChart();
      })
      .catch(error => {
          console.error('Error fetching attributes:', error);
      });

  function fillDropdown(dropdownId, options, excludedOptions) {
    const dropdown = document.getElementById(dropdownId);
  
    options.forEach(option => {
      // Check if the option should be excluded
      if (!excludedOptions || excludedOptions.indexOf(option) === -1) {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
      }
    });
  }
      

  function renderBarChart() {
    const attribute = att1.value;
  
    fetch(`/api/barChartData?att1=${attribute}`)
      .then(response => response.json())
      .then(data => {
        const svgContainer = document.getElementById('barChart-container');
        svgContainer.innerHTML = '';
  
        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        const width = 700 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
  
        const svg = d3.select("#barChart-container")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
        // Handling null values and setting them to an empty string
        data = data.map(d => ({ att1: d.att1 || "" }));
  
        // Count the occurrences of each unique value
        const valueCounts = {};
        data.forEach(d => {
          const value = d.att1;
          valueCounts[value] = (valueCounts[value] || 0) + 1;
        });
  
        // Extract unique values and their counts
        const uniqueValues = Object.keys(valueCounts);
        const counts = uniqueValues.map(value => valueCounts[value]);
  
        const xScale = d3.scaleBand()
          .domain(uniqueValues)
          .range([0, width])
          .padding(0.1);
  
        const yScale = d3.scaleLinear()
          .domain([0, d3.max(counts)])
          .range([height, 0]);
  
        svg.selectAll("rect")
          .data(uniqueValues)
          .enter()
          .append("rect")
          .attr("x", d => xScale(d))
          .attr("y", d => yScale(valueCounts[d]))
          .attr("width", xScale.bandwidth())
          .attr("height", d => height - yScale(valueCounts[d]))
          .attr("fill", 'steelblue');
  
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(xScale));
  
        svg.append("g")
          .call(d3.axisLeft(yScale));
  
        svg.append("text")
          .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 30) + ")")
          .style("text-anchor", "middle")
          .text(attribute);
  
        svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0 - margin.left )
          .attr("x", 0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Frekuensi");
      })
      .catch(error => {
        console.error('Error fetching bar chart data:', error);
      });
  }
});