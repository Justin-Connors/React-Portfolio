import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Projects() {
  return (
    <MDBRow className="container-fluid d-flex justify-content-center">
      {/* Card 1 */}
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto", maxHeight: "450px" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>This Portfolio!</MDBCardTitle>
            <MDBCardText>
              Using React, I created this portfolio to showcase my work and
              skills.
            </MDBCardText>
            <MDBBtn
              color="dark"
              target="_blank"
              href="https://github.com/Justin-Connors/React-Portfolio"
            >
              Show Me!
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* Card 2 */}
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto", maxHeight: "450px" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Note Taker</MDBCardTitle>
            <MDBCardText>
              This is a note taker using express, fs, path and util with Node.js.
            </MDBCardText>
            <MDBBtn
              color="dark"
              target="_blank"
              href="https://github.com/Justin-Connors/Note-Taker"
            >
              Show Me!
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* Card 3 */}
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto", maxHeight: "450px" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>E-Commerce Back-End</MDBCardTitle>
            <MDBCardText>
              This is an E-Commerce back-end using: Express.js, MySQL, Dotenv and Sequelize.
            </MDBCardText>
            <MDBBtn
              color="dark"
              target="_blank"
              href="https://github.com/Justin-Connors/E-Commerce-Back_End"
            >
              Show Me!
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* Card 4 */}
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto", maxHeight: "450px" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>SVG Logo Generator</MDBCardTitle>
            <MDBCardText>
              This is a SVG Logo generator using: Jest, FS, and Inquirer.
            </MDBCardText>
            <MDBBtn
              color="dark"
              target="_blank"
              href="https://github.com/Justin-Connors/SVG-Generator"
            >
              Show Me!
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* Card 5 */}
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto", maxHeight: "450px" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>A weather Dashboard</MDBCardTitle>
            <MDBCardText>
              This is a weather dashboard it was one of my first projects and was great to learn API's from it.
            </MDBCardText>
            <MDBBtn
              color="dark"
              target="_blank"
              href="https://github.com/Justin-Connors/Weather-Dashboard"
            >
              Show Me!
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* Card 6 */}
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto", maxHeight: "450px" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>An Employee Tracker</MDBCardTitle>
            <MDBCardText>
              This is an Employee tracker using Dotenv, inquirer, express, mysql, and sequelize.
            </MDBCardText>
            <MDBBtn
              color="dark"
              target="_blank"
              href="https://github.com/Justin-Connors/Employee-Tracker"
            >
              Show Me!
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
