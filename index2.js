const playersTEAM = [
    { name: 'Brandon Miller', team: 'Alabama', ppg: 19.2, mpg: 30, gp: 25, rtr: 2},
    { name: 'Drew Timme', team: 'Gonzaga', ppg: 19.7, mpg: 29, gp: 28, rtr: 3},
    { name: 'Zach Edey', team: 'Purdue', ppg: 19.5, mpg: 40, gp: 15, rtr: 1},
    { name: 'Marcus Sasser', team: 'Houston', ppg: 19.3, mpg: 19, gp: 19, rtr: 5},
    { name: 'Jaime Jaquez', team: 'UCLA', ppg: 19.1, mpg: 22, gp: 24, rtr: 4},
    { name: 'Marcus Sears', team: 'Alabama', ppg: 19.3, mpg: 29, gp: 27, rtr: 2},
    { name: 'Jamal Shead', team: 'Houston', ppg: 23, mpg: 24, gp: 31, rtr: 5},
];

const teamTable = document.querySelector('table');

const teamSort = document.getElementById("idTEAM");
teamSort.addEventListener('click', orderTeam);

var TEAMlist = playersTEAM.sort(function (x, y) {
    let a = x.team.toUpperCase(),
        b = y.team.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
 }); 

 function orderTeam(TEAMlist) {
    playersTEAM.forEach(element => {
        let player = document.createElement('tr');
        let playerName = document.createElement('td');
        let playerTeam = document.createElement('td');
        let playerPPG = document.createElement('td');
        let playerMPG = document.createElement('td');
        let playerGP = document.createElement('td');
        let playerRTR = document.createElement('td');

        playerName.innerText = element.name;
        playerTeam.innerText = element.team;
        playerPPG.innerText = element.ppg;
        playerMPG.innerText = element.mpg;
        playerGP.innerText = element.gp;
        playerRTR.innerText = element.rtr;
        

        teamTable.appendChild(player);
        player.appendChild(playerName);
        player.appendChild(playerTeam);
        player.appendChild(playerPPG);
        player.appendChild(playerMPG);
        player.appendChild(playerGP);
        player.appendChild(playerRTR);
    });
}