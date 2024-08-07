//  **************************************************** DATA  ****************************************************
data_music = [];
optionSong = [];
//  **************************************************** DATA _ MUSIC INFORMATION  ****************************************************
const data_music_player = [
  {
    title: "roozaye abri-1",
    artist: "jahanbakhsh",
    audioSrc:
      "https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 1,
    difficultWords: [
      {
        word: "song1 w1",
        mean: "آهنگ 1 ، کلمه1",
      },
      {
        word: "song1 w2",
        mean: "آهنگ 1 ، کلمه2",
      },
    ],
    time: "04:49",
    textMusic:
      "roozaye abri-1/ روزای ابری/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "Parvaz-2",
    artist: "shahin najafi",
    audioSrc:
      "https://dl.ritmy.io/Single/Shahin_Najafi/Parvaz-128[ritmy.io].mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 2,
    difficultWords: [
      {
        word: "song2 w1",
        mean: "آهنگ 2 ، کلمه1",
      },
      {
        word: "song2 w2",
        mean: "آهنگ 2 ، کلمه2",
      },
    ],
    time: "03:40",
    textMusic:
      "parvaz-2/پرواز/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "nistameton-3",
    artist: "shaye",
    audioSrc:
      "https://dl.melonmusic.ir/Music/Shayea%20-%20Nistametoon%20(320).mp3",
    image: "../image/music cover/shaye-nistameton.png",
    id: 3,
    difficultWords: [
      {
        word: "song3 w1",
        mean: "آهنگ 3 ، کلمه1",
      },
      {
        word: "song3 w2",
        mean: "آهنگ 3 ، کلمه2",
      },
    ],
    time: "03:30",
    textMusic:
      "nistametoon-3/نیستمتون/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "nafas-4",
    artist: "salar aghili",
    audioSrc:
      "https://dl.rozmusic.com/Music/1402/10/21/Salar%20Aghili%20-%20Nafas%20%28128%29.mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 4,
    difficultWords: [
      {
        word: "song4 w1",
        mean: "آهنگ 4 ، کلمه1",
      },
      {
        word: "song4 w2",
        mean: "آهنگ 4 ، کلمه2",
      },
    ],
    time: "03:30",
    textMusic:
      "nafas/نفس/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "male mani-5",
    artist: "moeen zed",
    audioSrc:
      "https://dl.rozmusic.com/Music/1401/12/16/Moein%20Z%20-%20Male%20Mani%20%28128%29.mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 5,
    difficultWords: [
      {
        word: "song5 w1",
        mean: "آهنگ 5 ، کلمه1",
      },
      {
        word: "song1 w2",
        mean: "آهنگ 5 ، کلمه2",
      },
    ],
    time: "04:23",
    textMusic:
      "mal mani/مال منی/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "khial khosh-6",
    artist: "alireza ghorbani",
    audioSrc:
      "https://dl.rozmusic.com/Music/1399/04/29/Alireza%20Ghorbani%20-%20Khiale%20Khosh%20%28128%29.mp3",
    image: "../image/music cover/shaye-nistameton.png",
    id: 6,
    difficultWords: [
      {
        word: "song6 w1",
        mean: "آهنگ 6 ، کلمه1",
      },
      {
        word: "song6 w2",
        mean: "آهنگ 6 ، کلمه2",
      },
    ],
    time: "03:49",
    textMusic:
      "khial khosh/خیال خوش/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "yadam raft-7",
    artist: "reza sadeghi",
    audioSrc:
      "https://dl.rozmusic.com/Music/1400/05/30/Reza%20Sadeghi%20-%20%20Yadam%20Raft%20%28128%29.mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 7,
    difficultWords: [
      {
        word: "song7 w1",
        mean: "آهنگ 7 ، کلمه1",
      },
      {
        word: "song7 w2",
        mean: "آهنگ 7 ، کلمه2",
      },
    ],
    time: "03:24",
    textMusic:
      "yadam raft/یادم رفت/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "kharabesh kardi-8",
    artist: "farzad farzin",
    audioSrc:
      "https://dl.rozmusic.com/Music/1397/11/09/Farzad%20Farzin%20-%20Kharabesh%20Kardi%20(128).mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 8,
    difficultWords: [
      {
        word: "song8 w1",
        mean: "آهنگ 8 ، کلمه1",
      },
      {
        word: "song8 w2",
        mean: "آهنگ 8 ، کلمه2",
      },
    ],
    time: "04:04",
    textMusic:
      "kharabesh kardi/خرابش کردی/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "koja rafte boodi-9",
    artist: "hoorosh band",
    audioSrc:
      "https://hiblog.tv/1000310/file/?Ur=https://irsv.upmusics.com/AliBZ/Hoorosh%20Band%20-%20Koja%20Rafte%20Boodi%20(320).mp3&hst=irsv.upmusics.com&prt=https&cuid=1000310",
    image: "../image/music cover/shaye-nistameton.png",
    id: 9,
    difficultWords: [
      {
        word: "song9 w1",
        mean: "آهنگ 9 ، کلمه1",
      },
      {
        word: "song9 w2",
        mean: "آهنگ 9 ، کلمه2",
      },
    ],
    time: "03:26",
    textMusic:
      "koja rafte boodi/کجا رفته بودی/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "var agar-10",
    artist: "erfan tahmaseb",
    audioSrc:
      "https://hiblog.tv/1000310/file/?Ur=https://irsv.upmusics.com/AliBZ/Erfan%20Tahmasbi%20-%20Vay%20Agar%20(320).mp3&hst=irsv.upmusics.com&prt=https&cuid=1000310",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 10,
    difficultWords: [
      {
        word: "song10 w1",
        mean: "آهنگ 10 ، کلمه1",
      },
      {
        word: "song10 w2",
        mean: "آهنگ 10 ، کلمه2",
      },
    ],
    time: "02:56",
    textMusic:
      "vay agar/وای اگر/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "mane divaneh-11",
    artist: "reza bahram",
    audioSrc:
      "https://dl.rozmusic.com/Music/1402/07/05/Reza%20Bahram%20-%20Mane%20Divaneh%20%28128%29.mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 11,
    difficultWords: [
      {
        word: "song11 w1",
        mean: "آهنگ 11 ، کلمه1",
      },
      {
        word: "song11 w2",
        mean: "آهنگ 11 ، کلمه2",
      },
    ],
    time: "02:53",
    textMusic:
      "mane divaneh/منه دیوانه/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "khastam-12",
    artist: "behnam bani",
    audioSrc:
      "https://hiblog.tv/1000310/file/?Ur=https://irsv.upmusics.com/AliBZ/Behnam%20Bani%20-%20Khastam%20(320).mp3&hst=irsv.upmusics.com&prt=https&cuid=1000310",
    image: "../image/music cover/shaye-nistameton.png",
    id: 12,
    difficultWords: [
      {
        word: "song12 w1",
        mean: "آهنگ 12 ، کلمه1",
      },
      {
        word: "song12 w2",
        mean: "آهنگ 12 ، کلمه2",
      },
    ],
    time: "03:32",
    textMusic:
      "khastam/خستم/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
];

//  **************************************************** DATA _ PLALIST OPTION  ****************************************************
const optionSong_player = [
  {
    optionName: "Add to favorite",
    optionSvgSrc: "../image/svg/heart-empty.svg",
    optionTarget: "#",
    number: "1",
  },
  {
    optionName: "Add difficult words",
    optionSvgSrc: "../image/svg/keyboard.svg",
    optionTarget: "#",
    number: "2",
  },
  {
    optionName: " Download",
    optionSvgSrc: "../image/svg/download-minimalistic-svgrepo-com.svg",
    optionTarget: "#",
    number: "3",
  },
  {
    optionName: " Share",
    optionSvgSrc: "../image/svg/share-svgrepo-com.svg",
    optionTarget: "#",
    number: "4",
  },
  {
    optionName: "More details",
    optionSvgSrc: "../image/svg/details-symbolic-svgrepo-com.svg",
    optionTarget: "#",
    number: "5",
  },
];

//  **************************************************** DATA _ FAVORIT MUSIC INFORMATION  ****************************************************
const data_music_favorit = [
  {
    title: "roozaye abri-1",
    artist: "jahanbakhsh",
    audioSrc:
      "https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 1,
    difficultWords: [
      {
        word: "song1 w1",
        mean: "آهنگ 1 ، کلمه1",
      },
      {
        word: "song1 w2",
        mean: "آهنگ 1 ، کلمه2",
      },
    ],
    time: "04:49",
    textMusic:
      "roozaye abri-1/ روزای ابری/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "Parvaz-2",
    artist: "shahin najafi",
    audioSrc:
      "https://dl.ritmy.io/Single/Shahin_Najafi/Parvaz-128[ritmy.io].mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 2,
    difficultWords: [
      {
        word: "song2 w1",
        mean: "آهنگ 2 ، کلمه1",
      },
      {
        word: "song2 w2",
        mean: "آهنگ 2 ، کلمه2",
      },
    ],
    time: "03:40",
    textMusic:
      "parvaz-2/پرواز/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "nistameton-3",
    artist: "shaye",
    audioSrc:
      "https://dl.melonmusic.ir/Music/Shayea%20-%20Nistametoon%20(320).mp3",
    image: "../image/music cover/shaye-nistameton.png",
    id: 3,
    difficultWords: [
      {
        word: "song3 w1",
        mean: "آهنگ 3 ، کلمه1",
      },
      {
        word: "song3 w2",
        mean: "آهنگ 3 ، کلمه2",
      },
    ],
    time: "03:30",
    textMusic:
      "nistametoon-3/نیستمتون/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "nafas-4",
    artist: "salar aghili",
    audioSrc:
      "https://dl.rozmusic.com/Music/1402/10/21/Salar%20Aghili%20-%20Nafas%20%28128%29.mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 4,
    difficultWords: [
      {
        word: "song4 w1",
        mean: "آهنگ 4 ، کلمه1",
      },
      {
        word: "song4 w2",
        mean: "آهنگ 4 ، کلمه2",
      },
    ],
    time: "03:30",
    textMusic:
      "nafas/نفس/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "male mani-5",
    artist: "moeen zed",
    audioSrc:
      "https://dl.rozmusic.com/Music/1401/12/16/Moein%20Z%20-%20Male%20Mani%20%28128%29.mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 5,
    difficultWords: [
      {
        word: "song5 w1",
        mean: "آهنگ 5 ، کلمه1",
      },
      {
        word: "song1 w2",
        mean: "آهنگ 5 ، کلمه2",
      },
    ],
    time: "04:23",
    textMusic:
      "mal mani/مال منی/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "khial khosh-6",
    artist: "alireza ghorbani",
    audioSrc:
      "https://dl.rozmusic.com/Music/1399/04/29/Alireza%20Ghorbani%20-%20Khiale%20Khosh%20%28128%29.mp3",
    image: "../image/music cover/shaye-nistameton.png",
    id: 6,
    difficultWords: [
      {
        word: "song6 w1",
        mean: "آهنگ 6 ، کلمه1",
      },
      {
        word: "song6 w2",
        mean: "آهنگ 6 ، کلمه2",
      },
    ],
    time: "03:49",
    textMusic:
      "khial khosh/خیال خوش/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "yadam raft-7",
    artist: "reza sadeghi",
    audioSrc:
      "https://dl.rozmusic.com/Music/1400/05/30/Reza%20Sadeghi%20-%20%20Yadam%20Raft%20%28128%29.mp3",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 7,
    difficultWords: [
      {
        word: "song7 w1",
        mean: "آهنگ 7 ، کلمه1",
      },
      {
        word: "song7 w2",
        mean: "آهنگ 7 ، کلمه2",
      },
    ],
    time: "03:24",
    textMusic:
      "yadam raft/یادم رفت/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "kharabesh kardi-8",
    artist: "farzad farzin",
    audioSrc:
      "https://dl.rozmusic.com/Music/1397/11/09/Farzad%20Farzin%20-%20Kharabesh%20Kardi%20(128).mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 8,
    difficultWords: [
      {
        word: "song8 w1",
        mean: "آهنگ 8 ، کلمه1",
      },
      {
        word: "song8 w2",
        mean: "آهنگ 8 ، کلمه2",
      },
    ],
    time: "04:04",
    textMusic:
      "kharabesh kardi/خرابش کردی/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "koja rafte boodi-9",
    artist: "hoorosh band",
    audioSrc:
      "https://hiblog.tv/1000310/file/?Ur=https://irsv.upmusics.com/AliBZ/Hoorosh%20Band%20-%20Koja%20Rafte%20Boodi%20(320).mp3&hst=irsv.upmusics.com&prt=https&cuid=1000310",
    image: "../image/music cover/shaye-nistameton.png",
    id: 9,
    difficultWords: [
      {
        word: "song9 w1",
        mean: "آهنگ 9 ، کلمه1",
      },
      {
        word: "song9 w2",
        mean: "آهنگ 9 ، کلمه2",
      },
    ],
    time: "03:26",
    textMusic:
      "koja rafte boodi/کجا رفته بودی/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "var agar-10",
    artist: "erfan tahmaseb",
    audioSrc:
      "https://hiblog.tv/1000310/file/?Ur=https://irsv.upmusics.com/AliBZ/Erfan%20Tahmasbi%20-%20Vay%20Agar%20(320).mp3&hst=irsv.upmusics.com&prt=https&cuid=1000310",
    image: "../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg",
    id: 10,
    difficultWords: [
      {
        word: "song10 w1",
        mean: "آهنگ 10 ، کلمه1",
      },
      {
        word: "song10 w2",
        mean: "آهنگ 10 ، کلمه2",
      },
    ],
    time: "02:56",
    textMusic:
      "vay agar/وای اگر/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "mane divaneh-11",
    artist: "reza bahram",
    audioSrc:
      "https://dl.rozmusic.com/Music/1402/07/05/Reza%20Bahram%20-%20Mane%20Divaneh%20%28128%29.mp3",
    image: "../image/music cover/shahin najafi-parvaz.jpg",
    id: 11,
    difficultWords: [
      {
        word: "song11 w1",
        mean: "آهنگ 11 ، کلمه1",
      },
      {
        word: "song11 w2",
        mean: "آهنگ 11 ، کلمه2",
      },
    ],
    time: "02:53",
    textMusic:
      "mane divaneh/منه دیوانه/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
  {
    title: "khastam-12",
    artist: "behnam bani",
    audioSrc:
      "https://hiblog.tv/1000310/file/?Ur=https://irsv.upmusics.com/AliBZ/Behnam%20Bani%20-%20Khastam%20(320).mp3&hst=irsv.upmusics.com&prt=https&cuid=1000310",
    image: "../image/music cover/shaye-nistameton.png",
    id: 12,
    difficultWords: [
      {
        word: "song12 w1",
        mean: "آهنگ 12 ، کلمه1",
      },
      {
        word: "song12 w2",
        mean: "آهنگ 12 ، کلمه2",
      },
    ],
    time: "03:32",
    textMusic:
      "khastam/خستم/ I gave you your dreams/من رویا هات رو بهت دادم/ Cause you ment the world/چون تو دنیای من بودی/So did I deserve to be left in hurt/پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری/So you think I don’t know/فکر می کنی نمیدونم/You’re out of control/که تو غیر قابل کنترلی",
  },
];

//  **************************************************** DATA _ FAVORIT PLALIST OPTION  ****************************************************
const optionSong_favorit = [
  {
    optionName: "remove to favorite",
    optionSvgSrc: "../image/svg/heart-empty.svg",
    optionTarget: "#",
    number: "1",
  },
  {
    optionName: "Add difficult words",
    optionSvgSrc: "../image/svg/keyboard.svg",
    optionTarget: "#",
    number: "2",
  },
  {
    optionName: " Download",
    optionSvgSrc: "../image/svg/download-minimalistic-svgrepo-com.svg",
    optionTarget: "#",
    number: "3",
  },
  {
    optionName: " Share",
    optionSvgSrc: "../image/svg/share-svgrepo-com.svg",
    optionTarget: "#",
    number: "4",
  },
  {
    optionName: "More details",
    optionSvgSrc: "../image/svg/details-symbolic-svgrepo-com.svg",
    optionTarget: "#",
    number: "5",
  },
];

//  **************************************************** DATA _ HEADER OF TABLE OF MODAL FLASH CART  ****************************************************
const headerFlashCartTable = [
  {
    nameFlashCartHeader: "#",
  },
  {
    nameFlashCartHeader: "Word",
  },
  {
    nameFlashCartHeader: "Mean",
  },
];
//  **************************************************** GLOBAL VARIABLE ****************************************************

var page_size = 1;
var page_counter = 1;
var start_indexSong = page_counter - 1;
var end_indexSong = start_indexSong + page_size;
function setStartAndEndIndex(page_counter, page_size) {
  start_indexSong = (page_counter - 1) * page_size;
  end_indexSong = start_indexSong + page_size;
}

var pagination_size = 3;
let page_lenght = data_music.length / page_size;

var songImage = document.getElementById("single-song-image");
var songTitle = document.getElementById("modalSong-title");
var songArtistName = document.getElementById("modalSong-artistName");

var favoritHeart = "../image/svg/heart-empty.svg";
var favoritHeartArray = [];
//  **************************************************** GLOBAL FUNCTION  ****************************************************
function setMusicHasBeenCalled(clickedId) {
  if (
    document
      .querySelector('div[id="' + clickedId + '"]')
      .getAttribute("setmusicHasBeenCalled") == "false"
  ) {
    setSongInformation(clickedId);
    document
      .querySelector('div[id="' + clickedId + '"]')
      .setAttribute("setmusicHasBeenCalled", "true");
  }
}

//  **************************************************** CREATE ELEMENT  ****************************************************

window.onload = createPage();
function createPage() {
  setPlayerList();
  //chon bade set play list taze lenght data_music dar miad
  page_lenght = data_music.length / page_size;

  createPlayerTemplate();
}

//  **************************************************** CREATE SECTION _ PLAYER  ****************************************************
function createPlayerTemplate() {
  const template = document.createElement("template");

  template.innerHTML = createPlayer();
}

function createPlayer() {
  let getPlayerId = document.getElementById("contentMusicPlaylist").children[0];
  let musicAppDiv = document.createElement("div");
  musicAppDiv.setAttribute("class", "music-app");
  getPlayerId.appendChild(musicAppDiv);

  let containerPlayListDiv = document.createElement("div");
  containerPlayListDiv.setAttribute("class", "content");
  musicAppDiv.appendChild(containerPlayListDiv);

  createPlayList();
  createModal();
  createPagination();
}

function createPagination() {
  let getPlayerId = document.getElementById("contentMusicPlaylist").children[0];
  let paginationModalDiv = document.createElement("div");
  paginationModalDiv.setAttribute("class", "pagination-modal");
  getPlayerId.appendChild(paginationModalDiv);

  let paginationList = document.createElement("ul");
  paginationList.setAttribute("class", "pagination");
  paginationModalDiv.appendChild(paginationList);

  createPaginationItem();
  setPagination(1);
}

//  **************************************************** CREATE ELEMENT _ CREATE PLAY LIST ELEMENT  ****************************************************
function createPlayList() {
  const content = document.querySelector(".content");
  const palyListUl = document.createElement("ul");
  palyListUl.setAttribute("class", "playList");
  content.appendChild(palyListUl);

  createItemOfPlaylist(palyListUl);
}

function createItemOfPlaylist(ulTag) {
  for (let i = start_indexSong; i < end_indexSong; i++) {
    //CREATE li
    const playlistItem = document.createElement("li");
    playlistItem.setAttribute("class", "playList-item");
    ulTag.appendChild(playlistItem);

    //CREATE image div
    const imageDiv = document.createElement("div");

    imageDiv.setAttribute("class", "playList-item-div-image");
    imageDiv.setAttribute("id", data_music[i].id);
    imageDiv.setAttribute("onClick", "togglePlay(this.id)");
    imageDiv.setAttribute("data-bs-toggle", "modal");
    imageDiv.setAttribute("data-bs-target", "#myModal");
    imageDiv.setAttribute("setmusicHasBeenCalled", "false");

    playlistItem.appendChild(imageDiv);

    //CREATE image tag
    const imageTag = document.createElement("img");

    imageTag.setAttribute("src", data_music[i].image);
    imageTag.setAttribute("alt", data_music[i].title);
    imageTag.setAttribute("class", "playList-item-image");

    imageDiv.appendChild(imageTag);

    //CREATE svg play
    const playSvg = document.createElement("img");
    playSvg.setAttribute("src", "../image/svg/play.svg");
    playSvg.setAttribute("class", "svg");
    playSvg.setAttribute("id", "playSvg");

    imageDiv.appendChild(playSvg);

    //CREATE svg pause
    const pauseSvg = document.createElement("img");
    pauseSvg.setAttribute("src", "../image/svg/pause.svg");
    pauseSvg.setAttribute("class", "svg");
    pauseSvg.setAttribute("id", "pauseSvg");

    imageDiv.appendChild(pauseSvg);

    //CREATE div for favarit and informarion
    const divSong = document.createElement("div");

    divSong.setAttribute("class", "playList-item-main");

    playlistItem.appendChild(divSong);

    //CRETE link information
    const divLinkInfo = document.createElement("div");

    divLinkInfo.setAttribute("class", "playList-item-info");

    divSong.appendChild(divLinkInfo);

    //CREATE link information title
    const titleLink = document.createElement("p");

    titleLink.setAttribute("class", "info-title");
    titleLink.innerHTML = data_music[i].title;

    divLinkInfo.appendChild(titleLink);

    //CREATE link information subtitle
    const subtitleLink = document.createElement("p");

    subtitleLink.setAttribute("class", "info-subtitle");
    subtitleLink.innerHTML = data_music[i].artist;

    divLinkInfo.appendChild(subtitleLink);

    //CREATE left of playlist item
    const divLeftItemes = document.createElement("div");

    divLeftItemes.setAttribute("class", "LeftItemesPlayList");

    divSong.appendChild(divLeftItemes);

    //CREATE song time
    const songTime = document.createElement("p");

    songTime.setAttribute("class", "songTime");
    songTime.innerHTML = data_music[i].time;

    divLeftItemes.appendChild(songTime);

    //CREATE favorit svg link
    const favoritLink = document.createElement("a");

    favoritLink.setAttribute("class", "favoritLink");
    favoritLink.setAttribute("href", "#");

    divLeftItemes.appendChild(favoritLink);

    //CREATE favorit svg
    const favoritSvg = document.createElement("img");

    favoritSvg.setAttribute("src", favoritHeart);
    favoritSvg.setAttribute("class", "favoritSvg");
    favoritSvg.setAttribute("id", data_music[i].id);
    favoritSvg.setAttribute("onClick", "favoritSvg(this.id)");

    favoritLink.appendChild(favoritSvg);

    //  **************************************************** CREATE ELEMENT _ CREATE PLAY LIST ELEMENT _ OPTION  ****************************************************
    //option
    let optionDiv = document.createElement("div");
    optionDiv.setAttribute("class", "dropdown");
    divLeftItemes.appendChild(optionDiv);

    // CREATE button for option
    let optionbutton = document.createElement("ul");

    optionbutton.setAttribute("class", "btn");
    optionbutton.classList.add("btn-secondary");
    optionbutton.classList.add("displayOption");
    optionbutton.setAttribute("type", "button");
    optionbutton.setAttribute("data-bs-toggle", "dropdown");
    optionbutton.setAttribute("aria-expanded", "false");

    optionDiv.appendChild(optionbutton);

    //CREATE image tag for button
    const buttonSvg = document.createElement("img");

    buttonSvg.setAttribute(
      "src",
      "../image/svg/dots-three-outline-vertical.svg"
    );
    buttonSvg.setAttribute("alt", "3-vertical-dots");
    buttonSvg.setAttribute("class", "optionSongSvg");

    optionbutton.appendChild(buttonSvg);

    // CREATE ul
    let optionUl = document.createElement("ul");
    optionUl.setAttribute("class", "dropdown-menu");
    optionUl.classList.add("dropdown-menu-dark");
    optionUl.setAttribute("idsongoption", data_music[i].id);
    optionDiv.appendChild(optionUl);

    for (let j = 0; j < optionSong.length; j++) {
      // CREATE li
      let optionItem = document.createElement("li");
      optionUl.appendChild(optionItem);

      //CREATE link div
      let linkDiv = document.createElement("div");
      linkDiv.setAttribute("class", "linkOptionDiv");
      optionItem.appendChild(linkDiv);

      //CREATE image tag
      const imageTag = document.createElement("img");

      imageTag.setAttribute("src", optionSong[j].optionSvgSrc);
      imageTag.setAttribute("alt", optionSong[j].optionName);
      imageTag.setAttribute("class", "optionSongSvg");

      linkDiv.appendChild(imageTag);

      //CREATE link
      const optionLink = document.createElement("a");

      optionLink.setAttribute("class", "dropdown-item");
      optionLink.setAttribute("href", optionSong[j].optionTarget);
      optionLink.setAttribute("number", optionSong[j].number);
      if (optionSong[j].optionName == "Add difficult words") {
        optionLink.setAttribute("id", data_music[i].id);
        optionLink.setAttribute("onclick", "showFlashCardModal(this.id)");
      }
      optionLink.innerHTML = optionSong[j].optionName;

      linkDiv.appendChild(optionLink);
    }
  }
}

//  **************************************************** CREATE ELEMENT _ CREATE PLAY LIST ELEMENT _ OPTION _ ADD FLASH CART  ****************************************************
function createFlashCard(id) {
  let flashCardId = document.querySelector("#flashcard");

  // let playerIdChildren = document.getElementById(
  //   "contentMusicPlaylist"
  // ).children;

  // let flashCardId = document.createElement("div");
  // flashCardId.setAttribute("id", "flashcard");
  flashCardId.innerHTML = "";
  // for (let i = 0; i < playerIdChildren.length; i++) {
  //   let playerId = document
  //     .getElementById("contentMusicPlaylist")
  //     .children[i].getAttribute("id");
  //   if (playerId == "playerList" || playerId == "favoritPlayList") {
  //     console.log(playerId);
  //        // playerId.insertBefore(flashCardId, playerId);
  //     playerId.appendChild(flashCardId);
  //   }
  // }

  // CREATE modal word main
  let modalWordMainWin = document.createElement("div");

  modalWordMainWin.setAttribute("class", "modalword");
  modalWordMainWin.classList.add("fademodalword");
  modalWordMainWin.setAttribute("id", "modalword");

  flashCardId.appendChild(modalWordMainWin);

  // CREATE modal word dialog div
  let modalWordDialog = document.createElement("div");

  modalWordDialog.setAttribute("class", "modalword-dialog");

  modalWordMainWin.appendChild(modalWordDialog);

  // CREATE modal word content div
  let modalWordContentDiv = document.createElement("div");

  modalWordContentDiv.setAttribute("class", "modalword-content");

  modalWordDialog.appendChild(modalWordContentDiv);

  // CREATE modal word header div
  let modalWordHeaderDiv = document.createElement("div");

  modalWordHeaderDiv.setAttribute("class", "modalword-header");

  modalWordContentDiv.appendChild(modalWordHeaderDiv);

  // CREATE modal word header title
  let modalWordHeaderTitle = document.createElement("div");

  modalWordHeaderTitle.setAttribute("class", "modalword-title");
  modalWordHeaderTitle.classList.add("fs-5");
  modalWordHeaderTitle.innerHTML = "Difficult Words";

  modalWordHeaderDiv.appendChild(modalWordHeaderTitle);

  // CREATE modal word close button header
  let modalWordCloseBtn = document.createElement("button");

  modalWordCloseBtn.setAttribute("class", "btn-close");
  modalWordCloseBtn.setAttribute("type", "button");
  modalWordCloseBtn.setAttribute("onclick", "hideFlashCardModal()");

  modalWordHeaderDiv.appendChild(modalWordCloseBtn);

  // CREATE modal word body div
  let modalWordBodyDiv = document.createElement("div");

  modalWordBodyDiv.setAttribute("class", "modalword-body");

  modalWordContentDiv.appendChild(modalWordBodyDiv);

  // CREATE modal word body title
  let modalWordBodyTitle = document.createElement("h5");

  modalWordBodyTitle.setAttribute("class", "p-2");
  modalWordBodyTitle.innerHTML = "Previous words";

  modalWordBodyDiv.appendChild(modalWordBodyTitle);

  // CREATE modal word table
  let modalWordTable = document.createElement("table");

  modalWordTable.setAttribute("class", "table");
  modalWordTable.classList.add("table-success");
  modalWordTable.classList.add("table-striped-columns");

  modalWordBodyDiv.appendChild(modalWordTable);

  // CREATE modal word thead table
  let modalWordTheadTable = document.createElement("thead");
  modalWordTable.appendChild(modalWordTheadTable);

  // CREATE modal word tr thead table
  let modalWordTrTheadTable = document.createElement("tr");
  modalWordTheadTable.appendChild(modalWordTrTheadTable);

  // CREATE modal word th thead table
  for (let i = 0; i < headerFlashCartTable.length; i++) {
    let modalWordThTheadTable = document.createElement("th");
    modalWordThTheadTable.setAttribute("scope", "col");
    modalWordThTheadTable.innerHTML =
      headerFlashCartTable[i].nameFlashCartHeader;

    modalWordTrTheadTable.appendChild(modalWordThTheadTable);
  }

  // CREATE modal word tbody table
  let modalWordTbodyTable = document.createElement("tbody");
  modalWordTable.appendChild(modalWordTbodyTable);

  // CREATE modal word tr/th/td tbody table
  for (let j = 0; j < data_music.length; j++) {
    if (data_music[j].id == id) {
      for (let i = 0; i < data_music[id].difficultWords.length; i++) {
        // CREATE modal word tr tbody table
        let modalWordTrTbodyTable = document.createElement("tr");
        modalWordTbodyTable.appendChild(modalWordTrTbodyTable);

        // CREATE modal word th tbody table
        let modalWordThTbodyTable = document.createElement("th");
        modalWordThTbodyTable.setAttribute("scope", "row");
        modalWordThTbodyTable.innerHTML = i + 1;

        modalWordTrTbodyTable.appendChild(modalWordThTbodyTable);

        // CREATE modal word td word tbody table
        let modalWordTdwordTable = document.createElement("td");
        modalWordTdwordTable.innerHTML =
          data_music[id - 1].difficultWords[i].word;

        modalWordTrTbodyTable.appendChild(modalWordTdwordTable);

        // CREATE modal mean td word tbody table
        let modalWordTdMeanTable = document.createElement("td");
        modalWordTdMeanTable.innerHTML =
          data_music[id - 1].difficultWords[i].mean;

        modalWordTrTbodyTable.appendChild(modalWordTdMeanTable);
      }
    }
  }
  //
  //
  //

  let hrLineWordForm = document.createElement("hr");
  modalWordBodyDiv.appendChild(hrLineWordForm);

  // CREATE modal word new word title
  let modalNewWordBodyTitle = document.createElement("h5");

  modalNewWordBodyTitle.setAttribute("class", "headerAddWord");
  modalNewWordBodyTitle.innerHTML = "add difficult word";

  modalWordBodyDiv.appendChild(modalNewWordBodyTitle);

  // CREATE modal word new word main div
  let modalNewWordBodymainDiv = document.createElement("div");

  modalNewWordBodymainDiv.setAttribute("class", "wordForm");

  modalWordBodyDiv.appendChild(modalNewWordBodymainDiv);

  //add word line
  let formWordLine = document.createElement("div");

  formWordLine.setAttribute("class", "formWordLine");

  modalNewWordBodymainDiv.appendChild(formWordLine);
  //label word line
  let labelAddWord = document.createElement("label");

  labelAddWord.setAttribute("for", "word");
  labelAddWord.setAttribute("class", "form-label");
  labelAddWord.innerHTML = "word:";

  formWordLine.appendChild(labelAddWord);

  //input word line
  let inputWordLine = document.createElement("input");

  inputWordLine.setAttribute("type", "text");
  inputWordLine.setAttribute("class", "form-control");
  inputWordLine.classList.add("inputUploader");
  inputWordLine.setAttribute("id", "word");
  inputWordLine.setAttribute("placeholder", "Enter difficult word");

  formWordLine.appendChild(inputWordLine);

  //add mean line
  let formMeanLine = document.createElement("div");

  formMeanLine.setAttribute("class", "formWordLine");

  modalNewWordBodymainDiv.appendChild(formMeanLine);
  //label mean line
  let labelAddMean = document.createElement("label");

  labelAddMean.setAttribute("for", "mean");
  labelAddMean.setAttribute("class", "form-label");
  labelAddMean.innerHTML = "mean:";

  formMeanLine.appendChild(labelAddMean);

  //input word line
  let inputMeanLine = document.createElement("input");

  inputMeanLine.setAttribute("type", "text");
  inputMeanLine.setAttribute("class", "form-control");
  inputMeanLine.classList.add("inputUploader");
  inputMeanLine.setAttribute("id", "mean");
  inputMeanLine.setAttribute("placeholder", "Enter mean of word");

  formMeanLine.appendChild(inputMeanLine);

  // send word
  let sendWord = document.createElement("div");

  sendWord.setAttribute("class", "sendWord");

  modalNewWordBodymainDiv.appendChild(sendWord);
  //submit button html
  let sendWordBtn = document.createElement("button");

  sendWordBtn.setAttribute("type", "submit");
  sendWordBtn.setAttribute("class", "btn");
  sendWordBtn.classList.add("btn-primary");
  sendWordBtn.classList.add("btnSendWord");
  sendWordBtn.innerHTML = "Send word";

  sendWord.appendChild(sendWordBtn);
}
//  **************************************************** CREATE ELEMENT _ CREATE MODAL  ****************************************************
function createModal() {
  let getModalId = document.getElementById("contentMusicPlaylist").children[0];

  let modalDiv = document.createElement("div");
  modalDiv.setAttribute("class", "modal");
  modalDiv.setAttribute("id", "myModal");
  getModalId.appendChild(modalDiv);

  let modalBootstrapClass = document.createElement("div");
  modalBootstrapClass.setAttribute("class", "modal-dialog");
  modalBootstrapClass.classList.add("modal-dialog-centered");
  modalBootstrapClass.classList.add("modal-dialog-scrollable");
  modalDiv.appendChild(modalBootstrapClass);

  let modalcontent = document.createElement("div");
  modalcontent.setAttribute("class", "modal-content");
  modalBootstrapClass.appendChild(modalcontent);

  let modalHeaderDiv = document.createElement("div");
  modalHeaderDiv.setAttribute("class", "modal-header");
  modalcontent.appendChild(modalHeaderDiv);

  let modalBodyDiv = document.createElement("div");
  modalBodyDiv.setAttribute("class", "modal-body");
  modalcontent.appendChild(modalBodyDiv);

  let modalFooterDiv = document.createElement("div");
  modalFooterDiv.setAttribute("class", "modal-footer");
  modalcontent.appendChild(modalFooterDiv);

  createModalHeader();
  createModalBody();
  createModalFooter();
}

function createModalBody() {
  const modalContent = document.querySelector(".modal-body");
  //CREATE div body
  const modalBodyDiv = document.createElement("div");
  modalBodyDiv.setAttribute("class", "modalContent-body");
  modalContent.appendChild(modalBodyDiv);

  //CREATE image div
  const modalImageDiv = document.createElement("div");
  modalImageDiv.setAttribute("class", "modalSong-Image");
  modalBodyDiv.appendChild(modalImageDiv);

  //CREATE image tag
  const modalImageTag = document.createElement("img");

  modalImageTag.setAttribute("src", "");
  modalImageTag.setAttribute("alt", "");
  modalImageTag.setAttribute("id", "single-song-image");

  modalImageDiv.appendChild(modalImageTag);

  //CREATE modal song information
  //div
  const modalInfoDiv = document.createElement("div");
  modalInfoDiv.setAttribute("class", "modalSong-info");
  modalBodyDiv.appendChild(modalInfoDiv);
  //h3
  const modalInfoTitle = document.createElement("h3");
  modalInfoTitle.setAttribute("class", "modalSong-title");
  modalInfoTitle.setAttribute("id", "modalSong-title");
  modalInfoDiv.appendChild(modalInfoTitle);
  //p
  const modalInfoArtist = document.createElement("h3");
  modalInfoArtist.setAttribute("class", "modalSong-artistName");
  modalInfoArtist.setAttribute("id", "modalSong-artistName");
  modalInfoDiv.appendChild(modalInfoArtist);

  //CREATE audio
  const modalAudioTag = document.createElement("audio");

  modalAudioTag.addEventListener("play", handlePlayPause);
  modalAudioTag.addEventListener("pause", handlePlayPause);

  modalAudioTag.setAttribute("src", "");
  modalAudioTag.setAttribute("controls", "controls");
  modalAudioTag.setAttribute("alt", "");
  modalAudioTag.setAttribute("class", "modualSong-audio");
  modalAudioTag.setAttribute("id", "single-song");

  modalBodyDiv.appendChild(modalAudioTag);

  //CREATE text poem
  const modaltextDiv = document.createElement("div");
  modaltextDiv.setAttribute("class", "text");
  modalBodyDiv.appendChild(modaltextDiv);
}

function createModalHeader() {
  const modalHeader = document.querySelector(".modal-header");
  //CREATE title
  const modalTitleHeader = document.createElement("h4");
  modalTitleHeader.setAttribute("class", "modal-title");
  modalTitleHeader.innerHTML = "music name";
  modalHeader.appendChild(modalTitleHeader);

  //CREATE closeShape
  const modalcloseHeader = document.createElement("button");
  modalcloseHeader.setAttribute("class", "btn-close");
  modalcloseHeader.setAttribute("type", "button");
  modalcloseHeader.setAttribute("data-bs-dismiss", "modal");
  modalHeader.appendChild(modalcloseHeader);
}

function createModalFooter() {
  const modalFooter = document.querySelector(".modal-footer");
  //CREATE close button
  const modalcloseFooter = document.createElement("button");
  modalcloseFooter.setAttribute("type", "button");
  modalcloseFooter.setAttribute("class", "btn");
  modalcloseFooter.classList.add("btn-danger");
  modalcloseFooter.classList.add("btnClose");
  modalcloseFooter.classList.add("singleSong");
  modalcloseFooter.setAttribute("data-bs-dismiss", "modal");
  modalcloseFooter.innerHTML = "Close";
  modalFooter.appendChild(modalcloseFooter);
}
//  **************************************************** CREATE ELEMENT _ CREATE PAGINATION  ****************************************************
function createPaginationItem() {
  const paginationContent = document.querySelector(".pagination");

  //CREATE PAGINATION _ Previous button
  const PreviousItem = document.createElement("li");
  PreviousItem.setAttribute("class", "page-item");
  PreviousItem.setAttribute("onclick", "previousPagination()");
  paginationContent.appendChild(PreviousItem);

  const PreviousLink = document.createElement("a");
  PreviousLink.setAttribute("class", "page-link");
  PreviousLink.setAttribute("href", "#");
  PreviousLink.innerHTML = "Previous";
  PreviousItem.appendChild(PreviousLink);

  //CREATE PAGINATION _ item
  for (let i = 0; i < pagination_size; i++) {
    const paginationItem = document.createElement("li");
    paginationItem.setAttribute("class", "page-item");
    paginationItem.setAttribute("id", i + 1);
    paginationItem.setAttribute("onclick", "setPagination(this.id)");
    paginationContent.appendChild(paginationItem);

    const paginationLink = document.createElement("a");
    paginationLink.setAttribute("class", "page-link");
    paginationLink.classList.add("page-link-num");
    paginationLink.setAttribute("href", "#");
    paginationLink.innerHTML = i + 1;
    paginationItem.appendChild(paginationLink);
  }

  //CREATE PAGINATION _ next button
  const nextItem = document.createElement("li");
  nextItem.setAttribute("class", "page-item");
  nextItem.setAttribute("onclick", "nextPagination()");
  paginationContent.appendChild(nextItem);

  const nextLink = document.createElement("a");
  nextLink.setAttribute("class", "page-link");
  nextLink.setAttribute("href", "#");
  nextLink.innerHTML = "Next";
  nextItem.appendChild(nextLink);

  document.querySelector("li[id='1']").classList.add("active");
  createLastPageOfPagination();
}

//  **************************************************** FUNCTION FOR PLAY AND PAUSE AUDIO  ****************************************************
function handlePlayPause() {
  const myAudio = document.getElementById("single-song");
  const myAudioSrc = myAudio.getAttribute("src");
  for (let i = 0; i < data_music.length; i++) {
    if (data_music[i].audioSrc == myAudioSrc) {
      const id = data_music[i].id;
      const getDivContentSvg = document.querySelector('div[id="' + id + '"]');

      if (event.type === "play") {
        getDivContentSvg.removeAttribute("data-bs-toggle");

        getDivContentSvg.classList.remove("pause");
        getDivContentSvg.classList.add("play");

        getDivContentSvg.classList.remove("addPlayingHover");
        getDivContentSvg.classList.remove("removePauseHover");

        getDivContentSvg.classList.add("removePlayHover");
        getDivContentSvg.classList.add("addPauseHover");

        autoPlayNextSong();
      }
      if (event.type === "pause") {
        getDivContentSvg.setAttribute("data-bs-toggle", "modal");

        getDivContentSvg.classList.remove("play");
        getDivContentSvg.classList.add("pause");

        getDivContentSvg.classList.remove("removePlayHover");
        getDivContentSvg.classList.remove("addPauseHover");

        getDivContentSvg.classList.add("addPlayingHover");
        getDivContentSvg.classList.add("removePauseHover");
      }
    }
  }
}

//  **************************************************** FUNCTION FOR FLASHCARD   ****************************************************
function showFlashCardModal(id) {
  createFlashCard(id);
  document.querySelector("#modalword").style.display = "block";
}
function hideFlashCardModal() {
  document.querySelector("#modalword").style.display = "none";
}

//  **************************************************** FUNCTION ON THE IMAGE TAG ON PLAY LIST  ****************************************************
function togglePlay(clickedId) {
  setMusicHasBeenCalled(clickedId);

  let contentActiveClass = document.querySelectorAll('div[class="active"]');

  for (let i = 0; i < contentActiveClass.length; i++) {
    contentActiveClass[i].classList.remove("active");
  }

  playAndPuaseSong();
  document.querySelector('div[id="' + clickedId + '"]').classList.add("active");
  removeSvg(clickedId);
}

function setSongInformation(clickedId) {
  let hasBeenSet = document.querySelectorAll('[setmusicHasBeenCalled="true"]');
  for (let i = 0; i < hasBeenSet.length; i++) {
    hasBeenSet[i].setAttribute("setmusicHasBeenCalled", "false");
  }

  for (let i = 0; i < data_music.length; i++) {
    if (data_music[i].id == clickedId) {
      document
        .getElementById("single-song")
        .setAttribute("src", data_music[i].audioSrc);
      document
        .getElementById("single-song-image")
        .setAttribute("src", data_music[i].image);
      document.getElementById("modalSong-title").innerHTML =
        data_music[i].title;
      document.getElementById("modalSong-artistName").innerHTML =
        data_music[i].artist;
      setText(clickedId);
      return;
    }
  }
}

function setText(clickedId) {
  let textSong = document.querySelector(".text");
  //remove all p tag (child text div)
  //e.firstElementChild can be used.
  let child = textSong.lastElementChild;
  while (child) {
    textSong.removeChild(child);
    child = textSong.lastElementChild;
  }

  let textPoemArray = data_music[clickedId - 1].textMusic.split("/");
  for (let k = 0; k < textPoemArray.length; k++) {
    let createTextLine = document.createElement("p");
    createTextLine.setAttribute("class", "textContent");
    textSong.appendChild(createTextLine);

    if (k % 2 == 0) {
      createTextLine.classList.remove("persionFont");
      createTextLine.classList.add("englishFont");

      createTextLine.innerHTML = textPoemArray[k];
    }
    if (k % 2 == 1) {
      createTextLine.classList.remove("englishFont");
      createTextLine.classList.add("persionFont");

      createTextLine.innerHTML = textPoemArray[k];
    }
  }
}

function playAndPuaseSong() {
  document.getElementById("single-song").paused
    ? document.getElementById("single-song").play()
    : document.getElementById("single-song").pause();
}

function removeSvg(clickedId) {
  let includesPlayClass = document.querySelectorAll(".play");
  let includesPauseClass = document.querySelectorAll(".pause");
  for (let i = 0; i < includesPlayClass.length; i++) {
    if (includesPlayClass[i].id == clickedId) {
      continue;
    }
    includesPlayClass[i].classList.remove("play");
  }
  for (let i = 0; i < includesPauseClass.length; i++) {
    if (includesPauseClass[i].id == clickedId) {
      continue;
    }
    includesPauseClass[i].classList.remove("pause");
  }
}

function favoritSvg(clickedId) {
  let getFavorit = document.querySelector(
    ".favoritSvg[id='" + clickedId + "']"
  );
  let getSvgFavoritSrc = getFavorit.getAttribute("src");
  let emptyHeart = "../image/svg/heart-empty.svg";
  let fullHeart = "../image/svg/heart-full.svg";

  if (getSvgFavoritSrc == emptyHeart) {
    getFavorit.setAttribute("src", fullHeart);
  }
  if (getSvgFavoritSrc == fullHeart) {
    getFavorit.setAttribute("src", emptyHeart);
  }
}

function autoPlayNextSong() {
  let aud = document.getElementById("single-song");
  //event listener : function for ended song
  aud.onended = function () {
    audioSrc = aud.getAttribute("src");
    let numberOfSongOnScreen = page_size * page_counter;
    for (let i = 0; i < data_music.length; i++) {
      if (data_music[i].audioSrc == audioSrc) {
        let currntSongId = parseInt(data_music[i].id);
        let nextSongId = currntSongId + 1;
        if (nextSongId > numberOfSongOnScreen) {
          return;
        } else {
          setSongInformation(nextSongId);
          togglePlay(nextSongId);
        }
      }
    }
  };
}
//  **************************************************** FUNCTION ON THE TEXT(LINK) TAG ON PLAY LIST  ****************************************************
function openModal(clickedId) {
  setMusicHasBeenCalled(clickedId);
  document.querySelector('div[id="' + clickedId + '"]').classList.add("active");
  document.getElementById("single-song").play();
  removeSvg(clickedId);
}
//  **************************************************** FUNCTION OF PAGINATION  ****************************************************

function setPagination(paginationIdClicked) {
  document.querySelector("li.active").classList.remove("active");
  document
    .querySelector('li[id="' + paginationIdClicked + '"]')
    .classList.add("active");
  page_counter = paginationIdClicked;
  const playList = document.querySelector(".playList");
  playList.innerHTML = "";
  setStartAndEndIndex(page_counter, page_size);
  createItemOfPlaylist(playList);

  //if click on page 1
  if (paginationIdClicked == "1") {
    let listHasId = document.querySelectorAll("li[id]");

    //if active pagination > pagination number --->az adad 3 gozashte bashim k 2 ta dot dashte bashim
    if (listHasId.length > pagination_size + 1) {
      let getDotAndFirstpage = document.querySelectorAll(".PaginationFirst");
      for (let i = 0; i < getDotAndFirstpage.length; i++) {
        getDotAndFirstpage[i].remove();
      }

      let getPaginationItem = document.querySelectorAll("li[id]");
      let getPaginationLink = document.querySelectorAll("a.page-link-num");
      let id = 1;
      for (let i = 0; i < getPaginationItem.length - 1; i++) {
        getPaginationItem[i].setAttribute("id", id);
        getPaginationLink[i].innerHTML = id;
        id++;
      }
      document.querySelector('li[id="1"]').classList.add("active");
    }

    //If the last page was part of pagination and click page one --->b 1...10,11,12 residim va 1 dot darim
    if (listHasId.length == pagination_size + 1) {
      let getDotAndFirstpage = document.querySelectorAll(".PaginationFirst");

      let getPaginationItem = document.querySelectorAll("li[id]");
      let getPaginationLink = document.querySelectorAll("a.page-link-num");
      let lastItem =
        getPaginationItem[getPaginationItem.length - 1].getAttribute("id");
      let secondItem = getPaginationItem[1].getAttribute("id");
      if (parseInt(lastItem) == page_lenght && parseInt(secondItem) != 2) {
        for (let i = 0; i < getDotAndFirstpage.length; i++) {
          getDotAndFirstpage[i].remove();
        }

        createLastPageOfPagination();
        let id = 1;
        for (let i = 1; i < getPaginationItem.length; i++) {
          getPaginationItem[i].setAttribute("id", id);
          getPaginationLink[i].innerHTML = id;
          id++;
        }
        document.querySelector('li[id="1"]').classList.add("active");
      }
    }
  }

  //if click on page 2
  if (paginationIdClicked == "2") {
    let firstItem = document.querySelector("li[id='1']");
    if (firstItem.classList.contains("PaginationFirst")) {
      let getDotAndFirstpage = document.querySelectorAll(".PaginationFirst");
      for (let i = 0; i < getDotAndFirstpage.length; i++) {
        getDotAndFirstpage[i].remove();
      }
      let getPaginationItem = document.querySelectorAll("li[id]");
      let getPaginationLink = document.querySelectorAll("a.page-link-num");
      let id = 1;
      for (let i = 0; i < getPaginationItem.length - 1; i++) {
        getPaginationItem[i].setAttribute("id", id);
        getPaginationLink[i].innerHTML = id;
        id++;
      }
      document.querySelector('li[id="1"]').classList.remove("active");
      document.querySelector('li[id="2"]').classList.add("active");
    }
  }

  //if click on last page
  if (paginationIdClicked == page_lenght) {
    let listHasId = document.querySelectorAll("li[id]");

    //if active pagination > pagination number --->az adad 3 gozashte bashim k 2 ta dot dashte bashim
    if (listHasId.length > pagination_size + 1) {
      let getDotAndLastpage = document.querySelectorAll(".PaginationLenght");
      for (let i = 0; i < getDotAndLastpage.length; i++) {
        getDotAndLastpage[i].remove();
      }

      let getPaginationItem = document.querySelectorAll("li[id]");
      let getPaginationLink = document.querySelectorAll("a.page-link-num");
      let id = page_lenght - (pagination_size - 1);
      for (let i = 1; i < getPaginationItem.length; i++) {
        getPaginationItem[i].setAttribute("id", id);
        getPaginationLink[i].innerHTML = id;
        id++;
      }
      document
        .querySelector('li[id="' + page_lenght + '"]')
        .classList.add("active");
    }

    //If the first page was part of pagination and click page one --->b 1,2,3..12 residim va 1 dot darim
    if (listHasId.length == pagination_size + 1) {
      let getDotAndLastpage = document.querySelectorAll(".PaginationLenght");

      let getPaginationItem = document.querySelectorAll("li[id]");
      let getPaginationLink = document.querySelectorAll("a.page-link-num");
      let secondItem = getPaginationItem[1].getAttribute("id");
      if (parseInt(secondItem) == 2) {
        // for (let i = 0; i < getDotAndLastpage.length; i++) {
        getDotAndLastpage[0].remove();
        // }

        let id = page_lenght - (pagination_size - 1);
        for (let i = 1; i < getPaginationItem.length; i++) {
          getPaginationItem[i].setAttribute("id", id);
          getPaginationLink[i].innerHTML = id;
          id++;
        }
        document
          .querySelector('li[id="' + page_lenght + '"]')
          .classList.add("active");

        createFirstPageOfPagination();
      }
    }
  }

  if (paginationIdClicked >= pagination_size) {
    let firstItem = document.querySelector("li[id='1']");
    if (
      paginationIdClicked == pagination_size &&
      firstItem.classList.contains("PaginationFirst")
    ) {
      let getPaginationItem = document.querySelectorAll("li[id]");
      let getPaginationLink = document.querySelectorAll("a.page-link-num");
      let id = 2;
      for (let i = 1; i < getPaginationItem.length - 1; i++) {
        getPaginationItem[i].setAttribute("id", id);
        getPaginationLink[i].innerHTML = id;
        id++;
      }
      document.querySelector('li[id="2"]').classList.remove("active");
      document
        .querySelector('li[id="' + pagination_size + '"]')
        .classList.add("active");
      return;
    }

    //if click on 10
    let lastItem = document.querySelector("li[id='" + page_lenght + "']");
    if (
      paginationIdClicked == page_lenght - (pagination_size - 1) &&
      lastItem.classList.contains("PaginationLenght")
    ) {
      displayNextPages();
    }
    if (
      paginationIdClicked == page_lenght - (pagination_size - 1) &&
      lastItem.classList.contains("PaginationLenght") == false
    ) {
      createLastPageOfPagination();
    }

    if (paginationIdClicked > page_lenght - (pagination_size - 1)) {
      //if click on page 11
      if (paginationIdClicked == page_lenght - 1) {
        let getPaginationItem = document.querySelectorAll("li[id]");
        let getPaginationLink = document.querySelectorAll("a.page-link-num");
        //If the last page was part of pagination
        if (
          getPaginationItem[1].getAttribute("id") ==
          parseInt(page_lenght - (pagination_size - 1))
        ) {
          return;
        } else {
          let getDotAndLastpage =
            document.querySelectorAll(".PaginationLenght");
          for (let i = 0; i < getDotAndLastpage.length; i++) {
            getDotAndLastpage[i].remove();
          }

          for (let i = 1; i < getPaginationItem.length; i++) {
            let id = parseInt(getPaginationItem[i].getAttribute("id"));
            getPaginationItem[i].setAttribute("id", id + 1);
            getPaginationLink[i].innerHTML = id + 1;
          }
          document.querySelector("li.active").classList.remove("active");
          let activeId = parseInt(page_lenght) - 1;
          document
            .querySelector('li[id="' + activeId + '"]')
            .classList.add("active");
        }
      }
    } else {
      displayNextPages();
    }
    createFirstPageOfPagination();
  }
}

function previousPagination() {
  //get current active pagination
  let activePagination = document.querySelector("li.active");
  let activeId = activePagination.getAttribute("id");

  let getPaginationItem = document.querySelectorAll("li[id]");
  let getPaginationLink = document.querySelectorAll("a.page-link-num");
  let getFirstLiId = getPaginationItem[0].getAttribute("id");

  activePagination.classList.remove("active");
  activeId = parseInt(activeId) - 1;

  document.querySelector("li[id='" + activeId + "']").classList.add("active");
  setPagination(activeId);
}

function nextPagination() {
  //get current active pagination
  let activePagination = document.querySelector("li.active");
  let activeId = activePagination.getAttribute("id");

  let getPaginationItem = document.querySelectorAll("li[id]");
  let getPaginationLink = document.querySelectorAll("a.page-link-num");
  let getLastestLiId =
    getPaginationItem[getPaginationItem.length - 1].getAttribute("id");

  //If the length of the pagination pages was larger than the size of the pagination display numbers
  if (page_lenght > pagination_size) {
    let idCounter = parseInt(activeId) + 1;

    activePagination.classList.remove("active");
    activeId = parseInt(activeId) + 1;

    document.querySelector("li[id='" + activeId + "']").classList.add("active");
    setPagination(activeId);
  }
  //If the length of the pagination pages was equal or smaler than the size of the pagination display numbers
  else {
    if (getLastestLiId != page_lenght) {
      if (activeId == getLastestLiId) {
        for (let i = 0; i < getPaginationItem.length; i++) {
          var id = parseInt(getPaginationItem[i].getAttribute("id"));
          if (id < page_lenght) {
            getPaginationItem[i].setAttribute("id", id + 1);
          } else {
            return;
          }
        }
        for (let i = 0; i < getPaginationLink.length; i++) {
          var id = parseInt(getPaginationItem[i].getAttribute("id"));
          if (id <= page_lenght) {
            getPaginationLink[i].innerHTML = id;
          } else {
            return;
          }
        }
        setPagination(activeId);
      }
    }

    activePagination.classList.remove("active");
    activeId = parseInt(activeId) + 1;

    document.querySelector("li[id='" + activeId + "']").classList.add("active");
    setPagination(activeId);
  }
}

function createLastPageOfPagination() {
  let paginationContent = document.querySelector(".pagination");
  let nextBtnPagination = document.querySelector(
    "li[onclick='nextPagination()']"
  );

  if (page_lenght > pagination_size) {
    //CREATE PAGINATION _ pagination size
    const paginationLastPageItem = document.createElement("li");
    paginationLastPageItem.setAttribute("class", "page-item");
    paginationLastPageItem.classList.add("PaginationLenght");
    paginationLastPageItem.setAttribute("id", page_lenght);
    paginationLastPageItem.setAttribute("onclick", "setPagination(this.id)");
    paginationContent.insertBefore(paginationLastPageItem, nextBtnPagination);

    const paginationLastPageLink = document.createElement("a");
    paginationLastPageLink.setAttribute("class", "page-link");
    paginationLastPageLink.classList.add("PaginationLenght");
    paginationLastPageLink.classList.add("page-link-num");
    paginationLastPageLink.setAttribute("href", "#");
    paginationLastPageLink.innerHTML = page_lenght;
    paginationLastPageItem.appendChild(paginationLastPageLink);

    const paginationDot = document.createElement("li");
    paginationDot.setAttribute("class", "page-item");
    paginationDot.classList.add("PaginationLenght");
    paginationDot.innerHTML = "...";
    paginationContent.insertBefore(paginationDot, paginationLastPageItem);
  } else {
    return;
  }
}
function createFirstPageOfPagination() {
  let paginationContent = document.querySelector(".pagination");
  let prevBtnPagination = document.querySelector(
    "li[onclick='previousPagination()']"
  );

  if (page_lenght > pagination_size) {
    let activePagination = document.querySelector("li.active");
    let activeId = activePagination.getAttribute("id");
    if (activeId == pagination_size) {
      const paginationFirstPageItem = document.createElement("li");
      paginationFirstPageItem.setAttribute("class", "page-item");
      paginationFirstPageItem.classList.add("PaginationFirst");
      paginationFirstPageItem.setAttribute("id", "1");
      paginationFirstPageItem.setAttribute("onclick", "setPagination(this.id)");
      prevBtnPagination.after(paginationFirstPageItem);

      const paginationFirstPageLink = document.createElement("a");
      paginationFirstPageLink.setAttribute("class", "page-link");
      paginationFirstPageLink.classList.add("PaginationFirst");
      paginationFirstPageLink.classList.add("page-link-num");
      paginationFirstPageLink.setAttribute("href", "#");
      paginationFirstPageLink.innerHTML = 1;
      paginationFirstPageItem.appendChild(paginationFirstPageLink);

      const paginationDot = document.createElement("li");
      paginationDot.setAttribute("class", "page-item");
      paginationDot.classList.add("PaginationFirst");
      paginationDot.innerHTML = "...";
      paginationFirstPageItem.after(paginationDot);
    } else if (activeId == page_lenght) {
      let getFirstElement = document.querySelector('li[id="1"]');
      let paginationDot = document.createElement("li");
      paginationDot.setAttribute("class", "page-item");
      paginationDot.classList.add("PaginationFirst");
      paginationDot.innerHTML = "...";
      getFirstElement.after(paginationDot);
    }
  } else {
    return;
  }
}

function displayNextPages() {
  //get current active pagination
  let activePagination = document.querySelector("li.active");
  let activeId = activePagination.getAttribute("id");

  let getPaginationItem = document.querySelectorAll("li[id]");
  let getPaginationLink = document.querySelectorAll("a.page-link-num");
  let getLastestLiId =
    getPaginationItem[getPaginationItem.length - 1].getAttribute("id");

  //If the length of the pagination pages was larger than the size of the pagination display numbers
  if (page_lenght > pagination_size) {
    if (activeId >= pagination_size && activeId <= page_lenght) {
      let idCounter = parseInt(activeId) - 1;
      let counter = 0;
      if (activeId == pagination_size) {
        counter = 0;
      } else {
        counter = 1;
      }

      for (let i = counter; i < getPaginationItem.length - 1; i++) {
        getPaginationItem[i].setAttribute("id", idCounter);
        getPaginationLink[i].innerHTML = idCounter;
        idCounter++;
      }
      activePagination.classList.remove("active");
      activeId = parseInt(activeId);

      document
        .querySelector("li[id='" + activeId + "']")
        .classList.add("active");
    }
  }
}

function setPlayerList() {
  let playerIdChildren = document.getElementById(
    "contentMusicPlaylist"
  ).children;

  for (let i = 0; i < playerIdChildren.length; i++) {
    let playerId = document
      .getElementById("contentMusicPlaylist")
      .children[i].getAttribute("id");

    if (playerId == "playerList") {
      data_music = data_music_player;
      optionSong = optionSong_player;
      favoritHeart = "../image/svg/heart-empty.svg";
    } else if (playerId == "favoritPlayList") {
      data_music = data_music_favorit;
      optionSong = optionSong_favorit;
      favoritHeart = "../image/svg/heart-full.svg";
    }
  }
}
