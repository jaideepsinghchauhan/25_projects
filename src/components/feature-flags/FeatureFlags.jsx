import React, { useContext } from "react";
import "./styles.css";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import RandomColor from "../random-color/Random-color";
import Accordions from "../Accordion/Accordions";
import Treeview from "../treeview/Treeview";
import { FeatureFlagsContext } from "./context";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  console.log("enabledFlags", enabledFlags);
  const componentToRender = [
    {
      key: "showLightandDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordions />,
    },
    {
      key: "showTreeView",
      component: <Treeview />,
    },
  ];

  if (loading) {
    return <h3>Loading ... </h3>;
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {enabledFlags !== null &&
        componentToRender.map((component) =>
          enabledFlags[component.key] ? component.component : null
        )}
    </div>
  );
};

export default FeatureFlags;
