const db = require("./connection");
const cTable = require('console.table');

showDepartments = () => {
    console.log(`----------------------------------`);
    const sql = 'SELECT * FROM department;';
    db.query(sql, function (err, res) {
        if (err) throw err;
        deptTable = [['ID', 'DEPARTMENT']] 
        res.forEach((department) => {
            var dept = [department.id, department.name]
            deptTable.push(dept);
        })
        console.table(deptTable[0], deptTable.slice(1));
    })
};

showRoles = () => {
    console.log(`----------------------------------`);
    const sql = 'SELECT * FROM role;'
    db.query(sql, function (err, res) {
        if (err) throw err;
        roleTable = [['Job Title', 'Role ID', 'Department', 'Salary']]
        res.forEach((role) => {
            var rows = [role.title, role.id, role.department_id, role.salary]
            roleTable.push(rows);
        })
        console.table(roleTable[0], roleTable.slice(1))
    })
};