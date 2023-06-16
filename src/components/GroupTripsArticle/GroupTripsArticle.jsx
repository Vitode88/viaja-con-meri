import GroupTripsArticleStyled from "./GroupTripsArticleStyled";
import girlArticleOne from "../../img/girlArticleOne.png";
import fondoRosa from "../../img/fondoRosa.jpeg";

const GroupTripsArticle = () => {
  return (
    <GroupTripsArticleStyled>
      <div
        className="full-article"
        style={{
          backgroundImage: `url(${fondoRosa})`,
          opacity: 0.9,
          backgroundSize: "cover",
        }}
      >
        <img
          src={girlArticleOne}
          alt="foto-articulo"
          className="foto-articulo"
        />
        {
          <div className="full-right-article">
            <div className="line-up" />

            <p className="title">Viajes en grupo de sueño</p>

            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              molestiae quaerat ipsam exercitationem error mollitia, impedit
              necessitatibus officiis eius dolorum incidunt, illum nesciunt,
              omnis optio animi quos eaque magni accusantium quisquam nisi.
              Aspernatur architecto, saepe necessitatibus a sunt aliquid
              expedita voluptate sed magnam laboriosam perspiciatis non at,
              maxime tempore! Voluptatum obcaecati eaque ullam doloremque, vero
              facilis ipsa cumque alias suscipit aut quia temporibus pariatur
              nemo illum, dolorem ad asperiores eligendi nulla laudantium
              quisquam fugiat ab consectetur? Autem rerum repellendus ipsum
              maiores inventore facere fugiat dolor, natus maxime, mollitia
              eligendi doloribus.
            </p>

            <div className="line-bottom" />
          </div>
        }
      </div>
    </GroupTripsArticleStyled>
  );
};

export default GroupTripsArticle;
