import React from "react";
import styled from "styled-components";
import BlogImg from "../assets/image/blog.jpg";

function Blog() {
  return (
    <Container>
      <div className="blog__container">
        <div className="blog__content">
          <h1>Visit our blog</h1>
          <p>
            On our blog we share our insights and deeper thinking on today's
            industry.
          </p>
          <p>
            Sharing information about how to improve your relationships with the
            industry is a key aspect of how we do business.
          </p>
          <p>Delve into our way of thinking within our blog.</p>
        </div>
        <div className="blog__img">
          <img src={BlogImg} alt="blog" />
        </div>
      </div>
    </Container>
  );
}

export default Blog;

const Container = styled.div`
  .blog__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 5rem 12rem;
    align-items: center;
    border: 1px solid #000;
    background-color: hsla(0, 0%, 100%, 0.7);
    margin: 5rem 5rem;
    border-radius: 50px;
    height: 70vh;
    width: 80vw;
  }
  .blog__container .blog__content {
    color: #000;
  }
  .blog__container .blog__content h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.3rem;
  }
  .blog__container .blog__content p {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.3rem;
    margin: 1rem 0;
  }
  .blog__container .blog__img {
    width: 30vw;
    /* padding: 0 15rem; */
  }
  .blog__container .blog__img img {
    width: 40vw;
    height: 70vh;
    object-fit: cover;
  }
`;