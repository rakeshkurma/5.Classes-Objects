
/*

1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume();

Formulas for volumes of the shapes-
1) Cylinder- Volume = πr

2h

where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr
3
where r is the radius
3) Cone- Volume= πr
2h/3

where r is the radius and h is the height of the cone.

*/


class Cylinder {

    constructor(radius,height)
    {
        this.radius=radius;
        this.height=height;
    }

    getVolume()
    {
        let num=3.14*(this.radius*this.radius)*this.height;
        num=num.toPrecision(4);
        return num;
    }
}
class Sphere {

    constructor(radius)
    {
        this.radius=radius;
    }
        
 getVolume()
    {
        let num=3.14*(this.radius*this.radius*this.radius)*0.75;
        num=num.toPrecision(4);
        return num;
    }
}

class Cone {

    constructor(radius,height)
    {
        this.radius=radius;
        this.height=height;
    }
        
 getVolume()
    {
    
        let num=  3.14*(this.radius*this.radius)*(this.height/3);
        num=num.toPrecision(4)
        return num;
        
    }
}


let c1=new Cylinder(5,10);
let s1=new Sphere(5,10);
let c=new Cone(5,10);
console.log(" volume of Cylinder is :", c1.getVolume());
console.log(" Volume of Sphere is : ",s1.getVolume());
console.log("Volume of Cone is : ",c.getVolume());