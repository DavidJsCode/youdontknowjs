/*
 * Write a program to calculate the total price of your phone purchase. 
 * You will keep purchasing phones until you run out of money in your bank account. 
 * You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
 * After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted. 
 * Finally, check the amount against your bank account balance to see if you can afford it or not.
 * You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," 
	as well as a variable for your "bank account balance.""
 * You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
*/

balance = prompt( "What is your bank balance?");
threshold = prompt("How much do you want to spend?");

const TAX_RATE = .08;
const PHONE_COST = 200.00;
const ACC_COST = 14.99;

//ask how many phones to buy - at least once so a do-while against bank balance
do {
	phoneNum = prompt("How many phones do you want to buy?");
	

}

//calculate the phone cost + accessory cost for each phone - create a function for all the below stuff
//check against threshold
//add tax
//check against bank balance, can i afford yes or no
//keep a running total of balance
