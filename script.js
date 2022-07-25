function openAlert() {
  let userData = [];
  userData.push(document.getElementById("nameInput").value);
  userData.push(document.getElementById("lastName").value);
  userData.push(document.getElementById("ageInput").value);
  userData.push(document.getElementById("jobInput").value);
  if (
    userData.name !== "" &&
    userData.lastName !== "" &&
    userData.age !== "" &&
    userData.job !== ""
  ) {
    alert(
      " Name : " +
        userData[0] +
        " , Last Name : " +
        userData[1] +
        " , age : " +
        userData[2] +
        " , job : " +
        userData[3]
    );
  } else {
    alert("filed is empty , try again");
  }
}
