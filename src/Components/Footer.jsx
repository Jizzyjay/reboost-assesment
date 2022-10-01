import React from "react";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import styled from "styled-components";
import Logo from "../assets/image/logo.png";

function Footer() {
    return (
        <Container>
        <div className="footer__container">
            <div className="footer__header">
                <h1>Reboost</h1>
                <p>we see clients in your future.</p>
                <div className="footer__social">
                    <AiOutlineFacebook />
                    <BsInstagram />
                    <FiTwitter />
                    <AiOutlineLinkedin />
            </div>
            </div>
            <div className="footer__content">
            <div className="footer__form">
                <p>Subscribe here for news and updates:</p>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="E-mail address" />
                    <button>Subscribe</button>
            </div>

            <div className="footer__links">
                <h3>Explore</h3>
                <p>About</p>
                <p>Our Work</p>
                <p>Career</p>
                <p>Copyright &#169; 2022 | All rights reserved | Site by Reboost</p>
            </div>
            </div>
            <div className="footer_image">
            <img src={Logo} alt="logo" />
            </div>
        </div>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    .footer__container {
        width: 85vw;
        height: 80vh;
        padding: 1.5rem 5rem;
        background-color: #113cfc;
        color: #fff;
        margin: 0 auto 50px;
        border-radius: 50px;
        padding-bottom: 0;
    }
    .footer__container .footer__header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        /* margin: 0;
        margin-bottom: -2rem; */
    }
    .footer__container .footer__header h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 800;
    }
    .footer__container .footer__header p {
        font-size: 12px;
        font-weight: 300;
        margin: 0;
        text-transform: uppercase;
        line-height: 1.3rem;
        margin: 1rem 0;
    }
    .footer__container .footer__header .footer__social {
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
    }
    .footer__container .footer__content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* grid-column-gap: 60rem; */
        gap: 20rem;
        margin-top: -3.5rem;
        align-items: center;
    }
    .footer__container .footer__content .footer__form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .footer__container .footer__content .footer__form p {
        font-size: 1.3rem;
        font-weight: 300;
        margin: 0;
        line-height: 1.3rem;
        margin: 1rem 0;
    }
    .footer__container .footer__content .footer__form input {
        padding: 0.5rem 1rem;
        border: none;
        width: 300px;
        border-radius: 5px;
        outline: none;
    }
    .footer__container .footer__content .footer__form button {
        width: 30%;
        height: 2.5rem;
        background-color: #fff;
        color: #000;
        border: none;
        border-radius: 5px;
        font-size: 12px;
        padding: 1rem;
    }
    .footer__container .footer__content .footer__links {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding: 0;
    }
    .footer__container .footer__content .footer__links h3 {
        font-size: 1.5rem;
        font-weight: 800;
    }
    .footer__container .footer__content .footer__links p {
        font-size: 13px;
        font-weight: 700;
        margin: .6rem 0;
    }
    .footer__container .footer_image {
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .footer__container .footer_image img {
        width: 30%;
        margin-bottom: 0;
    }
    @media screen and (max-width: 1024px) {
        .footer__container {
            width: 100vw;
            height: 100vh;
            /* padding: 1.5rem 5rem; */
            border-radius: 50px;
            margin: 0 auto 50px;
        }
    }
`