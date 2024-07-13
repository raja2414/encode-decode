function encodeString() {
  const input = document.getElementById("inputString").value;
  const salt = document.getElementById("saltValue").value;
  if (input && salt) {
    const saltedInput = salt + input;
    const encoded = btoa(saltedInput);
    document.getElementById("outputText").innerText = "Encoded: " + encoded;
    document.getElementById("output").style.display = "block";
  } else {
    document.getElementById("output").style.display = "none";
    alert("Both input and salt cannot be empty");
  }
}

function decodeString() {
  const input = document.getElementById("inputString").value;
  const salt = document.getElementById("saltValue").value;
  try {
    if (input && salt) {
      const decoded = atob(input);
      if (decoded.startsWith(salt)) {
        const originalString = decoded.slice(salt.length);
        document.getElementById("outputText").innerText =
          "Decoded: " + originalString;
        document.getElementById("output").style.display = "block";
      } else {
        document.getElementById("output").style.display = "none";
        alert("Incorrect salt or input for decoding");
      }
    } else {
      document.getElementById("output").style.display = "none";
      alert("Both input and salt cannot be empty");
    }
  } catch (error) {
    document.getElementById("output").style.display = "none";
    alert("Invalid input for decoding");
  }
}

function copyToClipboard() {
  const outputText = document.getElementById("outputText").innerText;
  const textToCopy = outputText
    .replace("Encoded: ", "")
    .replace("Decoded: ", "");
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      const copyIcon = document.getElementById("copyIcon");
      const tickIcon = document.getElementById("tickIcon");
      copyIcon.style.display = "none";
      tickIcon.style.display = "block";
      setTimeout(() => {
        copyIcon.style.display = "block";
        tickIcon.style.display = "none";
      }, 1000);
    })
    .catch((err) => {
      console.log("Failed to copy: ", err);
    });
}
