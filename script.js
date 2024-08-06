document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    fetch('http://localhost:8080/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dataDisplay').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
