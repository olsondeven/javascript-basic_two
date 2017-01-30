// #1 Create a var called 'up' that says 'down'
var up = 'down';


// #2 Use the var iHeart to create a new var called iHeartJavascript that says 'I heart javascript'
var iHeart = 'I heart';
var iHeartJavascript = iHeart+' javascript';

// #3  Make an object called developer
// developer has a title of Junior (String)
// developer has a salary of 55000 (Number)
// developer has a laptop, that has type Macbook, and year 2016 (object)
// developer is not billGates (boolean)
// developer likes isolation, caffeine, and pizza (array of strings)
var developer = {
	title: 'Junior',
	salary: 55000,
	laptop: {
		type: 'MacBook',
		year: 2016
	},
	billGates: false,
	likes: ['isolation','caffeine','pizza']
};


// #4 Change my dog's name to Fido using dot notation
var myDog = {
	type: 'beagle',
	name: 'Spot'
};
myDog.name = 'Fido';

// Change my don't type to hairless using square bracket notation
var myOtherDog = {
	type: 'poodle',
	name: 'Fluffy'
};
myOtherDog['type'] = 'hairless';

// #5 Create an object that tracks a count of kids in each grade in a school.  Call it 'school'
// The key should be the grade (string) and the value should be how many kids there are.
// Our school has 50 kids in first, 30 kids in second and 80 kids in third
var school = {
	'first': 50,
	'second': 30,
	'third': 80
};



// #6 Loop through this object and change every property that begins with the word 'secret' to have a value of 'redacted'
var briefing = {
	secretLocation: 'antarctica',
  secretWeapon: 'hands',
	nonsecretCodename: 'purple hippopotamus',
	secretInfo: "it's gon' be cold",
  date: 'future',
};
for(var prop in briefing){
	if(prop.charAt(/secret/) === 's'){
			briefing[prop] = 'redacted';
	}
};


// #7 Create an array of strings that are the 7 days of the week. Call your array daysOfWeek
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// #8 Using this array do the following
var jedi = ['Yoda', 'Mace Windu', 'Obi-Wan'];
// add 'Luke' to the end
jedi.push('Luke');
// console.log(jedi);
// remove 'Yoda' and store him in a var called firstJedi
var firstJedi = jedi.shift();
// console.log(jedi);
// // leave 'Mace Windu' in the array but put a copy of him on a var called thirdJedi
var thirdJedi = 'Mace Windu';
jedi.unshift(thirdJedi);
// // add 'Mario' to the start of the array
jedi.unshift('Mario');
// console.log(jedi);
// // remove 'Obi-Wan' from the array and store him in a var called secondJedi
var secondJedi = jedi.splice(3,1).join('');
// secondJedi.join('');
// console.log(jedi);
// console.log(jedi);



// #9 Write a function called cutInLine, that takes in an array and an item, and adds the item
// after the first item in the array and return the array
// EX: cutInLine([1,2,3,4], 8) => [1,8,2,3,4];
var cutInLine = function(arr,item){
	if(arr.length === 0){
		arr.push(item);
	}else{
		var firtItem = arr.shift();
		arr.unshift(item);
		arr.unshift(firtItem);
	}
	return arr;
};
cutInLine([1,2,3,4],8);




// #10 Write a function called removeThings, that takes in an array of things (strings or numbers), and a 'thing' (a string or a number).
// Removes all instances of that 'thing' from the array. And return the modified array.
// The order of the array should not be changed
// removeThings(['a', 1, 4, 'a'], 'a') => [1,4]
var removeThings = function(arr,thing){
	for(var i = arr.length-1; i >=0; i--){
		if(arr[i] == thing){
			arr.splice(i,1);
		}
	}
	return arr;
};
removeThings(['a', 1, 4, 'a'], 'a');
// #11 Write a function tripleTheFun that takes 1 parameter: a number or a string. It triples numbers, and
// repeats strings. Example: 4->12, 2.5->7.5, 'Awesome'->'AwesomeAwesomeAwesome'
var tripleTheFun = function(arg){
  var numBool = parseInt(arg);
  if((numBool*3)){
    // console.log((typeof parseInt(arg)));
    return (arg*3);
  }else{}
  if(typeof arg === 'number'){
		return (arg*3);
	}
	if(typeof arg === 'string'){
		return arg+arg+arg;
	}
};


// #12 Write function getPropertyValue that takes in an object, and the name of a property on the object as a string
// return the value from the object that corresponds to the property
var getPropertyValue = function(obj,key){
	for(var prop in obj){
		if(prop === key){
			return obj[prop];
		}
	}
};

// #13 Write a function called clockIn that takes in an employee and department name
// and returns an object with a name, department, and timestamp which is
// the current time as a Date object
var clockIn = function (employee,department){
	var obj = {
		name: employee,
		department: department,
		timestamp: new Date()
	}
	return obj;
}

// #14 Create a function called spiderTest that takes in an object that is an actor, it looks to see if the actor's name is Andrew Garfield and changes the actor object to have a property called spiderRating with a value of 10.  If their name is Tobey Maguire set spiderRating to 0.  otherwise set spiderRating to 'not a spiderman'.
var spiderTest = function(obj){
	if(obj.name === 'Andrew Garfield'){
		obj.spiderRating = 10;
	}else if(obj.name === 'Tobey Maguire'){
		obj.spiderRating = 0;
	}else{
		obj.spiderRating = 'not a spiderman';
	}
}
// #15 Create a function called whatIsItOutside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    !temperature over 85 and humidity over 45 - return "I'm all sweat"
    !temperature under 40 and cloudiness over 60 - return "I have icicles"
    !temperature over 85 and humidity under 45 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 90 or humidity over 55 or cloudiness over 65 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/
var whatIsItOutside = function(temp,hum,cloud){
	if((temp > 85) && (hum > 45)){
		return "I'm all sweat";
	}else if ((temp < 40 && cloud > 60)) {
		return "I have icicles";
	}else if((temp > 85) && (hum < 45) && (cloud < 20)){
		return "I'm literally in the desert";
	}else if ((temp > 90) || (hum > 55) || (cloud > 65)){
		return "Hmm, probably not";
	}else{
		return "I love outside";
	}
}
// #16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the string(back) + ' back'.
// IE - If I call you with 'Give it' you should invoke holla with 'Give it back'
// var holla = function(str){
// 	// console.log((str+' back'));
//   return (str+' back');
// };
var callerBack = function(cb, str){
	// str = str+' back';
	return cb(str+' back');
};
// console.log(callerBack(holla,'Hey!'));
