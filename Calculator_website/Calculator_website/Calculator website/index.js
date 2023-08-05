let buttons = document.querySelectorAll('.button')
let screen = document.querySelector('.screen')

let temp = 0
let currentOperation

let clearScreen = () => {
    screen.textContent = ''
}

buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        let button = event.target
        let buttonText = button.textContent

        let buttonType;

        // button type
        if(button.classList.contains('number')){
            buttonType = 'number'
        }
        else if(button.classList.contains('operation')){
            buttonType = 'operation'
        }
        else if(button.classList.contains('clear')){
            buttonType = 'clear'
        }

        switch(buttonType){
            case 'number':
                handleNumber(buttonText)
                break;
            case 'operation':
                handleOperation(buttonText, screen.textContent)
                break;
            case 'clear':
                screen.textContent = ''
                break;
        }
    })
})
            
let handleNumber = (number) => {
    if(screen.textContent == 'Type something...'){
        clearScreen()
    }

    screen.textContent += number
}

let handleOperation = (operation, currentNumber) => {

    if(operation == '='){
        if(currentOperation == undefined){
            return
        }

        clearScreen()

        let answer

        switch(currentOperation){
            case '+':
                answer = Number(temp) + Number(currentNumber)
                break;
            case '-':
                answer = Number(temp) - Number(currentNumber)
                break;
            case '*':
                answer = Number(temp) * Number(currentNumber)
                break;
            case '/':
                answer = Number(temp) / Number(currentNumber)
                break;
        }
        screen.textContent = answer
    }
    else{
        temp = currentNumber
        currentOperation = operation
        clearScreen()
    }
}

