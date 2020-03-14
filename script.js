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
