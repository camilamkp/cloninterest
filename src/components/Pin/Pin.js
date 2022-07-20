import React from 'react';
import styled from 'styled-components';

function Pin(props)
{
    let { urls } = props;
  return (
    <Wrapper>
        <Container>
            <div className="card">
                <div className="pinTitle"></div>
                <div className="pinModal">
                    <div className="modalHead">
                        <div className="saveCard">Save</div>
                    </div>
                    <div className="modalFoot">
                        <div className="destination">

                        </div>
                    </div>
                </div>
            </div>
            <img src={ urls?.regular } alt="unsplash" />
        </Container>
    </Wrapper>
  )
}

export default Pin;

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 236px;

    img {
        display: flex;
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }
`