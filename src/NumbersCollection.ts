import { Sorter } from './Sorter';

/**
 * This class functions as a passable class that deals specifically with the logic for comparing/swaping an array of numbers so it can be used
 * in the Sorter generic class
 *
 * It inherits from Sorter so that it is not necessary to create a sorter instance everytime you want to sort a collection.
 * The sort method on Sorter will be available and simply call swap and compare instance methods on it's child class instance
 */

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // Note: the getter will be seen as a property in the annotation on the interface on the generic class
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
