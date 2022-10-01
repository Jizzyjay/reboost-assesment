import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import logo from '../assets/image/logo.jpg'
import LandingPage from '../Pages/LandingPage'

function Header() {
    return (
        <Container>
            <div className='header_container'>
                <LandingPage />
                {/* <div className='logo'>
                    <Link to='/'>
                        <img src ={logo} alt="logo" />
                    </Link>
                </div>  */}
                <div className='content'>
                    <h2>Boost your <br /> business.</h2>
                    <p>Our global team with their fine expertise will deliver a wider outlook where your clients can engage and relate. We make relevant and effective visual communication strategies for your business keeping an eye on the online communities and cultures for greater collaboration and the user experience.</p>
                    <p>Let us give you a boost.</p>
                    <button>Find out more.</button>
                    {/* <button>Book a 15 minute consultation today </button> */}
                </div>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    .header_container{
        display: flex;
        /* grid-template-columns: 1fr 1fr; */
        gap: 5rem;
        /* height: auto; */
        padding: 5rem 12rem;
        align-items: center;
        margin-bottom: 2rem;
    }
    .header_container .logo{
        width: 100vw;
        padding: 0 15rem;
    }
    .header_container .logo img{
        width: 100%;
    }
    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: start;
        color: #fff;
        width: 50%;
        padding: 0 5rem;
    }
    .content h2{
        font-size: 2.5rem;
        font-weight: 800;
    }
    .content p{
        font-size: 11px;
        line-height: 1rem;
        margin: 1rem 0;
    }
    .content button{
        background-color: #113cfc;
        height: 2.5em;
        width: 19%;
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 11px;
        margin: 1rem 0;
    }
    .content button:hover{
        background-color: #fff;
        color: #113cfc;
        border: 1px solid #113cfc;
        cursor: pointer;
    } 
`