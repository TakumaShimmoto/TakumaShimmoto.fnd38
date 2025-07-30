"use strict";//厳格モード

document.addEventListener("DOMContentLoaded", () => {
    let players = [];
    let playersIndex = 0;
    const finishSetting = 30;  //30マス
    document.getElementById("startButton").addEventListener("click", startGame);
    document.getElementById("diceShuffle").addEventListener("click", rollDice);

function startGame(){
    const numplayers = document.getElementById("numberInput").value;
    players = [];
    playersIndex = 0;
    const playersDiv = document.getElementById("players");
    playersDiv.innerHTML = "";
    for (let i = 0; i < numplayers; i++){
        const name = prompt(`プレイヤー ${i + 1} の名前を入力してください:`);
        players.push({name: name, position: 1});
        playersDiv.innerHTML += `<p> ${name}: マス 1</p>`
    }
    document.getElementById("diceShuffle").style.display = "block";
    document.getElementById("message").innerText = "";
}

function rollDice(){
    const currentPlayer = players[playersIndex];
    const dice = Math.floor(Math.random() * 6) + 1;
    currentPlayer.position += dice;
    document.getElementById('message').innerText = `${currentPlayer.name}は ${dice} 出たので、マス${currentPlayer.position} に進みました。`;
    if (currentPlayer.position >= finishSetting){
        document.getElementById('message').innerText = `${currentPlayer.name} が勝ちました！`;
        document.getElementById('diceShuffle').style.display = 'none'; // ゲーム終了
    }else{
        playersIndex = (playersIndex + 1) % players.length;
         updatePlayerPositions();
    }
}

 function updatePlayerPositions() {
        const playersDiv = document.getElementById('players');
        playersDiv.innerHTML = '';
        players.forEach(player => {
            playersDiv.innerHTML += `<p>${player.name}: マス ${player.position}</p>`;
        });
    }
});
