class Person{
    constructor(name, age, gender, state, country){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.country = country;
    }
}

let person = new Person("saravanapriya", 25, "Female", "Tamil nadu", "India");
console.log(`create a person class to hold all the details.
${person.name}
${person.age}
${person.gender}
${person.state}
${person.country}
`)

//output:
//[Running] node "e:\dev\FSD6\js\person.js"
//create a person class to hold all the details.
//saravanapriya
//25
//Female
//Tamil nadu
//India
