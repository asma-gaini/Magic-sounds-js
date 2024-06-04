const otherAppInfo = [
  {
    otherApp_name: "google",
    otherApp_outlineColor: "btn-outline-danger",
    otherApp_target: "#!",
    otherApp_svgSrc: "../image/svg/google.svg",
  },
  {
    otherApp_name: "facebook",
    otherApp_outlineColor: "btn-outline-primary",
    otherApp_target: "#!",
    otherApp_svgSrc: "../image/svg/facebook.svg",
  },
  {
    otherApp_name: "twitter",
    otherApp_outlineColor: "btn-outline-info",
    otherApp_target: "#!",
    otherApp_svgSrc: "../image/svg/twitter.svg",
  },
  {
    otherApp_name: "apple",
    otherApp_outlineColor: "btn-outline-dark",
    otherApp_target: "#!",
    otherApp_svgSrc: "../image/svg/apple.svg",
  },
];

function createLogin() {
  //
  let loginSection = document.createElement("section");

  loginSection.setAttribute("class", "bg-light");
  loginSection.classList.add("p-3");
  loginSection.classList.add("p-md-4");
  loginSection.classList.add("p-xl-5");

  paginationItem.appendChild(loginSection);

  //
  let containerDiv = document.createElement("div");

  containerDiv.setAttribute("class", "container");

  loginSection.appendChild(containerDiv);
  //
  let justifyCenterDiv = document.createElement("div");

  justifyCenterDiv.setAttribute("class", "row");
  justifyCenterDiv.classList.add("justify-content-center");

  containerDiv.appendChild(justifyCenterDiv);
  //
  let outlineDiv = document.createElement("div");

  outlineDiv.setAttribute("class", "col-12");
  outlineDiv.classList.add("col-md-9");
  outlineDiv.classList.add("col-lg-7");
  outlineDiv.classList.add("col-xl-6");
  outlineDiv.classList.add("col-xxl-5");

  justifyCenterDiv.appendChild(outlineDiv);
  //
  let borderDiv = document.createElement("div");

  borderDiv.setAttribute("class", "card");
  borderDiv.classList.add("border");
  borderDiv.classList.add("border-light-subtle");
  borderDiv.classList.add("rounded-4");

  outlineDiv.appendChild(borderDiv);
  //
  let contentDiv = document.createElement("div");

  contentDiv.setAttribute("class", "card-body");
  contentDiv.classList.add("p-3");
  contentDiv.classList.add("p-md-4");
  contentDiv.classList.add("p-xl-5");

  borderDiv.appendChild(contentDiv);

  createLoginContent(contentDiv);
}

function createLoginContent(contentDiv) {
  createLoginHeader(contentDiv);
  createLoginForm(contentDiv);
  createLoginOption(contentDiv);
  createLoginWithOtherApp(contentDiv);
}

function createLoginHeader(contentDiv) {
  //row
  let row = document.createElement("div");

  row.setAttribute("class", "row");

  contentDiv.appendChild(row);

  //bootstrap classes
  let bootstrapDiv = document.createElement("div");

  bootstrapDiv.setAttribute("class", "col-12");

  row.appendChild(bootstrapDiv);

  //content Header information
  let contentHeaderDiv = document.createElement("div");

  contentHeaderDiv.setAttribute("class", "mb-5");

  bootstrapDiv.appendChild(contentHeaderDiv);

  //logo of header
  let logoDiv = document.createElement("div");

  logoDiv.setAttribute("class", "text-center");
  logoDiv.classList.add("mb-4");

  contentHeaderDiv.appendChild(logoDiv);

  //logo of header --> image
  const logo = document.createElement("img");

  logo.setAttribute("src");
  logo.setAttribute("class", "loginLogo");
  logo.setAttribute("alt", "logo");

  logoDiv.appendChild(logo);

  //header text
  let headerText = document.createElement("h4");

  headerText.setAttribute("class", "text-center");
  headerText.innerHTML = " Welcome back you've been missed!";

  contentHeaderDiv.appendChild(headerText);
}

