// chapter 1
// task 1

// Question 1 
// Declare a variable called username.

// var username;
// // task 2 
// // Q 2. Declare a variable called myName & assign to it a string that represents your Full Name.

// var myname = "Furqan Ali"

// // task 3
// // Q 3. Write script to
// // a) Declare a JS variable, titled message.
// // b) Assign “Hello World” to variable message
// // c) Display the message in alert box.

// var message;
// message = "Hello World";
// alert(message);

// // task 4
// // Q 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// var fullname = "Furqan Ali Lashari";
// var age = 28;
// var DOB = '08-02-1993';
// alert("Name : " + fullname + "\n" +"AGE : "+age +"\n"+"Date of birth: " + DOB);


// // task 5
// // Q 5. Write a script to display the following alert using one JS variable:

// window.alert("Pizza  \nPizz \nPiz  \nPi \nP")

// // task 6
// //Q 6 Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

// var email = "furqanali592@gmail.com";

// alert("My email address is " + email);

// // task 7
// // Q 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// var book = "A smarter way to learn JavaScript";

// alert("I am trying to learn from the Book " + book);

// // task 8
// // Q 8. Write a script to display this in browser through JS

// var display = "Yah! I can write HTML content through JaveScript"
// document.write("<h1>" + display+ "</h1>");

// // task 9
// // Q 9. Store following string in a variable and show in alert and browser through JS


// alert("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”")





// // chapter 2
// // Task 1

// // Q 1. Write a script to greet your website visitor using JS alert box.

// alert("Greeting ! Warm Welcome to our Website")

// // task 2
// // Q 2. Write a script to display following message on your web page:

// alert("Error! Please enter a valid Password");

// // task 3
// // Q 3. Write a script to display following message on your web page: (Hint : Use line break)

// alert("Welcome to JS Land...\nHappy Coding!")

// // task 4
// // 4. Write a script to display following messages in sequence:

// alert("Welcome to JS Land");
// alert("Happy Coding!");


// // task 5
// // 5. Generate the following message through browser’s developer console:

// console.log("Hello... I can run JS through web browser's console")





// // chapter 3

// // task 1

// // 1. Declare a variable called age & assign to it your age. Show
// // your age in an alert box.

// var age=prompt("Enter Age");
// alert("I Am"+age+"Years Old");

// // task 2

// // 2. Declare & initialize a variable to keep track of how many
// // times a visitor has visited a web page. Show his/her
// // number of visits on your web page. For example: “You
// // have visited this site N times”.

// var visit = 13
// var newVisit = visit+1
// alert("You Have Visited This Site" + (visit+1) + "Time");

// // task 3

// // 3. Declare a variable called birthYear & assign to it your
// // birth year. Show the following message in your browser:

// var brith = parseInt(prompt("Enter value"));

// document.write("My Brith Year Is" + brith);
// document.write("<br>Data type of birth year" + typeof(brith) );

// // task 4

// // 4. A visitor visits an online clothing store
// // www.xyzClothing.com . Write a script to store in variables
// // the following information:
// // a. Visitor’s name
// // b. Product title
// // c. Quantity i.e. how many products a visitor wants to
// // order
// // Show the following message in your browser: “John
// // Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var name = prompt ("")
// var title = prompt("")
// var qty = prompt("")

// document.write(name + "Order" + qty + "T-Shirt(s) on" + title +" Clothing Store");






// // chapter 4

// // task 1

// // 1. Declare 3 variables in one statement.

// var a = 4, b = 6, c = 12

// // task 2 

// // 2. Declare 5 legal & 5 illegal variable names.

// // llegal variables

// var abc
// var abc_hello
// var $done
// var data1
// var data_he$

// // illegal variables

// var 1abc1
// var +abc_hello
// var 1$done
// var ?data1
// var %data_$he;

// task 3

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// document.write("<h1>Rules for naming JS variables</h1>");

// document.write("<br> Variable names can only contain,Numbers,$ and_.For example: $my_1stVariable");
// document.write("<br> Variables must begin with a Letter, $ or_ . For example $name, _name or name ");
// document.write("<br> Variable names are case Sensitive");
// document.write("<br> Variable names should not be JS Keywords")



// chapter 5

// task 1

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var inp1 = parseInt(prompt("Enter Number 1"))
// var inp2 = parseInt(prompt("Enter Number 2"))

// var sum = inp1+inp2

// document.write(" Sum Of " + inp1 + " and " + inp2 + " is " +sum);

// task 2


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// var inp1 = parseInt(prompt("Enter Number 1"))
// var inp2 = parseInt(prompt("Enter Number 2"))

// document.write("<br> Subraction : " + (inp1-inp2));
// document.write("<br>Multiplication :" + (inp1*inp2));
// document.write("<br>Division : " + (inp1/inp2));
// document.write("<br>Modulus : " + (inp1%inp2));

// task 3

// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.

// var value;

