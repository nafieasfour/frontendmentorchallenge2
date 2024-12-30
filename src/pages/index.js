"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import TaskManager from "@/components/TaskManager";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const backgroundStyle = {
    backgroundImage: `url(${
      theme === "light"
        ? "/images/bg-light.jpg"
        : "/images/bg-dark.jpg"
    })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  let iconSource = {
    src: theme === "light" ? "/images/icon-sun.svg" : "/images/icon-moon.svg",
    height: 16,
    width: 16,
  };
  //console.log("Current theme:", theme);

  return (
    //adding the style as a variable to force next js to render
    <div style={backgroundStyle} theme={setTheme}>
      <Header
        theme={setTheme}
        toggleMode={toggleMode}
        iconSource={iconSource}
      />

      <TaskManager />
      {/* <TaskFilter /> */}
    </div>
  );
}

//  backgroundImage: `url(${
//           theme === "light"
//             ? "/images/bg-desktop-light.jpg"
//             : "/images/bg-desktop-dark.jpg"
//         })`,
// backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         height: "100vh",
