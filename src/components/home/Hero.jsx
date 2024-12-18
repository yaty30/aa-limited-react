import React, { useState } from "react";

// components

// states
import { observer } from "mobx-react-lite";

const backgroundImage = "/assets/images/Banner Background Image.png";

export default observer(() => {
  return (
    <>
      <img src={backgroundImage} width="100%" />
    </>
  );
});
