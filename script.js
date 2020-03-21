const verticalIphone = document.getElementById("vertical");
verticalIphone.src = "./assets/img/iphone_vertical.png";

const horizontalIphone = document.getElementById("horizontal");
horizontalIphone.src = "./assets/img/iphone_horizontal.png";

currentVerticalScreen = 0;
currentHorizontalScreen = 0;

function changeIphoneBackground(iphone) {
  const currentIphone = document.getElementById(iphone);

  switch (iphone) {
    case "vertical":
      currentIphone.src = "./assets/img/iphone_vertical_black.png";
      currentIphone.id = iphone + "black";
      currentVerticalScreen = 1;
      break;

    case "horizontal":
      horizontalIphone.src = "./assets/img/iphone_horizontal_black.png";
      currentIphone.id = iphone + "black";
      currentHorizontalScreen = 1;
      break;

    case "verticalblack":
      currentIphone.src = "./assets/img/iphone_vertical.png";
      currentIphone.id = "vertical";
      currentVerticalScreen = 0;
      break;

    case "horizontalblack":
      horizontalIphone.src = "./assets/img/iphone_horizontal.png";
      currentIphone.id = "horizontal";
      currentHorizontalScreen = 0;
      break;

    default:
      break;
  }
}

const navigation = document.getElementById("navigation");

navigation.addEventListener("click", event => {
  navigation
    .querySelectorAll("a")
    .forEach(item => item.classList.remove("active_menu"));
  event.target.classList.add("active_menu");
});

form = document.getElementById("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  return false;
});

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const closeBtn = document.getElementsByClassName("close")[0];

function validateEmail(email) {
  let check = /@\w/;
  return check.test(email);
}

btn.onclick = () => {
  const subject = document.getElementById("subject").value;
  const describe = document.getElementById("describe").value;

  if (
    document.getElementById("name").value == "" ||
    document.getElementById("email").value == "" ||
    validateEmail(document.getElementById("email").value) == false
  ) {
    modal.style.display = "none";
  } else {
    if (subject !== "") {
      document.getElementById("subject_popup").innerText = "Тема: " + subject;
    } else {
      document.getElementById("subject_popup").innerText = "Без темы";
    }

    if (describe !== "") {
      document.getElementById("describe_popup").innerText =
        "Описание: " + describe;
    } else {
      document.getElementById("describe_popup").innerText = "Без описания";
    }

    modal.style.display = "block";
  }
};

closeBtn.onclick = function() {
  modal.style.display = "none";
  document.forms[0].reset();
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let curretMobIcon = 0;
function showSideMenu() {
  if (curretMobIcon == 0) {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("mobile_menu-btn").style.transform =
      "rotate(90deg)";
    curretMobIcon = 1;
  } else {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("mobile_menu-btn").style.transform =
      "rotate(180deg)";
    curretMobIcon = 0;
  }
}

let imgBase = [
  "./assets/img/1row_1.jpg",
  "./assets/img/1row_2.jpg",
  "./assets/img/1row_3.jpg",
  "./assets/img/1row_4.jpg",
  "./assets/img/2row_1.jpg",
  "./assets/img/2row_2.jpg",
  "./assets/img/2row_3.jpg",
  "./assets/img/2row_4.jpg",
  "./assets/img/3row_1.jpg",
  "./assets/img/3row_2.jpg",
  "./assets/img/3row_3.jpg",
  "./assets/img/3row_4.jpg"
];

let positionBase = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
];

function changeImg() {
  let arr = imgBase.slice(1, imgBase.length);
  arr.push(imgBase[0]);
  for (let i = 0; i < 12; i += 1) {
    positionBase[i].src = arr[i];
  }
  imgBase = arr;
}

const tagsBtn = document.getElementById("portfolio__tags");

tagsBtn.addEventListener("click", event => {
  tagsBtn
    .querySelectorAll("button")
    .forEach(el => el.classList.remove("selected"));
  event.target.classList.add("selected");
  clearBorder();
});

const clickedImage = document.getElementById("portfolio__examples-box");

clickedImage.addEventListener("click", event => {
  clickedImage
    .querySelectorAll("img")
    .forEach(el => el.classList.remove("selected_img"));
  event.target.classList.add("selected_img");
  clickedImage.classList.remove("selected_img");
});

function clearBorder() {
  clickedImage
    .querySelectorAll("img")
    .forEach(el => el.classList.remove("selected_img"));
}

