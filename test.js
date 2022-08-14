const Employee  = require('./employee');

const employee1 = new Employee('John Wick', 'Dog Lover');

const sayEmployeeName = employee1.sayName.bind(employee1);

setTimeout(sayEmployeeName, 2000);

const sayEmployeeOccupation = employee1.sayOccupation.bind(employee1);

setTimeout(sayEmployeeOccupation, 3000);