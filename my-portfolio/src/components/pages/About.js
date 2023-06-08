import React, { useState } from "react";
import {
  MDBCollapse,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function About() {
  const [showAboutMeDev, setShowAboutMeDev] = useState(true);
  const [showAboutMePersonal, setShowAboutMePersonal] = useState(false);

  const toggleShowAboutMeDev = () => {
    setShowAboutMeDev(!showAboutMeDev);
    if (toggleShowAboutMeDev) {
      setShowAboutMePersonal(false);
    }
  };
  const toggleShowAboutMePersonal = () => {
    setShowAboutMePersonal(!showAboutMePersonal);
    if (toggleShowAboutMePersonal) {
      setShowAboutMeDev(false);
    }
  };

  return (
    <>
      <MDBContainer
        style={{
          width: "100%",
          margin: "5rem auto",
        }}
      >
        <MDBRow>
          <MDBCol md="8">
            <MDBBtn
              outline
              className="mx-2"
              color="dark"
              onClick={toggleShowAboutMeDev}
            >
              My Dev Journey
            </MDBBtn>
            <MDBBtn
              outline
              className="mx-2 ms-1"
              color="dark"
              onClick={toggleShowAboutMePersonal}
            >
              The non Dev stuff
            </MDBBtn>

            <MDBCollapse show={showAboutMeDev} className="mt-3">
              <p>
                I'm Justin Connors, an aspiring professional with a deep passion
                for Web Development. Although my journey is still in its early
                stages, I am committed to learning and growing within the Web
                Dev realm.
              </p>
              <p>
                Equipped with knowledge from a fullstack bootcamp, I have
                developed a strong foundation in the MERN Stack as well as other
                technologies. I possess a natural curiosity and a drive to
                expand my expertise in Web Development as there's so much to
                learn.
              </p>
              <p>
                While I may not have significant "real job" experience yet, I
                have been actively engaging in personal projects as well as
                doing old challenges again to try and learn something new, as
                well as trying to solve some of 'LeetCodes' problems to gain
                hands-on experience and further develop my skills.
              </p>
              <p>
                I believe in the power of continuous learning and seek
                opportunities to expand my horizons. I am eager to collaborate
                with professionals who share my enthusiasm and are dedicated to
                making an impact in the world of Web Development.
              </p>
              <p>
                Thank you for visiting my portfolio. Feel free to explore my
                work and achievements as I strive to contribute to the
                ever-evolving world of tech. Let's connect and explore potential
                collaborations or opportunities to make a difference together.
              </p>
            </MDBCollapse>

            <MDBCollapse show={showAboutMePersonal} className="mt-3">
              <p>
                So you want to know the non dev stuff huh? We'll, I was born in
                Nova Scotia, Canada, I'm currently 26 years old born August 10th
                1996. Most of my time is spent at a computer screen.
              </p>
              <p>
                I love playing games with friends and some of my favourite games
                are (Now these could change but): The Division 2, Destiny 2,
                WoW(Althought I havent played in a while I did a lot as a kid).
                I also enjoy playing TFT, League of Legends, and a bunch others.
              </p>
              <p>
                I also enjoy TV shows and movies kind've like mostly everyone
                else. My all time favourite shows are: 'Vikings: Valhalla', and
                'Breaking Bad'. I enjoy just about any movie.
              </p>
              <p>
                I also enjoy tech a lot, I love building computers and learning
                about new tech. I've built my own PC and have also built a few
                PC's for friends as well. I also find AI and Machine Learning
                very interesting and would love to learn more about it. It's
                just so fascinating to me to watch something learn how to do
                even simple tasks, let alone how to play a game or something
                it's honestly mind blowing stuff.
              </p>
            </MDBCollapse>
          </MDBCol>

          <MDBCol md="4" className="mt-2">
            <img
              src={require("../../img/self.jpg")}
              className="img-fluid rounded"
              alt=""
              style={{ maxWidth: "50%", width: "100%", height: "auto" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
