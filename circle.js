//class-circle
//Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(radius){
        this.radius = radius;
    }
    get Color(){
        return this.color;
    }
    set Color(color){
        this.color = color;
    }
    get toString(){
        return `"Cercle[radius=${this.radius},color=${this.color}"]`
    }
    get Area(){
        return Math.PI * this.radius * this.radius;
    }
    get Circumference(){
        return Math.PI * this.radius;
    }
}

let circle = new Circle(1.0, "red")

console.log(`create a class circle`)
circle.Radius = 1.1
console.log(`radius: ${circle.Radius}, color: ${circle.Color}`)
circle.Color = "blue";
console.log(`
setColor: ${circle.Color}

toString: ${circle.toString}

getArea: ${circle.Area}

getCircumference: ${circle.Circumference}
`)

//output:
//create a class circle
//radius: 1.1, color: red

//setColor: blue

//toString: "Cercle[radius=1.1,color=blue"]

//getArea: 3.8013271108436504

//getCircumference: 3.455751918948773



