import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, -5, 3]);
numbersCollection.sort();

const charactersCollection = new CharacterCollection('dcfgtza');
charactersCollection.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(5);

linkedList.sort();

linkedList.print();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
