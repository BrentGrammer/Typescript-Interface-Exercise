import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharacterCollection } from './CharacterCollection';

const numbersCollection = new NumbersCollection([10, -5, 3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

const charactersCollection = new CharacterCollection('dcfgtza');
const charsorter = new Sorter(charactersCollection);
charsorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
