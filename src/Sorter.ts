/**
 * Not needed after using the abstract class as a super class to let children borrow the sort method and call it with their own instance
 * compare and swap methods
 */
// interface Sortable {
//   length: number;
//   // Note: the parameter names do not have to match what is in the actual class that implements the interface
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

/**
 * Sorter is made abstract so that it can be extended by various collections and implement the sort method which calls it's instance
 * methods containing the more specific logic to handle different collections.
 *
 * Abstract Classes:
 *   cannot be instantiated
 *   Can only be a Parent Class used for inheritance
 *   Can have references to instance methods that don't actually exist yet in the abstract class (they will exist on the child class instance)
 *   The instance methods that are on the child instance just have to have types and signature declared in the abstract class
 *   Child classes must promise to implement the methods supposed to exist by the Abstract parent class (their methods and props must
 *   be included in the class and match what is declared in the abstract superclass as abstract methods and props that will exist)
 */

export abstract class Sorter {
  /**
   * Long way of declaring property:
   */
  // declare a property with type so you can pass in a collection of numbers to sort in an instance
  // collection: number[];

  // constructor(public collection: number[]) {
  //   this.collection = collection;
  // }

  /**
   * short way of declaring and initializing a property: just add a modifier to the constructor parameter and type annotation
   */

  // To declare what instance methods or properties will exist on the child make abstract stubs of their signatures or types
  abstract compare(leftInex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
