/* SalaryCalculator Module */
var SalaryCalculator = {
    calculateSalary: function (profession) {
        switch (profession) {
            case "mechanic":
                return mechanic1.salary();
                break;
            case "developer":
                return developer1.salary();
                break;
            case "doctor":
                return doctor1.salary();
                break;
            case "professor":
                return professor1.salary();
                break;
        }
    }
};
/* PARENT Employee class  */
var employee = function () {
    return;};
employee.prototype.baseSalary = 900;
employee.prototype.baseTaxes = function (taxes) {
    if (taxes === undefined) {
        taxes = 30;
    }
    return (this.baseSalary * taxes / 100);
}
/* CHILD Classes */
/* Mechanic. Earns baseSalary, pays normal taxes and gets every month 150 Euro bonus */
function mechanic() {
    employee.call(); 
}
mechanic.prototype = Object.create(employee.prototype);
mechanic.prototype.constructor = mechanic;
mechanic.prototype.salary = function () {
    return (this.baseSalary - this.baseTaxes()) + 150;
};
/* Developer. Earns double baseSalary, pays 40% taxes */
function developer() {
    employee.call();
}
developer.prototype = Object.create(employee.prototype);
developer.prototype.constructor = developer;
developer.prototype.salary = function () {
    return ((this.baseSalary * 2) - this.baseTaxes(40));
};
/* Doctor. Earns triple baseSalary and pays 20 % taxes */
function doctor() {
    employee.call();
}
doctor.prototype = Object.create(employee.prototype);
doctor.prototype.constructor = doctor;
doctor.prototype.salary = function () {
    return ((this.baseSalary * 3) - this.baseTaxes(20));
};
/* Professor gets triple baseSalary and pays no taxes */
function professor() {
    employee.call();
}
professor.prototype = Object.create(employee.prototype);
professor.prototype.constructor = mechanic;
professor.prototype.salary = function () {
    return this.baseSalary * 3;
};
var mechanic1 = new mechanic();
var developer1 = new developer();
var doctor1 = new doctor();
var professor1 = new professor();
/* Check */
console.log(SalaryCalculator.calculateSalary("mechanic"));
console.log(SalaryCalculator.calculateSalary("developer"));
console.log(SalaryCalculator.calculateSalary("doctor"));
console.log(SalaryCalculator.calculateSalary("professor"));
