import ResponsiveCardsStyled from "./ResponsiveCardsStyled";

const ResponsiveCards = ({ image, cardTitle, cardDescription }) => {
  return (
    <ResponsiveCardsStyled>
      {
        <div className="full-card">
          <div className="image-and-title-block">
            <img src={image} alt="" className="image" />
            <div className="card-title">{cardTitle}</div>
          </div>
          <div className="card-description">{cardDescription}</div>
        </div>
      }
    </ResponsiveCardsStyled>
  );
};

export default ResponsiveCards;
