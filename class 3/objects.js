console.log("objects");

const obj= {
    firstName : "shayan",
    lastName : "N"

};
obj.firstName = "anurag";

console.log(obj);

// read 

delete obj.firstName;
console.log(obj);