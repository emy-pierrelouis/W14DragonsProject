let subscribe = document.querySelector("button");
subscribe.addEventListener("click", subscribeHere);

function subscribeHere()
{
    let name = prompt("What's your name?")
    let email = prompt("What's your email?");

    let thanks = document.getElementById('subscribe');
    thanks.innerHTML = "Thank you for joining, " + name + "!";
}