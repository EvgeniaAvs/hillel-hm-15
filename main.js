console.log(`Реализовать цепочку протитопов с помощью Object.create`);

let objA = {
    name: 'Marina',
    action: function () {
        return 'dancing';
    }
};

let objB = Object.create(objA, {
    age: {
        configurable: true,
        writable: true,
        value: '24',
    },
});

objB.sayHi = function () {
    return 'Hello';
};

let objC = Object.create(objB, {
    gender: {
        value: 'female'
    },
});

objC.sayBye = function () {
    return 'Bye';
},

console.log(objA.action());
console.log(objB.name);
console.log(objB.name);
console.log(objC.sayHi());
console.log(objC.age);
console.log(objC.gender);
console.log(objC.sayBye());





console.log(`Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__)`);

let objectA = {
    name: 'Marina',
    action: function () {
        return 'dancing';
    }
};

let objectB = {
    age: '24',
    sayHi: function () {
        return 'Hello';
    }
};

let objectC = {
    gender: 'female',
    sayBye: function () {
        return 'Bye';
    },
}

objectB.__proto__ = objectA;
objectC.__proto__ = objectB;

console.log(objectA.action());
console.log(objectB.name);
console.log(objectB.name);
console.log(objectC.sayHi());
console.log(objectC.age);
console.log(objectC.gender);
console.log(objectC.sayBye());





console.log(`Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (setPrototypeOf)`);

let objectA1 = {
    name: 'Marina',
    action: function () {
        return 'dancing';
    }
};

let objectB1 = {
    age: '24',
    sayHi: function () {
        return 'Hello';
    }
};

let objectC1 = {
    gender: 'female',
    sayBye: function () {
        return 'Bye';
    },
};

Object.setPrototypeOf(objectB1, objectA1);
Object.setPrototypeOf(objectC1, objectB1);

console.log(objA.action());
console.log(objB.name);
console.log(objB.name);
console.log(objC.sayHi());
console.log(objC.age);
console.log(objC.gender);
console.log(objC.sayBye());





console.log(`Реализовать цепочку прототипов с помощью функций-конструкторов`);

function ObjectA(name) {
    this.name = name;
}

ObjectA.prototype.action = function () {
    console.log(`${this.name} is dancing`);
}

function ObjectB(name, age) {
    ObjectA.call(this, name)
    this.age = age;
}

ObjectB.prototype = Object.create(ObjectA.prototype)

ObjectB.prototype.sayHi = function () {
    console.log(`Hello, ${this.name}`);
}

function ObjectC(name, age, gender) {
    ObjectB.call(this, name, age)
    this.gender = gender;
}

ObjectC.prototype = Object.create(ObjectB.prototype)

ObjectC.prototype.sayBye = function () {
    console.log(`Bye, ${this.name}, ${this.age}`);
}

let objectFirst = new ObjectA('Marina', '24');
console.log(objectFirst);
objectFirst.action();

let objectSecond = new ObjectB('Alex', '28', 'female');
console.log(objectSecond);
objectSecond.action();
objectSecond.sayHi();

let objectThird = new ObjectC('Andrew', '32', 'male');
console.log(objectThird);
objectThird.action();
objectThird.sayHi();
objectThird.sayBye();