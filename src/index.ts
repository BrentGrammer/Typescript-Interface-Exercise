import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, -5, 3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
