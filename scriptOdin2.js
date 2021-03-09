function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello baby");


const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  alert("Hello There!");
});
/*
//OPCIÓN UNO
btn2.addEventListener('click', alertFunction);
//OPCIÓN DOS
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
*/