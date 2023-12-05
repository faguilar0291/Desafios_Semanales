const displayInitialValue = document.querySelector(".display--initial-value");
const displayFinalValue = document.querySelector(".display--final-value");
const numberKeys = document.querySelectorAll(".key--number");
const operatorKeys = document.querySelectorAll(".operator");


class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
    
    substract(num1, num2) {
        return num1 - num2;
    }
    
    multiply(num1, num2) {
        return num1 * num2;
    }
    
    divide(num1, num2) {
        return num1 / num2;
    }
}

const calculator = new Calculator();


class Display {
    constructor(displayInitialValue, displayFinalValue) {
        this.displayFinalValue = displayFinalValue;
        this.displayInitialValue = displayInitialValue;
        this.calculator = new Calculator();
        this.operator = undefined;
        this.finalValue = "";
        this.initialValue = "";
        this.signs = {
            add: "+",
            divide: "/",
            multiply: "x",
            substract: "-",
        }
    }

    allClear() {
        this.finalValue = "";
        this.initialValue = "";
        this.operator = undefined;
        this.showNumbers();
    }

    compute(type) {
        this.operator !== "equal" && this.calculate();
        this.operator = type;
        this.initialValue = this.finalValue || this.initialValue;
        this.finalValue = "";
        this.showNumbers();
    }

    putNumber(num) {
        this.finalValue = this.finalValue.toString() + num.toString();
        this.showNumbers();
    }

    showNumbers() {
        this.displayFinalValue.textContent = this.finalValue;
        this.displayInitialValue.textContent = `${this.initialValue} ${this.signs[this.operator] || ''}`;
    }


    calculate() {
        const initialValue = parseFloat(this.initialValue);
        const finalValue = parseFloat(this.finalValue);

        if(isNaN(finalValue) || isNaN(initialValue)) return
        this.finalValue = this.calculator[this.operator](initialValue, finalValue);
    }
}

const display = new Display(displayInitialValue, displayFinalValue);

numberKeys.forEach(button => {
    button.addEventListener('click', () => {
        display.putNumber(button.innerHTML);
    })
})

operatorKeys.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
})