const data_music = [
  {
    title: "roozaye abri",
    artist: "jahanbakhsh",
    audioSrc:
      "https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 1,
  },
  {
    title: "Parvaz",
    artist: "shahin najafi",
    audioSrc:
      "https://dl.ritmy.io/Single/Shahin_Najafi/Parvaz-128[ritmy.io].mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 2,
  },
  {
    title: "nistameton",
    artist: "shaye",
    audioSrc:
      "https://dl.melonmusic.ir/Music/Shayea%20-%20Nistametoon%20(320).mp3",
    image: "../image/music cover/shaye-nistameton.png",
    id: 3,
  },
  {
    title: "roozaye abri",
    artist: "jahanbakhsh",
    audioSrc:
      "https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 4,
  },
  {
    title: "Parvaz",
    artist: "shahin najafi",
    audioSrc:
      "https://dl.ritmy.io/Single/Shahin_Najafi/Parvaz-128[ritmy.io].mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 5,
  },
  {
    title: "nistameton",
    artist: "shaye",
    audioSrc:
      "https://dl.melonmusic.ir/Music/Shayea%20-%20Nistametoon%20(320).mp3",
    image: "../image/music cover/shaye-nistameton.png",
    id: 6,
  },
  {
    title: "roozaye abri",
    artist: "jahanbakhsh",
    audioSrc:
      "https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 7,
  },
  {
    title: "Parvaz",
    artist: "shahin najafi",
    audioSrc:
      "https://dl.ritmy.io/Single/Shahin_Najafi/Parvaz-128[ritmy.io].mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 8,
  },
  {
    title: "nistameton",
    artist: "shaye",
    audioSrc:
      "https://dl.melonmusic.ir/Music/Shayea%20-%20Nistametoon%20(320).mp3",
    image: "../image/music cover/shaye-nistameton.png",
    id: 9,
  },
  {
    title: "roozaye abri",
    artist: "jahanbakhsh",
    audioSrc:
      "https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 10,
  },
  {
    title: "Parvaz",
    artist: "shahin najafi",
    audioSrc:
      "https://dl.ritmy.io/Single/Shahin_Najafi/Parvaz-128[ritmy.io].mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 11,
  },
  {
    title: "nistameton",
    artist: "shaye",
    audioSrc:
      "https://dl.melonmusic.ir/Music/Shayea%20-%20Nistametoon%20(320).mp3",
    image: "../image/music cover/shaye-nistameton.png",
    id: 12,
  },
];

var myAudio = document.getElementById("single-song");
var image = document.getElementById("1");

function togglePlay(clicked) {
  myAudio.paused ? myAudio.play() : myAudio.pause();
  // console.log(image.classList);
  document.getElementById(clicked).classList.add("active");
  toggleSvg(clicked);
  console.log("id" + clicked);
}
function toggleSvg(clicked) {
  if (document.getElementById(clicked).classList.contains("play")) {
    document.getElementById(clicked).classList.remove("play");
    document.getElementById(clicked).classList.add("pause");
  } else {
    document.getElementById(clicked).classList.remove("pause");
    document.getElementById(clicked).classList.add("play");
  }
}
