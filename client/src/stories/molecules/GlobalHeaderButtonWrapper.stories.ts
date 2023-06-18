import type { Meta, StoryObj } from '@storybook/react';
import GlobalHeaderButtonWrapper from '../../components/molecules/GlobalHeaderButtonWrapper';

const meta: Meta<typeof GlobalHeaderButtonWrapper> = {
  title: 'molecule/GlobalHeaderButtonWrapper',
  component: GlobalHeaderButtonWrapper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof GlobalHeaderButtonWrapper>;

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true
  },
};

export const LoggedOut: Story = {
  args: {
    isLoggedIn: false
  },
};