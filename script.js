document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("calculateButton")
    .addEventListener("click", calculateSum);
});

function calculateSum() {
  // Get values from input fields
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);

  // Check if the input is a valid number
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers");
    return;
  }

  // Calculate the sum
  var sum = num1 + num2;

  // Display the result in the popup
  document.getElementById("result").textContent = "Sum: " + sum;
}
