# Design Patterns using Interfaces in Typscript

- This exercise project was built following Stephen Grider's Typescript course on Udemy.

## Design Pattern:

- Create a generic class that accepts constructor arguments that fulfill an interface
- Create an interface in the class file that defines what properties must be present on the argument passed in
- Create individual classes that fulfill the interface and has methods to deal with type specific logic that the generic class can use
- In the generic class, call the interface methods on the instance passed into the constructor
- Note: the generic class is instantiated and accepts instances of other classes fulfilling it's interface requirements

## To run the project:

$ npm install
$ npm start

- Uses concurrently and tsc typescript compiler with nodemon
  (See package.json for script details)
