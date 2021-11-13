import React, { useState } from 'react'
import styled from '@emotion/styled'
import ImgPath from '@assets/unit.png'
import LockPath from '@assets/lock.png'
import ModalContainer from '@base/ModalContainer'

const Unit = ({
  unitId,
  level,
  userStep,
  channel,
  channelName,
  channelInfo,
  likedPosts,
  hoverHandler,
  disable,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const maxActiveUnit = userStep % 10
  if (unitId > maxActiveUnit) {
    //배경 어둡게 비활성화하기
  }

  const validateUnit = (unitId, level, userStep) => {
    if (unitId > userStep - 1) {
      alert('아직 열리지 않았습니다')
      return
    }
    setModalVisible(true)
  }

  const onHandleHover = () => {
    hoverHandler(true)
  }
  const onClickHandler = (event) => {
    validateUnit(unitId, level, userStep, channel)
  }

  const handleShow = (event) => {
    event.stopPropagation()
    setModalVisible(false)
  }

  return (
    <>
      <ModalContainer
        width={500}
        height={700}
        showModal={modalVisible}
        handleShow={handleShow}
        unitId={unitId}
        level={level}
        userStep={userStep}
        channel={channel}
        channelName={channelName}
        channelInfo={channelInfo}
        likedPosts={likedPosts}
      />
      <OuterCircle
        style={disable ? { border: '5px solid gray' } : {}}
        onClick={onClickHandler}
        onMouseOver={onHandleHover}>
        <InnerCircle
          style={
            disable
              ? { backgroundColor: 'rgba(220, 228, 170, 0.7)', border: '5px solid green' }
              : {}
          }>
          <Img src={disable ? LockPath : ImgPath} alt="유닛" />
          <Chapter style={disable ? { display: 'none' } : {}}>{channel}</Chapter>
        </InnerCircle>
      </OuterCircle>
    </>
  )
}

export default React.memo(Unit)

const OuterCircle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e5e5e5;
  border-radius: 50%;
  border: 5px solid #fff8bc;
  margin: 10px;
  transform: translateX(0%);
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 3px 5px #9e9e9e;
  cursor: pointer;
  &:hover {
    transform: translateX(0%) scale(1.1);
  }
`

const InnerCircle = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93px;
  height: 93px;
  background-color: #ddf5ff;
  border-radius: 50%;
  border: 5px solid white;
  pointer-events: none;
`

const Img = styled.img`
  width: 60%;
  height: 60%;
  border: none;
  background-color: transparent;
  pointer-events: none;
`
const Chapter = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  top: 40%;
  left: 38%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
`
