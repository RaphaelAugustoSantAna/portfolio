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
                Me chamo Raphael Augusto Sant'Ana, venho de uma transição de
                carreira e estou buscando uma oportunidade na área de
                tecnologia. Procuro aplicar as habilidades de Soft-skills
                desenvolvidas em outras áreas como um diferencial para essa nova
                fase na minha carreira de desenvolvedor, trabalhando assim de
                forma dinâmica e diversificada. Para saber mais sobre mim,
                poderá entrar em contato atráves do{" "}
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
                    Abaixo estão também alguns projetos que desenvolvi, para conferir,{" "}
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
