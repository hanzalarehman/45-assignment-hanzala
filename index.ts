                 //                      45 ASSIGNMENT              //

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”

// let personName:string="Hamza"
// console.log(`Hello!  My name is ${personName}.`) // Outputs "Hello! My name is Hamza."


//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let firstName:string="umer ali khan"
// console.log(firstName.toLowerCase()) 
// console.log(firstName.toUpperCase()) 
// let firstName: string = "umer ali";
// let titleCaseFirstName: string = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
//  console.log(titleCaseFirstName); // Outputs "Umer Ali"

// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:

//console.log('"Develop your own sense of judgment and distinguish right from wrong, always considering the interest of the state and the nation."FROM FATMMAH JINNAH')

//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// let famous_Person:string="fatimmah jinnah "
// let message:string='"Develop your own sense of judgment and distinguish right from wrong, always considering the interest of the state and the nation."'
// console.log(`${famous_Person}said,${message}`)

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// let name_1:string="Hamza/trehman"
// let name_2:string="Hamza/nRehman"
// console.log(name_1)
// console.log(name_2)

//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// let x:number=10
// let y:number=5
// console.log(x-y)
// console.log(x+y)
// console.log(x*y)
// console.log(x/y)

//8. You should create four lines that look like this:

// console.log(5+3)
// console.log(16-8)
// console.log(4*2)
// console.log(16/2)

//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// let num:number=2004
// console.log(`My favourite number is ${num}`)

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.

// let x:number=10
// let y:number=5
// //addition program
// console.log(`${x}+${y}=${x+y}`)

//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// let names:string[]=["ALI","UMER","HAMZA","TAHA"]
// for(let i=0;i<names.length;i++){
//     let name=names[i]
//     console.log(name)
// }

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.

// let message:string="is the good boy"
// let names:string[]=["ALI","UMER","HAMZA","TAHA"]
// for(let i=0;i<names.length;i++){
//     let name=names[i]
//     console.log(name+" "+message)
// }

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// let transports:string[]=["Honda car","civics","yama bike","bus"]
// for(let i=0;i<=transports.length;i++){
//       let list=transports[i]
//       console.log(`I travel ${list}`)
// }

//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// var guest:string[]=["HAMZA","ALI","RANA"]
// guest.map((item)=>console.log(`MRs ${item} invited to dinner`))


// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

// var guest:string[]=["HAMZA","ALI","RANA"]
// console.log(guest)
// var not_attend:string="ALI"
// console.log(`${not_attend} cannot attend`)
// var newguest:string="UMER"
// guest[guest.indexOf(not_attend)]=newguest
// guest.map((item)=>console.log(`MR ${item}, you are invited to dinner`))



// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// var guest:string[]=["HAMZA","ALI","RANA"]
// // console.log(guest)
// var not_attend:string="ALI"
// // console.log(`${not_attend} cannot attend`)
// var newguest:string="UMER"
// guest[guest.indexOf(not_attend)]=newguest
// //FOR BEGNING
// guest.unshift("TAHA")
// // console.log(guest)
// //FOR MIDDLE
// let m_center:string="QASIM"
// let m_index=guest.length/2
// guest.splice(m_index,0,m_center)
// //console.log(guest)
// //FOR END
// guest.push("ZIA")
//console.log(guest)

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

// console.log("I invited a two people in dinner")
// while(guest.length>2){
//      let del=guest.pop()
//      console.log(`MR ${del}, you are not invited`)
// }
// guest.map((item)=>console.log(`MR ${item}, you are still invited`))
// guest.pop()
// guest.pop()
// console.log(guest)



// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// let cities:string[]=[
//     "london",
//     "paris",
//     "kashmir",
//     "berlin",
//     "seoul"
// ]
// console.log(cities)
// console.log(cities.sort())
// console.log(cities)
//console.log(cities.reverse())
//console.log(cities)
// cities.sort()
// console.log(cities)
// cities.reverse()
// console.log(cities)

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

//console.log(`${guest.length} peoples are invited`)

// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.

// let countries:string[]=["USA","china","pakistan","korea"]
// countries.map((items)=>console.log(items))


//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// let Car:{name:string,color:string,model:number,isused:boolean}={
//     name:"Honda",
//     color:"white",
//     model:2023,
//     isused:false
// }
// console.log(Car)

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.

