let totalPrice = 0;
const cards = document.querySelectorAll(".kbd");
// console.log(cards);

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];


    // console.log(card);
    card.addEventListener("click", function (event) {
        event.target.disabled = true;
        event.target.style.background = 'green';


        // console.log('just-clicks');
        const key = event.target.innerText;


        // console.log(key);

        const price = 550;

        // console.log(price);
        const seatContainer = document.getElementById('seat-container');

        //create a div thats contain seat information
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between')
        const busSeat = document.getElementById('bus-seat')
        const h4 = document.createElement("h4");
        h4.innerText = key;
        div.appendChild(h4);

        const seatClass = document.getElementById('class');
        const h6 = document.createElement("p");
        h6.innerText = 'Economy';
        div.appendChild(h6);

        const seatPrices = document.getElementById('seat-price')
        const priceSeat = document.createElement("p");
        priceSeat.innerText = price;
        div.appendChild(priceSeat);
        // console.log(seatContainer);
        seatContainer.appendChild(div);
        ;

        //total price
        totalPrice += price;

        document.getElementById("total-price").innerText = totalPrice;
        document.getElementById("grand-total").innerText = totalPrice;
        const seatIncrease = document.getElementById('seat-increase');
        const increaseSeat = parseFloat(seatIncrease.innerText)
        document.getElementById('seat-increase').innerText = increaseSeat + 1;

        const seatDecrease = document.getElementById('total-seats');
        const decreaseSeat = parseFloat(seatDecrease.innerText)
        document.getElementById('total-seats').innerText = decreaseSeat - 1;

        // console.log(totalPrice);
    });
}



const btn = document.getElementById('btn');
btn.addEventListener("click", function () {
    // console.log('click');

    //get the value from input
    const inputField = document.getElementById('input-field').value;
    // console.log(inputField);
    const code = inputField.split(" ").join("").toUpperCase();
    if (code === 15 % OFF) {
        return true;

    }
    else {
        return false;
    }
})




