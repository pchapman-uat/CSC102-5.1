function loadnav(location){
    document.getElementById("nav").innerHTML=`
    <!--Button for game page-->
    <button onclick="window.location.href='${location}boards/boards_ACS.html'">
        ACS Board
    </button>
    <!--Button for game page-->
    <button onclick="window.location.href='${location}boards/boards_GP.html'">
        GP Board
    </button>
    <!--Button for game page-->
    <button onclick="window.location.href='${location}game/game_info.html'">
        Play my Game!
    </button>
    `
}