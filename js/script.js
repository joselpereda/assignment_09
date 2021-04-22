// CREATE AN ARRAY OF EMPLOYEES
let arrEmployees = [
    [43568712, 'Daniel Romo',4455, 'daniel.romo@mycompany.com', 'Marketing'],
    [43568711, 'Peter Seikel',4454, 'peter.seikel@mycompany.com', 'Engineering'],
    [43568710, 'John Aria',4453, 'john.aria@mycompany.com', 'Quality Assurance'],
    [43568709, 'Franco McFee',4452, 'franco.mcfee@mycompany.com', 'Sales'],
    [43568712, 'Sal Quantico',4451, 'sal.quantico@mycompany.com', 'Executive'],
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
let empForm     = document.querySelector('#addForm');
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


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

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

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

            // BUILD THE GRID
            buildGrid();

            // DECREMENT THE COUNTER
            count--;
            empCount.value = `(${count})`;
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};