'use strict';

const player = document.getElementById('player');
const decideButton = document.getElementById('decideButton');
const resultOpe = document.getElementById('resultOpe');

decideButton.onclick　= () =>{
    removeChildren(resultOpe);
    const playerName = player.value;
    const paragraph = document.createElement('p');
    const result = desideOpe(playerName);
    paragraph.innerText = result;
    resultOpe.appendChild(paragraph);
};

var desideOpe = (playerName) => {
    if(playerName === null || playerName === ""){
        return "";
    }
    let sumOfCharCode = 0;
    for (let i = 0; i < playerName.length; i++) {
        sumOfCharCode += playerName.charCodeAt(i);
    }
    const time = new Date();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const opeNum = (sumOfCharCode + minutes) % operatorArray.length;
    const roleNum = (sumOfCharCode + seconds) % roleArray.length;

    const operator = operatorArray[opeNum];
    const role = roleArray[roleNum];

    const sentence = playerName + 'は' + operator + 'で' + role + 'をしましょう';

    return sentence;
};

var removeChildren = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

player.onkeydown = (event) => {
    if(event.key === 'Enter'){
        decideButton.onclick();
    }
}

const operatorArray = [
    'SMOKE',
    'MUTE',
    'CASTLE',
    'PULSE',
    'DOC',
    'ROOK',
    'KAPKAN',
    'TACHANKA',
    'JAGER',
    'BANDIT',
    'FROST',
    'VALKYRIE',
    'CAVEIRA',
    'ECHO',
    'MIRA',
    'LESION',
    'ELA',
    'VIGIL',
    'MAESTRO',
    'ALIBI',
    'CLASH',
    'KAID',
    'MOZZIE',
    'WARDEN',
    'GOYO',
    'WAMAI',
    'ORYX'
];
const roleArray = [
    '敵を倒す遊撃',
    '時間を使わせる遊撃',
    'ハイドする遊撃',
    '局所守り',
    'リテイク重視の現地籠り',
    '積極的に勝負する現地籠り',
    'ひたすら耐える現地籠り'
]
