import ModalContainer from '../../components/base/ModalContainer'

/* eslint-disable */
export default {
  title: 'Components/ModalContainer',
  component: ModalContainer,
  argTypes: {
    width: {
      defaultValue: 300,
      control: { type: 'number' },
    },
    height: {
      defaultValue: 300,
      control: { type: 'number' },
    },
    color: {
      defaultValue: 'white',
      control: { type: 'color' },
    },
  },
}

export const Default = (args) => {
  return <ModalContainer {...args} />
}
