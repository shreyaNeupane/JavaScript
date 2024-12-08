// satic = keyword that defines properties or methods that belong 
//          to the class itself rather than the objects created 
//          from that class (class owns anything static , not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(raduis){
        return raduis * 2;
    }
    static  getCircumference(raduis){
        return 2* this.PI * raduis;
    }
    static getArea (raduis){
        return this.PI * raduis * raduis;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));