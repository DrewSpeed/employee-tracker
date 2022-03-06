const db = require("./connection");

viewDepartments = () => {
    console.log(`----------------------------------~`);
    console.log(`|  ID   |   DEPARTMENT`);
    console.log(`----------------------------------~`);
    const sql = 'SELECT * FROM department';
    db.query(sql, function (err, res) {
        if (err) throw err;
        res.forEach((department) => {
            console.log(`|   ${department.id}   |   ${department.name}`);
            console.log(`------------------------------~`);
        })
    })
}