import Button from '@base/Button'

export default {
  title: 'Components/base/Button',
  component: Button,
  argTypes: {
    children: { defaultValue: '회원가입', control: 'text' },
    width: { defaultValue: 100, control: 'number' },
    height: { defaultValue: 40, control: 'number' },
    textColor: { defaultValue: 'white', control: 'color' },
    fontSize: { defaultValue: '0.8em', control: 'text' },
    fontWeight: {
      type: 'select',
      options: [400, 700],
    },
    backgroundColor: { defaultValue: '#14bd7e', control: { type: 'color' } },
    hoveredColor: { defaultValue: '#f3f3f5', control: 'color' },
    borderRadius: { defaultValue: '3px', control: 'number' },
    margin: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export const Default = (args) => {
  return <Button {...args}>{args.children}</Button>
}
