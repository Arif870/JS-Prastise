// object

class Person {
    constructor(fname, lname, birthdate) {
        this.firstName = fname;
        this.lastName = lname;
        this.dob = birthdate;
    }

    fullInfo() {
        console.log(`${this.firstName} ${this.lastName} ${this.dob}`);
    }
}
let person1 = new Person("Arif", "Uzzaman", "15-05-1997");

person1.firstName = "Nasir";

let preson2 = new Person("Sumaiya", "Hanan", "1999");

console.log(person1.fullInfo());
console.log(preson2);

class People {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Client extends People {
    constructor(fname, lname, cell, addr) {
        super(fname, lname);
        this.cell = cell;
        this.address = addr;
    }

    clientsInfo() {
        return `Hello ${this.firstName} ${this.lastName} Your  cell number ${this.cell} and address ${this.address}`;
    }
}

let people1 = new People("Arif", "Uzzaman");
people1.lastName = "zaman";
let people2 = new Client("Arif", "Uzzaman", "01955957901", "Uttara");

console.log(people1.greeting());
console.log(people2.clientsInfo());

class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    static info() {
        return `Hello ${this.firstName}   ${this.lastName}`;
    }
}

let preson = new Person();
console.log(Person.info("Arif", "zaman"));

// DOM selector (Single Element)
let val;
val = document.getElementById("heading");
val = document.getElementById("heading").id;
val = document.getElementsByClassName("heading");

console.log(val);

// Changing style
document.getElementById("heading").style.background = "black";
document.getElementById("heading").style.padding = "10px";
document.getElementById("heading").style.textAlign = "center";
document.getElementById("heading").style.color = "white";
document.getElementById("heading").style.fontFamily = "poppins";

// changing content

document.getElementById("heading").textContent = "This is Arif";

document.getElementById("heading").textContent = "Arif";
document.getElementById("heading").innerText = "me";
document.getElementById("heading").innerHTML = "<p>Hello Arif</p>";

let vall = document.getElementById("heading");

vall.style.background = "green";
vall.innerText = "JavaScript";

// document.querySelector

let value = (document.querySelector("h3").style.backgroundColor = "orange");

value.style.background = "purple";
console.log(value);

// DOM Selector(Multiple Selector)

let list = document.getElementsByClassName("myClass");
list[0].style.background = "green";
list[0].style.color = "white";
list[0].style.padding = "10px";
list[0].style.fontFamily = "poppins";
list[0].style.textAlign = "center";
list[1].style.textAlign = "center";
list[1].style.fontFamily = "poppins";
list[1].style.background = "orange";
list[1].style.padding = "10px";

console.log(list[0]);

let ulli = document.querySelector("ul");
let li = document.getElementsByTagName("li")[0];

li.style.display = "inline-block";

ulli.style.listStyle = "none";

ulli.style.fontFamily = "poppins";

console.log(ulli);
console.log(li);



// object

class Person {
    constructor(fname, lname, birthdate) {
        this.firstName = fname;
        this.lastName = lname;
        this.dob = birthdate;
    }

    fullInfo() {
        console.log(`${this.firstName} ${this.lastName} ${this.dob}`);
    }
}
let person1 = new Person("Arif", "Uzzaman", "15-05-1997");

person1.firstName = "Nasir";

let preson2 = new Person("Sumaiya", "Hanan", "1999");

console.log(person1.fullInfo());
console.log(preson2);

class People {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Client extends People {
    constructor(fname, lname, cell, addr) {
        super(fname, lname);
        this.cell = cell;
        this.address = addr;
    }

    clientsInfo() {
        return `Hello ${this.firstName} ${this.lastName} Your  cell number ${this.cell} and address ${this.address}`;
    }
}

let people1 = new People("Arif", "Uzzaman");
people1.lastName = "zaman";
let people2 = new Client("Arif", "Uzzaman", "01955957901", "Uttara");

console.log(people1.greeting());
console.log(people2.clientsInfo());

class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    static info() {
        return `Hello ${this.firstName}   ${this.lastName}`;
    }
}

let preson = new Person();
console.log(Person.info("Arif", "zaman"));

// DOM selector (Single Element)
let val;
val = document.getElementById("heading");
val = document.getElementById("heading").id;
val = document.getElementsByClassName("heading");

console.log(val);

// Changing style
document.getElementById("heading").style.background = "black";
document.getElementById("heading").style.padding = "10px";
document.getElementById("heading").style.textAlign = "center";
document.getElementById("heading").style.color = "white";
document.getElementById("heading").style.fontFamily = "poppins";

// changing content

document.getElementById("heading").textContent = "This is Arif";

document.getElementById("heading").textContent = "Arif";
document.getElementById("heading").innerText = "me";
document.getElementById("heading").innerHTML = "<p>Hello Arif</p>";

let vall = document.getElementById("heading");

vall.style.background = "green";
vall.innerText = "JavaScript";

// document.querySelector

let value = (document.querySelector("h3").style.backgroundColor = "orange");

value.style.background = "purple";
console.log(value);

