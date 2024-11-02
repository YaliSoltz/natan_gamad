import { useContext, useState } from "react";
import "./App.scss";
import { TextContext } from "../textContext";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import FinishPage from "./FinishPage";

function App() {
  const {
    cardHeader,
    cardTitle,
    cardSubTitle,
    cardContent,
    blessingFrom,
    isSelectedGift,
    setSelectedGift,
  } = useContext(TextContext);

  const [isFliped, setFliped] = useState(false);
  const [isOpen, setOpenModal] = useState(false);

  const selectedPopup = () => {
    Swal.fire({
      icon: "success",
      title: "המתנה הנבחרת בדרך אלייך..",
      showConfirmButton: false,
      timer: 2000,
    }).then((res) => {
      setSelectedGift(true);
      setOpenModal(false);
    });
  };

  const choices = [
    // {
    //   text: "",
    //   url: ""
    // },
    {
      title: "תמונה 1",
      text: "מתנה 1",
      url: "data:image/jpeg;base64,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",
    },
    {
      title: "תמונה 2",
      text: "מתנה 2",
      url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQs-kbEKg-tdEmFI77bv9Z1v3jeWBfbms3zwdQlEAoQd7jhkm6XiuEIFDyTg1n4PNDSXNBr2MWHG4DpwopRzLjTuGWBINXkPFICWTV54XLbf_XJQYCz8RpCMvWxY3xnqSO9-TvK4MZmYJQ&usqp=CAc",
    },
    {
      title: "תמונה 3",
      text: "מתנה 3",
      url: "data:image/jpeg;base64,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",
    },
    {
      title: "תמונה 4",
      text: "מתנה 4",
      url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEBAQEBEQEBEPEBAPEBAQEBAPERAQFRYWFxUSFRYYHSggGRopGxUWITEhJSkrLy4xFx8zODMsNyozLisBCgoKDg0OFQ8QGC4lHSUtKy0tNysyKystKystLSstKystLSstLSstKy0tLS0rKy0tNS0tKy0tLS0tLSsrLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcBAgj/xABOEAABAwIDBAQICAkKBwAAAAABAAIDBBEFEiEGEzFBIlFhcQcUIzKBkaGxJDNCYnJzwdElQ1JTVIKSssMVFjQ1g5Oio8LSRGN0s9Ph8P/EABgBAQEBAQEAAAAAAAAAAAAAAAADAgQB/8QAHxEBAQACAgIDAQAAAAAAAAAAAAECEQMyElETMUEh/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIvHOAFzoAsW8efNYAOt7sp77AH22QZkWlrsSmiMlmRERi/F1yMoOgWsg2pleLtiZbKHA3fax4a2QW1FTp9rZ2keQYc19QXEC3Nx5cVlw7aWonZnEMTW3A1c65Bt0h1jVBbEWG7xya7uJafb96+opQ6/EEcWnQjvQZEREBERAREQEREBERAREQEREBERAREQEREBERBCnq2iTKdctrDreQT7AB+0sgqCeS0da+9YwDgRO4/qiBo/1LbxoIdU3M59+ZaD6gufbN4lT01FNV1pLmMqp2A2L3u8q8MY0Djy9Vyuiyec/wCm0f4WlULZbZqLEMMlp6jOGPqp3hzCGvY8SPLXNJBF9eYI1KDHshLT1mDNf8ZUQQ7mpc8v3gnAJNyTrcFpuOPoViwZt6WFw+VDE/vuAbrT7C4VFBgTZIwc1XCKmYk3vI5pFh1NAAAHvK2+zn9Apif0SI/4AUFpkleOpRX1ZD2uIsQQ09rD51+7zvQpci0+MSZTF86QMP67XNHtIQWRF8sdcA9YB9a+kBERAREQEREBERAREQEREBERAREQEREBERBVL5q4/NiLv25ZPsYFIq6uR0hgiO7dl+NIB4jlcED0grW02IwtqJHPljackTPPadQCSNO1xCl/yjDvHyb2PJliOYOuGhjiXkkcNLIKtXSSUtC6uleyecNkJc90jWPYXjIwgnWxbmvpbKAAL5h5gW0Mm5AZAY7v4U9PMGknibeMXv3L3aOifVYIGwjPvIGStII1jc64frys4FTtkKIbsag5JBqNWkgciND3hBXcC2mk/kyC0DQww6RtiqTAGh72hrc09y2w9d1m2NrhiTZY5WxwshlDN3S54biPSIuBc4kNNrNcSNbjLbXHsxR58DonD9HcDofz8v3rzwXYe5hrJbHduq3Rhx06YNy2x14ILjs3iUxbHHJJv/KVED5DHu3B0EskJcLE9EuiJs4k2N78lN2h0ZG78iaB57myNJ9gUDA5o2dAOBc2sxDMB+WZppHMudM3lWm1+fYs+0NY18EjQDmLXBvm+dbTgetBaaI+TZ2NAPeND7lnUPCpg+Jrm3LXF5BIIuC4kHVTEBERAREQEREBERAREQEREBERAREQEREBERBXNo9kIKxwlILZRxLdBIOp3b2qh4zPT0kM1Ix8Ynl3jDG+aNj2nK4NYS9wsSSOOmoXSdoG5mBo3hOYdFjiwOvpZ7gRZvPjy4HgqLtLh1ZGweJZIhGw2YINARazWPa8M4Xtdo5ejFzk/jUxtfNLVMZh0FC+aJn4ObSTyCWOQMfuwHNYA7yhFiNCBrxUd22EdDE6KGGaawtnaHtHC2nkne8rntFtTVOmZ4zX1m5Li1+SZ0AZcGx6FrAG1+y6vn8lytbfx6vsdRlq55Ce4XXmfLMPt7jhcvpq9jdp9zSNo3U9WImXDS/M/I0uLrAinbfVxVkwiaGmad1PvWSVDqmWJ1opIrjUtDrZhrfgDpoDdQ4MHleNayvPYauVh/e+1UrazGZqSqMFNW1rTCMsxdUyTN3t/NAeSNG2vbmSOSYcsyuoZcdx+3RsNyNZVsfLBndilVWRWnhOaJ5G7cDm425dnVYnf0Gy8Uz46mRz3NaMzYc7XxOPJxsNR2X71Stgo6+cRzVM7nseCWBsERmc08CZLgNB48DcWXQ8EpBBK6zbCRt8zHMyl1xfO0Nb0upwB0vfktec3p543TfAIiLTIiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgjVLfO+c2w+1ViSN7rljnvAJDRlinjsdQQczXDuJKxeFqaeOhY+ndMxwqGZzBnuGZJNXFuobfL2XsuKGoxF5OSSvGbUkSzsv36i5Us8N/qmGVn1Gw8IezskcktW1rGte4Z42sMJvze1pcb68bHt61o8Nhkc35eUMbY53ADTzQB6F9VOF4jKLSCokHG0lS1wv3Pes9JA5odmytOVrCxzC8gtvfXKRbXkVrC6mt7eZS271pExGJzY2np9IDM7eOI1B0ynhyUnY3Z92IVGZ1nxxvEkoe8l07iblvG5ub3Pb2pXU5extnDogdARkEusRe+Ua69ZWvGzVXpeAkjnvYD7nr3KzX3p5jjfTvTMOe7pGMNsC3pDotB45TfTjawBuNOCs9FTnyZc4uc3Nd1hZ17H0cF+caanr4R51UwAcGTOsO4Ncuq+CCeaR9Q6V87w1jG3ldK4BxN7DNpf7+1Sw45L/Kpnlb9x01ERXREREBERAREQEREBERAREQEREBERARFXducZdSU3k/jpnbqLrBPEj/7mvLdTb2Td09xraqOB+5hY6pn5xx8G/SdwC0s1dic3GWCmafkxMMrh3kka9xUjA6SKGMMaMziAZZD50knNx+wcgtpnA5LmueWX66Zjjj+KpW4HNUNyVFRNM02Ja8MLCRwNiCoTdh4h8m/eGH/SrsZOxeXU9KTKqYdioR+Lb+ywfYsg2QpecTv22j/SrcQviy8098laGyVH+Yd/eN/2L5Ox9EfxD/24z741Z7L2yG1ROxNNf4ro9XQv6w1TaPZ2OnJdTunp3G1zGYelbhmswE8TzVjzFeiTsXry1qG1FfF8XUslH5M0ZYT+uC73KXRbZ5HtjrYjTucbNkHSicexwv8Af2KbmB5KJWMika6OVgexws5pHH/32rczyn6xccb+LWxwcAQQQRcEG4IPML1Unwf4gWS1GHveX7gmWnc7zjASLg92ZvpJV2XTjl5Tbmyx8boREWmRERAREQEREBERAREQEREBUDwkjNU4eOQbUut25oAPer+qN4QW/CaH6FR/3KdT5elU4u0ZcPKn81r6DiFsW8Vyx01lYxZREvI1JaFuRi1g3S8MSlZUyr3xZ8kURL3dKTlXuVPE8kR0awvYprwo7wvLGpUMjVRq5THjVQ61YbjT7OR2xhjhzp6hp7fiSPcukLn+zo/CbPqZvcxdAXTw9XPzdhERVSEREBERAREQEREBERAREQFSdvx8IovoVH79OrsqXt8PL0X0Kj9+nU+XpVOLvHlDxC2LOK1tCtlHxXLHTUqNSmKtbTyObHS5XObfEcPacpLbtM7AWm3IjQjmvNoonQRscySS8+L4a89M9FrpqeJ0bephDLlvzndarjEcqtAC9sud09bLHXTxOkeWVGIwzQAvd0d1U7meMfMyugNvnOW6paFjK3EnNMt46eB7AZ53Na6Vs5eQ1zi0XyjlpbSyppja1ZUIXOWTtGARSt8bY54wjxh7zV72Uumpd66Mklzg4OcOhxvosm9z0lQ2N9QKc43QwQtkknbOyB0tG2WJ2c72MF7pbNdY2cCBYhNG1+eo0iqEcr4308LZJSyLH5KdodLJI7c+JzSCNznElzQ52gJPAdQUzBqJjK7ECN50HQBgdNM9rRJE1z7Nc4gXOvBTyjeNbp/FQq1TX8VCrVKrRB2dH4SZ9TL7mq/KhbPD8Is+ql9zVfV0cPVz83YREVkhERAREQEREBERAREQEREBUzbz4+i+jU/vU6uap23Y8tR/RqP3oFPl6VTi7xioVsYlrqJbGJcsdNR8cw19TGxsb2RviqKeoa57DIy8MgeGloINja3FSMQwuSphgY97BJFU0lS9zGODHGCVkpa1pcSL5bak2vzUuNfGKUPjERjzNb0mO6bN6xwab5XsuMzT1X6uPA1xqOTVVWym8kp5d4A+nxCWtvkvmikOZ0HHTpNjN/mDRbRuFkTVcuYWqoYIg3KehuxKLk31vvPYsEWCeTDHSglsG5DmRMiDXh+dkrGt6LcpDbC3yQvh2z/lKWTPG40wkL95AHmWSR7ZHytObybi4OOl7F3ZY0YRYNnJzQR0Ms0JEHiAikjhkYclLJE+zw55u5wiAuLWvwX3iOzb3iq3crGuqK+jr2F8bnNY6nFN0HAOBcCafiCPO7Fl/m4QZss77Stq+g5pexr6iZsriBmvl6IaWXAOpGUk3Vmzpki3YkZB8Hq4LU0G5j8vu+lkzHQZNRfW/EczxGi2ceNw+SZj5WYg/EZnMidHG9zoZId2xpc4tAa9upJvlPXpLp6Axz1M2YEVJhIba2Tdxhmp53tdS48OayaSYfjALN1tG4m8jm62GazCbAXLL6kr7kU8qpjEaRQqxTZFBq1KrRE2e/rBn1UnuCviomz39YM+qk9wV7XRw9XPzdhERWSEREBERAREQEREBERAREQFUduh5Sk/tvfCrcqlt159J/be+JT5elU4u0R6NbGJa6jWxiXJHTUqNSmKLGpLFXFLJkC9XgXqomLwr1eFBjeo0ikvUZ6nkpijSqFVKdIoNSp1WI2zo+Ht+rf7leVSNnB8OH1b/cruujh6ufm7CIiskIiICIiAiIgIiICIiAiIgLnPhcxl9I+gyMjfvDUXa9zmeaYODhe3HqK6MuQ+Ht3lMLHX44fUaf715ZLNV7LZdxKwja+EFrKyKShc+2R81nU7/ozDo+g2KudLLG/zHsf9BzXn1BazZKJslK1sjWva5oDmuaHNItzB4rHP4N6BxLoo302a92wyPbEb/wDKvlHoAU/ixb+SrDvGN85wb9I5feskdTGeEkZ7nt+9UKfwbVEZ+CYtXQdTTK6Rg7gTc+kqHLshjrfNxOKcchPEG+0XKeFn0eW3UGubyc0+kL3MOsesLkcmB7Rt4Mw+TtD3D2EhYfEtpGn+iUTv1m/+RNZejc9ux3HWPWvklvWPWFyRse0n6DRf3jR/EXjqDaN//C0EfaZRp/mFNZej+e3V5JGDi9o73AKJJUw/nY/22/euX/zR2gl8+qpYOyN7/saVIh8HOIHWbFpO0RiRw7tSF5cLXsykX6SshvYPueprXO9wWgxTaSnZcMzzuGhbDkdY/OcXBrfSV5Hsk1sbY5556hjRbdvkLInHrc1ti8/SJWKuomMZla1rWt4NaA1o7gE+L2fL6Ydg9oPGsSMYiyBsMjrl+Y3FhbQW59ZXUVxTwYm2NytH5ib2Fi7WqY4zGaieWVyu6IiLTwREQEREBERAREQEREBERAXH/D38dhXdW++lXYFyPw8wuz4XJ8hrqqMn5z9w5o9UbvUgt2xg+Ds7grO1VjYs/B2dwVoagELyy+l4UHlksvUQeZULV6iDG5iwvapDlHkKCDUNVexUaFWKoKruK8CgqHg30x+T/p5/exduXFPBpGXY/MQNGUk5J5C74gB7fYu1oCIiAiIgIiICIiAiIgIiICIiAq9t3s0MTo3QAhsrHNmp3ng2Zt7X7CC5p7HEqwog5lsljnih8VqwYZWWDmyaEHr7QeRGh5LoVPUNeAWkEHmDdY8WwWnrGhtRCyUC+UuFnsvxyvHSb6CFzPwl4McHo/G6CqrYXCaKLdb/AHsOV5NzaQE3060HVrrwrg+ym2eIVLsjsWbAQAb1VLSFp7A67blX+F+K5QWYjhcwPM0z7/5cqC8oqWJ8Z5SYU7+xrm/ehq8c/Jwk+jEP9iC6IqM7EcbHFmF+htf9rQvk4ri/yn4Uzvjrj9qC8uUeSyotXjuJM86pwlo52Y7+JUsVbxHb2dt/wjSk8MsNGHg9z45pR60HUKl4VWx6uawG/EmwABc5zjwa0DUk9QWj2FxWXE5Kjxieo3cIiLAzdRBxeZLgkNv8gcLcV0LCsPp4XZ4om59RvXF0stjxGd5LgOwFBq/Btsu+jbPVTjLUVjgSzjuYW3yMPzjck94Hybm6rExxKyBB6iIgIiICIiAiIgIiICIiAiIgIiICiYthkNXDJT1EbZYZRlex19dbggjUEEAgjUEAhS0Qc0k8D9Mx+eCTonjHOwvPYGvY5uUeglWKgwutp2hkYpWsaLNDZJD/AISwD2q0og0PjNa3zqcSfViJv706+TW1X6BJ/e0o/iqwIgrxqqo8KKRvfJSu90oXyRWO/FNZ9JkR9onPuVjRBU5sIrpdHupg0/kFzXekFjgfWq3N4G4ZpTLPVSEuOZ26YGO7rkltv1AuoIg0eAbJ0lDHuoI7NuXOLnFznuPFzjzPu4DRbpkYbwAHcF9IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=",
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
              containerClass="container-with-dots"
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
                      <CardMedia
                        component="img"
                        image={url}
                        alt={title}
                        style={{ height: "40vh" }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {text}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Carousel>
          </Box>
        </Fade>
      </Modal>
      {isSelectedGift ? (
        <FinishPage />
      ) : (
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
      )}
    </>
  );
}

export default App;
