let display = document.getElementById("display");

// Button click input
function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// 🔥 KEYBOARD SUPPORT
document.addEventListener("keydown", function(event) {
    let key = event.key;

    // Numbers
    if (!isNaN(key)) {
        display.value += key;
    }

    // Operators
    if (key === "+" || key === "-" || key === "*" || key === "/") {
        display.value += key;
    }

    // Decimal
    if (key === ".") {
        display.value += ".";
    }

    // Enter = Calculate
    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = Delete
    if (key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    if (key === "Escape") {
        clearDisplay();
    }
});