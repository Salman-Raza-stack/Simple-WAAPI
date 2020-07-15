var elem = document.querySelector("#cloud-div");
var animatedElem = elem.animate(
  [
    { transform: "translate(1400px,0px)" },
    { transform: "translate(-1400px,0px)" },
  ],
  {
    duration: 5000,
    iterations: Infinity,
  }
);

var elem = document.querySelector("#plane");
var animatedElem = elem.animate(
  [
    { transform: "translate(0px,0px)" },
    { transform: "translate(300px,-200px)" },
    { transform: "translate(1000px,300px)" },
    { tansform: "translate(1400px,300px)" },
    { transform: "translate(1600px,300px)" },
    { transform: "translate(1000px,300px)" },
    { transform: "translate(100%,200px)" },
  ],
  {
    duration: 10000,
    iterations: Infinity,
  }
);

var elem = document.querySelector("#bird");
var animatedElem = elem.animate(
  [{ transform: "translate(0px,0px)" }, { transform: "translate(600px,0px)" }],
  {
    duration: 3000,
    iterations: Infinity,
  }
);
