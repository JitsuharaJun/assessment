'use strict';

const player = document.getElementById('player');
const decideButton = document.getElementById('decideButton');
const resultOpe = document.getElementById('resultOpe');

decideButton.onclick = () => {
    removeChildren(resultOpe)
    const playerName = player.value;
    const paragraph = document.createElement('p');
    const result = desideOpe(playerName);    
    paragraph.innerText = result;
    resultOpe.appendChild(paragraph); 
};

player.onkeydown = (event) => {
    if(event.key === 'Enter'){
    decideButton.onclick();
    }
}

function desideOpe(playerName)  {
    let sumOfCharCode = 0;
    for(var i = 0; i < playerName.length; i++){
        sumOfCharCode += playerName.charCodeAt(i);
    }
    const time = new Date();
    const second = time.getSeconds();
    const minute = time.getMinutes();
    const opeNum = (sumOfCharCode + second) % operatorArray.length;
    const roleNum = (sumOfCharCode + minute) % roleArray.length;
    
    const operator = operatorArray[opeNum];
    const role = roleArray[roleNum];

    const sentence = playerName + 'は' + operator + 'で' + role + 'をしましょう';
    
    return sentence;
    
};

function removeChildren(element) {
    while(element.firstChild){
        resultOpe.removeChild(element.firstChild);
    }
}



const operatorArray = [
    'SLEDGE',
    'THATCHER',
    'ASH',
    'THERMITE',
    'TWITCH',
    'MONTAGNE',
    'GLAZ',
    'FUZE',
    'BLITZ',
    'IQ',
    'BUCK',
    'BLACKBEARD',
    'CAPITAO',
    'HIBANA',
    'JACKAL',
    'YING',
    'ZOFIA',
    'DOKKAEBI',
    'LION',
    'FINKA',
    'MAVERICK',
    'NOMAD',
    'GRIDLOCK',
    'NOKK',
    'AMARU',
    'KALI',
    'IANA'
]

const roleArray = [
    '素早く現地に詰めるアタッカー',
    '主導隊のアタッカー',
    '遊撃を刈り取る中間職',
    '現地に圧をかけるサブアタッカー',
    'ドローン回しのサポーター',
    'ロック重視のサポーター',
    '裏から詰める１の動き'
]
