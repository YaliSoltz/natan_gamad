import React, { createContext, useState } from "react";

export const TextContext = createContext();

const TextProvider = ({ children }) => {
  const videoUrl = "https://www.youtube.com/embed/9OvpF8qsrkE?autoplay=1";
  const leftCornerText = ["נתן", "הגמד", "שלי"];
  const cardHeader = "כדאי לך ללחוץ על הכרטיס..";
  const cardTitle = "שלום גמד שלי!";
  const cardSubTitle = "ניחשת כבר מי אני?";
  const cardContent = `
         "אהבה היא הדרך
         אושר הוא הסימן
         האור הוא המטרהץ"
         ד"ר נאדר בוטו 
            `;
  const blessingFrom = "באהבה, הענק שלך";
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
