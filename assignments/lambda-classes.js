// CODE here for your Lambda Classes

class Person {
    constructor(personAtrributes){
        this.name = personAtrributes.name
        this.age = personAtrributes.age
        this.location = personAtrributes.location
    }
  speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty
        this.favLanguage = instructorAttributes.favLanguage
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject){
   console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
       console.log(`${student.name} recieves a perfect score on ${subject}`);  
    }
}

class Student extends Instructor{
    constructor(studentsAttributes){
        super(studentsAttributes)
        this.previousBackground  = studentsAttributes.previousBackground 
        this.className = studentsAttributes.className
        this.favSubjects = studentsAttributes.favSubjects
    }
        listSubjects(name){
            name.favSubjects.forEach(function(subject){
                console.log(subject);
            })
    }
        PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`); 
    }
        sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
        }
  }


  class ProjectManager extends Instructor {
      constructor(projectManagerAttributes){
          super(projectManagerAttributes)
          this.gradClassName = projectManagerAttributes.gradClassName
          this.favInstructor = projectManagerAttributes.favInstructor
      }
      standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times`);
      }
      debugsCode (projectManagerName, student, subject){
          console.log(`${projectManagerName.name} debugs ${student.name}'s code on ${subject}`);
      }
  }
   
const Gabe = new Student({
    name: 'Gabriel',
    age: 22,
    location: 'Nevada',
    specialty: 'none',
    favLanguage: 'Javascript', 
    catchPhrase: 'It is what it is',
    previousBackground: 'College Student',
    className: 'Web24',
    favSubjects: ['HTML', 'CSS', 'Javascript']
})


Gabe.grade(Gabe,'Javascript'); 
Gabe.PRAssignment('HTML');
Gabe.listSubjects(Gabe); 
Gabe.catchPhrase;
Gabe.specialty;

const John = new Instructor({
    name: 'John',
    age: 34,
    location: 'New York',
    specialty: 'Python',
    favLanguage: 'Javascript',
    catchPhrase: 'Yo'
});

John.speak(); 
John.demo('Python'); 
John.grade(Gabe,'Javascript' );

const Samantha = new ProjectManager({
    name: 'Samantha',
    age: 33,
    location: 'California',
    specialty: 'Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Hello World',
    gradClassName: 'Web5',
    favInstructor: 'John'


});

Samantha.standUp('Sam SL');

