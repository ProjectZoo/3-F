document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.ipify.org?format=json')
     .then(response => response.json())
     .then(data => {
          document.getElementById('ipDisplay').textContent = "IP: " + data.ip;
      })
     .catch(error => console.error('Erro ao buscar o IP:', error));
});
