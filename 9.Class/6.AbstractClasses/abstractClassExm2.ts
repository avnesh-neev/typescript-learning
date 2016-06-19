

/**
 * The Department class is Abstract class which showing department details
 *
 *@class Department:Abstract
 *@constructor
**/
abstract class Department {
	constructor(public name: string) {
	}

	printName(): void {
		console.log("Department name: " + this.name);
	}

	abstract printMeeting(): void; // must be implemented in derived classes
}


/**
 * The AccountingDepartment class is drived class which showing department details
 *
 *@class AccountingDepartment
 *@extends Department
 *@constructor
**/

class AccountingDepartment extends Department {
  constructor() {
  	super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
  	console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
		console.log("Generating accounting reports...");
  }
}

let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type