# Design Patterns using Interfaces in Typscript

- This exercise project was built following Stephen Grider's Typescript course on Udemy.

## Design Patterns:

### Using Interfaces:

- Used when we have very different objects to get them to work together.
- Prefer using interfaces to get reusable code unless you are dealing with a group of objects that are closely related.
- Promotes loose coupling - each class/object can be used independent of the generic class requiring an interface

* Create a generic class that accepts constructor arguments that fulfill an interface
* Create an interface in the class file that defines what properties must be present on the argument passed in
* Create individual classes that fulfill the interface and has methods to deal with type specific logic that the generic class can use
* In the generic class, call the interface methods on the instance passed into the constructor
* Note: the generic class is instantiated and accepts instances of other classes fulfilling it's interface requirements

### Using Abstract Classes:

- Used to build up a definition of an object
- Use when you have a group of objects that are very closely related.
- Promotes strong coupling between classes - the child classes depend on the abstract superclass to function and the methods that are
  inherited

* Used to extend classes with specific logic regarding a generic operation or algorithm which is inherited from the Abstract Super class
* Cannot be instantiated
* The Abstract Super Class calls instance methods containing more specific logic on the child class that extends it.
* The instance methods and properties that will exist in the child class instance are delcared as abstract in the abstract super class
  (Their signature and types are annotated)
* The child classes must have matching methods and properties promised to the Abstract super class that it is extending.
* If the child class has a constructor, then super() must be called in it to initialize the extended class. (If there is no
  constructor in the child class, then the super class constructor will be called automatically.)

## To run the project:

- \$ npm install
- \$ npm start

- Uses concurrently and tsc typescript compiler with nodemon
  (See package.json for script details)

## App description:

- Sorts various collections in ascending order
- Sorter class is generic and accepts Sortable interface type. It
- Other collection classes implement the Sortable interface and instances are passed into Sorter
