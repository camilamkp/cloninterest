import React from 'react';
import styled from 'styled-components';
import Pin from '../Pin/Pin';
import './Mainboard.css';

function Mainboard(props)
{
  let { pins } = props;
  return (
    <Wrapper>
      <Container className='mainboardContainer'>
        { pins.map((pin, index) =>
          {
            let { urls } = pin;
            return <Pin key={ index } urls={ urls } />
          })
        }
      </Container>
    </Wrapper>
  )
}

export default Mainboard;

const Wrapper = styled.div`
background-color: white;
display: flex;
height: 100%;
width: 100%;
margin-top: 15px;
justify-content: center;
`

const Container = styled.div`
margin: 0 auto;
height: 100%;
background-color: white;
`

// column-count: 5;
// column-gap: 10px;
// max-width: 1260px;