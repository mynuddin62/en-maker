function generateTranslation() {
    const inputWords = document.getElementById("inputWords").value;
    if (!inputWords.trim()) {
        document.getElementById("englishOutput").value = "Please enter words.";
        return;
    }

    const words = inputWords.split("\n").map(word => word.trim()).filter(word => word !== "");
    let englishOutput = "";

    words.forEach(word => {
        const englishValue = word.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
        englishOutput += `'${word}': '${englishValue}',\n`;
    });

    const outputField = document.getElementById("englishOutput");
    outputField.value = englishOutput.trim();

    // Copy full output automatically
    navigator.clipboard.writeText(outputField.value).then(() => {
        showTooltip();
    });
}

function copyBeforeColon() {
    const text = document.getElementById("englishOutput").value;
    const beforeColon = text.split("\n").map(line => line.split(":")[0] + ":").join("\n");

    navigator.clipboard.writeText(beforeColon).then(() => {
        showTooltip();
    });
}

function copyAfterColon() {
    const text = document.getElementById("englishOutput").value;
    const afterColon = text.split("\n").map(line => line.split(":")[1].trim()).join("\n");

    navigator.clipboard.writeText(afterColon).then(() => {
        showTooltip();
    });
}

function showTooltip() {
    const tooltip = document.getElementById("tooltip");
    tooltip.classList.add("show");
    setTimeout(() => {
        tooltip.classList.remove("show");
    }, 2000);
}
