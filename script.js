function openAlert() {
  let name = document.getElementById("nameInput").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("ageInput").value;
  let job = document.getElementById("jobInput").value;
  if (name !== "" && lastName !== "" && age !== "" && job !== "") {
    alert(
      " Name : " +
        name +
        " , Last Name : " +
        lastName +
        " , age : " +
        age +
        " , job : " +
        job
    );
  } else {
    alert("filed is empty , try again");
  }
}
