// Generate objects using a function
function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype // {};
userCreator.prototype.increment = function () {
    this.score++;
}
const user1 = new userCreator("Claud", 7);

// The class ‘syntactic sugar’
class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        this.score++;
    }
    login() {
        console.log("login");
    }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();

const user2 = new UserCreator("Eva", 9);
user2.increment();