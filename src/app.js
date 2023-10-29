var Department = /** @class */ (function () {
    function Department(n) {
        this.emloyees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: ", this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.emloyees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.emloyees, length);
        console.log(this.emloyees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee("Mimi");
accounting.addEmployee("Dianna");
