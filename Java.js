
let name;
let age;
let gender;
let order_Status;
let order;

name = prompt("Enter your name");
age = Number(prompt("Enter your age"));
gender = prompt("Enter your gender");

if (gender == "male") {
    document.write("Welcome Mr. " + name + "<br>");
}
else if (gender == "female") {
    document.write("Welcome Ms. " + name + "<br>");
}
else {
    document.write("Welcome " + name + "<br>");
}


if (age < 16) {

    alert("You are not eligible to place an order");

}
else {

    
    order = prompt("Choose an Order: Burger, Shawarma, Zinger");

    
    if (order == "Burger" || order == "Shawarma" || order == "Zinger") {

        alert("Your order is being prepared");
        document.write("Your order: " + order + "<br>");

    }
    else {

        alert("Invalid order. Please try again");

    }
}


document.write("Customer Name: " + name + "<br>");
document.write("Age: " + age + "<br>");
document.write("Your Order: " + order + "<br>");

