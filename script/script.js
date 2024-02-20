const seats = document.getElementsByClassName("seat-plane");
for (const seat of seats) {
    const busSeat = seat.parentNode.childNodes[2].innerText;
    console.log(busSeat);
}