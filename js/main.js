/* DEFINE ALL VARIABLES */
var game_name = document.getElementById("game_name"); 
var footer_text = document.getElementById("footer_text"); 

var game_info = document.getElementById("game_info"); 
var game_info_open_button = document.getElementById("game_info_open_button"); 
var game_info_close_button = document.getElementById("game_info_close_button"); 

var play_again_button = document.getElementById("play_again_button"); 
var score_table = document.getElementById("score_table"); 

var playground = document.getElementById("playground");

var red_player_score = document.getElementById("red_player_score"); 
var blue_player_score = document.getElementById("blue_player_score"); 
var red_player_info = document.getElementById("red_player_info"); 
var blue_player_info = document.getElementById("blue_player_info"); 

var fish = document.getElementById("fish"); 

var red_player = document.getElementById("red_player"); 
var blue_player = document.getElementById("blue_player"); 

var swing_audio = new Audio("audio/swing.mp3"); 
var win_audio = new Audio("audio/win.mp3");

var wait_text = "Tunggu!"; 
var good_text = "Sempurna"; 
var bad_text = "Ewww!"; 
var win_text = "Menang!"; 
var lose_text = "Hilang :(";

var needed_score = 5; 

/* THINGS TO DO RIGHT AFTER STARTING */
game_name.innerHTML = document.title; 
footer_text.innerHTML = document.title + footer_text.innerHTML; 

// Jika perangkat dalam mode potret, tampilkan pesan untuk meminta perangkat diputar ke mode lanskap
if (window.innerHeight > window.innerWidth) {
    playground.innerHTML =
        "Silakan putar perangkat anda dan simpan dalam mode lanskap untuk bermain!<p class='w3-small'>Saya memutar perangkat saya. <a class='w3-container w3-text-blue' href=''>Muat ulang halaman</a></p>";
    playground.style.fontFamily = "Patrick Hand";
    playground.style.marginTop = "20px";
    playground.style.maxWidth = "100vw";
    playground.style.fontSize = "30px";
}

game_info_open_button.onclick = function () {
    open_game_info();
};
game_info_close_button.onclick = function () {
    close_game_info();
};

play_again_button.onclick = function () {
    play_again();
};

/* FUNCTIONS AND GAMEPLAY */
function open_game_info() {
    game_info.style.display = "block";
}

function close_game_info() {
    game_info.style.display = "none";
}

// Menutup info permainan saat mengklik di luar info permainan
window.onclick = function (event) {
    if (event.target == game_info) {
        close_game_info();
    }
};

// Mengosongkan data skor dan informasi pemain
function empty_data() {
    red_player_score.innerHTML = "0";
    blue_player_score.innerHTML = "0";

    redPlayer.player_score = 0;
    bluePlayer.player_score = 0;

    red_player_info.innerHTML = "";
    blue_player_info.innerHTML = "";
}

// Mengosongkan data skor dan mempersiapkan untuk memulai permainan lagi
function empty_data_again() {
    redPlayer.player_score = 0;
    bluePlayer.player_score = 0;
    play_again_button.innerText = "Mulai Lagi";
}

// Mengubah tampilan elemen play_again_button
function change_display() {
    if (play_again_button.style.display == "none") {
        play_again_button.style.display = "block";
    } else {
        play_again_button.style.display = "none";
    }
}

var player;

// Fungsi untuk menangani kontrol keyboard
function chech_key_controls(event) {
    if (event.code == "KeyW") {
        red_player_took();
    }
    if (event.code == "ArrowUp") {
        blue_player_took();
    }
}

// Menambahkan kontrol permainan
function add_controls() {
    document.addEventListener("keydown", chech_key_controls);
    redPlayer.img.onclick = function () {
        red_player_took();
    };
    bluePlayer.img.onclick = function () {
        blue_player_took();
    };
}

// Menghapus kontrol permainan
function remove_controls() {
    document.removeEventListener("keydown", chech_key_controls);
    redPlayer.img.onclick = "";
    bluePlayer.img.onclick = "";
}

// Menangani aksi pemain merah mengambil ikan
function red_player_took() {
    player = redPlayer;
    player.take_fish(random_fish, player);
    place_plate();
}

// Menangani aksi pemain biru mengambil ikan
function blue_player_took() {
    player = bluePlayer;
    player.take_fish(random_fish, player);
    place_plate();
}
