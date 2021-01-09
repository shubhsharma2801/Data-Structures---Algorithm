class Randomized {
  constructor() {
    this.list = [];
    this.map = new Map();
  }
  swap = (array, i, min) => {
    [array[i], array[min]] = [array[min], array[i]];
  };
  insert(val) {
    if (!this.map.has(val)) {
      this.list.push(val);
      this.map.set(val, this.list.length - 1);
    }
    return this;
  }

  delete(val) {
    if (this.map.has(val)) {
      let index = this.map.get(val);
      this.map.delete(val);
      if (index !== this.list.length - 1) {
        let lastElement = this.list[this.list.length - 1];
        this.swap(this.list, index, this.list.length - 1);
        this.map.set(lastElement, index);
      }
      this.list.pop();
    }
    return this;
  }

  random() {
    let index = Math.floor(Math.random() * this.list.length);
    return this.list[this.random];
  }
}

const s = new Randomized();
console.log(s.insert(1));
console.log(s.insert(2));
console.log(s.insert(5));
console.log(s.insert(10));
console.log(s.delete(1));
