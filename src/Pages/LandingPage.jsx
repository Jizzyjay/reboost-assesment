import React from 'react'
import bg from '../assets/image/bg.jpg'
import styled from 'styled-components'

function LandingPage() {
  return (
    <Container>
      <div className='bg'>
        <img src={bg} alt="bg" />            
      </div>
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  .bg img{
    width: 100%;
    height: 100vh;
  }
`