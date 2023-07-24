import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent } from '@storybook/testing-library';

import { ImageTextSection } from '../components/ImageTextSection';

const meta = {
  title: 'Example/ImageTextSection',
  component: ImageTextSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ImageTextSection>;

export default meta;
type Story = StoryObj<typeof meta>;

import data from '../../output.json';

export const Basic: Story = {
  args: {
    section: data,
  },
};