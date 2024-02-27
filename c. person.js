// Write a “person” class to hold all the details. 


class person {
    constructor(name, age, address, phoneNumber, email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email
    }


    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.address(age) = age;

    }
    setAddress(address) {
        this.address = address;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = this.phoneNumber;
    }
    getEmail() {
        return this.email
    }


}

let person1 = new person('MOHAMMED SIRAJUDEEN', 29, 'KARAIKAL', '7502626719', 'mohammedsira18@gmail.com')


person1.Name = 'MOHAMMED SIRAJUDEEN'
console.log(person1.Name);

console.log(person1);
