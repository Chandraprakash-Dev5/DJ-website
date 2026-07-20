const songs = [
    {
        title: "Aadi Pona Aavani",
        src: "songs/Aadi Pona Aavani - Video Song _ Attakathi _ Dinesh _ Nandita _ Santhosh Narayanan _ Pa. Ranjith [ocbaZc4ThNI].mp3",
        cover: "assets/ade.png"
    },
    {
        title: "Aadungada Yennai Suthi",
        src: "songs/Aadungada Yennai Suthi Video Song _ Pokkiri _ Vijay _ Asin _ Prabhu Deva _ Manisharma _ Five Star [Uz9ivzBQnBo].mp3",
        cover: "assets/logo1.png"
    },
    {
        title: "Aasa Dosai",
        src: "songs/Aasa Dosai Video Song _ Paramasivan _ Ajith _ Laila _ Vidyasagar _ P.Vasu [C25LqJ7NFRU].mp3",
        cover: "assets/logo1.png"
    },
    {
        title: "Ah Mudhal Akku",
        src: "songs/Ah Mudhal Akku Video Song 4K _ Jithan _ Ramesh _ Pooja _ Srikanth Deva _ Sun Music [bQDa79vrZRc].mp3",
        cover: "assets/logo1.png"
    },
    {
        title: "Ambasamuthiram Ambani",
        src: "songs/Ambasamuthiram Ambani - Othakallu Othakallu Video  Karunaas - SonyMusicSouthVEVO.mp3",
        cover: "assets/logo1.png"
    },
     {
        title: "Andangkaka Kondakari",
        src: "songs/Andangkaka Kondakari - 4K Video Song _ அண்டங்காக்கா கொண்டகாரி _ Anniyan _ Vikram _ Harris Jayaraj [BbsHW-Y2eME].mp3",    
          cover: "assets/logo1.png"         
    },
     {
        title: "Anegan",
        src: "songs/Anegan - Danga Maari Oodhari Video _ Dhanush _ Harris _ Super Hit Dance Song [NSOJzREQzsk].mp3",
        cover: "assets/logo1.png"
    },
     {
        title: "Appadi Podu",
        src: "songs/Appadi Podu - Video Song  Ghilli  Thalapathy Vijay  Trisha  Vidyasagar  Sun Music - Sun Music.mp3",
        cover: "assets/logo1.png"
    },
     {
        title: "Bambara Knanaley",
        src: "songs/Bambara Knanaley 4K Song  Bambara Kannaley  Srikanth Dev  Parthe Bhaskar  Srikanth - API Tamil Songs.mp3",
        cover: "assets/logo1.png"
    
    },
     {
        title: "Beer Venuma",
        src: "songs/Beer Venuma - HD Video Song  பீர் வேணுமா  Mudhal Kanave  Vikranth  Santhanam  Srikanth Deva - Ayngaran Music.mp3"
    },
];

let audio = document.getElementById("audio");
let icon = document.getElementById("icon");
let title = document.getElementById("title");
let cover = document.getElementById("cover");

let currentSong = 0;

// First Song Load
loadSong(currentSong);

function loadSong(index) {

    audio.src = songs[index].src;
    title.innerHTML = songs[index].title;
    cover.src = songs[index].cover;
    
}

function playSong() {

    if (audio.paused) {

        audio.play();

        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");

    } else {

        audio.pause();

        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");

    }

}

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();

    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");

}

function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    audio.play();

    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");

}

function selectSong(index) {

    currentSong = index;

    loadSong(currentSong);

    audio.play();

    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");

}

audio.addEventListener("ended", function () {

    nextSong();

});