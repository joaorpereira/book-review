import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'

import styled from 'styled-components'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 56px);
`

const Loading = () => {
  return (
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  )
}

export default Loading
