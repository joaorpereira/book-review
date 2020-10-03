import React from 'react'
import {Container, Image} from './styled'
import ErrorImage from '../../images/error.png'

function ErrorPage() {
    return (
        <Container>
            <Image src={ErrorImage} alt="error404"/>
        </Container>
    )
}

export default ErrorPage
