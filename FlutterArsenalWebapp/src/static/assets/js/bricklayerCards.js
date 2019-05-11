
// var card1 = document.getElementById("card1");
// var card2 = document.getElementById("card2");
// var card3 = document.getElementById("card3");
// var card4 = document.getElementById("card4");
// var card5 = document.getElementById("card5");
// var card6 = document.getElementById("card6");

var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

bricklayer.on("breakpoint", function (e) {
    console.log(e.detail.columnCount);
})

bricklayer.on("afterAppend", function (e) {
    var el = e.detail.item;
    el.classList.add('is-append');
    setTimeout(function () {
      el.classList.remove('is-append');
    }, 500);
});

