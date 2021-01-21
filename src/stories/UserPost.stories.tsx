import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import UserPost, { UserPostProps } from "../components/UserPost/UserPost";

export default {
  title: "UserPost",
  component: UserPost,
  argTypes: {},
} as Meta;

const Template: Story<UserPostProps> = (args) => <UserPost {...args} />;

const post1 = {
  userId: 1,
  id: 1,
  title: "titre 1",
  body: "lorem",
};

export const Post1 = Template.bind({});
Post1.args = {
  post: post1,
};
