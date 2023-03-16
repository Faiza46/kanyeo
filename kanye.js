function loadKanye() {
    fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => displaData(data))
}

function displaData(data) {
    const dataField = document.getElementById('kanye-id')
    dataField.innerText = data.quote;



}