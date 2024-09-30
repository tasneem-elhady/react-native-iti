function OrderedLinkedList() {
  this.list = [];
  this.head = -1;
  this.tail = -1;
    
  this.push = (value) =>{
    if (this.length === 0 || value >= this.tail) {
      if (this.length === 0)
        this.head = value;
      this.tail = value;
      this.list.push(value);
      console.log("pushed successfully")
    }else
    console.log("cant push")
  };

  this.insert = (value)=> {
    if (this.hasValue(value)) {
      console.log("Value already exists.");
    }
    else{
      var i =0;
      for(;i < this.list.length && this.list[i]<value ;i++);
      this.list.splice(i,0,value);
      console.log("inserted successfully")
    }    
  };

  this.pop=()=> {
    if (this.length === 0) {
      console.log("empty list")
      return null;
    }
    const removedNode = this.tail;
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } else {
      this.tail = this.list[this.list.length-1];
    }
    this.list.pop();
    console.log("popped successfully")
    return removedNode;
  };

  this.remove = (value) => {
    if (!this.hasValue(value)) {
      console.log( "value not found.");
      return;
    }
    const index = this.list.indexOf(value);
    this.list.splice(index, 1);
    console.log('removed successfully')
    return value;
    };

  this.display = () => {
    console.log(this.list);
  };

  this.hasValue = (value)=> {
    const index = this.list.indexOf(value);
    if (index !== -1) 
      return true;
    else
      return false;
  };
  this.shift = () => {
    if (this.list.length > 0) {
        this.list.shift();
        console.log("shifted successefuly")
    } else {
        console.log("The list has no elements");
    }
};

this.unshift = (value) => {
    if (this.list.length === 0 || value < this.list[0]) {
        this.list.unshift(value);
        console.log("unshifted successefuly")
    } else {
        console.log("Can't unshift " + value);
    }
};

}

let l = new OrderedLinkedList();
l.push(10);
l.shift();
l.display(); 
l.unshift(5);
l.display(); 
l.insert(15);
l.insert(5);
l.display(); 
l.remove(10);
l.display(); 
l.pop();
l.display(); 
l.push(20);
l.push(30);
l.shift();
l.display();
l.pop();
l.pop();
l.pop();
l.shift();
l.display();
