// window.addEventListener("scroll", function (ev) {
//     const target = document.querySelectorAll(".scroll");

//     var index = 0,
//         length = target.length;
//     for (index; index < length; index++) {
//         var pos = window.pageYOffset * target[index].dataset.rate;

//         target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
//     }
// });

window.addEventListener("scroll", function (e) {
    const target = document.querySelectorAll(".scroll");

    var index = 0,
        length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        if (target[index].dataset.direction === "vertical") {
            target[index].style.transform =
                "translate3d(0px," + pos + "px, 0px)";
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;

            target[index].style.transform =
                "translate3d(" + posX + "px, " + posY + "px, 0px)";
        }
    }
});

// target.style.transform = "translate3d(0px, 50px, 0px)";
// to determine the scroll position
// console.log(window.pageYOffset);

// let scrolled = window.pageYOffset;
// let rate = scrolled * 0.7;
// target.style.transform = `translate3d(0px, ${rate}px, 0px)`;

// THE HTML
{
    /* <section class="section hero3">
<ul class="hero3__ul">
    <li
        class="scroll hero3__li"
        data-rate="-2"
        data-direction="vertical"
    >
        par
    </li>
    <li class="scroll hero3__li">al</li>
    <li
        class="scroll hero3__li"
        data-rate="2"
        data-direction="vertical"
    >
        lax
    </li>
</ul>
<span
    class="scroll hero3__span"
    data-rateY="2"
    data-rateX="1"
    data-direction="hotizontal"
></span>
</section> */
}