// b. Show the value of variable in your browser like �Value after variable declaration is: ??�. 

// document.write("Value after variable declaration is "+value);

// c. Initialize the variable with some number;

// var value = 5;

// d. Show the value of variable in your browser like �Initial value: 5�

// document.write("<br>Initial value: "+value);

// e. Increment the variable

// value++;

// f. Show the value of variable in your browser like �Value after increment is: 6�. 

// document.write("<br>Value after increment is: "+value);

//  Add 7 to the variable

// var addition = value + 7;

// h. Show the value of variable in your browser like �Value after addition is: 13�. 

// document.write("<br>Value after addition is: "+addition);

// i. Decrement the variable

// addition--;

// j. Show the value of variable in your browser like �Value after decrement is: 12�. 

// document.write("<br>Value after decrement is: "+addition);

// k. Show the remainder after dividing the variable�s value by 3. 

//  var reminder = addition%3;

 // l. Output : �The remainder is : 0�. 

//  document.write("<br>The reminder is "+reminder);


// task 4

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets?

// var tkprice = 600
// var tkpurchased = parseInt(prompt("How Much tickets"));

// document.write("Total cost to buy " + tkpurchased + " Tickets to a movie is " + tkpurchased*tkprice + "PKR");

// task 5


// 5. Write a script to display multiplication table of any
// number in your browser. E.g


// var userinput = parseInt(prompt("Enter any table"));


//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*1 );
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*2);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*3);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*4);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*5);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*6);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*7);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*8);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*9);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*10);

// Q6:  The Temperature Converter: It�s hot out! Let�s make a converter based on the steps here
 // a.  Store a Celsius temperature into a variable
 // b. Convert it to Fahrenheit & output �NNoC is NNoF�. 
 // c. Now store a Fahrenheit temperature into a variable. 
 // d. Convert it to Celsius & output �NNoF is NNoC�. 

//  var celcius = parseInt(prompt("Enter a number in celcius "));
//  var Fahrenheit = parseInt(prompt("Enter a number in fahrenheit "));

//  var celciusConvert = ((Fahrenheit - 32)*(5/9));
//  var fahrenDegree = ((celcius*(9/5)) + 32);

//  document.write("<br>" +celcius+ "F is "+ celciusConvert);
//  document.write("<br>" +Fahrenheit+"C is "+fahrenDegree);


// Q7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
 // a. Price of item 1 
 // b. Price of item 2 
 // c. Ordered quantity of item 1 
 // d. Ordered Quantity of item 2 
 // e. Shipping charges 

//  var item1 = parseInt(prompt("Enter the price of item 1:  "));
//  var item2 = parseInt(prompt("Enter the price of item 2:  "));
//  var quantityOfItem1 = parseInt(prompt("Enter the Quantity of item 1:  "));
//  var quantityOfItem2 = parseInt(prompt("Enter the Quantity of item 2:  "));
// var shippingCharges = 100;

//  var cost = ((item1*quantityOfItem1) + (item2*quantityOfItem2) + shippingCharges);
//  document.write("<br>Price of item 1 is "+item1)
//  document.write("<br>Quantity of item 1 "+quantityOfItem1)
//  document.write("<br>Price of item 2 is "+item2)
//  document.write("<br>Quantity of item 2 "+quantityOfItem2)
//  document.write("<br>Shipping charges is 100");
//  document.write("<br>Total cost of ypur order is "+cost);


// task 8

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


// var totalmark = 980
// var markobtained = parseInt(prompt("Enter Your Obtained Marks"));


// document.write("<br> Total Marks: " + totalmark + " ");
// document.write("<br> Marks Obtained: " + markobtained + " ");
// document.write("<br>percentage: " + (((totalmark = markobtained)) * 100 / 980) + "%");


// Q9:  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

// var moneyInDollar = parseInt(prompt("Enter money in dollar "));
// var saudiRiyal = parseInt(prompt("Enter money in Saudi riyal "));
// var pakistaniRupees = (moneyInDollar * 104.80) + (saudiRiyal * 28);

// document.write("<br>Total Currency in PKR : "+pakistaniRupees);

// Q10: Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 

// var num = 25;
// document.write("<br>( "+num+ " + 5 * 10 / 2) = "+(num + 5 * 10 / 2));


// task 11

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// var currentyear = parseInt(prompt("Current Year"))
// var birthyear = parseInt(prompt("Birth Year"))

// document.write("<h1>Age Calculator</h1>");
// document.write("<br> Current Year " + currentyear + "<br> Birth Year " + birthyear + "<br> Your age is " +(currentyear-birthyear));


//Q12:  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output �The circumference is NN�. (Hint : Circumference of a circle = 2 p r , p = 3.142) Calculate the area based on the radius, and output �The  area is NN�. (Hint : Area of a circle = p r2, p = 3.142) 

// var radiusOfCircle = parseInt(prompt("Enter radius of circle "));
// var PI = 3.142;

