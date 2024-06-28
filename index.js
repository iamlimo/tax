let result = document.getElementById("result");

function calculatePaye() {
  let firstGrossIncome = document.getElementById("g1").value;
  let secondGrossIncome = document.getElementById("g2").value;
  let percentG1 = document.getElementById("p1").value;
  let percentG2 = document.getElementById("p1").value;
  function calculateG1() {
    let p = (percentG1 / 100) * firstGrossIncome;
    return p;
  }
  function calculateG2() {
    let p = (percentG2 / 100) * secondGrossIncome;
    return p;
  }
  let pe = calculateG1() + calculateG2() + 200000;
  let calculatedResuslt = firstGrossIncome - pe;
  result.innerText = "NGN " + calculatedResuslt;
}

let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculatePaye();
  alert("yes");
});

