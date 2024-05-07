const data_music = [
  {
    title: "roozaye abri",
    artist: "jahanbakhsh",
    audioSrc:
      "https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
  },
  {
    title: "Parvaz",
    artist: "shahin najafi",
    audioSrc:
      "https://dl.ritmy.io/Single/Shahin_Najafi/Parvaz-128[ritmy.io].mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
  },
  {
    title: "nistameton",
    artist: "shaye",
    audioSrc:
      "https://dl.melonmusic.ir/Music/Shayea%20-%20Nistametoon%20(320).mp3",
    image: "../image/music cover/shaye-nistameton.png",
  },
];

var myAudio = document.getElementById("single-song");
var image = document.getElementById("testt");

function togglePlay() {
  myAudio.paused ? myAudio.play() : myAudio.pause();
  console.log(image.classList);
  image.classList.add("active");
  toggleSvg();
  console.log(image.classList);
}
function toggleSvg() {
  if (image.classList.contains("play")) {
    image.classList.remove("play");
    image.classList.add("pause");
  } else {
    image.classList.remove("pause");
    image.classList.add("play");
  }
}