const slide1 = document.getElementById("wrapper1");
const slide2 = document.getElementById("slide2");
const sliderWrapper = document.getElementById("wrapper__slider-box");
const sliderContainerWrapper = document.getElementById("wrapper__slider");

let slidecounter = 0;
function sliderLeft() {
  if (slidecounter == 0) {
    if (currentHorizontalScreen == 0) {
      horizontal.style.display = "none";
    }
    if (currentHorizontalScreen == 1) {
      horizontalblack.style.display = "none";
    }
    if (currentVerticalScreen == 1) {
      verticalblack.style.display = "none";
    }
    if (currentVerticalScreen == 0) {
      vertical.style.display = "none";
    }

    slide2.style.display = "inline-block";
    sliderWrapper.style.backgroundColor = "#648BF0";
    sliderContainerWrapper.style.backgroundColor = "#648BF0";
    sliderWrapper.classList.add("slide-left");
    setTimeout(() => sliderWrapper.classList.remove("slide-left"), 450);
    slidecounter = 1;
  } else {
    if (currentHorizontalScreen == 0) {
      horizontal.style.display = "inline-block";
    }
    if (currentHorizontalScreen == 1) {
      horizontalblack.style.display = "inline-block";
    }
    if (currentVerticalScreen == 1) {
      verticalblack.style.display = "inline-block";
    }
    if (currentVerticalScreen == 0) {
      vertical.style.display = "inline-block";
    }

    slide2.style.display = "none";
    sliderWrapper.style.backgroundColor = "#f06c64";
    sliderContainerWrapper.style.backgroundColor = "#f06c64";
    sliderWrapper.classList.add("slide-left");
    setTimeout(() => sliderWrapper.classList.remove("slide-left"), 450);
    slidecounter = 0;
  }
}
function sliderRight() {
  if (slidecounter == 0) {
    if (currentHorizontalScreen == 0) {
      horizontal.style.display = "none";
    }
    if (currentHorizontalScreen == 1) {
      horizontalblack.style.display = "none";
    }
    if (currentVerticalScreen == 1) {
      verticalblack.style.display = "none";
    }
    if (currentVerticalScreen == 0) {
      vertical.style.display = "none";
    }

    slide2.style.display = "inline-block";
    sliderWrapper.style.backgroundColor = "#648BF0";
    sliderContainerWrapper.style.backgroundColor = "#648BF0";
    sliderWrapper.classList.add("slide-right");
    setTimeout(() => sliderWrapper.classList.remove("slide-right"), 450);
    slidecounter = 1;
  } else {
    if (currentHorizontalScreen == 0) {
      horizontal.style.display = "inline-block";
    }
    if (currentHorizontalScreen == 1) {
      horizontalblack.style.display = "inline-block";
    }
    if (currentVerticalScreen == 1) {
      verticalblack.style.display = "inline-block";
    }
    if (currentVerticalScreen == 0) {
      vertical.style.display = "inline-block";
    }

    slide2.style.display = "none";
    sliderWrapper.style.backgroundColor = "#f06c64";
    sliderContainerWrapper.style.backgroundColor = "#f06c64";
    sliderWrapper.classList.add("slide-right");
    setTimeout(() => sliderWrapper.classList.remove("slide-right"), 450);
    slidecounter = 0;
  }
}

const menuLinks = document.querySelectorAll("nav ul li a");
const mobileMenu = document.getElementById("side-menu2");

mobileMenu.addEventListener("click", event => {
  mobileMenu
    .querySelectorAll("a")
    .forEach(item => item.classList.remove("active_menu"));
  event.target.classList.add("active_menu");
});

document.addEventListener("scroll", changeMenuActiveLink);

window.onload = changeMenuActiveLink();

function changeMenuActiveLink() {
  const currentPositionY = window.scrollY;

  const activeSections = [
    document.getElementById("singolo"),
    document.getElementById("services"),
    document.getElementById("portfolio"),
    document.getElementById("about"),
    document.getElementById("contacts")
  ];

  activeSections.forEach(section => {
    if (section.offsetTop - 150 <= currentPositionY) {
      navigation.querySelectorAll("a").forEach(link => {
        link.classList.remove("active_menu");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active_menu");
        }
      });
      mobileMenu.querySelectorAll("a").forEach(link => {
        link.classList.remove("active_menu");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active_menu");
        }
      });
    }
  });
}
