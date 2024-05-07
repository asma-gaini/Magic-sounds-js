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

var textSongEn = document.getElementById("englishText");
var textSongFa = document.getElementById("persianText");

let englishText = "";
let persianText = "";
for (let i = 0; i < textEn[0].length; i++) {
  englishText += textEn[0][i] + "<br>";
}
for (let i = 0; i < textFa[0].length; i++) {
  persianText += textFa[0][i] + "<br>";
}

textSongEn.innerHTML = englishText;
textSongFa.innerHTML = persianText;
