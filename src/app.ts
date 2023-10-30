class Department {
  // private readonly id: string;
  // private name: string;
  private emloyees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name} `);
  }

  addEmployee(employee: string) {
    this.emloyees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.emloyees, length);
    console.log(this.emloyees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.describe();
accounting.addEmployee("Mimi");
accounting.addEmployee("Dianna");
accounting.printEmployeeInfo();

// inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "ITD");
    this.admins = admins;
  }
}
