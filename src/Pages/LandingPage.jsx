import React from "react";
import bg from "../assets/image/bg2.jpg";
import styled from "styled-components";

function LandingPage() {
  return (
    <Container>
      <div className="bg">
        <img src={bg} alt="bg" />
      </div>
    </Container>
  );
}

export default LandingPage;

const Container = styled.div`
  .bg {
    width: 100vw;
    height: 90vh;
    background-color: #113cfc;
    /* position: relative; */
  }
  .bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 425px){
    .bg{
      height: 95vh;
    }
}
`;