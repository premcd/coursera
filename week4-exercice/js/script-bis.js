var x = "Hello World";

var message = "in global";
console.log("in global:message ="+message)

var a = function() {
// define the function a , which itself invokes the function b
	var message = "inside a";
	console.log("a:message = "+ message);
	b()
}
function b() {console.log("b:message="+message)};


a();
// invoke the function to run it
// the variable message content is not the same throughout
// it is based on the execution context


// javascripts types

var y;
console.log(y);
if (y==undefined) {
	console.log("y is undefined")
}
y=5;
console.log(y);
if (y==undefined) {
	console.log("y is undefined")
}
else {console.log("y has been defined")
}

// for loop
var sum = 0;
for(var i=0;i<10;i++){
	console.log(i);
	sum=sum+i;
}
console.log("sum from the loop is" +sum);

//string concatenation
var string="trop beau";
string += " voila!!";
console.log(string);

//OR operator ||
if(false||null||0||string=="dvdsvd"||undefined||NaN) {
	consol.log("it is false")
}
else {console.log("truetrue");
};

//AND operator ||
if(true && string =="trop beau voila!!" && 1) {
	console.log("it is true")
}
else {console.log("falsefalse");
};

//Create an object

var company={
	name:"wwf",
	values: {
		environment: "zero carbon emission target",
		color: "green"
	},
	"the logo of the company": "panda"
};
console.log(company["the logo of the company"]);

//functions of fonctions:
function makeMultiplier(multiplier) {
	//define a function of an input value (multiplier)
  var myFunFunc = function (x) {
  	//inside this function, define a function of input value (x)
    return multiplier * x;
    //multiply both values
      };
  //return the function of the second value
  return myFunFunc;
}

var operation = makeMultiplier(10);
console.log(operation(10));


function test(){
	console.log(this);
	this.myName = "Maririri";
};
test();
console.log(window.myName);

//Function CONSTRUCTORS - check the prototype
function Circle(radius) {
this.radius=radius
this.getArea=
function() {
	return Math.PI*Math.pow(this.radius,2)
};
}
var myCircle = new Circle(10); //creates a new Object
console.log(myCircle);

//ARRAYS -LOOP

var names=["marie","claire","voila","monnom"];
for (var i =0 ; i< names.length;i++) {
console.log("Hello "+names[i])
};

//ARRAYS- PROP LOOPS- grab property of my object
var myObj = {
	name:"mc",
	genre:"female",
	age:"33"
};
for(var prop in myObj) {
	console.log(prop+": "+myObj[prop]);
};

//ARRAYS list content:
for (var name in names){
console.log("Hello " + names[name])

};