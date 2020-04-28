import React from 'react';
import App from '../App';

import { create } from "react-test-renderer";

test('renders correctly', () => {
  const tree = create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});

// This is failing because of a type mismatch yet the component still renders... created https://stackoverflow.com/questions/61473512/why-is-my-jest-test-failing-in-react-native-with-typescript