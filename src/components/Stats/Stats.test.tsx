import React from 'react';
import renderer from 'react-test-renderer';
import Stats from './Stats';

it('Stats renders correctly', () => {
  const tree = renderer
    .create(<Stats numberOfUserLivingInAnApt={4} numberOfUserLivingInASuite={8} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});