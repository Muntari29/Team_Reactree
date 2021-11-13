import React, { useState, useEffect } from 'react'
import Header from '@domain/Header'
import UnitContentsContainer from '@domain/UnitContentsContainer'
import { RequestApi, Authorization } from '@utils/Api'
import { Div1, Div2 } from './style'

const MyTreePage = () => {
  const [channels, setChannels] = useState([])
  const [channelInfo, setChannelInfo] = useState([])
  const [userInfo, setUserInfo] = useState(null)

  // 초기 채널 목록 API
  const initChannels = async () => {
    try {
      const res = await RequestApi('/channels', 'GET')
      setChannels(() => {
        return res.map((channel) => channel.name)
      })
      setChannelInfo(() => {
        return res.map((channel) => channel)
      })
    } catch (e) {
      console.error(e)
    }
  }

  // 초기 해당 토큰 값의 유저 정보 API + 로딩
  const getUserInfo = async () => {
    try {
      const res = await Authorization('/auth-user', 'GET')
      const { _id, isOnline, fullName, email, posts, likes } = res
      setUserInfo((res) => ({ _id, isOnline, fullName, email, posts, likes }))
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    initChannels()
  }, [])

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Div1>
      <Header userInfo={userInfo} />
      <Div2>
        {channelInfo && userInfo && (
          <UnitContentsContainer
            userInfo={userInfo}
            channelNameArray={channels}
            channelInfo={channelInfo}
          />
        )}
      </Div2>
    </Div1>
  )
}

export default React.memo(MyTreePage)
