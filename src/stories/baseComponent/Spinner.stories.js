import Spinner from '@base/Spinner'

export default {
  title: 'Components/base/Spinner',
  component: Spinner,
  argTypes: {
    size: { defaultValue: '100px', control: 'text' },
    color: { control: 'color' },
    loading: { defaultValue: true, control: 'boolean' },
  },
}

export const Default = (args) => {
  return <Spinner {...args} />
}
