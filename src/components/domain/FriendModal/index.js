import styled from '@emotion/styled'
import { useMemo, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import useClickAway from '@hooks/useClickAway'
import useKey from '@hooks/useKey'
import Avatar from '@base/Avatar'
import Badge from '@base/Badge'
import Text from '@base/Text'
import SearchBar from '@base/SearchBar'
import { Authorization } from '@utils/Api'
import ImgPath from '@assets/pageMove.png'

const FriendModal = ({ showModal = false, onClose, userInfo, ...props }) => {
  // const loginUserId = '617c01c9f4f4476099ac7995'
  const loginUserId = userInfo._id
  const [friendList, setFriendList] = useState([])

  // 팔로우 목록 조회
  const initFollow = async () => {
    if (loginUserId) {
      const res = await Authorization(`/users/${loginUserId}`, 'GET')
      setFriendList(res.following.map((data) => data.user))
    }
  }
  const ref = useClickAway(() => {
    onClose && onClose()
  })

  useKey('keydown', 'Escape', () => {
    onClose && onClose()
  })

  const el = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  })

  useEffect(() => {
    initFollow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo])

  return ReactDOM.createPortal(
    <BackgroundStyle>
      <ModalWrapper style={{ display: showModal ? 'block' : 'none' }}>
        <ModalInner ref={ref}>
          <Div1>
            <SearchBar initFollow={initFollow} friendList={friendList && friendList} />
          </Div1>
          <ModalBottom>
            <Text fontSize={'0.8em'} block={true}>
              내 친구 / 진도율
            </Text>
            {friendList && friendList.length === 0 ? (
              <Text block={true} fontSize={'1.5em'} color={'#2b2b2b'} style={{ padding: '32px' }}>
                아직은 친구가 없으시네요..!
              </Text>
            ) : (
              friendList.map((user) => (
                <SearchRes key={user._id}>
                  <div>
                    {/* API Image 사용 불가에 따른 디폴트 이미지 사용 */}
                    <Avatar src={ImgPath} size={30} />
                    <Badge isOnline={user.isOnline} />
                  </div>
                  <div>
                    <Text fontSize={'0.8em'} color={'#2b2b2b'}>
                      {JSON.parse(user.fullName).name} / {JSON.parse(user.fullName).userStep}
                    </Text>
                  </div>
                </SearchRes>
              ))
            )}
          </ModalBottom>
        </ModalInner>
      </ModalWrapper>
    </BackgroundStyle>,
    el,
  )
}

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 24px;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`

const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 70%;
  min-width: 320px;
  max-width: 520px;
  background-color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ModalBottom = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 24px;
  width: 100%;
  height: 240px;
  overflow: hidden;
  overflow-y: auto;
`

const SearchRes = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const Div1 = styled.div`
  width: 100%;
  margin: 0 auto;
`

export default FriendModal
