import React, { useContext } from "react";
import Box from "./giftBox";
import { TextContext } from "../textContext";
import FinishPage from "./FinishPage";

const App = () => {
  const { isSelectedGift } = useContext(TextContext);

  return (
    <>
      {isSelectedGift && <FinishPage />}
      <Box />
    </>
  );
};

export default App;
