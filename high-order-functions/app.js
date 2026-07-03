const localEmployeeData = [
  {
    "name": { "first": "Lasha", "last": "Gogua" },
    "email": "lasha.g@example.com",
    "dob": "1992-05-10T08:30:00Z",
    "country": "Georgia",
    "company": "Amazon",
    "department": "Logistics",
    "salary": 80000
  },
  {
    "name": { "first": "Nino", "last": "Maisuradze" },
    "email": "nino.m@amazon.com",
    "dob": "1988-11-20T14:00:00Z",
    "country": "Georgia",
    "company": "Amazon",
    "department": "HR",
    "salary": 90000
  },
  {
    "name": { "first": "Mark", "last": "Zuckerberg" },
    "email": "markz@fb.com",
    "dob": "1984-05-14T03:00:00Z",
    "country": "USA",
    "company": "FaceBook",
    "department": "IT",
    "salary": 300000
  },
  {
    "name": { "first": "Priya", "last": "Patel" },
    "email": "priya@example.in",
    "dob": "1995-01-15T09:00:00Z",
    "country": "India",
    "company": "Microsoft",
    "department": "HR",
    "salary": 550000
  },
  {
    "name": { "first": "John", "last": "Doe" },
    "email": "john.d@google.co.uk",
    "dob": "1985-07-20T11:45:00Z",
    "country": "UK",
    "company": "Google",
    "department": "Sales",
    "salary": 120000
  },
  {
    "name": { "first": "Steve", "last": "Jobs" },
    "email": "steve@apple.com",
    "dob": "1982-02-24T18:00:00Z",
    "country": "USA",
    "company": "Apple",
    "department": "Design",
    "salary": 250000
  },
  {
    "name": { "first": "Sundar", "last": "Pichai" },
    "email": "sundar@google.com",
    "dob": "1991-06-10T05:00:00Z",
    "country": "USA",
    "company": "Google",
    "department": "Executive",
    "salary": 650000
  },
  {
    "name": { "first": "Tim", "last": "Cook" },
    "email": "tim@apple.com",
    "dob": "1960-11-01T10:00:00Z",
    "country": "USA",
    "company": "Apple",
    "department": "Management",
    "salary": 800000
  },
  {
    "name": { "first": "Craig", "last": "Federighi" },
    "email": "craig@apple.com",
    "dob": "1969-05-27T14:30:00Z",
    "country": "USA",
    "company": "Apple",
    "department": "Engineering",
    "salary": 700000
  },
  {
    "name": { "first": "Alice", "last": "Smith" },
    "email": "alice@google.com",
    "dob": "1975-03-12T08:00:00Z",
    "country": "Canada",
    "company": "Google",
    "department": "IT",
    "salary": 150000
  },
  {
    "name": { "first": "Zack", "last": "Morris" },
    "email": "zack@netflix.com",
    "dob": "1998-12-12T23:00:00Z",
    "country": "UK",
    "company": "Netflix",
    "department": "Sales",
    "salary": 95000
  }
];

main(localEmployeeData);

function main(employees) {
        // 1. Find and print average salary of all employees who works in Georgia, Amazon company.
        let filteredSalaries = employees
            .filter(e => e.country === 'Georgia' && e.company === 'Amazon')
            .map(e => e.salary);
        const sum = filteredSalaries.reduce((accum, next) => next + accum, 0);
        console.log("1: "+Math.round(sum/filteredSalaries.length));


// 2. Find and print list of the employees which work in Facebook IT department.
        let filteredEmployees = employees
            .filter(e=>e.company==='FaceBook' && e.department === 'IT')
            .map(e=>e.name);
        console.log("2: ",filteredEmployees);
// 3. Find and print boolean value if there exists employees which works in India HR department and whose salary is above 500 000
        let bool3 = employees
            .some(e=>e.country === 'India' && e.department === 'HR' && e.salary>500000);
        console.log("3: "+bool3);
// 4. Get and print a list of employees with only email, firstname and dob of the employees which work in Google UK Sales department.
    
    let list4 = employees
                .filter(e=>e.company==='Google' && e.country==='UK'&& e.department==='Sales')
                .map(e=>({firstName: e.name.first, mail: e.email, dob: e.dob}))
        console.log("4: ",list4);
    
        
// 5. Find and print an employee which has highest salary among those employees which work in either Google or Apple and are born after 1980.
    let highestEmployeeSalary = employees[0];
    let list5 = employees
      .filter(e=> e.dob>'1979-12-31' && (e.company==='Google' || e.company === 'Apple'))
      .forEach(e=> {if(e.salary>highestEmployeeSalary.salary) highestEmployeeSalary = e;})
    console.log("5: ",highestEmployeeSalary)
// 6. Find an average age of all employees and compare if to average age of Google employees. Print "1" if average age of all employees is smaller, otherwise print "2".

// 7. Sort and print employees in alphabetical order by firstname

// 8. Check if there exists and employee in Google which has salary over 600 000 and is born after 1990.

// 9. Find and print sum of salaries of the users which work in USA Apple.

// 10. Find and print list of all employees, which has birth hours in between 00:00AM and 12:00PM
}
