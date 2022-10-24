for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
    let number = document.createElement("div");
    let result = document.createTextNode(i);
    
    number.appendChild(result);
    var element = document.getElementById("container");
    element.appendChild(number);
    }


 