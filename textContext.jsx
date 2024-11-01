import React, { createContext } from "react";

export const TextContext = createContext();

const TextProvider = ({ children }) => {
  const videoUrl = "https://www.youtube.com/embed/yhO3JRf2_o4?autoplay=1";
  const leftCornerText = ["עדידה", "מתחילה", "לימודים"];
  const cardHeader = "כדאי לך ללחוץ על הכרטיס..";
  const cardTitle = "ברכה לתחילת הלימודים";
  const cardSubTitle = "לעדידה האהובה שלי";
  const cardContent = `
           שותפה שלי, מאחל לך המון הצלחה בתחילת הלימודים.
           מאמין בך מכל הלב ובטוח שהשמיים הם לא הגבול עבורך, את מדהימה ומסוגלת להכל ואני מלפנייך, מאחורייך ומצדדיך.
           לכי תטרפי את העולם, גאה בך המון
            `;
  const blessingFrom = "אילון";

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
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;
