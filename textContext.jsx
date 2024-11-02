import React, { createContext, useState } from "react";

export const TextContext = createContext();

const TextProvider = ({ children }) => {
  const videoUrl = "https://www.youtube.com/embed/yhO3JRf2_o4?autoplay=1";
  const leftCornerText = ["טקסט", "פינה", "שמאלית"];
  const cardHeader = "כדאי לך ללחוץ על הכרטיס..";
  const cardTitle = "טקסט כותרת לכרטיס ברכה";
  const cardSubTitle = "טקסט תחילת ברכה";
  const cardContent = `
         טקסט ברכה
            `;
  const blessingFrom = "טקסט סיום ברכה";
  const [isSelectedGift, setSelectedGift] = useState(false);

  return (
    <TextContext.Provider
      value={{
        videoUrl,
        leftCornerText,
        cardHeader,
        cardTitle,
        cardSubTitle,
        cardContent,
        blessingFrom,
        isSelectedGift,
        setSelectedGift,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;
