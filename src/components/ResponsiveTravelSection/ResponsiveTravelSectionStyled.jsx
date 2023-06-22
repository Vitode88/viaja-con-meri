import styled from "styled-components";
import styles from "../../styles/styles";

const ResponsiveTravelSectionStyled = styled.div`
  .full-article {
    background-color: #f1f1f1ff;
    width: 100vw;
    padding: 80px 0 80px 0;
    color: ${styles.colors.almostBlack};
  }

  .section-title {
    margin: 0 0 100px 0;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }

  .cards-section {
    display: flex;
    margin: 0 100px;
    justify-content: space-between;
    gap: 80px;
  }
`;

export default ResponsiveTravelSectionStyled;
