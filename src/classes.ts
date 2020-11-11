abstract class Department {

  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []; // protected is avialible in any inherited class 
  static fiscalYear: 2020; //calls directly on the class without instantiang but only within the class
  constructor(private readonly id: string, public name: string) {
    this.id = id;
    // this.name = n;
  }

  static createEmployee (name: string) { //calls directly on the class without instantiang but only within the class
    return ({ name: name })
  }

  abstract describe(this: Department): void  // requires its own implementation within the instances


  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
    console.log(this.id)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  
   describe(this: Department) {
       console.log('ITDepartment ' + ITDepartment);
   }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  get mostResentReport() {
    if (this.lastReport) {
        return this.lastReport//return is required for getters
    }
    
    throw new Error ('no reports found')
  }
  describe() {
    console.log('AccountingDepartment')
  }
  set mostResentReport(value: string) {
    this.addReport(value)
  }


  constructor(id: string, private reports: string[]) { //private is avialible only inside a class not in chlildren
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
      if (name == 'Max') {
        return 
      }
      this.employees.push(name);

  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

//it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostResentReport = 'Jenya';

console.log(accounting.mostResentReport);

accounting.addReport('Something went wrong...');

accounting.printReports();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();