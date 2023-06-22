import OfrecemosCardsStyled from "../OfrecemosCards/OfrecemosCardsStyled";

const OfrecemosCards = ({ image, cardTitle, cardDescription }) => {
  return (
    <OfrecemosCardsStyled>
      {
        <div className="full-card">
          <div className="image-and-title-block">
            <img src={image} alt="" className="image" />
            <div className="card-title">{cardTitle}</div>
          </div>
          <div className="card-description">{cardDescription}</div>
        </div>
      }
    </OfrecemosCardsStyled>
  );
};

export default OfrecemosCards;
