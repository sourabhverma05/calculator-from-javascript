function mode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}
let opArr = ["+", "-", "*", "/", "%", "."]
let result = document.getElementById("inputText");


function dsply(num) {
    result.value += num
}
function oprator(oprtr) {
    debugger
    if (result.value != "") {
        let inputValueArr = result.value.split("")
        for (i = 0; i < inputValueArr.length; i++) {
            for (let j = inputValueArr.length - 1; j >= 0; j--) {
                if (!opArr.includes(inputValueArr[j])) {
                    result.value += oprtr
                }
                result.value + 1
                break
            }
            break
        }

    }

}

function decimal(decml) {
    let inputValueArr = result.value.split("")
    if (result.value == '') {
        result.value = "0."
    }
    else if (!inputValueArr.includes(".")) {
        result.value += decml
    }

}
function calculate() {
    if (result.value == "") {
        result.value = null
    }
    else {
        result.value = eval(result.value)
    }
}
function allClear() {
    result.value = ""
}
function dlt() {
    result.value = result.value.slice(0, -1)
}
