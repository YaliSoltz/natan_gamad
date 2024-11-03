import React, { useContext } from "react";
import { TextContext } from "../context/textContext";
import FinishPage from "./FinishPage";
import GiftBox from "./GiftBox";

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
