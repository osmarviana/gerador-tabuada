let inputNumber = document.getElementById("value");
const gerarTabuada = document.getElementById("gerar");
const response = document.getElementById("tabuada");

gerarTabuada.addEventListener("click", () => {
  if (inputNumber.value.length == "") {
    alert("Preencha com um número!");
  } else {
    let inputValue = Number(inputNumber.value);
    response.innerHTML = "";
    for (let counter = 1; counter <= 10; counter++) {
      let result = inputValue * counter;
      response.innerHTML += `<option value='${inputValue}'>${inputValue} x ${counter} = ${result}</option>`;
    }
  }
});
