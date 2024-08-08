// clear statement button 
document.getElementById("clear-statement").onclick = () => {
    document.getElementById("statement").innerHTML = "";
}

// clear output button 
document.getElementById("clear-output").onclick = () => {
    document.getElementById("output").innerHTML = "";
}

// Concatenate-some-strings
document.getElementById("Concatenate-some-strings").onclick = () => {

    let message = "Thanks, ";
    let userName = "Haroon"
    let banger = "!";
    alert(message + userName + banger);

    let statement = "let message = 'Thanks, ';" + "<br>let userName = 'Haroon'" + " <br>let banger = '!';" + " <br>alert(message + userName + banger);"
    document.getElementById("statement").innerHTML = "<p class='text-center'>" + statement + "</p>";
    let output = message + userName + banger
    document.getElementById("output").innerHTML = statement;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + output + "</p>";
}

// Ask-Name-From-User
document.getElementById("Ask-Name-From-User").onclick = () => {

    let firstName = prompt("Whats Your First Name ?")
    let lastName = prompt("Whats Your last Name ?")
    let fullName = firstName + " " + lastName

    console.log('FirstName =>', firstName);
    console.log('Lastname =>', lastName);
    console.log('Fullname =>', fullName);

    let statement = "let firstName = prompt('Whats Your First Name ?')" + "<br>let lastName = prompt('Whats Your last Name ?')" + "<br>let fullName = firstName + ' ' + lastName ";
    document.getElementById("statement").innerHTML = "<p class='text-center'>" + statement + "</p>"

    document.getElementById("output").innerHTML = "<p class='text-center'>" + fullName + "</p>"
}

// Comaprison-Operators
document.getElementById("Comparison-Operators").onclick = () => {


    let num1 = +prompt('Number 1')

    if (isNaN(num1)) {
        alert('This is not a number')
        return
    }
    let num2 = +prompt('Number 2')
    if (isNaN(num2)) {
        alert('This is not a number')
        return
    }

    let sum = num1 + num2
    console.log('sum', sum)
    document.getElementById('output').innerHTML = "<p class='text-center'>" + sum + "</p>"
}

// if-else-if
document.getElementById("if-else-if").onclick = () => {


    let num1 = 25
    let num2 = 20

    if (num1 >= num2) {
        alert('Your Condition is ture')
    } else {
        alert('your condition is not true')
    }

    let statement = 'let num1 = 25' + '<br>let num2 = 20' + '<br> if(num1 >= num2){ alert("Your Condition is ture")}' + '<br>else{alert("your condition is not true")}'
    document.getElementById("statement").innerHTML = "<p class='text-center'>" + statement + "</p>";



}
// Testing-Sets-of-Conditions
document.getElementById("Testing-Sets-of-Conditions").onclick = () => {

    let Age = prompt('What is your Age?')
    let Weight = prompt('What is your Weight?')

    if (Age >= 18 && Weight <= 70) {
        alert('you are a smart guy.')
    } else if (Age >= 18 && Weight >= 70) {
        alert('you are a fat guy.')
    } else {
        alert('you are a baby')
    }
}
// if-statemant-nested 
document.getElementById("if-statemant-nested").onclick = () => {

    let Age = prompt('What is your Age?')

    if (Age >= 18) {

        let Weight = prompt('What is your Weight?')
        if (Weight <= 70) {
            alert('you are a smart guy.')
        } else {
            alert('you are a fat guy.')
        }
    } else {
        alert('you are a baby.')
    }





}
// Login 
document.getElementById("Login").onclick = () => {

    let username = prompt('Enter your Username')
    let password = prompt('Enter your password')

    let orignalusername = 'admin'
    let orignalpassword = 'admin'

    if (username === orignalusername && password === orignalpassword) {
        alert('login Succesfully')
    } else {
        alert('invalid username or password')
    }
}
