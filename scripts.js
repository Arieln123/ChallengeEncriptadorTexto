function encrypt() {
    let text = document.getElementById("textInput").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    displayMessage(encryptedText);
}

function decrypt() {
    let text = document.getElementById("textInput").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    displayMessage(decryptedText);
}

function displayMessage(message) {
    document.getElementById("outputMessage").innerHTML = `<p>${message}</p>`;
    document.getElementById("copyButton").style.display = "block";
}

function copyToClipboard() {
    let message = document.getElementById("outputMessage").innerText;
    navigator.clipboard.writeText(message).then(() => {
        alert("Texto copiado al portapapeles");
    }, (err) => {
        console.error('Error al copiar el texto: ', err);
    });
}
