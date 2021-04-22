// CREATE AN ARRAY OF EMPLOYEES
let arrEmployeesDefault = [
    [43568712, 'Daniel Romo',4455, 'daniel.romo@mycompany.com', 'Marketing'],
    [43568711, 'Peter Seikel',4454, 'peter.seikel@mycompany.com', 'Engineering'],
    [43568710, 'John Aria',4453, 'john.aria@mycompany.com', 'Quality Assurance'],
    [43568709, 'Franco McFee',4452, 'franco.mcfee@mycompany.com', 'Sales'],
    [43568712, 'Sal Quantico',4451, 'sal.quantico@mycompany.com', 'Executive'],
];

let arrNewEmployees = [];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('arrNewEmployees') !== null) {
    const json = localStorage.arrNewEmployees;
    const arrNewEmployees = JSON.parse(jason);
} else {
    arrNewEmployees = [...arrEmployeesDefault];
}

// GET DOM ELEMENTS
let empForm     = document.querySelector('#addForm');
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', () => {

});

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let arrNewEmployees2 = [empID, empName, empExt, empEmail, empDept];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    arrNewEmployees = arrNewEmployees.push(arrNewEmployees2);

    // BUILD THE GRID
    buildGrid(arrNewEmployees);

    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.value = `(${count})`;
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);

            // REMOVE EMPLOYEE FROM ARRAY
            arrNewEmployees = arrNewEmployees.pop();

            // BUILD THE GRID
            buildGrid(arrNewEmployees);

            // DECREMENT THE COUNTER
            count--;
            empCount.value = `(${count})`;
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(arrNewEmployees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    var Parent = document.getElementById(tbody);
    while(Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    // REBUILD THE TBODY FROM SCRATCH
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let i of arrNewEmployees) {
        
    }


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // STORE THE ARRAY IN STORAGE
    const json = JSON.stringify(arrNewEmployees);
    localStorage.arrNewEmployees = json;

};