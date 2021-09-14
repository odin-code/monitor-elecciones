import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  DesktopComputerIcon,
  ChartBarIcon,
  NewspaperIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { useTheme } from "next-themes";

const SidebarMenu = (props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { children, ...customMeta } = props;
  const meta = {
    title: "Monitor Elecciones Legislativas 2021 | Canales y Tweets en Vivo",
    description: "Canales, tweets e información digital sobre las Elecciones Legislativas Argentinas",
    image: "https://leerob.io/static/monitor-elecciones-paso-2021.jpg",
    type: "website",
    ...customMeta,
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="animate-pulse h-6 w-6 mr-2 hover:text-gray-200"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="animate-pulse h-6 w-6 mr-2 hover:text-gray-200"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Monitor Elecciones PASO 2021" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="w-2/12 flex flex-col items-center bg-gray-900 dark:bg-gray-1000 py-4 text-white ">
        <div className="flex flex-col h-full justify-between w-3/5">
          <Link href="/">
            <a className="text-3xl font-bold mt-16 tracking-tighter">
              Monitor
              <p className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Elecciones Argentinas 2021
              </p>
            </a>
          </Link>
          <div className="flex flex-col items-start">
            <Link href="/">
              <a className="flex items-center my-3 text-gray-200 hover:text-gray-200">
                <DesktopComputerIcon className="h-6 w-6 mr-2" />
                <span className="text-lg">Transmisiones</span>
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center my-3 text-gray-400 hover:text-gray-200">
                <ChartBarIcon className="h-6 w-6 mr-2 " />
                <span className="text-lg ">Estadísticas</span>
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center my-3 text-gray-400 hover:text-gray-200">
                <NewspaperIcon className="h-6 w-6 mr-2 hover:text-gray-200" />
                <span className="text-gray-400 text-lg hover:text-gray-200">
                  Noticias
                </span>
              </a>
            </Link>
          </div>
          <div className="divide-y divide-gray-400">
            <div>
              <a className="flex items-center my-3 text-gray-400 hover:text-gray-200">
                {renderThemeChanger()}
              </a>
            </div>
            <p className="text-gray-400 pt-2 text-sm text-center">
              Sitio web por{" "}
              <Link href="/about">
                <a className="text-gray-300">los changos</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
