import React, { useCallback } from 'react'
import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar'
import useForm from '@hooks/useForm'
import Text from '@base/Text'
import {
  Search,
  Form,
  SearchInput,
  DataResult,
  DataItemContainer,
  DataItem,
  DataButton,
} from './styled'
import { Authorization } from '@utils/Api'

const SearchBar = React.memo(({ friendList, initFollow, ...props }) => {
  const [result, setResult] = useState([])
  const modalEl = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const friends = friendList.map((user) => user.followers[0])
  const { handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
    },
    onSubmit: async (values) => {
      if (values.name) {
        const res = await Authorization(`search/users/${values.name}`, 'GET')
        const friendData = res.map((data) => {
          let result = null
          if (friends.includes(data.followers[0])) {
            result = { ...data, isFriend: true }
          } else {
            result = { ...data, isFriend: false }
          }
          return result
        })
        setResult(friendData)
      }
    },
  })

  //검색 결과 창 닫기 기능
  const handleClickOutside = useCallback(
    ({ target }) => {
      if (isOpen && !modalEl.current?.contains(target)) {
        setOpen(false)
      }
    },
    [isOpen],
  )

  //검색 결과 창 닫기 기능 전역 이벤트 설정 및 Clear
  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [modalEl, handleClickOutside])

  //팔로우/언팔로우 기능
  const handleFollow = async (e) => {
    //버튼 Text === Follow 일 경우 현재 친구 관계가 아님을 의미하므로 친구 추가!
    try {
      if (e.target.innerText === 'Follow') {
        await Authorization('/follow/create', 'POST', {
          userId: e.target.dataset.id,
        })
        alert('친구 추가')
      } else {
        alert('언팔 잠시 대기!')
        // console.log(e.target.dataset.id)
        // await Authorization('/follow/delete', 'DELETE', {
        //   id: e.target.dataset.id,
        // })
        // alert('친구 삭제!')
      }
      initFollow && initFollow()
      setOpen(false)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    setOpen(true)
    return () => setOpen(false)
  }, [result])

  return (
    <>
      <Search>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="friend-search" />
          <SearchInput
            id="friend-search"
            type="search"
            width="100%"
            name="name"
            padding="10px 35px 10px 15px"
            borderRadius="100px"
            placeholder="Search"
            onChange={handleChange}
            onKeyUp={handleSubmit}
            autoComplete="off"
          />
        </Form>
        {isOpen && (
          <DataResult ref={modalEl} style={{ display: isOpen ? 'block' : 'none' }}>
            {result.map((user) => (
              <DataItemContainer key={user._id} data-userinfo={user.fullName}>
                <DataItem>
                  <Avatar size={35} src={user.image} />
                  <Text fontSize={'1.0em'} style={{ marginLeft: '8px' }}>
                    {JSON.parse(user.fullName).name}
                  </Text>
                </DataItem>
                <DataButton data-id={user._id} onClick={handleFollow}>
                  {user.isFriend ? 'UnFollow' : 'Follow'}
                </DataButton>
              </DataItemContainer>
            ))}
          </DataResult>
        )}
      </Search>
    </>
  )
})

SearchBar.propTypes = {
  friendList: PropTypes.array,
  initFollow: PropTypes.func,
}

export default SearchBar
