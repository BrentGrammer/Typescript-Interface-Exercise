import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, -5, 3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

const charactersCollection = new CharacterCollection('dcfgtza');
const charsorter = new Sorter(charactersCollection);
charsorter.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(5);

const llistSorter = new Sorter(linkedList);
llistSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
