import { ComponentStory, ComponentMeta } from '@storybook/react';
import TertiaryModal from './TertiaryModal';

export default {
  title: 'common/modals/TertiaryModal',
  component: TertiaryModal,
  argTypes: {
    onSubmit: { action: 'handle click' },
  },
} as ComponentMeta<typeof TertiaryModal>;

const Template: ComponentStory<typeof TertiaryModal> = (args) => (
  <TertiaryModal {...args} />
);

export const 이자란 = Template.bind({});