// let cities:string[]=[
//     "london",
//     "paris",
//     "kashmir",
//     "berlin",
//     "seoul"
// ]
// console.log(cities[4])
// console.log(cities[8])

// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

//1
// let car="honda"
// console.log("Is car=='honda'?I predict true otherwise I predict false")
// console.log(car=="honda")
// //2
// let age=25
// console.log("Is age>18?I predict true otherwise I predict false")
// console.log(age==25)
// //3
// let vote=45
// console.log("Is vote==18?I predict true otherwise I predict false")
// console.log(vote>=18)
// //4
// let even=10
// console.log("Is a number is even?I predict true otherwise I predict false")
// console.log(even%2)
// //5
// let small_string="HELLOWORLD"
// console.log("Is helloworld is equal?I predict true otherwise I predict false")
// console.log(small_string.toLowerCase()==="helloworld")
// //6
// let bus="car"
// console.log("Is bus==car?I predict true otherwise I predict false")
// console.log(bus!="car")
// //7
// let pass=30
// console.log("pass==50?I predict true otherwise I predict false")
// console.log(pass==100)
// //8
// let a=20
// let b=70
// console.log("Is car=='honda'?I predict true otherwise I predict false")
// console.log(a>40&&b<90)
// //9
// let bike="suzuki"
// console.log("Is bike is yahma'?I predict true otherwise I predict false")
// console.log(bike=="yahma")
// //10
// let requried_school_age=5
// let qasim_age=4
// console.log("Is qasim going to school?I predict true otherwise I predict false")
// console.log(qasim_age==requried_school_age)



// //24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// // • Tests for equality and inequality with strings

// // • Tests using the lower case function

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// // • Tests using "and" and "or" operators

// // • Test whether an item is in a array

// // • Test whether an item is not in a array
// // make it for typescript

// // Certainly! Below are examples of conditional tests in TypeScript for the mentioned scenarios:

// // typescript
// // Copy code
// // Tests for equality and inequality with strings
// const string1: string = "hello";
// const string2: string = "world";

// console.log(string1 === string2);  // False
// console.log(string1 !== string2);  // True

// // Tests using the lower case function
// const inputString: string = "Hello";
// const lowercaseString: string = inputString.toLowerCase();

// console.log(inputString === lowercaseString);  // False
// console.log(inputString !== lowercaseString);  // True

// // Numerical tests
// const num1: number = 10;
// const num2: number = 5;

// console.log(num1 === num2);  // False
// console.log(num1 !== num2);  // True
// console.log(num1 > num2);    // True
// console.log(num1 < num2);    // False
// console.log(num1 >= num2);   // True
// console.log(num1 <= num2);   // False

// // Tests using "and" and "or" operators
// const isTrue: boolean = true;
// const isFalse: boolean = false;

// console.log(isTrue && isFalse);  // False (AND)
// console.log(isTrue || isFalse);  // True (OR)

// // Test whether an item is in an array
// const array: number[] = [1, 2, 3, 4, 5];
// const searchItem: number = 3;

// console.log(array.includes(searchItem));  // True

// // Test whether an item is not in an array
// const notInArray: number = 6;

// console.log(!array.includes(notInArray));  // True


// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

// const alien_color: string = 'green';

// if (alien_color === 'green') {
//     console.log("Player just earned 5 points!");
// }
// //failing Version:
// const alien_colors: string = 'red';

// if (alien_colors === 'green') {
//     console.log("Player just earned 5 points!");

// }
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
//  const alien_color: string = 'green';

// if (alien_color === 'green') {
//     console.log("Player just earned 5 points!");
// }
// //else version
// else{
//     console.log("Player just earned 10 points!");
// }
// if (alien_color === 'green') {
//     console.log("Player just earned 5 points!");
// }
// //else version
// else{
//     console.log("Player just earned 10 points!");
// }

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// const alien_color: string = 'green';

// if (alien_color === 'green') {
//     console.log("Player just earned 5 points!");
// }

// else if(alien_color==='yellow'){
//     console.log("Player just earned 10 points!");
// }

// else if(alien_color==='red'){
//     console.log("Player just earned 15 points!");
// }
// const alien_color: string = 'yellow';

// if (alien_color === 'green') {
//     console.log("Player just earned 5 points!");
// }

// else if(alien_color==='yellow'){
//     console.log("Player just earned 10 points!");
// }

