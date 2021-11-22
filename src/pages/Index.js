import "./Index.css";
import { Link } from "react-router-dom";

import Box from "../components/Box";

import music_notation from "../components/icons/icons8-music-notation-96.png";
import music_girl from "../illustrations/clip-955.png";

function Index() {
  return (
    <div>
      <ul id="menu">
        <li>
          <a href="#objetives-title">
            <span>Objetivos</span>
          </a>
        </li>
        <li>
          <a href="#history">
            <span>Historia</span>
          </a>
        </li>
        <li>
          <a href="#about">
            <span>Acerca de</span>
          </a>
        </li>
      </ul>

      <img id="index-log" alt="Audymus logo" src={music_notation} />
      <div id="index-slide">
        <div id="slide-text">
          <span>Reproductor de música anónimo y gratuito</span>
          <p>Audymus seguridad para todos los artistas</p>
          <Link to="/app">
            <button className="clickeable" id="app-button">
              Ir a la App
            </button>
          </Link>
        </div>
        <img alt="Girl playing music" src={music_girl} />
      </div>
      <div style={{ height: "420px", width: "100%" }}></div>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6989713464302987"
        crossorigin="anonymous"
      ></script>
      <h2 className="subtitle" style={{ marginLeft: "2.5%" }}>
        Objetivos de Audymus
      </h2>
      <div id="objetives-wrapper">
        <div id="objetives">
          <Box
            image="https://img.icons8.com/fluency/48/000000/anonymous-mask.png"
            title="Anonimato"
            text="El anonimato de todos los artistas y oyentes, es nuestra prioridad, por eso no recolectamos ningún tipo de datos de nuestros usuarios."
          />
          <Box
            image="https://img.icons8.com/fluency/48/000000/search-property.png"
            title="Transparencia"
            text="En audymus creemos que la transparencia es esencial para el desarrollo del proyecto, por lo tanto todos los recursos de la aplicación son de código abierto disponible en github."
          />
          <Box
            image="https://img.icons8.com/fluency/48/000000/omnichannel.png"
            title="Difusión"
            text="La difusión de la música es muy importante, y debe ser de libre acceso para todas las personas."
          />
          <Box
            image="https://img.icons8.com/fluency/48/000000/courthouse.png"
            title="Igualdad"
            text="En audymus el artista mas famoso tiene los mismos beneficios que el menos famoso, para permitir la difusión igualitaria de la música, sin importar la fama"
          />
          <Box
            image="https://img.icons8.com/fluency/48/000000/free-shipping.png"
            title="Gratuidad"
            text="La música es un arte y para nosotros nadie debería pagar por escuchar lo que un artista quiere transmitir. Por eso audymus es totalmente gratis."
          />
        </div>
      </div>
      <div id="history">
        <h2 className="subtitle">Historia</h2>
        <p>
          Audymus en sus inicios surgió como el proyecto final de trimestre de 4
          alumnos en la ciudad de Talca, Chile. Antes de la creación de la
          plataforma, estos 4 estudiantes recibieron una temática llamada
          "producciones artísticas como medio de expresión", a la cual se le
          debía atribuir un problema. Entre ellos surgieron varias ideas, pero
          la que al final ganó fue "falta de difusión de artistas o censura en
          algunos casos durante revueltas sociales". Este problema fue el más
          llamativo dado que muchos músicos en el comienzo de sus carreras
          reciben muy poco apoyo, porque que no cuentan con las herramientas
          necesarias para una mejor calidad de creación musical, no poseen
          muchos fans, entre otras razones, y por otro lado, se daba el motivo
          de que en ciertas ocasiones se censuraban algunas creaciones musicales
          por el contenido de sus letras, por su melodía u otros motivos. Dadas
          estas razones los alumnos llegaron a la conclusión de que debían hacer
          un proyecto para contribuir en algún punto a los artistas que contaban
          con menor apoyo. Idea tras idea la más viable era la creación de un
          sitio web que ofreciera servicios multimedia a todo aquel que quisiera
          acceder. La particularidad de este sitio web es que los artistas no
          necesitan mayor compromiso del que ellos quisieran, si un músico
          deseaba publicar su canción de forma anónima es posible.
        </p>
      </div>
      <div id="about">
        <h2 className="subtitle">Acerca De</h2>
        <p>
          Para nosotros la prioridad es la seguridad de los artistas, en la
          historia siempre sufren los artistas durante revoluciones sociales.
          Por represalias de parte del gobierno, intentos de censura, ataques de
          odio etc. Nosotros ofrecemos una opción sencilla a traves del
          anonimato total tanto para artistas como para usuarios. En el caso
          utópico nuestra plataforma puede ayudar a difundir miles de artistas
          musicales sin arriesgar su integridad física. Somo un grupo pequeño
          para mantener una aplicación como esta, pero con trabajo arduo la
          mantenemos.
        </p>
      </div>
      <footer id="icons8-links">
        <ul>
          <li>
            <span>
              Illustration by{" "}
              <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">
                Icons 8
              </a>{" "}
              from <a href="https://icons8.com/illustrations">Ouch!</a>
            </span>
          </li>
          <li>
            <a href="https://icons8.com/icon/wMubOjl2fqdm/anonymous-mask">
              Anonymous Mask icon by Icons8
            </a>
          </li>
          <li>
            <a href="https://icons8.com/icon/KfXjGW6SP14V/free-shipping">
              Free Shipping icon by Icons8
            </a>
          </li>
          <li>
            <a href="https://icons8.com/icon/3ZwJXKBWXPi6/courthouse">
              Courthouse icon by Icons8
            </a>
          </li>
          <li>
            <a href="https://icons8.com/icon/wiFOYpGujSNf/omnichannel">
              Omnichannel icon by Icons8
            </a>
          </li>
          <li>
            <a href="https://icons8.com/icon/6B3DzCAEPuP0/search-property">
              Search Property icon by Icons8
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Index;
