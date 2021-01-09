var util = require("util");
class DLL {
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.val = val;
  }
}

class Middle {
  constructor(val) {
    this.head = new DLL(val);
    this.listLength = 1;
    this.mid = this.head;
  }

  insert(val) {
      console.log(this.head);
    let node = new DLL(val);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.listLength++;
    if (this.listLength % 2 === 0) {
      this.mid = this.mid.prev;
    }
    return this;
  }

  delete() {
    this.head = this.head.next;
    this.head.prev = null;
    this.listLength--;
    if (this.listLength % 2 !== 0) {
      this.mid = this.mid.next;
    }
  }

  findMiddle() {
    return this.mid.val;
  }

  deleteMiddle() {
    let prev = this.mid.prev;
    let next = this.mid.next;
    prev.next = next;
    next.prev = prev;
    this.listLength--;
    this.mid = this.listLength % 2 !== 0 ? this.mid.prev : this.mid.next;
  }

  print() {
      console.log('***********print***********')
    let temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}
const m = new Middle(1);
m.insert(2);
m.insert(3);
m.insert(4);
m.insert(5);
//console.log(m.findMiddle());
m.print();
m.deleteMiddle();
m.print();
