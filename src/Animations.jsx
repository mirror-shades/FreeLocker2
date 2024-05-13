import TestnetWebpage from "./TestnetWebpage";
import MainnetWebpage from "./MainnetWebpage";
import "./App.css";

import React, { useState } from "react";

const Component1 = () => <View style={{ backgroundColor: "red", flex: 1 }} />;

const Component2 = () => <View style={{ backgroundColor: "blue", flex: 1 }} />;

const SwitchComponent = () => {
  const [showComponent1, setShowComponent1] = useState(true);

  return (
    <div>
      <TestnetWebpage />
    </div>
  );
};

export default SwitchComponent;
