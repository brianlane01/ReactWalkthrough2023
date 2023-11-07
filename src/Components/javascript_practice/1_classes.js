//* ES6 JS Classes 
class User {
    constructor(name){
        this.name = name;
        this.type = 'Trial User'
    };

    //* Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    //* Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

//* Instance of the classs/new object 
let anonDude = new User('Anonymous Dude');

//* We can now use the new instance and the . operator to access the 2 Methods.
anonDude.greet();
anonDude.status();

//Another instance of the class 
let anonLady = new User('Anonymous Lady');
anonLady.greet();
anonLady.status();

//* Another instance of the clas
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

