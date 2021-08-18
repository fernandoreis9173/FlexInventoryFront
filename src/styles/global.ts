import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
//MOBILE
  @media (max-width: 800px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 93.75%;
  }

  img {
    width: 80px;
    height: 40px;
    display: inline;
    margin-left: auto;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  body {
    background: #f0f2f5;
  }

  a {
    text-decoration: none;
  }

  #option {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 0.8rem;
  }

  
  .menu-button {
    background: #0089c4;
    font-size: 1.1rem;
    border-radius: 0.25rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }

  .modal {
    background: #fff;
    padding: 3rem;
    position: relative;
    z-index: 1;
    border-radius: 3px;
    display: block;
    justify-content: center;
    align-items: center;
    margin-top: 2.3rem;
    margin-left: 2rem;
    margin-right: 2rem;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }

  .formInput {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 200px);
    grid-gap: 5px;

  }

  .itemInput {
    border: none;
    display: flex;
    border-radius: 0.25rem;
    padding: 0.8rem;
    width: 100%;
    background: #f0f2f5;
    margin-top: 0;
    margin-right: -1rem;
    margin-left: -7.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }

  .buttonInput {
    width: 150%;
    margin-top: 1.3rem;
    margin-left: 20px;
    margin-right: auto;
  }

  .subtitle{
    color: #333;
    justify-content: center;
    align-items: center;
  }
  
  .modal-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    align-items: center;
    top: 0;
    display: flex;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
  }

  .modal-application h1 {
    margin-top: 1rem;
    margin-bottom: 2.3rem;
  }

  .modal-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  #form {
    max-width: 500px;
  }

  #form h1 {
    margin-top: 0;
  }

  .input_fabricante {
    border: none;
    border-radius: 0.25rem;
    padding: 0.8rem;
    width: 100%;
    background: #f0f2f5;
    margin-top: 0.2rem;
    margin-right: 1rem;
    margin-left: 0;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }

  input {
    
  
  & .input-group {
    margin-top: 1rem;
  }
  & .input-group strong {
    margin-right: 5.8rem;
    margin-top: -0.2rem;
    margin-bottom: -0.25rem;
  }
  & .input-group select, label {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    }
  }

  select {
    border: none;
    border-radius: 0.25rem;
    padding: 0.8rem;
    width: 65%;
    background: #f0f2f5;
    margin-top: -0.2rem;
    margin-right: 2rem;
    margin-left: 0;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }

  .new_button {
    width: 40%;
    font-size: 20px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    border: none;
    color: #fff;
    background: #0089c4;
    border-radius: 0.2rem;
    cursor: pointer;
    &:hover{
      background: #00608a;
    }
  }

  button {
    width: 20%;
    height: 2.8rem;
    border: none;
    color: #fff;
    background: #0089c4;
    border-radius: 0.2rem;
    cursor: pointer;
    display: inline;
    
  }

  

  button:hover {
    background: #00608a;
  }
  }
  //DESKTOP
  @media(min-width: 799px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 93.75%;
  }

  body {
    background: #f0f2f5;
  }

  img {
    width: 80px;
    height: 40px;
    display: inline;
    margin-left: auto;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
  }

  #option {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 0.8rem;
  }

  .menu-button {
    background: #0089c4;
    font-size: 1.1rem;
    border-radius: 0.25rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }
  .modal {
    background: #fff;
    padding: 4rem;
    position: relative;
    z-index: 1;
    border-radius: 4px;
    display: block;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-left: 12rem;
    margin-right: 12rem;
    
    box-shadow: 1px 1px 0.25rem #0000004d;
}

  .fabricante{
    margin-bottom: 60px;
  }

  .subtitle{
    color: #333;
    margin-bottom: 10px;
  }

  .modal-overlay {
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    z-index: 999;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  #form {
    max-width: 500px;
   & h1 {
    margin-top: 0;
   }
  }

  .formInput {
    display: grid;
    grid-template-columns: repeat(10, 100px);
    grid-gap: 10px;

  }

  .input_fabricante {
    border: none;
    display: flex;
    border-radius: 0.25rem;
    padding: 0.8rem;
    width: 30%;
    background: #f0f2f5;
    margin-top: 1rem;
    margin-right: 2rem;
    margin-left: 0;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }

  .itemInput {
    border: none;
    display: flex;
    border-radius: 0.25rem;
    padding: 0.8rem;
    width: 200%;
    background: #f0f2f5;
    margin-top: 1rem;
    margin-right: -1rem;
    margin-left: -7.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }

  .buttonInput {
    width: 200%;
    margin-top: 2rem;
    margin-left: 0;
    margin-right: auto;
  }

  input {    
  
  & .input-group {
    margin-top: 0.8rem;
  }
  & .input-group strong {
    margin-right: 5.8rem;
    margin-top: -0.2rem;
    margin-bottom: 0.3rem;
  }
  & .input-group select, label {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    }
  }

  select {
    border: none;
    display: flex;
    border-radius: 0.25rem;
    padding: 1rem;
    width: 30%;
    background: #f0f2f5;
    margin-bottom: 0.4rem;
    margin-right: 2rem;
    margin-top: 0.4rem;
    margin-left: 0;
    box-shadow: 1px 1px 0.25rem #0000004d;
  }

  .label_input {

  }

  .new_button {
    width: 10%;
    height: 2.8rem;
    border: none;
    color: #fff;
    background: #0089c4;
    border-radius: 0.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 360px;
    margin-top: -56px;


    &:hover{
      background: #00608a;
    }
  }

  button {
    width: 20%;
    height: 2.8rem;
    border: none;
    color: #fff;
    background: #0089c4;
    border-radius: 0.2rem;
    cursor: pointer;
    display: inline;
    
  }

  

  button:hover {
    background: #00608a;
  }

  }

  

`;

