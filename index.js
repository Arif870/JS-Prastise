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