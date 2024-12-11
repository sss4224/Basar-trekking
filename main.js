let input = document.querySelector('input');
let numberScreen = document.querySelector('p');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

let usedNum = [];
let randomNum;

btn.onclick = () => {
    if(usedNum.length !== Number(input.value)){
        do{
            randomNum = Math.floor(Math.random() * input.value) + 1;
        }while(usedNum.includes(randomNum));
        numberScreen.textContent = randomNum;
        usedNum.push(randomNum);
        let newLi = document.createElement('li');
        newLi.textContent = randomNum;
        ul.appendChild(newLi);
    }
    else if(usedNum.length === Number(input.value) && Number(input.value) >= 1){
        console.log('Det er ingen flere tomme tall i arrayen');
    }
    else{
        input.style.border = '2px solid red';
        alert('Du må sette inn høyeste tall på årene får å fortsette');
    }
}

input.addEventListener('input', () => {
    input.style.border = '1px solid black';
    usedNum = [];
    numberScreen.textContent = 'Åre nummer';
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
})