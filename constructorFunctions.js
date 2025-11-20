/**
 * Define the Course and Assignment concepts using the constructor functions
 */

//assignment constructor function
function Assignment(title, dueDate) {
  this.title = title;
  this.dueDate = dueDate;
  
  this.printAssignment = function () {
    console.log('  Title: ' + this.title + ' | Due Date: ' + this.dueDate);
  };

}

//course constructor function
function Course(courseName, instructor, creditHours, assignments) {
  this.courseName = courseName;
  this.instructor = instructor;
  this.creditHours = creditHours;
  this.assignments = assignments;
  
  this.courseInfo = function () {
    console.log('Course: ' + this.courseName);
    console.log('  | Instructor: ' + this.instructor);
    console.log('  | Credit Hours: ' + this.creditHours);
    console.log('Assignments >>>');
    
    //print each assignment's details
    for (let a of this.assignments) {
      a.printAssignment();
    }

  };
}

//creating assignment objects
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

//creating course objects
let c1 = new Course('Software Engineering', 'Dr. Pepper', 3, [a1, a2]);
let c2 = new Course('Data Science', 'Dr. Evil', 6, [a3, a4]);

//displaying course info
c1.courseInfo();
c2.courseInfo();

