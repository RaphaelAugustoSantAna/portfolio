import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaMapMarkedAlt,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import "./info.css";

function Info() {
  const numeroCelular = 5511998382613;
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroCelular}`;

  return (
    <div className="container">
      <div className="info">
        <div className="dados-perfil">
          <img
            src="https://avatars.githubusercontent.com/u/102390386?s=400&u=a0dcf8740118b3f256eebbb1a251dd11e619144a&v=4.png"
            alt="Imagem perfil"
          />
          <h1 className="nome">Raphael Augusto Sant'Ana</h1>
        </div>
        <div className="cargo">
          <span className="dev-front">Desenvolvedor Front-End</span>
        </div>
        <div className="redes-sociais">
          <div className="container-perfil">
            <a
              href="https://www.linkedin.com/in/raphael-sant-ana/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/RaphaelAugustoSantAna"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://codepen.io/raphaelaugustosantana"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaCodepen size={25} />
            </a>
            <a href={linkWhatsapp} target={"_blank"} rel="noreferrer">
              <FaWhatsapp size={25} />
            </a>
          </div>
        </div>
        <div className="dados-endereco">
          <div className="detalhes">
            <FaMapMarkedAlt size={20} />
            <span>Vargem Grande Paulista - SP, Brasil</span>
          </div>
          <div className="detalhes">
            <FaRegEnvelope size={20} />
            <span>raphael_a_santana@outlook.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
// cxcxcmcmx