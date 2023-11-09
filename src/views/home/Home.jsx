import React, { useState } from "react";
import "./home.css";
import Navbar from "../../components/atoms/nav/Navbar";
import { routes } from "../../router/routes";
import Section from "../../components/atoms/section/Section";
import Matrix from "../../components/atoms/matrix/Matrix";
const Home = () => {
  const [activeRoute, setActiveRoute] = useState(Home.path);

  const handleRouteChange = (route) => {
    setActiveRoute(route);
  };

  return (
    <>
      <Navbar
        activeRoute={activeRoute}
        onRouteChange={handleRouteChange}
        routes={routes}
      />

      <div className="container-slider">
        <Matrix />
      </div>
      <div className="container-home">
        <Section title="Section 1" content="test" />
        <Section title="Section 1" content="test" />
        <Section title="Section 1" content="test" />
      </div>
    </>
  );
};

export { Home };
