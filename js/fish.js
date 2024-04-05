class Fish {
    constructor(img, point, text) {
        this.img = img; 
        this.point = point; 
        this.text = text; 
    }
}

// Membuat objek ikan dengan menggunakan kelas Fish
let plate = new Fish("plate.svg", 0, wait_text); // piring ikan dengan poin 0 dan teks menunggu
let normal_fish = new Fish("normal_fish.svg", 1, good_text); // ikan normal dengan poin 1 dan teks baik
let purple_fish = new Fish("purple_fish.svg", 2, good_text); // ikan ungu dengan poin 2 dan teks baik
let smelly_fish = new Fish("smelly_fish.svg", -1, bad_text); // ikan bau dengan poin -1 dan teks buruk
let trash_fish = new Fish("trash_fish.svg", -2, bad_text); // ikan sampah dengan poin -2 dan teks buruk

// Menginisialisasi array ikan
var fishes = [normal_fish, purple_fish, smelly_fish, trash_fish];
var fish_amount = fishes.length; // Jumlah total ikan

// Fungsi untuk memulai permainan kembali
function play_again() {
    add_controls(); 
    empty_data(); 
    change_display();
    start_fish_loop();
}

// Fungsi untuk mengakhiri permainan
function end_game() {
    remove_controls(); 
    empty_data_again(); 
    change_display(); 
    end_fish_loop(); 
    player.win(); 
    win_audio.play(); 
}

var fish_interval; // Interval pengulangan ikan

// Fungsi untuk mengubah ikan yang muncul secara berkala
function change_fish() {
    fish_interval = setInterval(fish_loop, 3000); // Mengatur interval pengulangan ikan setiap 3 detik
}

var random_fish; // Variabel untuk menyimpan ikan acak

// Fungsi untuk memulai pengulangan ikan
function start_fish_loop() {
    place_plate(); 
    change_fish(); 
}

// Fungsi untuk pengulangan ikan
function fish_loop() {
    place_plate(); 
    setTimeout(function () {
        random_fish = fishes[Math.floor(Math.random() * fish_amount)]; 
        fish.src = "img/" + random_fish.img; 
    }, 2200); 
}

// Fungsi untuk menempatkan piring
function place_plate() {
    random_fish = plate; 
    fish.src = "img/" + random_fish.img; 
}

// Fungsi untuk mengakhiri pengulangan ikan
function end_fish_loop() {
    clearInterval(fish_interval); 
}
