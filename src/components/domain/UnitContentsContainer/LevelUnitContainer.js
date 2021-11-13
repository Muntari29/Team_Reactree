import React from 'react'
import styled from '@emotion/styled'
import LevelUnit from './LevelUnit'
import Level1 from '@assets/level1.png'
import Level2 from '@assets/level2.png'
import Level3 from '@assets/level3.png'

const LevelUnitContainer = ({ step = 0, userInfo, channelName, clickHandler }) => {
  return (
    <Container>
      <LevelUnit level={1} imageSrc={Level1} clickHandler={clickHandler} />
      <LevelUnit level={2} imageSrc={Level2} clickHandler={clickHandler} />
      <LevelUnit level={3} imageSrc={Level3} clickHandler={clickHandler} />
    </Container>
  )
}

export default React.memo(LevelUnitContainer)

const Container = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: none;
`
