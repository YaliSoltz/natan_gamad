import React, { useContext } from "react";
import { TextContext } from "../textContext";
import FinishPage from "./FinishPage.jsx";
import GiftBox from "./giftBox";

const App = () => {
  const { isSelectedGift } = useContext(TextContext);

  return (
    <>
      {isSelectedGift && <FinishPage />}
      <GiftBox />
    </>
  );
};

export default App;
