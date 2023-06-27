import styled from "styled-components";
import styles from "../../styles/styles";

const ContactUsSectionStyled = styled.div`
  .full-section {
    height: 700px;
  }

  .full-content {
    height: 100%;
    width: 45%;
    background-color: rgba(256, 256, 256, 0.6);
  }
  .section-title {
    margin: 0;
    text-align: center;
    padding: 100px 0 30px 0;
    font-size: 2rem;
    font-weight: bold;
    transition: 0.5s linear;
  }

  .section-title-alert {
    margin: 0 0 50px 0;
    text-align: center;
    padding: 50px 0 0 0;
    font-size: 2rem;
    font-weight: bold;
    transition: 0.5s linear;
  }

  .error-alert {
    color: red;
    margin: 0;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-top: 20px;
    transition: 0.5s linear;
  }

  .done-well-alert {
    color: green;
    margin: 0;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-top: 20px;
    transition: 0.5s linear;
  }

  .form-and-submit-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 50px 0;
  }

  .name-mail-form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 1.1rem;
  }

  .form-label {
    margin-bottom: 6px;
    align-items: flex-start;
    justify-content: start;
  }

  .name-mail-input {
    padding: 0 5px;
    height: 33px;
    width: 17rem;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 8px 1px #888888;
    font-size: 1rem;
  }

  .name-mail-input:hover {
    box-shadow: 0px 0px 8px 1px #0077b6;
    border: solid #0096c7 3px;
    transition: 0.1s linear;
  }

  .comments-form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    font-size: 1.1rem;
  }

  .comments-input {
    height: 120px;
    width: 17rem;
    padding: 0 5px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 8px 1px #888888;
    font-size: 1rem;
  }

  .comments-input:hover {
    box-shadow: 0px 0px 8px 1px #0077b6;
    border: solid #0096c7 3px;
    transition: 0.1s linear;
  }

  .button {
    margin: 50px 0 0 0;
    width: 30%;
    height: 40px;
    font-weight: bold;
    font-family: "Niramit", sans-serif;
    background-color: #26b546;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    padding: 9px 13px;
    transition: 0.3s linear;
  }

  .button:hover {
    cursor: pointer;
    width: 40%;
    height: 45px;
    box-shadow: 0px 0px 5px 1px #166e29;
    transition: 0.1s linear;
  }
`;

export default ContactUsSectionStyled;
