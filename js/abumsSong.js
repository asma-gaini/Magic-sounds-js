//  **************************************************** DATA _ ALBUMS INFORMATION  ****************************************************
const albumsInfo = {
  header: { albumsHeaderName: "Albums" },
  albumsCart: [
    {
      albumsName: "babak jahanbakhsh",
      albumsImageSrc: "../image/albums cover/babak jahanbakhsh.jpg",
      albumsTarget: "#",
      numberOfSong: "10",
      albumsId: "1",
    },
    {
      albumsName: "farzad farzin",
      //   albumsImageSrc: "../image/albums cover/farzadfarzin.jpg",
      albumsImageSrc: "../image/albums cover/babak jahanbakhsh.jpg",

      albumsTarget: "#",
      numberOfSong: "8",
      albumsId: "2",
    },
    {
      albumsName: "shahin najafi",
      //   albumsImageSrc: "../image/albums cover/shahin najafi.jpg",
      albumsImageSrc: "../image/albums cover/babak jahanbakhsh.jpg",

      albumsTarget: "#",
      numberOfSong: "5",
      albumsId: "3",
    },
    {
      albumsName: "salar aghili",
      //   albumsImageSrc: "../image/albums cover/salar aghili.webp",
      albumsImageSrc: "../image/albums cover/babak jahanbakhsh.jpg",

      albumsTarget: "#",
      numberOfSong: "13",
      albumsId: "4",
    },
  ],
};

window.onload = createAlbumsTemplate();
//  **************************************************** CREATE TEMPLATE _ CREATE ALBUMS SECTION    ****************************************************
function createAlbumsTemplate() {
  const template = document.createElement("template");

  template.innerHTML = createAlbumsSection();
}

//  **************************************************** CREATE ELEMENT _ CREATE ALBUMS SECTION  ****************************************************
function createAlbumsSection() {
  let getAlbumsId = document.querySelector("#albums");
  //CREATE content albums
  let albumsContentDiv = document.createElement("div");

  albumsContentDiv.setAttribute("class", "albumsContent");

  getAlbumsId.appendChild(albumsContentDiv);

  albumsHeader(albumsContentDiv);
  albums(albumsContentDiv);
}

function albumsHeader(albumsContentDiv) {
  //CREATE header albums
  let headerAlbumsDiv = document.createElement("div");

  headerAlbumsDiv.setAttribute("class", "albumsHeader");

  albumsContentDiv.appendChild(headerAlbumsDiv);

  //CREATE header albums text
  let headerText = document.createElement("h3");

  headerText.setAttribute("class", "headerText");
  headerText.innerHTML = albumsInfo.header.albumsHeaderName;

  headerAlbumsDiv.appendChild(headerText);
}
function albums(albumsContentDiv) {
  //CREATE albums
  let albumsDiv = document.createElement("div");

  albumsDiv.setAttribute("class", "albums");

  albumsContentDiv.appendChild(albumsDiv);

  albumsCart(albumsDiv);
}
function albumsCart(albumsDiv) {
  for (let i = 0; i < albumsInfo.albumsCart.length; i++) {
    //CREATE albums cart link
    let albumsCartLink = document.createElement("a");

    albumsCartLink.setAttribute("href", albumsInfo.albumsCart[i].albumsTarget);
    albumsCartLink.setAttribute("class", "albumLink");
    albumsCartLink.setAttribute("id", albumsInfo.albumsCart[i].albumsId);

    albumsDiv.appendChild(albumsCartLink);

    //CREATE albums cart
    let albumsCart = document.createElement("div");

    albumsCart.setAttribute("class", "albumCart");

    albumsCartLink.appendChild(albumsCart);

    //CREATE albums image
    const albumsImage = document.createElement("img");

    albumsImage.setAttribute("src", albumsInfo.albumsCart[i].albumsImageSrc);
    albumsImage.setAttribute("alt", albumsInfo.albumsCart[i].albumsName);
    albumsImage.setAttribute("class", "imageAlbum");

    albumsCart.appendChild(albumsImage);

    //CREATE albums information
    let albumsInfoDiv = document.createElement("div");

    albumsInfoDiv.setAttribute("class", "albumsInfo");

    albumsCart.appendChild(albumsInfoDiv);

    //CREATE albums artist name
    let albumsArtist = document.createElement("h3");

    albumsArtist.setAttribute("class", "artistAlbum");
    albumsArtist.innerHTML = albumsInfo.albumsCart[i].albumsName;

    albumsInfoDiv.appendChild(albumsArtist);

    //CREATE number of song
    let numberSong = document.createElement("p");

    numberSong.setAttribute("class", "numberOfSong");
    numberSong.innerHTML = albumsInfo.albumsCart[i].numberOfSong + " music";

    albumsInfoDiv.appendChild(numberSong);
  }
}
