//  **************************************************** DATA _ LANGUAGE OPTION  ****************************************************
const language = [
  {
    languageName: "English",
    languageNumber: "1",
  },
  {
    languageName: "persian",
    languageNumber: "2",
  },
  {
    languageName: "china",
    languageNumber: "3",
  },
];

window.onload = createUploaderTemplate();
//  **************************************************** CREATE TEMPLATE _ CREATE LOGIN FORM    ****************************************************
function createUploaderTemplate() {
  const template = document.createElement("template");

  template.innerHTML = createUploaderForm();
}

//  **************************************************** CREATE ELEMENT _ CREATE LOGIN FORM  ****************************************************
function createUploaderForm() {
  let getUploaderId = document.querySelector("#uploader");
  //
  let containerDiv = document.createElement("div");

  containerDiv.setAttribute("class", "container");
  containerDiv.classList.add("mt-5");
  containerDiv.classList.add("mt-bg");

  getUploaderId.appendChild(containerDiv);
  //
  let mainRow = document.createElement("div");

  mainRow.setAttribute("class", "row");

  containerDiv.appendChild(mainRow);
  //
  let mainCol = document.createElement("div");

  mainCol.setAttribute("class", "col-10");

  mainRow.appendChild(mainCol);

  //form
  let form = document.createElement("form");

  form.setAttribute("class", "row");
  form.classList.add("g-3");

  mainCol.appendChild(form);
  //song name section
  let cloNameDiv = document.createElement("div");

  cloNameDiv.setAttribute("class", "col-md-6");

  form.appendChild(cloNameDiv);
  //label namesong html
  let labelNameSong = document.createElement("label");

  labelNameSong.setAttribute("for", "songName");
  labelNameSong.setAttribute("class", "form-label");
  labelNameSong.innerHTML = "Song name:";

  cloNameDiv.appendChild(labelNameSong);

  //input song name html
  let inputSongName = document.createElement("input");

  inputSongName.setAttribute("type", "text");
  inputSongName.setAttribute("class", "form-control");
  inputSongName.classList.add("inputUploader")
  inputSongName.setAttribute("id", "songName");
  inputSongName.setAttribute("placeholder", "Enter Song Name");

  cloNameDiv.appendChild(inputSongName);

  //artist name section
  let cloArtistDiv = document.createElement("div");

  cloArtistDiv.setAttribute("class", "col-md-6");

  form.appendChild(cloArtistDiv);
  //label artist name html
  let labelArtistName = document.createElement("label");

  labelArtistName.setAttribute("for", "artistName");
  labelArtistName.setAttribute("class", "form-label");
  labelArtistName.innerHTML = "Artist name:";

  cloArtistDiv.appendChild(labelArtistName);

  //input artist name html
  let inputArtistName = document.createElement("input");

  inputArtistName.setAttribute("type", "text");
  inputArtistName.setAttribute("class", "form-control");
  inputArtistName.setAttribute("id", "artistName");
  inputArtistName.setAttribute("placeholder", "Enter Artist Name");

  cloArtistDiv.appendChild(inputArtistName);

  //artist music address section
  let cloMusicAdressDiv = document.createElement("div");

  cloMusicAdressDiv.setAttribute("class", "col-12");

  form.appendChild(cloMusicAdressDiv);
  //label music address html
  let labelMusicAddress = document.createElement("label");

  labelMusicAddress.setAttribute("for", "musicAddress");
  labelMusicAddress.setAttribute("class", "form-label");
  labelMusicAddress.innerHTML = "Music address:";

  cloMusicAdressDiv.appendChild(labelMusicAddress);

  //input music address html
  let inputMusicAddress = document.createElement("input");

  inputMusicAddress.setAttribute("type", "text");
  inputMusicAddress.setAttribute("class", "form-control");
  inputMusicAddress.setAttribute("id", "musicAddress");
  inputMusicAddress.setAttribute("placeholder", "Link Address");

  cloMusicAdressDiv.appendChild(inputMusicAddress);

  //artist image upload section
  let cloImageUploadDiv = document.createElement("div");

  cloImageUploadDiv.setAttribute("class", "col-md-6");

  form.appendChild(cloImageUploadDiv);
  //label image upload html
  let labelImageUpload = document.createElement("label");

  labelImageUpload.setAttribute("for", "imageUplode");
  labelImageUpload.setAttribute("class", "form-label");
  labelImageUpload.innerHTML = "image:";

  cloImageUploadDiv.appendChild(labelImageUpload);

  //input music address html
  let inputImageUpload = document.createElement("input");

  inputImageUpload.setAttribute("type", "file");
  inputImageUpload.setAttribute("class", "form-control");
  inputImageUpload.setAttribute("id", "imageUplode");

  cloImageUploadDiv.appendChild(inputImageUpload);

  //language section
  let cloLanguageDiv = document.createElement("div");

  cloLanguageDiv.setAttribute("class", "col-md-4");

  form.appendChild(cloLanguageDiv);
  //label image upload html
  let labelLanguage = document.createElement("label");

  labelLanguage.setAttribute("for", "language");
  labelLanguage.setAttribute("class", "form-label");
  labelLanguage.innerHTML = "Language";

  cloLanguageDiv.appendChild(labelLanguage);

  //select language html
  let selectLanguage = document.createElement("select");

  selectLanguage.setAttribute("class", "form-select");
  selectLanguage.setAttribute("id", "language");

  cloLanguageDiv.appendChild(selectLanguage);
  //language option
  let optinLanguage = document.createElement("option");

  optinLanguage.setAttribute("selected", "selected");
  optinLanguage.innerHTML = "Choose...";

  selectLanguage.appendChild(optinLanguage);
  for (let i = 0; i < language.length; i++) {
    let optinLanguage = document.createElement("option");

    optinLanguage.setAttribute("class", language[i].languageName);
    optinLanguage.setAttribute("lanNumber", language[i].languageNumber);
    optinLanguage.innerHTML = language[i].languageName;

    selectLanguage.appendChild(optinLanguage);
  }

  // checkBox information section
  let cloCheckboxDiv = document.createElement("div");

  cloCheckboxDiv.setAttribute("class", "col-12");

  form.appendChild(cloCheckboxDiv);
  // checkBox information form section
  let cloCheckboxFormDiv = document.createElement("div");

  cloCheckboxFormDiv.setAttribute("class", "form-check");

  cloCheckboxDiv.appendChild(cloCheckboxFormDiv);
  //input checkBox information html
  let inputCheckbox = document.createElement("input");

  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("class", "form-check-input");
  inputCheckbox.setAttribute("id", "agree");

  cloCheckboxFormDiv.appendChild(inputCheckbox);
  //label checkBox information html
  let labelCheckbox = document.createElement("label");

  labelCheckbox.setAttribute("for", "agree");
  labelCheckbox.setAttribute("class", "form-check-label");
  labelCheckbox.innerHTML = "I Agree all the information is correct";

  cloCheckboxFormDiv.appendChild(labelCheckbox);

  // submit section
  let cloSubmitDiv = document.createElement("div");

  cloSubmitDiv.setAttribute("class", "col-12");

  form.appendChild(cloSubmitDiv);
  //submit button html
  let submitBtn = document.createElement("button");

  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("class", "btn");
  submitBtn.classList.add("btn-primary");
  submitBtn.innerHTML = "Uploade music";

  cloSubmitDiv.appendChild(submitBtn);
}