// DOM Selector(Multiple Selector)

let list = document.getElementsByClassName("myClass");
list[0].style.background = "green";
list[0].style.color = "white";
list[0].style.padding = "10px";
list[0].style.fontFamily = "poppins";
list[0].style.textAlign = "center";
list[1].style.textAlign = "center";
list[1].style.fontFamily = "poppins";
list[1].style.background = "orange";
list[1].style.padding = "10px";

console.log(list[0]);

let ulli = document.querySelector("ul");
let li = document.getElementsByTagName("li")[0];

li.style.display = "inline-block";

ulli.style.listStyle = "none";

ulli.style.fontFamily = "poppins";

console.log(ulli);
console.log(li);

// async wait

let age = () => {
    console.log("date");
};
let food = () => {};

async function me() {
    let data = await age();
    console.log("Arif uz zaman");
}
console.log("1");

me();

console.log(4);

// Pure  function

// `* It returns the same result if given the same arguments`
// `* It does not couse any obervable side effects`;

function sqr(n) {
    return n * n;
}
console.log(sqr(3));
console.log(sqr(3));
console.log(sqr(3));

// Firstclass funcntion

function add(a, b) {
    return a + b;
}
//`1* A function can be stored in a variable`;

let sum = add;
console.log(sum(3, 7));
console.log(typeof sum);

// `2* A function can be stored in an array`

let arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](4, 6));

// `3* A function can be stored in an object`

let obj = {
    sum: add,
};
console.log(obj);
console.log(obj.sum(5, 5));

// `4* We can create function as we need`

setTimeout(function() {
    console.log("FirstClass function");
}, 2000);

// Higher Order function

// `We can pass function as an Arguments`

function add(a, b) {
    return a + b;
}

function manipulate(a, b, fun) {
    let c = a + b;
    let d = a - b;

    function multi() {
        return c * d * fun(a, b);
    }

    return multi();
}
console.log(manipulate(3, 4, add));

// `We can return function form another function`

function add(a, b) {
    return a + b;
}

function manipulate(a, b, fun) {
    let c = a + b;
    let d = a - b;

    return function() {
        return c * d * fun(a, b);
    };
}
console.log(manipulate(3, 4, add));

// clouser

let x = 10;

function clouser() {
    console.log(x);
    let love = "Chicken";

    return function() {
        return `I like to eat ${love}`;
    };
}

//console.log(clouser());
console.log(clouser()());

// callback function

function sample(a, b, cb) {
    let c = a + b;
    let d = a - b;

    let res = cb(c, d);
    return res;
}

function sum(a, b) {
    return a + b;
}

let result = sample(10, 20, sum);
console.log(result);

let result2 = sample(10, 20, function(c, d) {
    return c - d;
});

console.log(result2);

// Recursive function

function sayHi(n) {
    if (n === 0) {
        return;
    }
    console.log(n + " Hi i am calling");
    sayHi(n - 1);
}
sayHi(10);

function facturial(n) {
    if (n === 1) {
        return 1;
    }
    return n * facturial(n - 1);
}

console.log(facturial(5));

// currying function

function currying(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

let result = currying(10)(20)(30);
console.log(result);

// traversing

let val;

let ul = document.querySelector("ul");
let li = document.querySelector("  ul li:nth-child(3)");
let aa = document.querySelector("ul li a");

//console.log(li);
console.log(ul.childNodes[1]);
console.log((ul.children[1].textContent = "Hello"));
console.log((ul.children[2].textContent = "Sumo"));
console.log(ul.childNodes[1].nodeType);
console.log(ul.childNodes[2].nodeType);
console.log(ul.childNodes[3].nodeName);
console.log(ul.firstElementChild);
console.log(ul.childElementCount);
console.log(li.parentElement.nodeType);
console.log(li.parentElement.nodeType);
console.log(li.parentElement.parentElement);
console.log(li.parentElement.parentElement.parentElement);
console.log((aa.href.textContent = "www.google.com"));

// 1 Element
// 2 Attributes
// 3 Text node
// 8 Comment
// 9 Doctype itself
// 10 document

// // **** add replace and remove element

// // crrate clement
// let liadd = document.createElement("li");
// liadd.className = "a new";
// liadd.id = "id";
// liadd.setAttribute("href", "facebook.com");
// liadd.appendChild(document.createTextNode("JavaScript"));
// console.log(liadd);

let ulItem = document.createElement("li");
let link = document.createElement("a");
link.appendChild(document.createTextNode("Linkdin"));
link.setAttribute("href", "www.google.com");
console.log(ulItem);
console.log(link);

// replace element

let newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("This is new Heading"));
console.log(newHeading);


// Function composition

function main(a) {
    console.log(a);
}

function multi(n) {
    return n * 10;
}

function add(x, y) {
    return x + y;
}

main(multi(add(5, 10)));

// lexical scope and clouser

function test() {
    let msg = " I am learning clouser";

    return function() {
        console.log(msg);
    };
}

let ss = test();
ss();

for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000 * i);
}
