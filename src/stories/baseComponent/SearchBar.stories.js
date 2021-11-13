import SearchBar from '@base/SearchBar'
import styled from '@emotion/styled'
import ImgPath from '@assets/leaf.png'

export default {
  title: 'Components/base/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text' },
    children: null,
  },
}

const containerStyle = {
  margin: '50px auto',
  width: '500px',
  height: '500px',
  display: 'flex',
  backgroundColor: 'purple',
  justifyContent: 'center',
  alignItems: 'center',
}

export const Default = (args) => {
  const handleOnClick = (event) => {
    console.log('handleClick')
    event.stopPropagation()
    alert('친구추가가 되었습니다')
  }

  const DataButton = styled.button`
    width: 35px;
    height: auto;
    border-radius: 50%;
    background-color: #14bd7e;
    color: white;
    box-sizing: 'border-box';
    border: none;
    box-shadow: '5px 2px 2px gray';
    cursor: 'pointer';
    &:hover {
      color: black;
      background-color: #f3f3f5;
    }
  `
  return (
    <div className="container" style={{ ...containerStyle }}>
      <SearchBar
        src={ImgPath}
        children={<DataButton onClick={handleOnClick}>{'follow'}</DataButton>}
      />
    </div>
  )
}
