import React from "react";

import "./dados.css";

function Body() {
  return (
    <div className="container">
      <div className="cabecalho">
        <nav>
          <div className="menu">
            <div className="cabecalho">
              <div></div>
            </div>
            <div className="opcoes">
              <span>Sobre</span>
            </div>
          </div>
        </nav>
        <div className="dados">
          <>
            <div className="info-dados">
              <span>
                Olá, sou o  Raphael e venho de uma transição de
                carreira para a área de tecnologia. Estou em busca de
                oportunidades nesse campo e busco aplicar as habilidades de
                Soft-skills que desenvolvi em outras áreas como um diferencial
                nessa nova fase da minha carreira como desenvolvedor. Sou uma
                pessoa dinâmica e diversificada, sempre buscando aprender e
                crescer. Se quiser saber mais sobre mim, fique à vontade para
                entrar em contato através do meu perfil do{" "}
                <b>
                  <a
                    href="https://www.linkedin.com/in/raphael-sant-ana/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Linkedin.
                  </a>
                  <br />
                  <span>
                    Abaixo estão também alguns projetos que desenvolvi, para
                    conferir,{" "}
                    <a
                      href="https://codepen.io/raphaelaugustosantana"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Clique aqui!
                    </a>
                  </span>
                </b>
              </span>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Body;
