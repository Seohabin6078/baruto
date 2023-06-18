import type { Meta, StoryObj } from '@storybook/react';
import GlobalHeaderButton from '../../components/atoms/GlobalHeaderButton';

const meta: Meta<typeof GlobalHeaderButton> = {
  title: 'atoms/GlobalHeaderButton',
  component: GlobalHeaderButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof GlobalHeaderButton>;

const STR = {
  alert: 'alert',
  mypage: 'mypage',
  setting: 'setting'
}

export const Alert: Story = {
  args: {
    action: () => null,
    string: STR.alert
  },
};

export const MyPage: Story = {
  args: {
    action: () => null,
    string: STR.mypage
  },
};

export const Setting: Story = {
  args: {
    action: () => null,
    string: STR.setting
  },
};

