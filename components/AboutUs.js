import React from "react";
import Banner from "./Banner";
import CountDown from "./CountDown";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="w-10/12 bg-gray-50 dark:bg-gray-900 flex flex-col no-scrollbar overflow-auto min-h-full p-6 border-r border-r-gray-300 dark:border-none">
      <Banner
        text={
          <CountDown
            text="Elecciones PASO 2021: "
            textIf="Las Elecciones PASO 2021 se llevan a cabo el día de hoy, no te olvides
          de votar"
          />
        }
        textButton="Más información"
        linkButton={"https://www.electoral.gob.ar/nuevo/index.php"}
      />

      <div className="mt-6">
        <h3 className="text-3xl font-medium text-gray-800 dark:text-white">
          Sobre{" "}
          <strong className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-500">
            Nosotros
          </strong>
        </h3>
      </div>

      <div className="w-8/12 mt-6">
        El Monitor de Elecciones es un intento de agrupar información relevante
        de los próximos comicios argentinos donde se renueva la mitad de la
        Cámara de Diputados y un tercio del Senado de la Nación.
      </div>

      <div className="w-8/12 mt-6">
        <Card
          role="Fullstack Dev"
          name="Julián Mansueto"
          img="https://avatars.githubusercontent.com/u/27327503?v=4"
          details="Desarrollo del Backend etc etc etc."
          linkRepo="https://github.com/julianmnst/monitoreo-elecciones-api"
          github="https://github.com/julianmnst"
          linkedin="https://www.linkedin.com/in/julianmnst/"
        />
      </div>
      <div className="w-8/12 mt-6">
        <Card
          role="Frontend Dev"
          name="Imanol Ortega"
          img="https://avatars.githubusercontent.com/u/36346204?v=4"
          details="Desarrollo del Frontend etc etc etc."
          linkRepo="https://github.com/imanolrtega/monitor-elecciones"
          github="https://github.com/imanolrtega"
          linkedin="https://www.linkedin.com/in/imanol-rtega/"
        />
      </div>
    </div>
  );
};

export default AboutUs;
