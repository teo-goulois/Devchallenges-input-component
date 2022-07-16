import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";
import './style.scss'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const Template2: ComponentStory<typeof Input> = (args) => (
  <>
    <Input size="sm" {...args} />
    <Input size="md" {...args} />
  </>
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const HelperText = Template.bind({});
HelperText.args = { helperText: "Some interesting text" };

export const StartIcon = Template.bind({});
StartIcon.args = { startIcon: "call" };

export const EndIcon = Template.bind({});
EndIcon.args = { endIcon: "lock" };

export const Value = Template.bind({});
Value.args = { value: "text" };

export const Size = Template2.bind({});

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true };

export const Multiline = Template.bind({});
Multiline.args = { multiline: true, row: 4 };
