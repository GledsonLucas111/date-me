import React, { useState, useEffect } from "react";
import { ButtonY, ButtonN, HomeContainer } from "@/styles/pages/home";
import Swal from "sweetalert2";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {}, []);
  const changePosition = () => {
    var buttonY = document.getElementById("buttonY");

    var maxWidth = window.innerWidth - Number(buttonY?.offsetWidth);
    var maxHeight = window.innerHeight - Number(buttonY?.offsetHeight);

    if (buttonY) buttonY.style.left = `${Math.floor(Math.random() * maxWidth)}px`;
    if (buttonY) buttonY.style.top = `${Math.floor(Math.random() * maxHeight)}px`;

  };
  const errorResonse = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops... Erro 406',
      color: '#fff',
      showCancelButton: true,
      text: 'Resposta errada',
      background: '#ea0000'
    })
  }
  return (
    <HomeContainer>
      <h1>Quer?</h1>
      <div>
        <ButtonY id="buttonY" onClick={changePosition}>
          Sim
        </ButtonY>
        <ButtonN onClick={errorResonse}>Não</ButtonN>
      </div>
    </HomeContainer>
  );
}
