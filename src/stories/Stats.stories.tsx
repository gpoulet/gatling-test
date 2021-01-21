import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Stats, { StatsProps } from '../components/Stats/Stats';

export default {
  title: 'Stats',
  component: Stats,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<StatsProps> = (args) => <Stats {...args} />;

export const Stats1 = Template.bind({});
Stats1.args = {
  numberOfUserLivingInAnApt: 2,
  numberOfUserLivingInASuite: 9,
};
