import type { Meta, StoryObj } from '@storybook/react';
import AuthInput from '../../components/atoms/AuthInput';

const meta: Meta<typeof AuthInput> = {
  title: 'atoms/AuthInput',
  component: AuthInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AuthInput>;

export const Normal: Story = {
  args: {
    state: 'normal',
    label: '이메일 주소',
    type: 'email'
  },
};

export const Focus: Story = {
  args: {
    state: 'focus',
    label: '이메일 주소',
    type: 'email'
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    label: '이메일 주소',
    type: 'email'
  },
};
