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
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
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
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
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
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "4rem auto" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
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
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "1rem auto 5rem" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
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
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "1rem auto 5rem" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
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
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard
          style={{ maxWidth: "540px", margin: "1rem auto 5rem" }}
          className="me-2"
        >
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
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
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
