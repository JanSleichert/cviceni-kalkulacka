
const display = document.querySelector(".display")
const btn7 = document.querySelector("#btn-7")
const btn6 = document.querySelector("#btn-6")
const btn5 = document.querySelector("#btn-5")
const btn4 = document.querySelector("#btn-4")
const btn3 = document.querySelector("#btn-3")
const btn2 = document.querySelector("#btn-2")
const btn1 = document.querySelector("#btn-1")
const btn8 = document.querySelector("#btn-8")
const btn9 = document.querySelector("#btn-9")
const btn0 = document.querySelector("#btn-0")


const handleDigitClick = (e) => {
    display.textContent += e.target.textContent
    if (display.textContent.length > 9) {
        display.textContent = display.textContent.slice(0, 9)
    }
    if(display.textContent[0] === "0") {
        display.textContent = display.textContent.slice(1)
    }
}



btn7.addEventListener("click", handleDigitClick)
btn6.addEventListener("click", handleDigitClick)
btn5.addEventListener("click", handleDigitClick)
btn4.addEventListener("click", handleDigitClick)
btn3.addEventListener("click", handleDigitClick)
btn2.addEventListener("click", handleDigitClick)
btn1.addEventListener("click", handleDigitClick)
btn8.addEventListener("click", handleDigitClick)
btn9.addEventListener("click", handleDigitClick)
btn0.addEventListener("click", handleDigitClick)


