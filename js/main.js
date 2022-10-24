for (let i = 1; i <= 100; i++) {
    let valueToShow = i;
    if (i % 15 == 0) valueToShow = "FizzBuzz";
    else if (i % 3 == 0) valueToShow = "Fizz";
    else if (i % 5 == 0) valueToShow = "Buzz";
    else valueToShow = i;
    let number = document.createElement("div");
    let result = document.createTextNode(valueToShow);
    number.appendChild(result);
    var element = document.getElementById("container");
    element.appendChild(number);
    number.classList.add("result_stamp")
    }


 