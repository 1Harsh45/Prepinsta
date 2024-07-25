
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}


const employees = [
    new Employee('Harsh', 30, 'HR', 50000),
    new Employee('Aniket', 25, 'Engineering', 60000),
    new Employee('Sushil', 35, 'Sales', 70000),
    new Employee('Arjun', 40, 'Engineering', 80000),
    new Employee('Rohit', 28, 'HR', 55000),
    new Employee('Virat', 29, 'HR', 52000)
];

// Calculate Average Salary
function calculateAverageSalary(employeeArray) {
    const totalSalary = employeeArray.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employeeArray.length;
}

// Find Employees in a Department
function findEmployeesByDepartment(employeeArray, department) {
    return employeeArray.filter(employee => employee.department === department);
}

// Increase Salary for Employees
function increaseSalary(employeeArray, percentageIncrease) {
    employeeArray.forEach(employee => {
        employee.salary += (employee.salary * percentageIncrease) / 100;
    });
}

// Sort Employees by Age
function sortEmployeesByAge(employeeArray) {
    return employeeArray.slice().sort((a, b) => a.age - b.age);
}

// Test the functions
console.log("Average Salary:", calculateAverageSalary(employees));
console.log("Employees in HR:", findEmployeesByDepartment(employees, 'HR'));

increaseSalary(employees, 10); // Increase salary by 10%
console.log("Employees after salary increase:", employees);

console.log("Employees sorted by age:", sortEmployeesByAge(employees));
