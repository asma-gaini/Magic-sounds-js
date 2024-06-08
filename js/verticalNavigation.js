//  **************************************************** DATA _ DASHBOARD INFORMATION  ****************************************************
const vertical_navigation = {
  header_VNav: {
    brandName: "menu",
    logoImage: "",
  },
  information_VNav: [
    {
      mainId: "1",
      name: "Home",
      svg: "../image/svg/home-svgrepo-com.svg",
      target: "#",
      subid: "null",
      subLink: "null",
    },
    {
      mainId: "2",
      name: "Dashboard",
      svg: "../image/svg/dashboard.svg",
      target: "#",
      subid: "sub1",
      subLink: [
        {
          mainId: "3",
          name: "item 1",
        },
        {
          mainId: "4",
          name: "item 2",
        },
      ],
    },
    {
      mainId: "5",
      name: "Order",
      svg: "../image/svg/cart-check-svgrepo-com.svg",
      target: "#",
      subid: "null",
      subLink: "null",
    },
  ],
};

window.onload = createVerticalNavigationTemplate();
//  **************************************************** CREATE TEMPLATE _ CREATE VERTICAL NAVIGATION(NV)   ****************************************************
function createVerticalNavigationTemplate() {
  const template = document.createElement("template");

  template.innerHTML = createVerticalNavigation();

  //   var verticalNavigation = document.getElementById("verticalNavigation");
  //   verticalNavigation.appendChild(template.content);
}

//  **************************************************** CREATE ELEMENT _ CREATE VERTICAL NAVIGATION(NV)  ****************************************************
function createVerticalNavigation() {
  let verticalNavigationId = document.querySelector("#verticalNavigation");

  //   const divBox = document.createElement("div");

  verticalNavigationId.setAttribute("class", "col-auto");
  verticalNavigationId.classList.add("col-md-3");
  verticalNavigationId.classList.add("col-xl-2");
  verticalNavigationId.classList.add("px-sm-2");
  verticalNavigationId.classList.add("px-0");
  verticalNavigationId.classList.add("bg-dark");

  //   verticalNavigationId.appendChild(divBox);

  createBox_VerticalNavigation(verticalNavigationId);
}
function createBox_VerticalNavigation(verticalNavigationId) {
  const divContentNav = document.createElement("div");

  divContentNav.setAttribute("class", "d-flex");
  divContentNav.classList.add("flex-column");
  divContentNav.classList.add("align-items-center");
  divContentNav.classList.add("align-items-sm-start");
  divContentNav.classList.add("px-3");
  divContentNav.classList.add("pt-2");
  divContentNav.classList.add("text-white");
  divContentNav.classList.add("min-vh-100");

  verticalNavigationId.appendChild(divContentNav);
  setHeader_VerticalNavigation(divContentNav);
  createList_VerticalNavigation(divContentNav);
}

function setHeader_VerticalNavigation(divContentNav) {
  const headerNavSpan = document.createElement("span");

  headerNavSpan.setAttribute("class", "fs-5");
  headerNavSpan.classList.add("d-none");
  headerNavSpan.classList.add("d-sm-inline");
  headerNavSpan.innerHTML = "Menu";

  divContentNav.appendChild(headerNavSpan);
}

function createList_VerticalNavigation(divContentNav) {
  const dashboardUl = document.createElement("ul");

  dashboardUl.setAttribute("class", "nav");
  dashboardUl.classList.add("nav-pills");
  dashboardUl.classList.add("flex-column");
  dashboardUl.classList.add("mb-sm-auto");
  dashboardUl.classList.add("mb-0");
  dashboardUl.classList.add("align-items-center");
  dashboardUl.classList.add("align-items-sm-start");
  dashboardUl.setAttribute("id", "menu");

  divContentNav.appendChild(dashboardUl);

  //   const dashboardUl = document.querySelector("ul[id='menu']");
  for (let i = 0; i < vertical_navigation.information_VNav.length; i++) {
    //CREATE list
    const list_VN = document.createElement("li");
    dashboardUl.appendChild(list_VN);

    //CREATE link
    const link_VN = document.createElement("a");

    link_VN.setAttribute(
      "href",
      vertical_navigation.information_VNav[i].target
    );
    link_VN.setAttribute("class", "nav-link");
    link_VN.classList.add("align-middle");
    link_VN.classList.add("px-0");
    link_VN.classList.add("setColor");
    link_VN.setAttribute("id", vertical_navigation.information_VNav[i].mainId);

    list_VN.appendChild(link_VN);

    //CREATE svg
    const svg = document.createElement("img");

    svg.setAttribute("src", vertical_navigation.information_VNav[i].svg);
    svg.setAttribute("class", "dashboardSvg");
    console;

    link_VN.appendChild(svg);

    //CREATE name item
    const name = document.createElement("span");

    name.setAttribute("class", "ms-1");
    name.classList.add("d-none");
    name.classList.add("d-sm-inline");
    name.innerHTML = vertical_navigation.information_VNav[i].name;

    link_VN.appendChild(name);

    //CREATE sublink
    if (vertical_navigation.information_VNav[i].subLink != "null") {
      const linkContentSub = document.querySelector(
        'a[id="' + vertical_navigation.information_VNav[i].mainId + '"]'
      );
      linkContentSub.setAttribute(
        "href",
        "#" + vertical_navigation.information_VNav[i].subid
      );
      linkContentSub.setAttribute("data-bs-toggle", "collapse");

      //ul sublink
      const sublinkUl = document.createElement("ul");

      sublinkUl.setAttribute("class", "collapse");
      sublinkUl.classList.add("show");
      sublinkUl.classList.add("nav");
      sublinkUl.classList.add("flex-column");
      // sublinkUl.classList.add("ms-1");
      sublinkUl.classList.add("subLinkContent");
      sublinkUl.setAttribute("data-bs-parent", "#menu");
      sublinkUl.setAttribute(
        "id",
        vertical_navigation.information_VNav[i].subid
      );

      linkContentSub.parentElement.appendChild(sublinkUl);

      for (
        let j = 0;
        j < vertical_navigation.information_VNav[i].subLink.length;
        j++
      ) {
        //list sub list
        const subList_VN = document.createElement("li");
        sublinkUl.appendChild(subList_VN);

        //CREATE sublink
        const sublink_VN = document.createElement("a");

        sublink_VN.setAttribute("href", "#");
        sublink_VN.setAttribute("class", "nav-link");
        sublink_VN.classList.add("px-0");
        sublink_VN.setAttribute(
          "id",
          vertical_navigation.information_VNav[i].subLink[j].mainId
        );

        subList_VN.appendChild(sublink_VN);

        //CREATE sub name item
        const subName = document.createElement("span");

        subName.setAttribute("class", "d-none");
        subName.classList.add("d-sm-inline");
        subName.innerHTML =
          vertical_navigation.information_VNav[i].subLink[j].name;

        sublink_VN.appendChild(subName);
      }
    }
  }
}
