import GreenColor from "../img/GreenColor.jpeg";
import YellowColor from "../img/YellowColor.jpeg";
import RedColor from "../img/RedColor.png";

export const setAvailabilityColor = (availability) => {
  let availabilityObj = {
    text: "",
    color: "",
  };

  switch (availability) {
    case "available":
      availabilityObj.color = GreenColor;
      availabilityObj.text = "Disponible";
      break;
    case "half":
      availabilityObj.color = YellowColor;
      availabilityObj.text = "Últimas plazas";
      break;
    case "full":
      availabilityObj.color = RedColor;
      availabilityObj.text = "Agotado";
      break;
    default:
      break;
  }

  return availabilityObj;
};
