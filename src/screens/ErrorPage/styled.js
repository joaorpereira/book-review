import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;

    @media (max-width: 768px) {
        align-items: flex-start;
    }
`;

export const Image = styled.img`
    max-width: 550px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        max-width: 320px;
        transform: translateY(50%);
    }
`;