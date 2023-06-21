import OfrecemosSectionStyled from "../OfrecemosSection/OfrecemosSectionStyled";
import FondoHojasTropical from "../../img/FondoHojasTropical.jpg";

const OfrecemosSection = () => {
  return (
    <OfrecemosSectionStyled>
      <div className="full-article">
        <div className="image-and-title-block">
          <img src={FondoHojasTropical} alt="" className="image" />
          <div className="title"></div>
        </div>
        <div className="description"></div>
      </div>
    </OfrecemosSectionStyled>
  );
};

export default OfrecemosSection;