// document.write("<br>Radius of Circle is "+radiusOfCircle);
// document.write("<br> The Circumference is "+(2 * PI * radiusOfCircle));
// document.write("<br>The area is "+(PI * radiusOfCircle * radiusOfCircle));

//Q13:  The Lifetime Supply Calculator: Ever wonder how much a �lifetime supply� of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable
// c. Store a maximum age into a variable
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life

// var snack = prompt("Enter your favorite snack ");
// var age = parseInt(prompt("Enter your Current Age "));
// var maximumAge = parseInt(prompt("Enter your Maximum Age "));
// var amountPerDAy = parseInt(prompt("How much you can eat your favorite snack per day "));
// var total = (amountPerDAy * 365 * (maximumAge - age));

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("<br>FAvorite Snack "+snack);
// document.write("<br>Current Age "+age);
// document.write("<br>Estimate Maximum Age "+maximumAge);
// document.write("<br>Amount of Snack per Day ");
// document.write("<br>you will need "+total+" chocolate chip to last you until the rip old age of "+maximumAge);


// chapter 6 to 9

// task 1

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser ?




// task 2

// 2. What will be the output in variables a, b & result after
// execution of the following script:



// task 4 to 5

// 4.
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var userinput= prompt("Enter Your Number");

// if(userinput==""){
// document.write(    "5" + "*" + 1 + "=" + 5*1 );
// document.write("<br>5" + "*" + 2 + "=" + 5*2);
// document.write("<br>5" + "*" + 3 + "=" + 5*3 );
// document.write("<br>5" + "*" + 4 + "=" + 5*4);
// document.write("<br>5" + "*" + 5 + "=" + 5*5);
// document.write("<br>5" + "*" + 6 + "=" + 5*6);
// document.write("<br>5" + "*" + 7 + "=" + 5*7);
// document.write("<br>5" + "*" + 8 + "=" + 5*8);
// document.write("<br>5" + "*" + 9 + "=" + 5*9);
// document.write("<br>5" + "*" + 10 + "=" + 5*10);
// }

// else
// {
//     document.write("<br>" + userinput + "*" +1+ "=" + userinput*1);
//     document.write("<br>" + userinput + "*" +2+ "=" + userinput*2);
//     document.write("<br>" + userinput + "*" +3+ "=" + userinput*3);
//     document.write("<br>" + userinput + "*" +4+ "=" + userinput*4);
//     document.write("<br>" + userinput + "*" +5+ "=" + userinput*5);
//     document.write("<br>" + userinput + "*" +6+ "=" + userinput*6);
//     document.write("<br>" + userinput + "*" +7+ "=" + userinput*7);
//     document.write("<br>" + userinput + "*" +8+ "=" + userinput*8);
//     document.write("<br>" + userinput + "*" +9+ "=" + userinput*9);
//     document.write("<br>" + userinput + "*" +10+ "=" + userinput*10);

//     }

    // task 6

//     6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.


// var eng=parseInt(prompt("Enter English Marks"))

// if(eng>=0 && eng<=100){
//   var  urdu=parseInt(prompt("Enter Urdu Marks"))
//   if(urdu>=0 && urdu<=100){
//     var math = parseInt(prompt("Enter Urdu Marks"))
//     if(math>=0 && math<=100){
       

//         var eng_per = ((eng/100)*100).toFixed()
//         var urdu_per = ((urdu/100)*100).toFixed()
//         var math_per = ((math/100)*100).toFixed()

//         var sum = eng+urdu+math

//         var tper= (sum/300*100).toFixed()

//         document.write("<table>")
//         document.write("<tr><th> Subject </th>")
//         document.write("<th> Obtained Marks </th>")
//         document.write("<th> Total Marks </th>")
//         document.write("<th> sub Percentage </th>")
//         document.write("</tr>")

//         document.write("<tr><th> English </th>")
//         document.write("<th> "+ eng +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> " + eng_per +" % </th>")
//         document.write("</tr>")

//         document.write("<tr><th> Urdu </th>")
//         document.write("<th> "+ urdu +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> " + urdu_per +" %</th>")
//         document.write("</tr>")

//         document.write("<tr><th> Math </th>")
//         document.write("<th> "+ math +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> " + math_per + " %</th>")
//         document.write("</tr>")

//         document.write("<tr><th> </th>")
//         document.write("<th> " + sum + "</th>")
//         document.write("<th> 300 </th>")
//         document.write("<th> " + tper + " %</th>")
//         document.write("</tr>")

        

//     }
//     else{
//         document.write("You enter encorrect marks of Math")
//         alert("You enter encorrect marks of Math") 
//     }
//   }
//   else{
//     document.write("You enter encorrect marks of Urdu")
//     alert("You enter encorrect marks of Urdu")

//   }
// }
// else{
//     document.write("You enter encorrect marks of eng")
//     alert("You enter encorrect marks of eng")
// }