// else if(alien_color==='red'){
//     console.log("Player just earned 15 points!");
// }
// const alien_color: string = 'red';

// if (alien_color === 'green') {
//     console.log("Player just earned 5 points!");
// }

// else if(alien_color==='yellow'){
//     console.log("Player just earned 10 points!");
// }

// else if(alien_color==='red'){
//     console.log("Player just earned 15 points!");
//  }

// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

// let age:number=2
// if(age<2){
//         console.log("the person is a baby")
// }
// else if(age>=2&&age<=4){
//         console.log("the person is toddy")

// }
// else if(age>=4&&age<=13){
//     console.log("the person is a kid")
// }
// else if(age>=13&&age<=20){
//     console.log("the person is a teenager")
// }
// else if(age>=20&&age<=60){
//     console.log("the person is an adult")
// }
// else if(age>=65){
//     console.log("the person is an elder")
// }
// //29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// // • Make a array of your three favorite fruits and call it favorite_fruits.
// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// // such as You really like bananas!
// const favorite_fruits: string[] = ['apple', 'banana', 'strawberry'];

// // Checking for specific fruits using independent if statements
// if (favorite_fruits.includes('apple')) {
//     console.log("I love apples!");
// }

// if (favorite_fruits.includes('banana')) {
//     console.log("Bananas are delicious!");
// }

// if (favorite_fruits.includes('orange')) {
//     console.log("Oranges are refreshing!");
// } else {
//     console.log("I don't have oranges in my favorite fruits.");
// }

// if (favorite_fruits.includes('strawberry')) {
//     console.log("Strawberries are sweet and juicy!");
// }

// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

//  • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//  • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let employee:string[]=["admin","ali","umer","hans"]
// for(let i=0;i<employee.length;i++){
//     if(employee[i]=="admin"){
//         console.log(`Hello admin, would you like to see a status report?
//         `)
//     }
//     else{
//       console.log(`hello ${employee[i]}`)
//     }
// }

// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let usernames:string[]=["ALI","UMER","HAMZA"]
// if(usernames.length===0){
//  console.log("we need some users")
// }
// else{
//     for(let i=0;i<usernames.length;i++){
     
//        console.log(usernames[i])
//     }
// }
// let username:string[]=[]
// if(username.length===0){
//  console.log("we need some users")
// }
// else{
//     for(let i=0;i<username.length;i++){
//        let usernames=username[i]
//        console.log(usernames)
//     }
// }
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users

// let users_name:string[]=["umer","david","malik","ali","zain"]
// let new_users_name:string[]=["DAVID","daynial","ANUS","ZAIN","qasim"]
// for (let i=0;i<new_users_name.length;i++){
//     let new_user=new_users_name[i]
//     let lowercase_new_user=new_user.toLowerCase()
//    if(users_name.includes(lowercase_new_user)){
//     console.log(`Sorry, the username "${new_user}" is already taken. Please choose a different one.`);
//    }
//    else{
//     users_name.push(lowercase_new_user);
//     console.log(`Congratulations! The username "${new_user}" is available and has been registered.`)
//    }
// }
// console.log(`updated list of users${users_name}`)

//33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

//• Store the numbers 1 through 9 in a array.

//• Loop through the array.
// let numbers:number[]=[1,2,3,4,5,6,7,8,9]
// for(let i=0;i<numbers.length;i++){
//     let suffix:string;
//     if(numbers[i]==1){
//       suffix="st"
//     }
//     else if(numbers[i]==2){
//         suffix="nd"
//     }
//     else if(numbers[i]==3){
//         suffix="rd"
//     }
//     else{
//         suffix="th"
//     }
//     console.log(`${numbers[i]},${suffix}`)
// };
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
// Array of favorite pizza names
// const favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// // Using a for loop to print the name of each pizza
// console.log("My favorite pizzas:");
// for (const pizza of favoritePizzas) {
//     console.log(pizza);
// }

// // Modify the for loop to print a sentence about each pizza
// console.log("\nMy favorite pizzas with statements:");
// for (const pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// // Add a line outside the for loop expressing overall love for pizza
// console.log("\nI really love pizza!");

// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
// const favoriteAnimals: string[] = ['Cat', 'dog', 'birds'];

// // Using a for loop to print the name of each pizza
// console.log("My favorite Animals:");
// for (const animal of favoriteAnimals) {
//     console.log(animal);
// }

