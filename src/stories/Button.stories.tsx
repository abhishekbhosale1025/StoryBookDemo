import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Pink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pink.args = {
  primary : false,
  size : 'medium',
  backgroundColor:"pink",
  label:"clickme",
};

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Red.args = {
  primary : false,
  size : 'medium',
  backgroundColor:"red",
  label:"button2",
};

export const Green = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Green.args = {
  primary : false,
  size : 'medium',
  backgroundColor:"green",
  label:"button3",
};


