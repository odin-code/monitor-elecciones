import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import AboutUs from "../components/AboutUs";

const about = () => {
  return (
    <div className="flex flex-row h-screen overflow-auto">
      <SidebarMenu
        title="Monitor Elecciones PASO 2021 | Sobre Nosotros"
        description="Canales, tweets e información digital sobre las elecciones legislativas."
      />
      <AboutUs />
    </div>
  );
};

export default about;
