class Item {
    
  private name: string;
  private category; string;

  constructor(name: string, category: string) {
    this.name = name;
    this.category = category;
  }

  toString() {
    return `Item with name ${this.name} has category ${this.category}`;
  }
}

interface IContainer {
  add: (item: Item) => never | void;
  getCapacity: () => number;
}

class MaxBagsReachedException extends Error {
    constructor() {
      super('Max bags reached');
      (<any>Object).setPrototypeOf(this, MaxBagsReachedException.prototype);
    }
  }
  
  class Container implements IContainer {

    items: Item[];
    itemsSize: number;

    constructor(itemsSize?: number) {
      this.items = [];
      this.itemsSize = itemsSize;
    }
    
    add(item: Item): never | void {
      if (this.items.length >= this.getCapacity()) {
        throw new MaxBagsReachedException();
      }
      this.items.push(item);
    }

    getCapacity() {
      return 0;
    }
  }
  
  class BackPack extends Container {
    
    getCapacity() {
      return 3;
    }
  }
  
  class Bag extends Container {

    getCapacity() {
      return 1;
    }
  }
  
  class Player {
    
    private bagPack: IContainer;
    private bags: IContainer[];

    constructor(bagPack: IContainer, bags: IContainer[]) {
      this.bagPack = bagPack;
      this.bags = bags;
    }
  
    pickItem(item: Item) {
      try {
        this.bagPack.add(item);
        console.log(`${item.toString()} collected ON BAGPACK`);
      } catch (e) {
        if (e instanceof MaxBagsReachedException) {
          this.storeInNextAvailableBag(item);
        }
      }
    }
  
    storeInNextAvailableBag(item: Item) {
      for (let index = 0; index < this.bags.length; index++) {
        const bag: IContainer = this.bags[index];
        try {
          bag.add(item);
          console.log(`${item.toString()} collected ON A BAG`);
          break;
        } catch (error) {
          if (index === this.bags.length - 1) {
            throw error;
          }
        }
      }
    }
  }
  
  const $button = document.getElementById('saveItem');
  const $error = document.getElementById('error');
  // We can create another type of BackPack with more capacity and inject into Player object
  // Here I belive that is posible to create and validate the capacity x intances quantity to validad it before to add
  const player = new Player(new BackPack(), [new Bag(), new Bag(), new Bag(), new Bag()]);
  const ITEMS_CATEGORIES = ['clothes', 'weapons', 'herbs'];
  
  $button.addEventListener('click', function () {

    const index = Math.round(Math.random() * (ITEMS_CATEGORIES.length - 1));
    const itemCategory = ITEMS_CATEGORIES[index];

    const item: Item = new Item(Date.now().toString(), itemCategory);
  
    try {
      player.pickItem(item);
    } catch (e) {
      console.log(e);
      $error.innerHTML = e.toString();
      $error.style.display = 'block';
    }
  });