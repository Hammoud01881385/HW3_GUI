
// Name: Rami Hammoud rami_hammoud@student.uml.edu
// Date: 11/13/2023
// File: script.js
// GUI Assignment: HW3 Creating multiplication table from javascript

// Description: Functionality behind web page. Reads in user inputs, handles
//invalid inputs gracefully, and generates table.


function generateTable() {
    // Get input values from UI
    const startHorizontal = parseInt(document.getElementById('startHorizontal').value);
    const endHorizontal = parseInt(document.getElementById('endHorizontal').value);
    const startVertical = parseInt(document.getElementById('startVertical').value);
    const endVertical = parseInt(document.getElementById('endVertical').value);

    // Input validation for range
    if (isNaN(startHorizontal) || isNaN(endHorizontal) || isNaN(startVertical) || isNaN(endVertical)) {
        displayErrorMessage('Please enter valid numbers for all fields.');
        return;
    }
// conditions for error message to appear
    if (startHorizontal < -50 || endHorizontal > 50 || startVertical < -50 || endVertical > 50) {
        displayErrorMessage('Please enter values within the range of -50 to 50.');
        return;
    }

    // Clear existing error message
    clearErrorMessage();

    // Clear existing table
    document.getElementById('tableContainer').innerHTML = '';

    // generate the table
    const table = document.createElement('table');  // creating table element on html
    table.classList.add('table', 'table-bordered', 'table-striped');

    // Create table headers
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th></th>';
    for (let i = startHorizontal; i <= endHorizontal; i++) {   // appending based on dimensions of table
        headerRow.innerHTML += `<th>${i}</th>`;
    }
    thead.appendChild(headerRow);  // appending to thead/table
    table.appendChild(thead);

    // Create table rows
    for (let i = startVertical; i <= endVertical; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `<th>${i}</th>`;
        for (let j = startHorizontal; j <= endHorizontal; j++) {
            row.innerHTML += `<td>${i * j}</td>`;
        }
        table.appendChild(row);
    }

    // Append table to the container in HTML
    document.getElementById('tableContainer').appendChild(table);
}

function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    if (errorMessageElement) {
        errorMessageElement.innerHTML = message;
        errorMessageElement.style.display = 'block'; // show error
    } else {
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.id = 'errorMessage';
        errorMessageDiv.className = 'alert alert-danger';
        errorMessageDiv.textContent = message;
        document.getElementById('tableContainer').insertBefore(errorMessageDiv, document.getElementById('tableContainer').firstChild);
    }
}

function clearErrorMessage() {
    const errorMessageElement = document.getElementById('errorMessage');
    if (errorMessageElement) {
        errorMessageElement.style.display = 'none'; // hide error
    }
}
