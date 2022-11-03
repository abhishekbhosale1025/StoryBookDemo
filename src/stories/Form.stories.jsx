import React from 'react';
import { Form } from '../Components/Form';

export default {
  title: 'Example/Button',
  component: Form,
} 

const Template=(args)=><Form {...args}/>
const Pink=Template.bind({})
Pink.args={
  backgroundColor:"pink",
  marginTop:"200px",
  buttonColor:"red"
}
