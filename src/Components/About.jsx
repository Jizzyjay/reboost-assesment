import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/image/logo.png'

function About() {
    return (
        <Container>
            <div className='about_container'>
                <div className='about_content'>
                    <h1>About us</h1>
                    <p>An international, multicultural and multidisciplinary team with expertise in web development, design, marketing, PR and SEO will live up to the expectations and deliver beyond your imaginations.</p>
                    <p>The organisation's culture is based on the belief that employees need a ‘Reboost’ too so we not only provide them with an opportunity to work but to learn too. Founder Melhem Dirani and Project Manager Ryan Slayen have successfully created a healthy, collaborative and competitive workspace where the team can bring out-of-the-box ideas that are later refined by constructive discussions. We come up with innovative ideas to give your business a push to stand out.</p>
                    <p>Our experts can provide all the solutions you need for your business and we would love it if we could be of any help to you. What are you waiting for? Contact us for a quick boost.</p>
                    <button>More info...</button>
                </div>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </Container>
    )
}

export default About

const Container = styled.div`
    .about_container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        background-color: #113cfc;
        padding: 5rem 10rem;
    }
    .about_container .logo{
        width: 4rem;
    }
    /* .about_container{
        padding: 5rem 0;
        background-color: #113cfc;
        h1{ font-size: 3rem;
            color: #fff;
            font-weight: 800;
            margin-bottom: 2rem;
            padding: .5rem 30rem;
        }
        p{ 
            font-size: 14px;
            color: #fff;
            line-height: 1.5rem;
            margin-bottom: 2rem;
            padding: .5rem 30rem;
        }
        button{
            padding: 1rem 2rem;
            /* background-color: #fff; */
            /* background-color: #113cfc; */
            background-color: #fff;
            border: none;
            border-radius: 5px;
            color: #000;
            font-size: 1rem;
            /* margin-top: 2rem; */
        }
    } */
`