function createLoginForm(contentDiv) {
  //form
  let form = document.createElement("form");

  form.setAttribute("action", "#!");

  contentDiv.appendChild(form);

  //row
  let row = document.createElement("div");

  row.setAttribute("class", "row");
  row.classList.add("gy-3");
  row.classList.add("overflow-hidden");

  form.appendChild(row);

  //bootstrap classes
  let bootstrapDiv = document.createElement("div");

  bootstrapDiv.setAttribute("class", "col-12");

  row.appendChild(bootstrapDiv);
}

function createLoginOption(contentDiv) {
  //row
  let row = document.createElement("div");

  row.setAttribute("class", "row");

  contentDiv.appendChild(row);

  //bootstrap classes
  let bootstrapDiv = document.createElement("div");

  bootstrapDiv.setAttribute("class", "col-12");

  row.appendChild(bootstrapDiv);

  //hr line
  let hrLine = document.createElement("hr");

  hrLine.setAttribute("class", "mt-5");
  hrLine.classList.add("mb-4");
  hrLine.classList.add("border-secondary-subtle");

  bootstrapDiv.appendChild(hrLine);

  //div content option link
  let divContentLink = document.createElement("div");

  divContentLink.setAttribute("class", "d-flex");
  divContentLink.classList.add("gap-2");
  divContentLink.classList.add("gap-md-4");
  divContentLink.classList.add("flex-column");
  divContentLink.classList.add("flex-md-row");
  divContentLink.classList.add("justify-content-md-end");

  bootstrapDiv.appendChild(divContentLink);

  //option link --->create new account
  let newAccountLink = document.createElement("a");

  newAccountLink.setAttribute("href", "#!");
  newAccountLink.setAttribute("class", "link-secondary");
  newAccountLink.classList.add("text-decoration-none");
  newAccountLink.innerHTML = "Create new account";

  divContentLink.appendChild(newAccountLink);

  //option link --->forget Password
  let forgetPassLink = document.createElement("a");

  forgetPassLink.setAttribute("href", "#!");
  forgetPassLink.setAttribute("class", "link-secondary");
  forgetPassLink.classList.add("text-decoration-none");
  forgetPassLink.innerHTML = "Forgot password";

  divContentLink.appendChild(forgetPassLink);
}

function createLoginWithOtherApp() {
  //row
  let row = document.createElement("div");

  row.setAttribute("class", "row");

  contentDiv.appendChild(row);

  //bootstrap classes
  let bootstrapDiv = document.createElement("div");

  bootstrapDiv.setAttribute("class", "col-12");

  row.appendChild(bootstrapDiv);

  //text
  let text = document.createElement("p");

  text.setAttribute("class", "mt-5");
  text.classList.add("mb-5");
  text.innerHTML = "Or continue with : ";

  bootstrapDiv.appendChild(text);

  //div content other app link
  let divContentOtherLink = document.createElement("div");

  divContentOtherLink.setAttribute("class", "d-flex");
  divContentOtherLink.classList.add("gap-2");
  divContentOtherLink.classList.add("gap-sm-3");
  divContentOtherLink.classList.add("justify-content-center");

  bootstrapDiv.appendChild(divContentOtherLink);

  for (let i = 0; i < otherAppInfo.length; i++) {
    //other link
    let otherLink = document.createElement("a");

    otherLink.setAttribute("href", otherAppInfo[i].otherApp_target);
    otherLink.setAttribute("class", "btn");
    otherLink.classList.add("btn-lg");
    otherLink.classList.add(otherAppInfo[i].otherApp_outlineColor);
    otherLink.classList.add("p-3");
    otherLink.classList.add("lh-1");

    divContentOtherLink.appendChild(otherLink);

    //otherLink --> svg
    const svg = document.createElement("img");

    svg.setAttribute("src", otherAppInfo[i].otherApp_svgSrc);
    svg.setAttribute("class", "loginLogo");
    svg.setAttribute("alt", otherAppInfo[i].otherApp_name);

    otherLink.appendChild(svg);
  }
}
