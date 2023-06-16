import SobreMiArticleStyled from "./SobreMiArticleStyled";
import CollageFotosMama from "../../img/CollageFotosMama.png";
import SobreMiBackground from "../../img/SobreMiBackground.webp";

const SobreMiArticle = () => {
  return (
    <SobreMiArticleStyled>
      <div className="full-article">
        <div className="fotos-section"></div>
        <img
          src={CollageFotosMama}
          alt="collage-fotos"
          className="collage-fotos"
        />
        <div
          className="text-section"
          style={{
            backgroundImage: `url(${SobreMiBackground})`,
            opacity: 0.9,
            backgroundSize: "cover",
          }}
        >
          <div className="hola-text-container">
            <p>¡Hola!</p>
          </div>
          <div className="main-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iusto maxime error voluptates corporis esse minus, saepe dolore
              aperiam ex quam cupiditate amet fuga ratione et hic magnam. Magnam
              recusandae mollitia deleniti excepturi, voluptatibus rerum vel,
              tempora iste ab ipsum repellat voluptatum itaque, non repellendus
              magni cum quod asperiores laboriosam numquam consequatur.
              Voluptatibus delectus quasi odit in totam sed omnis laborum,
              blanditiis excepturi tempore unde nihil quo. Doloremque corporis
              quos, ipsum recusandae expedita totam! Laudantium quia ab dolore?
              Omnis, natus?
            </p>
          </div>
        </div>
      </div>
    </SobreMiArticleStyled>
  );
};

export default SobreMiArticle;
