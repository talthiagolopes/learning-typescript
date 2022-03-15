function createArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
  }
  
  let myNumArr = createArray<number>([100, 200, 300]);
  let myStrArr = createArray<string>(['Hello', 'World']);
  let stringOrNumber = createArray<string | number>([100, 'Hello']);
  
  myNumArr.push(400);
  myStrArr.push('Hello TypeScript');
  stringOrNumber.push(200);
  stringOrNumber.push('string');

  function displayTupeType<X, Z>([index, value]: [X, Z]) {
    console.group('Tuple type validation');
    console.log('index is', typeof index, 'and match with his type: ', typeof index);
    console.log('value is', typeof value, 'and match with his type: ', typeof value);
    console.groupEnd();
  }
  
  displayTupeType<number, string>([1, 'Hi']); // number, string
  
  class Manager<W> {

    items: W[];

    constructor() {
      this.items = [];
    }
  
    addItem(newItem: W): void {
      this.items.push(newItem);
    }
  
    hasSameType(): boolean | never {
      const firstItemType = typeof this.items[0];
  
      if (firstItemType === 'undefined') {
        throw new Error('Push a new item before call this method');
      }
  
      return this.items.every((item) => typeof item === firstItemType);
    }
  
    getItems(): W[] {
      return this.items;
    }
  }
  
  const manager = new Manager<number>();
  manager.addItem(1);
  console.group('Manager class type validation');
  console.log('All items has same type', manager.hasSameType());
  console.groupEnd();
  
  const hackedManager = new Manager<number>();
  hackedManager.addItem(1);
  hackedManager.addItem('two' as any as number);
  hackedManager.addItem(3);
  
  console.group('Hacked Manager should contains a one string');
  console.log('hackedManager:', hackedManager)
  console.log('All items has same type > should be false. Is it?', manager.hasSameType());
  console.groupEnd();