function ln() {
    this.list = [];

    this.push = (value) => {
        if (value > this.list[this.list.length - 1] || this.list.length == 0) {
            this.list.push(value);
        } else {   
            console.log("Can't push " + value);
            alert("Can't push " + value);
        }
    };

    this.pop = () => {
        if (this.list.length > 0) {
            this.list.pop();
        } else {
            console.log("The LN has no elements left");
            alert("The LN has no elements left");
        }
    };

    this.shift = () => {
        if (this.list.length > 0) {
            this.list.shift();
        } else {
            console.log("The LN has no elements left");
            alert("The LN has no elements left");
        }
    };

    this.unshift = (value) => {
        if (this.list.length === 0 || value < this.list[0]) {
            this.list.unshift(value);
        } else {
            console.log("Can't unshift " + value);
            alert("Can't unshift " + value);
        }
    };

    this.addByVal = (value) => {
        if (this.list.find(val => val === value) != undefined) {
            console.log("This value already exists.");
            alert("This value already exists.");
            return;
        }

        if (this.list.length === 0) {
            this.list.push(value);
            return;
        }

        for (let i = 0; i < this.list.length; i++) {
            if (value < this.list[i]) {
                this.list.splice(i, 0, value);
                return;
            }
        }

        this.list.push(value);
    };

    this.removeByVal = (value) => {
        const index = this.list.indexOf(value);
        if (index !== -1) {
            this.list.splice(index, 1);
        } else {
            console.log("value not found.");
            alert("value not found.");
        }
    };

    this.display = () => {
        console.log(this.list);
        alert(this.list)
    };
}

let myList = new ln();
myList.push(10);
myList.push(20);
myList.push(30);
myList.display(); 
myList.unshift(5);
myList.display(); 
myList.addByVal(15);
myList.display(); 
myList.removeByVal(10);
myList.display(); 
myList.pop();
myList.display(); 
myList.shift();
myList.display();
myList.pop();
myList.pop();
myList.pop();
myList.shift();
myList.display();
