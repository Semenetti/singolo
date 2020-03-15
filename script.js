const verticalIphone = document.getElementById("vertical");
verticalIphone.src = "./assets/img/iphone_vertical.png";

const horizontalIphone = document.getElementById("horizontal");
horizontalIphone.src = "./assets/img/iphone_horizontal.png";

function changeIphoneBackground(iphone) {
  const currentIphone = document.getElementById(iphone);

  switch (iphone) {
    case "vertical":
      currentIphone.src = "./assets/img/iphone_vertical_black.png";
      currentIphone.id = iphone + "_black";
      break;

    case "horizontal":
      horizontalIphone.src = "./assets/img/iphone_horizontal_black.png";
      currentIphone.id = iphone + "_black";
      break;

    case "vertical_black":
      currentIphone.src = "./assets/img/iphone_vertical.png";
      currentIphone.id = "vertical";
      break;

    case "horizontal_black":
      horizontalIphone.src = "./assets/img/iphone_horizontal.png";
      currentIphone.id = "horizontal";
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
