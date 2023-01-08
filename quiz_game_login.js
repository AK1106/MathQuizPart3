function addUser() {
    document.getElementById("player_1", player_1).value;
    document.getElementById("player_2", player_2).value;
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
    window.location = "quiz_game_page.html";
}

