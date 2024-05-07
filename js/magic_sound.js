const textEn = [
    [
      "roozaye abri",
      "I gave you your dreams",
      "Cause you ment the world",
      "So did I deserve to be left in hurt",
      "So you think I don’t know",
      "You’re out of control",
    ],
    [
      "parvaz",
      "I gave you your dreams",
      "Cause you ment the world",
      "So did I deserve to be left in hurt",
      "So you think I don’t know",
      "You’re out of control",
    ],
    [
      "nistametoon",
      "I gave you your dreams",
      "Cause you ment the world",
      "So did I deserve to be left in hurt",
      "So you think I don’t know",
      "You’re out of control",
    ],
    [
      "yeki kame chon",
      "I gave you your dreams",
      "Cause you ment the world",
      "So did I deserve to be left in hurt",
      "So you think I don’t know",
      "You’re out of control",
    ],
    [
      "jigili",
      "I gave you your dreams",
      "Cause you ment the world",
      "So did I deserve to be left in hurt",
      "So you think I don’t know",
      "You’re out of control",
    ],
    [
      "bandNaf",
      "I gave you your dreams",
      "Cause you ment the world",
      "So did I deserve to be left in hurt",
      "So you think I don’t know",
      "You’re out of control",
    ],
  ];
  
  const textFa = [
    [
      "روزای ابری",
      "من رویا هات رو بهت دادم",
      "چون تو دنیای من بودی",
      "پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری",
      "فکر می کنی نمیدونم",
      "که تو غیر قابل کنترلی",
    ],
    [
      "پرواز",
      "من رویا هات رو بهت دادم",
      "چون تو دنیای من بودی",
      "پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری",
      "فکر می کنی نمیدونم",
      "که تو غیر قابل کنترلی",
    ],
    [
      "نیستمون",
      "من رویا هات رو بهت دادم",
      "چون تو دنیای من بودی",
      "پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری",
      "فکر می کنی نمیدونم",
      "که تو غیر قابل کنترلی",
    ],
    [
      "یکی کمه چون",
      "من رویا هات رو بهت دادم",
      "چون تو دنیای من بودی",
      "پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری",
      "فکر می کنی نمیدونم",
      "که تو غیر قابل کنترلی",
    ],
    [
      "جیگیلی",
      "من رویا هات رو بهت دادم",
      "چون تو دنیای من بودی",
      "پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری",
      "فکر می کنی نمیدونم",
      "که تو غیر قابل کنترلی",
    ],
    [
      "بند ناف",
      "من رویا هات رو بهت دادم",
      "چون تو دنیای من بودی",
      "پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری",
      "فکر می کنی نمیدونم",
      "که تو غیر قابل کنترلی",
    ],
  ];

 const data_music = [{
    title: "roozaye abri",
    artist: "jahanbakhsh",
    audioSrc: "https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
  },
  {
    title: "Parvaz",
    artist: "shahin najafi",
    audioSrc: "https://dl.ritmy.io/Single/Shahin_Najafi/Parvaz-128[ritmy.io].mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
  },
  {
    title: "nistameton",
    artist: "shaye",
    audioSrc: "https://dl.melonmusic.ir/Music/Shayea%20-%20Nistametoon%20(320).mp3",
    image: "../image/music cover/shaye-nistameton.png",
  }
];

var myAudio = document.getElementById("single-song");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};