import useAsync from '@hooks/useAsync'

export default {
  title: 'Hooks/useAsync',
}

const asyncReturnSuccess = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 1000)
  })
}

const asyncReturnError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 1000)
  })
}

export const Success = () => {
  const state = useAsync(async () => {
    return await asyncReturnSuccess()
  }, [])

  return (
    <div>
      <div>useAsync 테스트 - Success </div>
      <div>{JSON.stringify(state)}</div>
    </div>
  )
}

export const Error = () => {
  const state = useAsync(async () => {
    return await asyncReturnError()
  }, [])

  return (
    <div>
      <div>useAsync 테스트 - Error </div>
      <div>{JSON.stringify(state)}</div>
    </div>
  )
}
