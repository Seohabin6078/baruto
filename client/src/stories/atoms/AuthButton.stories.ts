import type { Meta, StoryObj } from '@storybook/react';
import AuthButton from '../../components/atoms/AuthButton';

const meta: Meta<typeof AuthButton> = {
  title: 'atoms/AuthButton',
  component: AuthButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AuthButton>;


export const Normal: Story = {
  args: {
    size: 'normal',
    string: '로그인',
    state: 'accessible'
  },
};


export const disabled: Story = {
  args: {
    size: 'normal',
    string: '로그인',
    state: 'disabled'
  },
};
export const loading: Story = {
  args: {
    size: 'normal',
    string: '로그인',
    state: 'loading'
  },
};
