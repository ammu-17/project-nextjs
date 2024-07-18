import React, { CSSProperties } from 'react';
import {Html,Body, Container, Text, Link , Preview} from '@react-email/components'

const WelcomeTemplate = ({name} : {name:string}) => {
  return (
    <Html>
        <Preview>Welcome abord!</Preview>
        <Body>
            <Container>
                <Text style={heading}>Hello {name}</Text>
                <Link href='http://ammudev.tech'>ammudev.tech</Link>
            </Container>
        </Body>
    </Html>
  )
}

const heading: CSSProperties = {
    fontSize : '32px',
    fontWeight : 'bold'
    
}

export default WelcomeTemplate
