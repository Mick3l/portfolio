function createTable(rows, cols) {
    const tableContainer = document.getElementById('table')
    tableContainer.innerHTML = ''

    const table = document.createElement('tbody')
    table.classList.add('dummy-table')

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td')
            td.contentEditable = "true"
            td.classList.add('dummy-table-cell')
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
}

document
    .getElementById('table-form')
    .addEventListener('submit', function (e) {
        e.preventDefault()

        const rows = document.getElementById('table-form__rows').value
        const cols = document.getElementById('table-form__cols').value
        createTable(rows, cols)
    })


document
    .getElementById('save-table')
    .onclick = function (e) {
    e.preventDefault()
    try {
        window.localStorage.setItem('table', document.getElementById('table').innerHTML)
    } catch (e) {
        if (e.name === 'QUOTA_EXCEEDED_ERR') {
            alert('Sorry, your table is too big :(')
        }
    }
}

document
    .getElementById('load-table')
    .onclick = function (e) {
    e.preventDefault()
    document.getElementById('table').innerHTML = window.localStorage.getItem('table')
}