// // Modify the for loop to print a sentence about each pizza
// console.log("\nMy favorite animals with statements:");
// for (const animal of favoriteAnimals) {
//     console.log(`I like ${animal} animal.`);
// }
// // Add a line outside the for loop expressing overall love for pizza
// console.log("\nI really love animal!");

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
// Define the make_shirt function
// function make_shirt(size: string, message: string): void {
//     console.log(`The shirt is size ${size} and it has the message: "${message}"`);
// }

// // Call the function with a specific size and message
// make_shirt('XL', 'I love TypeScript!');
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
// Modified make_shirt function with default values
// function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
//     console.log(`The shirt is size ${size} and it has the message: "${message}"`);
// }

// // Create a large shirt with the default message
// make_shirt();

// // Create a medium shirt with the default message
// make_shirt('Medium');

// // Create a shirt of any size with a different message
// make_shirt('Small', 'Coding is fun!')

// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
// Define the describe_city function with a default value for country
// function describe_city(city: string, country: string = 'Unknown'): void {
//     console.log(`${city} is in ${country}.`);
// }

// // Call the function for three different cities
// describe_city('Karachi', 'Pakistan');
// describe_city('Paris'); // Default country will be used (Unknown)
// describe_city('New York', 'USA');


// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.
// function city_country(city:string,country:string):void{
//      console.log(`${city},${country}`)
// }
// city_country("karachi","pakistan")
// city_country("berlin","germany")
// city_country("dahka","bangladesh")

// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
// Function to build an album object

// function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
//     const album: Record<string, any> = {
//         artist: artist,
//         title: title
//     };

//     // Add tracks to the album if provided
//     if (tracks !== undefined) {
//        album.tracks = tracks;
//     }

//     return album;
// }

// // Example usage
// const album1 = make_album('Artist1', 'Album1');
// const album2 = make_album('Artist2', 'Album2', 12); // Including the number of tracks
// const album3 = make_album('Artist3', 'Album3', 8);  // Including the number of tracks

// // Print each return value
// console.log(album1);
// console.log(album2);
// console.log(album3);

//41. Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array
// Function to show magicians
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// // Array of magician's names
// const magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// // Call the show_magicians function with the array of magician names
// show_magicians(magicianNames)

// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

// Function to show magicians
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }

// // Function to make magicians great
// function make_great(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];

//     for (const magician of magicians) {
//         greatMagicians.push(`the Great ${magician}`);
//     }

//     return greatMagicians;
// }

// // Array of magician's names
// const magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// // Call make_great to modify the array
// const greatMagicians = make_great([...magicianNames]);

// // Call show_magicians to see the modified list
// console.log("Original magicians:");
// show_magicians(magicianNames);

// console.log("\nMagicians made great:");
// show_magicians(greatMagicians);

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// Function to show magicians
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }

// // Function to make magicians great without modifying the original array
// function make_great(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];

//     for (const magician of magicians) {
//         greatMagicians.push(`the Great ${magician}`);
//     }

//     return greatMagicians;
// }

// // Array of magician's names
// const magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// // Call make_great with a copy of the original array
// const greatMagicians = make_great([...magicianNames]);

// // Call show_magicians to see both arrays
// console.log("Original magicians:");
// show_magicians(magicianNames);

// console.log("\nMagicians made great:");
// show_magicians(greatMagicians);



// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time
// function sandwhich(...items: string[]):void{
//   console.log("summary:");
//   if(items.length===0){
//     console.log(" -you ordered an empty sandwhich.please add some items.")
//   }
             
//     else{
//       items.forEach((items,i)=>{
//          console.log(`${i+1}.${items}`)
//       })
//     }
//  console.log("/n")

// }
// sandwhich("pepproni","mushroom","bellpeper")
// sandwhich("pepproni","mushroom","bellpeper")
// sandwhich("pepproni","ketup","bellpeper")
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

// function createCar(manufacturer:string,model:string,...properties:[string,any][]):any{
//     const car:any={
//         manufacturer,
//         model,
//     };
//     for(const [key,value] of properties){
//         car [key]  = value;
//     }
//     return car;

// }
// const mycar:string=createCar("honda","suzuki",["color","blue"],["optional feature","sunoof"],["speed","280km/hour"])
// console.log(mycar)













