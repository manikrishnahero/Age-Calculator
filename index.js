let birthday = document.getElementById("birthday");
let getAge = document.getElementById("btn");
let result = document.getElementById("result");

getAge.addEventListener("click", ageCalculate);

function ageCalculate() {
  const birthDate = birthday.value;

  if (!birthDate) {
    alert("Enter your birthdate");
  }

  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    age--;
  }


result.innerText = `Your are ${age} year's old`
}
