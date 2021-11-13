import styled from '@emotion/styled'
import useHover from '@hooks/useHover'

export default {
  title: 'Hooks/useHover',
}

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

export const Default = () => {
  const [ref, hover] = useHover()

  return (
    <>
      <Box ref={ref} /> {hover ? 'True' : 'False'}
    </>
  )
}
