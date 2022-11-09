let x = `<svg width="62" height="62" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z" fill="#31C3BD"/>
</svg>`,
fadedX = `<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z" fill="#A8A8A8"/>
</svg>`,
 o = `<svg width="62" height="62" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9704 15.8706C31.9704 7.10551 24.8649 0 16.0998 0C7.33476 0 0.229248 7.10551 0.229248 15.8706C0.229248 24.6357 7.33476 31.7412 16.0998 31.7412C24.8649 31.7412 31.9704 24.6357 31.9704 15.8706ZM9.63405 15.8706C9.63405 12.2996 12.5289 9.4048 16.0998 9.4048C19.6708 9.4048 22.5656 12.2996 22.5656 15.8706C22.5656 19.4416 19.6708 22.3364 16.0998 22.3364C12.5289 22.3364 9.63405 19.4416 9.63405 15.8706Z" fill="#F2B137"/>
</svg>`,
fadedO = `<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9704 15.8706C31.9704 7.10551 24.8649 0 16.0998 0C7.33476 0 0.229248 7.10551 0.229248 15.8706C0.229248 24.6357 7.33476 31.7412 16.0998 31.7412C24.8649 31.7412 31.9704 24.6357 31.9704 15.8706ZM9.63405 15.8706C9.63405 12.2996 12.5289 9.4048 16.0998 9.4048C19.6708 9.4048 22.5656 12.2996 22.5656 15.8706C22.5656 19.4416 19.6708 22.3364 16.0998 22.3364C12.5289 22.3364 9.63405 19.4416 9.63405 15.8706Z" fill="#A8A8A8"/>
</svg>`,
turnInd = document.querySelector('.turn'),
blocks = document.querySelectorAll('.block'),
resetBtn = document.querySelector('.reset'),
tieModal = document.querySelector('.tie-modal'),
wonModal = document.querySelector('.won-modal'),
winnerName = document.querySelector('.winner-name'),
winner = document.querySelector('.winner'),
allScores = document.querySelectorAll('.score-ind'),
resetGameModal = document.querySelectorAll('.next-round'),
turn = x,
possibleWins = ['123', '456', '789', '147', '258', '369', '159', '357'],
games = ['', ''],
won = [false, 0],
tie = false,
scores = [0, 0, 0],
player1 = null,
player2 = null

turnInd.innerHTML = fadedX
function resetGame(){
    games = ['', '']
    clicks = 0
    won = [false, 0]
    turn === x
    turnInd.innerHTML = fadedX
    turnInd.innerHTML = fadedX
    blocks.forEach(block => {
        block.innerHTML = ''
    })
    wonModal.style.display = 'none'
    tieModal.style.display = 'none'
}
    clicks = 0

blocks.forEach((block, blockIndex) => {
    block.addEventListener('click', (e) => {
        if(block.childElementCount === 0){
            clicks++
        if(clicks % 2 !== 0) {
            turn = x
            block.innerHTML = turn
            turnInd.innerHTML = fadedX
            games[0] += blockIndex + 1
            turn = 0
            turnInd.innerHTML = fadedO
            console.log(games[0].split('').sort((a, b) => (Number(a) - Number(b))).join(''))
            console.log(games[1].split('').sort((a, b) => (Number(a) - Number(b))).join(''))
        }
        else if(clicks % 2 === 0){
            turn = o
            block.innerHTML = turn
            turnInd.innerHTML = fadedO
            games[1] += blockIndex + 1
            turn = x
            turnInd.innerHTML = fadedX
            console.log(games[0].split('').sort((a, b) => (Number(a) - Number(b))).join(''))
            console.log(games[1].split('').sort((a, b) => (Number(a) - Number(b))).join(''))
        }
        checkIfWon()
        if(clicks === 9 && !won[0]) {
            turn = !turn
            tie = true
            tieModal.style.display = 'flex'
            ++scores[1]
            allScores[1].textContent = scores[1]
            clicks = 0
        }
        }
    })
});

resetBtn.addEventListener('click', () => {
    resetGame()
})
resetGameModal.forEach(item => {
    item.addEventListener('click', () => {
        resetGame()
    })
})
function checkIfWon() {
    possibleWins.forEach(item => {
        let gameX = games[0].split('').sort((a, b) => (Number(a) - Number(b))).join('')
        let gameO = games[1].split('').sort((a, b) => (Number(a) - Number(b))).join('')
        if(gameX.includes(item[0]) && gameX.includes(item[1]) && gameX.includes(item[2])) {
            won = [true, x]
            ++scores[0]
            allScores[0].textContent = scores[0]
            wonModal.style.display = 'flex'
            winnerName.textContent = 'Player 1 wins!'
            winner.innerHTML = 
            `<div>${won[1]}</div>
            <p class="x">Takes the round</p>
            `
        }
        else if(gameO.includes(item[0]) && gameO.includes(item[1]) && gameO.includes(item[2])){
            won = [true, o]
            ++scores[2]
            allScores[2].textContent = scores[2]
            wonModal.style.display = 'flex'
            winnerName.textContent = 'Player 2 wins!'
            winner.innerHTML = `<div>${won[1]}</div>
            <p class="o">Takes the round</p>
            `
        }
    })
    }
    document.addEventListener('scroll', () => {
        if(won[0] || tie){
            wonModal.style.display = 'none'
            tieModal.style.display = 'none'
        }
    })