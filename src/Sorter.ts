interface Sortable {
  length: number;
  // Note: the parameter names do not have to match what is in the actual class that implements the interface
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
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
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
