import Input from '@base/Input'

export default {
  title: 'Components/base/Input',
  component: Input,
  argTypes: {
    type: { defaultValue: 'text', control: 'text' },
    width: { defaultValue: '80%', control: 'text' },
    placeHolder: { defaultValue: '입력', control: 'text' },
    fontSize: { defaultValue: '24px', control: 'text' },
    fontWeight: { defaultValue: 400, control: 'number' },
    padding: { defaultValue: '1em', control: 'text' },
    borderRadius: { defaultValue: '3px', control: 'text' },
  },
}

export const SmallFontInput = (args) => {
  return <Input fontSize={(args.fontSize = '24px')} {...args} />
}
export const RegularFontInput = (args) => {
  return <Input fontSize={(args.fontSize = '32px')} {...args} />
}
export const LargeFontInput = (args) => {
  return <Input fontSize={(args.fontSize = '48px')} {...args} />
}
export const Email = (args) => {
  return <Input type={(args.type = 'email')} placeHolder={(args.placeHolder = 'Email')} {...args} />
}
export const Identity = (args) => {
  return <Input type={(args.type = 'text')} placeHolder={(args.placeHolder = 'ID')} {...args} />
}

export const Password = (args) => {
  return (
    <Input
      type={(args.type = 'password')}
      placeHolder={(args.placeHolder = 'Password')}
      {...args}
    />
  )
}
