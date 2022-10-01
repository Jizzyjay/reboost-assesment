import React from 'react'
import styled from 'styled-components'
import BlogImg from '../assets/image/blog.jpg'

function Blog() {
  return (
    <Container>
        <div className='blog__container'>
            <div className='blog__content'>
                <h1>Visit our blog</h1>
                <p>On our blog we share our insights and deeper thinking on today's industry.</p>
                <p>Sharing information about how to improve your relationships with the industry is a key aspect of how we do business.</p>
                <p>Delve into our way of thinking within our blog.</p>
            </div>
            <div className='blog__img'>
                <img src={BlogImg} alt="blog" />
            </div>
        </div>
    </Container>
  )
}

export default Blog

const Container = styled.div`
    .blog__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        padding: 5rem 12rem;
        align-items: center;
        background-color: #113cfc;
        margin-bottom: 5rem;
        border-radius: 50px;
    }
    .blog__container .blog__content{
        color: #fff;
    }
    .blog__container .blog__content h1{
        font-size: 2.5rem;
        font-weight: 800;
    }
    .blog__container .blog__content p{
        font-size: 14px;
        line-height: 1.3rem;
        margin: 1rem 0;
    }
    .blog__container .blog__img{
        /* width: 4rem; */
        padding: 0 15rem;
    }
    /* .blog__container .blog__img img{
        width: 30vw;
    } */




    /* .blog__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        width: 50%;
        padding: 5rem 12rem;
        border-radius: 50px;
        align-items: center;
        background-color: #113cfc;
        margin-bottom: 2rem;
        padding: 5rem 20rem;
    }
    .blog__container .blog__content{
        color: #fff;
    }
    .blog__container .blog__content h1{
        font-size: 2.5rem;
        font-weight: 800;
    }
    .blog__container .blog__content p{
        font-size: 14px;
        line-height: 1.7rem;
        font-weight: 500;
        margin: 2rem 0;
    }
    .blog__container .blog__img{
        width: 4rem;
        /* height: 1vh;
        padding: 0 15rem;
    }*/
    .blog__container .blog__img img{
        width: 35vw;
    } 
`