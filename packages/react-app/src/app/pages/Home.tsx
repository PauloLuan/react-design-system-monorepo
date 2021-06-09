import React from 'react'
import styled from 'styled-components'

// import { Container } from './styles'
// import { SimpleText } from '@pauloluan/shared-ui'
import { SimpleText } from '@pauloluan/shared-components'

export const Teste = styled.h1`
  color: green;
`

const Home: React.FC = () => {
  return (
    <>
      <Teste>Home</Teste>
      <div>
        <SimpleText />
      </div>
    </>
  )
}

export default Home
