function convertToHex() {
  const inputNumber = parseInt(document.getElementById("inputNumber").value);
  const resultElement = document.getElementById("result");

  if (isNaN(inputNumber)) {
    resultElement.textContent = "Invalid input. Please enter a valid integer.";
    return;
  }

  let num = inputNumber;
  if (num === 0) {
    resultElement.textContent = "0";
    return;
  }

  const hexDigits = "0123456789abcdef";
  let result = "";

  while (num !== 0) {
    // Extract the last 4 bits (a nibble) of the number
    const nibble = num & 0xf;
    // Convert the nibble to its hexadecimal representation
    result = hexDigits[nibble] + result;
    // Shift the number to the right by 4 bits
    num >>>= 4;
  }

  resultElement.textContent = result;
}
