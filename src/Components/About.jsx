import React from "react";
import styled from "styled-components";
import Logo from "../assets/image/logo.png";

function About() {
  return (
    <Container>
      <div className="about_container">
        <div className="about_content">
          <div className="about_content_left">
            <h1>About us</h1>
            <p>
              An international, multicultural and multidisciplinary team with
              expertise in web development, design, marketing, PR and SEO will
              live up to the expectations and deliver beyond your imaginations.
            </p>
            <p>
              The organisation's culture is based on the belief that employees
              need a ‘Reboost’ too so we not only provide them with an
              opportunity to work but to learn too. Founder Melhem Dirani and
              Project Manager Ryan Slayen have successfully created a healthy,
              collaborative and competitive workspace where the team can bring
              out-of-the-box ideas that are later refined by constructive
              discussions. We come up with innovative ideas to give your
              business a push to stand out.
            </p>
            <p>
              Our experts can provide all the solutions you need for your
              business and we would love it if we could be of any help to you.
              What are you waiting for? Contact us for a quick boost.
            </p>
            <button>More info...</button>
          </div>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </Container>
  );
}

export default About;

const Container = styled.div`
  .about_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    width: 100vw;
    height: 100vh;
    padding: 1rem 8rem;
    align-items: center;
    background-color: #113cfc;
    /* margin-bottom: 2rem; */
  }
  .about_container .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about_container .logo img {
    width: 20rem;
    padding: 1rem;
  }
  .about_content_left {
    padding: 1rem 0;
  }
  .about_container .about_content {
    color: #fff;
  }
  .about_container .about_content h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  .about_container .about_content p {
    font-size: 13px;
    line-height: 1.1rem;
    font-weight: 400;
    margin: 3rem 0 1rem 0;
  }
  .about_container .about_content button {
    width: 20%;
    height: 3rem;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 5px;
    margin-top: 1rem;
    font-size: 15px;
    padding: 0.5rem 1rem;
  }
  @media (max-width: 1042px) {
    .about_container {
      padding: 1rem 4rem;
    }
    .about_container .about_content button {
      width: 30%;
    }
    @media (max-width: 768px) {
      .about_container {
        width: 100vw;
        height: 100vh;
        display: flex;
        /* padding: 4rem 12rem; */
      }
      .about_container .logo {
        display: none;
      }
      .about_container .about_content h1 {
        padding-top: 3rem;
        font-size: 2.5rem;
        font-weight: 800;
      }
      .about_container .about_content p {
        margin: 3rem 0 3rem 0;
        line-height: 1.5rem;
      }
      .about_container .about_content button {
        width: 20%;
        height: 3rem;
        font-size: 11px;
        margin-bottom: 1rem;
      }
    }
    @media (max-width: 425px) {
      .about_container {
        width: 100vw;
        height: 100vh;
        display: flex;
        padding: 2rem;
      }
      .about_container .about_content h1 {
        padding-top: 3rem;
        font-size: 2rem;
        font-weight: 600;
      }
      .about_container .about_content p {
        margin: 2rem 0 1rem 0;
        line-height: 1rem;
      }
      .about_container .about_content button {
        width: 40%;
        height: 3.5rem;
        font-size: 14px;
        margin-bottom: 1rem;
      }
    }
  }
`;