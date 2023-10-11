let input1 = document.querySelector("#input1");
let percentage = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let button = document.getElementById("button");

let = document.getElementById("answer");
let tipAmountShow = document.getElementById("tipAmountShow");
tipAmountShow.style.display = "none";
button.addEventListener("click", () => {
    let currency = document.getElementById("select1");
    let ans = calculateTip(input1.value, input3.value, percentage.value);
    console.log(ans);
    if (isNaN(ans)) {
        answer.innerHTML = "Please fill required field!!!";
    } else {
        answer.innerText = currency.value + " " + ans + "  Per person";
    }
    tipAmountShow.style.display = "contents";
});

function calculateTip(amount, noOfPeople, percentage) {
    let totalTip = (amount * percentage) / 100;
    return Math.round(totalTip / noOfPeople);
}