
for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    const number = document.createElement("div");
    number.classList.add("number");
    number.innerHTML = i;
    const container =document.getElementsByClassName("container")
    container.append("number");
}

 