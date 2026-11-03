
let selectedRow = null;
const form = document.getElementById("employeeForm");
const tableBody = document.querySelector("#employeeList tbody"); 
const emptyMessage = document.getElementById("emptyMessage"); 
const submitBtn = document.getElementById("submitBtn");

function onFormSubmit() {
if (validate()) {

    let formData = readFormData();

    if (selectedRow === null) {

        insertNewRecord(formData);

    } else {

        updateRecord(formData);

    }

    resetForm();
}
}

function readFormData() {
let formData = {};

formData.fullName = document.getElementById("fullName").value.trim();

formData.empCode = document.getElementById("empCode").value.trim();

formData.salary = document.getElementById("salary").value;

formData.city = document.getElementById("city").value.trim();

return formData;
}

function insertNewRecord(data) {
let newRow = tableBody.insertRow();

newRow.insertCell(0).textContent = data.fullName;

newRow.insertCell(1).textContent = data.empCode;

newRow.insertCell(2).textContent = data.salary;

newRow.insertCell(3).textContent = data.city;

let actionCell = newRow.insertCell(4);




let editBtn = document.createElement("button");

editBtn.textContent = "Edit";

editBtn.className = "edit-btn";

editBtn.onclick = function () {

    onEdit(this);

};




let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.className = "delete-btn";

deleteBtn.onclick = function () {

    onDelete(this);

};

actionCell.append(editBtn, deleteBtn);

updateEmptyMessage();
}

function onEdit(button) {
selectedRow = button.parentElement.parentElement;

document.getElementById("fullName").value =
    selectedRow.cells[0].textContent;

document.getElementById("empCode").value =
    selectedRow.cells[1].textContent;

document.getElementById("salary").value =
    selectedRow.cells[2].textContent;

document.getElementById("city").value =
    selectedRow.cells[3].textContent;

submitBtn.textContent = "Update Employee";

document.getElementById("fullName").focus();
}

function updateRecord(formData) {
selectedRow.cells[0].textContent = formData.fullName;

selectedRow.cells[1].textContent = formData.empCode;

selectedRow.cells[2].textContent = formData.salary;

selectedRow.cells[3].textContent = formData.city;
}

function onDelete(button) {
if (confirm("Are you sure you want to delete this employee?")) {

    let row = button.parentElement.parentElement;

    if (selectedRow === row) {

        resetForm();

    }

    row.remove();

    updateEmptyMessage();
}
}

function resetForm() {
form.reset();

selectedRow = null;

submitBtn.textContent = "Add Employee";

document.getElementById("fullNameValidationError")
    .classList.add("hide");
}

function validate() {
let fullName = document.getElementById("fullName").value.trim();

let errorMessage = document.getElementById("fullNameValidationError");

if (fullName === "") {

    errorMessage.classList.remove("hide");

    return false;

} else {

    errorMessage.classList.add("hide");

    return true;
}
}
function updateEmptyMessage() {
if (tableBody.rows.length === 0) {

    emptyMessage.style.display = "block";

} else {

    emptyMessage.style.display = "none";

}
}

updateEmptyMessage();