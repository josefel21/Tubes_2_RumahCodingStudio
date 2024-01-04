// public/javascript/summary.js
document.addEventListener('DOMContentLoaded', () => {
    // Menambahkan opsi statis untuk dropdown pertama (operationSelect)
    
    const operationOptions = ['SUM', 'COUNT', 'AVG', 'MIN', 'MAX'];
    const operationSelect = document.getElementById('operationSelect');
  
    operationOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      operationSelect.appendChild(optionElement);
    });
  
    // Gunakan fetch untuk mendapatkan daftar atribut dari server
    fetch('/api/getAttributes')
      .then(response => response.json())
      .then(attributes => {
        // Isi dropdown dengan daftar atribut
        fillDropdown('selectSelect', attributes);
        fillDropdown('groupBySelect', attributes);
      })
      .catch(error => {
        console.error('Error fetching attributes:', error);
      });
  
    // Menghandle perubahan dropdown
    const groupBySelect = document.getElementById('groupBySelect');
    const selectSelect = document.getElementById('selectSelect');
    const resultContainer = document.getElementById('resultContainer');
  
    groupBySelect.addEventListener('change', executeQuery);
    operationSelect.addEventListener('change', executeQuery);
    selectSelect.addEventListener('change', executeQuery);
  
    function executeQuery() {
      const groupByAttribute = groupBySelect.value;
      const operation = operationSelect.value;
      const selectAttribute = selectSelect.value;
  
      // Gunakan fetch untuk menjalankan query SQL
      fetch(`/api/executeQuery?groupBy=${groupByAttribute}&operation=${operation}&select=${selectAttribute}`)
        .then(response => response.json())
        .then(result => {
          // Tampilkan hasil pada div class "resultContainer"
          resultContainer.textContent = JSON.stringify(result);
        })
        .catch(error => {
          console.error('Error executing query:', error);
        });
    }
  
    function fillDropdown(dropdownId, options) {
      const dropdown = document.getElementById(dropdownId);
  
      options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
      });
    }
  });
  