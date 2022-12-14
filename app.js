let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let reset = document.querySelector("#reset");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result1 = Number(output.innerText) + 1;

  output.innerText = result1;
});

subtract.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result1 = Number(output.innerText) - 1;
  
    output.innerText = result1;
  });

  reset.addEventListener("click", function () {
    document.querySelector("#output").innerText = 0;
    

  });
