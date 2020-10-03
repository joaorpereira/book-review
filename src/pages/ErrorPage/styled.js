import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;

    @media (max-width: 768px) {
        align-items: flex-start;
    }
`;

export const Image = styled.img`
    max-width: 500px;
    align-items: center;
    justify-content: center;
    margin-top: 70px;

    @media (max-width: 768px) {
        max-width: 275px;
        margin-top: 0px;
        transform: translateY(25%);
    }
`;