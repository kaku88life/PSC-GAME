const choices = ['剪刀', '石頭', '布'];
const emojis = {
    '剪刀': '✌️',
    '石頭': '✊',
    '布': '🖐️'
};

let score = { wins: 0, losses: 0, ties: 0 };

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(player, computer) {
    if (player === computer) return 'tie';

    const winningCombos = {
        '剪刀': '布',
        '石頭': '剪刀',
        '布': '石頭'
    };

    return winningCombos[player] === computer ? 'win' : 'lose';
}

function play(playerChoice) {
    const playerDisplay = document.getElementById('player-choice');
    const computerDisplay = document.getElementById('computer-choice');
    const resultText = document.getElementById('result');

    // 動畫效果
    playerDisplay.textContent = '❓';
    computerDisplay.textContent = '❓';
    playerDisplay.classList.add('shaking');
    computerDisplay.classList.add('shaking');

    setTimeout(() => {
        playerDisplay.classList.remove('shaking');
        computerDisplay.classList.remove('shaking');

        const computerChoice = getComputerChoice();

        playerDisplay.textContent = emojis[playerChoice];
        computerDisplay.textContent = emojis[computerChoice];
        playerDisplay.classList.add('pop');
        computerDisplay.classList.add('pop');

        setTimeout(() => {
            playerDisplay.classList.remove('pop');
            computerDisplay.classList.remove('pop');
        }, 300);

        const result = determineWinner(playerChoice, computerChoice);

        resultText.className = 'result-text ' + result;

        if (result === 'win') {
            resultText.textContent = '你贏了！ 🎉';
            score.wins++;
        } else if (result === 'lose') {
            resultText.textContent = '你輸了！ 😢';
            score.losses++;
        } else {
            resultText.textContent = '平手！ 🤝';
            score.ties++;
        }

        updateScore();
    }, 900);
}

function updateScore() {
    document.getElementById('wins').textContent = score.wins;
    document.getElementById('losses').textContent = score.losses;
    document.getElementById('ties').textContent = score.ties;
}

function resetGame() {
    score = { wins: 0, losses: 0, ties: 0 };
    updateScore();
    document.getElementById('player-choice').textContent = '❓';
    document.getElementById('computer-choice').textContent = '❓';
    document.getElementById('result').textContent = '選擇你要出的拳！';
    document.getElementById('result').className = 'result-text';
}
