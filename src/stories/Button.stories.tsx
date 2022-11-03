import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import  {Form}  from '../Components/Form';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Pink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pink.args = {
  backgroundColor:"pink",
  marginTop:"200px",
  buttonColor:"red"
};

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Red.args = {
  backgroundColor:"red",
  marginTop:"200px",
  buttonColor:"green",
  handleClick:()=>alert("clicked red")
};

export const Green = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Green.args = {
  backgroundColor:"green",
  marginTop:"200px",
  buttonColor:"pink"
};


