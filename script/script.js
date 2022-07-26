let usaCitys = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Dallas",
];
let iranCitys = ["mashhad", "tehran", "shiraz", "kerman", "tabriz", "karaj"];
dataUser = [];
function mycheck() {
  
  let userCitys = document.getElementById("userCitys").value;
  dataUser.push(userCitys)
  resualt2.innerHTML = iranCitys.filter(function (citys) {
    return citys == userCitys;
  });
  console.log(dataUser)
}

let resualt2 = document.getElementById("resualt2");
let resualt1 = document.getElementById("resualt1");

resualt1.innerHTML = iranCitys;
function actionData() {
  for (let i = 0; i <= usaCitys && i <= iranCitys; i++) {}
}
