import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import logo from '../assets/image/logo.jpg'
import LandingPage from '../Pages/LandingPage'

function Header() {
    return (
        <Container>
            <div>
                <LandingPage />
                {/* <div className='logo'>
                    <Link to='/'>
                        <img src ={logo} alt="logo" />
                    </Link>
                </div>  */}
                <div className='content'>
                    <h2>Boost your business.</h2>
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
    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: start;
        color: #000;
        width: 50%;
        padding: 0 5rem;
    }
    .content h2{
        font-size: 2.5rem;
        font-weight: 800;
    }
    .content p{
        font-size: 15px;
        line-height: 20px;
        font-weight: 500;
        margin: 2rem 0;
    }
    .content button{
        width: 12%;
        height: 3rem;
        background-color: #113cfc;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: .8rem;
        padding: 1rem;
    }
    
`