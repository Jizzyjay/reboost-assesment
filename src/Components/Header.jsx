import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import styled from "styled-components";
import LandingPage from "../Pages/LandingPage";

function Header() {
  return (
    <Container>
      <div className="header_container">
        <LandingPage />
        <div className="content">
          <h2>
            Boost your <br /> business.
          </h2>
          <p>
            Our global team with their fine expertise will deliver a wider
            outlook where your clients can engage and relate. We make relevant
            and effective visual communication strategies for your business
            keeping an eye on the online communities and cultures for greater
            collaboration and the user experience.
          </p>
          <p>Let us give you a boost.</p>
          <button>Find out more.</button>
          <div className="btn">
            <a
              href="https://api.whatsapp.com/send?phone=8141153727&text=Hello"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Book a free 15 minute consultation today <BiPhoneCall />{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  .header_container {
    display: flex;
    gap: 5rem;
    align-items: center;
    margin-bottom: 2rem;
  }
  .header_container .logo {
    width: 100vw;
    padding: 0 15rem;
  }
  .header_container .logo img {
    width: 100%;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    text-align: start;
    color: #fff;
    width: 77vw;
    padding: 0 5rem;
  }
  .content h2 {
    font-size: 2.5rem;
    font-weight: 800;
  }
  .content p {
    font-size: 15px;
    line-height: 1.5rem;
    margin: 1rem 0;
  }
  .content button {
    background-color: #113cfc;
    height: 4.5em;
    width: 20%;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 14px;
    margin: 1rem 0;
  }
  .content button:hover {
    background-color: #fff;
    color: #113cfc;
    border: 1px solid #113cfc;
    cursor: pointer;
  }
  .content .btn {
    margin-top: 1rem;
    text-align: end;
  }
  .content .btn button {
    background-color: #113cfc;
    height: 4.5em;
    width: 20%;
    color: #fff;
    font-size: 14px;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }

  @media screen and (max-width: 1024px) {
    .header_container {
      display: block;
      margin-bottom: 1rem;
    }
    .content {
      position: absolute;
      top: 55%;
      left: 65%;
      transform: translate(-80%, -60%);
      text-align: start;
      color: #fff;
      width: 77vw;
      padding: 0 1rem;
    }
    .content h2 {
      font-size: 3rem;
      font-weight: 800;
    }
    .content p {
      font-size: 15px;
      line-height: 1.5rem;
      margin: 1rem 0;
    }
    .content button {
      height: 3rem;
      width: 18%;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-size: 13px;
      margin: 1rem 0;
    }
    .content button:hover {
      background-color: #fff;
      color: #113cfc;
      cursor: pointer;
    }
    .content .btn {
      margin-top: 1rem;
      text-align: end;
    }
    .content .btn button {
      background-color: #113cfc;
      color: #fff;
      height: 4rem;
      width: 25%;
      font-size: 15px;
      border: none;
    }
  }
  @media screen and (max-width: 768px) {
    .header_container {
      display: block;
      margin-bottom: 1rem;
    }
    .content {
      top: 55%;
      left: 70%;
    }
    .content h2 {
      font-size: 3rem;
      font-weight: 800;
    }
    .content p {
      font-size: 15px;
      line-height: 1.5rem;
    }
    .content button {
      height: 4.5em;
      width: 26%;
    }
    .content button:hover {
      background-color: #fff;
      color: #113cfc;
      cursor: pointer;
    }
    .content .btn button {
      background-color: #113cfc;
      color: #fff;
      height: 5em;
      width: 35%;
    }
  }
  @media screen and (max-width: 425px) {
    .header_container {
      margin-bottom: 1rem;
    }
    .content {
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);
      width: 100%;
    }
    .content h2 {
      font-size: 4rem;
      font-weight: 800;
    }
    .content p {
      font-size: 15px;
      line-height: 1.5rem;
    }
    .content .btn {
      display: none;
    }
    .content button {
      height: 3.2rem;
      width: 32%;
      padding: 0.5rem 1rem;
      font-size: 14px;
    }
    .content button:hover {
      background-color: #fff;
      color: #113cfc;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 375px) {
    .content h2 {
      font-size: 3.5rem;
      font-weight: 800;
    }
    .content p {
      font-size: 15px;
      line-height: 1.5rem;
    }
    .content button {
      height: 3.2rem;
      width: 38%;
      font-size: 14px;
    }
    .content button:hover {
      background-color: #fff;
      color: #113cfc;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 320px) {
    .content h2 {
      font-size: 3rem;
      font-weight: 800;
    }
    .content p {
      font-size: 15px;
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }
    .content button {
      height: 3.2rem;
      width: 44%;
      font-size: 14px;
    }
    .content button:hover {
      background-color: #fff;
      color: #113cfc;
      cursor: pointer;
    }
  }
`;