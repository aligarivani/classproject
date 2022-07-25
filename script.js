function openAlert() {
  let userData = {};
  userData.name = document.getElementById("nameInput").value;
  userData.lastName = document.getElementById("lastName").value;
  userData.age = document.getElementById("ageInput").value;
  userData.job = document.getElementById("jobInput").value;
  if (
    userData.name !== "" &&
    userData.lastName !== "" &&
    userData.age !== "" &&
    userData.job !== ""
  ) {
    alert(
      " Name : " +
        userData.name +
        " , Last Name : " +
        userData.lastName +
        " , age : " +
        userData.age +
        " , job : " +
        userData.job
    );
  } else {
    alert("filed is empty , try again");
  }
}
