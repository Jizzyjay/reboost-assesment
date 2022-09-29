import React from 'react'
import styled from 'styled-components'
import {GiCagedBall} from 'react-icons/gi'

function Service() {
  return (
    <Container>
        <div className='service'>
            <div className='service__title'>
                <h2>What we do...</h2>
            </div>
            <hr />
            <div className='service__content'>
                <div className='service__content__card'>
                    <div className='service__content__card__icon'>
                        <h2>UI/UX Design</h2>
                        <GiCagedBall />
                    </div>
                    <p>Our design team has vast experience in designing apps and B2B solutions and together we will create a system that your users will love. Our experts smoothly blend into the software development process to conveniently deliver the products you want.</p>
                    <button>More info</button>
                </div>

                <div className='service__content__card'>
                    <div className='service__content__card__icon'>
                        <h2>Web & Mobile App Development</h2>
                        <GiCagedBall />
                    </div>
                    <p>The largest department of our organization contains expert web developers who are anxiously waiting to work with you and turn your website dream into a reality. We provide web development services including a content management system (CMS), Informational website or an e-commerce store, you name it and we create it.</p>
                    <button>More info</button>
                </div>

                <div className='service__content__card'>
                    <div className='service__content__card__icon'>
                        <h2>Branding & Social Media</h2>
                        <GiCagedBall />
                    </div>
                    <p>Our Marketing team makes efforts to nourish and support the unprecedented growth of your business. We believe in bringing your aspiring brand into reality and fanning the flames of the existing ones with aims, values and growth. We provide expertise in impressive branding, fascinating designs and extraordinary creativity to sky-rocket your brand.</p>
                    <button>More info</button>
                </div>

                <div className='service__content__card'>
                    <div className='service__content__card__icon'>
                        <h2>UI/UX Design</h2>
                        <GiCagedBall />
                    </div>
                    <p>Imaging, you have invested a good budget on the design, outlook and management of your website but still, you fail to get the engagement. Ever wondered why? This could be because of the unclear content available on the site that fails to get you loyal customers and increase your online visibility. For that, you need a professional team for publishing clear content that can not only bring you long-term customers but rank your brand higher on the search engine.</p>
                    <button>More info</button>
                </div>
            </div>

        </div>
    </Container>
  )
}

export default Service

const Container = styled.div`
    .service{
        padding: 5rem 0;
    }
    .service__title{
        text-align: start;
        padding: 0 25rem;
    }
    .service__title h2{
        font-size: 2rem;
        font-weight: 800;
    }
    hr {
        width: 60%;
    }
    .service__content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 5rem 25rem;
    }
    .service__content__card{
        border: 1px solid rgba(0,0,0,.1);
        width: 20rem;
        height: 20rem;
        background-color: red;
        border-radius: 5px;
        padding: 1.5rem;
        margin: 1rem;
        height: 80%;
        /* width: 60%; */

    } 
    .service__content__card__icon{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .service__content__card__icon h2{
        font-size: 1.3rem;
        font-weight: 800;
    }
    .service__content__card__icon svg{
        font-size: 2rem;
    }
    .service__content__card p{
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
        margin: 1.5rem;
    }
    .service__content__card button{
        width: 50%;
        height: 3rem;
        background-color: #113cfc;
        color: #fff;
        border: none;
        padding: 1rem;
        border-radius: 5px;
        font-size: .8rem;
        font-weight: 600;
        cursor: pointer;
    }

`