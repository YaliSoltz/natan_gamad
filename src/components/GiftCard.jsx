import "react-multi-carousel/lib/styles.css";
import "../styles/giftCard.scss";

import { useContext, useState } from "react";
import { TextContext } from "../context/textContext";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Carousel from "react-multi-carousel";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import giftImg1 from "../img/giftImg1.png";
import giftImg2 from "../img/giftImg2.png";
import giftImg3 from "../img/giftImg3.png";

function GiftCard() {
  const {
    cardHeader,
    cardTitle,
    cardSubTitle,
    cardContent,
    blessingFrom,
    setSelectedGift,
  } = useContext(TextContext);

  const [isFliped, setFliped] = useState(false);
  const [isOpen, setOpenModal] = useState(false);

  const selectedPopup = () => {
    Swal.fire({
      icon: "success",
      title: "המתנה הנבחרת בדרך אלייך..",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      console.log("wow");
      setSelectedGift(true);
      setTimeout(() => {
        document.querySelector(".finish-page-container").style.backgroundColor =
          "rgba(0, 0, 0, 0.5)";
        setOpenModal(false);
        setFliped(false);
      }, 3500);
    });
  };

  const choices = [
    {
      title: "נשיקה",
      text: "מתנה 1",
      url: giftImg1,
    },
    {
      title: "חיבוק",
      text: "מתנה 2",
      url: giftImg2,
    },
    {
      title: "סוס",
      text: "מתנה 3",
      url: giftImg3,
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    direction: "rtl",
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 600,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={boxStyle}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              style={{ fontSize: "2em", textAlign: "center" }}
            >
              זה הזמן לבחור מתנה
            </Typography>
            <br />
            <Carousel
              responsive={responsive}
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              focusOnSelect={false}
              infinite={choices.length > 4}
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              rewind={false}
              rewindWithAnimation={false}
              rtl={true}
              shouldResetAutoplay
              showDots={false}
              slidesToSlide={1}
            >
              {choices.map(({ title, text, url }, index) => {
                return (
                  <Card className="card" key={index} onClick={selectedPopup}>
                    <CardActionArea>
                      <CardMedia component="img" image={url} alt={title} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {title}
                        </Typography>
                        {/* <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {text}
                        </Typography> */}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Carousel>
          </Box>
        </Fade>
      </Modal>
      <div className="container">
        <h2 className="container-title">{cardHeader}</h2>
        <div className={"birthdayCard " + (isFliped ? "fliped" : "")}>
          <div
            className={"cardFront " + (isFliped ? "fliped" : "")}
            onClick={() => setFliped(!isFliped)}
          >
            <h3 className={"happy " + (isFliped ? "fliped" : "")}>
              {cardTitle}
            </h3>
            <div className="balloons">
              <div className="balloonOne" />
              <div className="balloonTwo" />
              <div className="balloonThree" />
              <div className="balloonFour" />
            </div>
          </div>
          <div className="cardInside">
            <h3 className="back">{cardTitle}</h3>
            <p>
              <b>{cardSubTitle}</b>
            </p>
            <p>
              {cardContent}
              <br />
              <span className="name">{blessingFrom}</span>
            </p>
            <button
              className="show-swal-btn"
              onClick={() => {
                setOpenModal(true);
              }}
              style={{ marginBottom: "1em" }}
            >
              לבחירת מתנה
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiftCard;
