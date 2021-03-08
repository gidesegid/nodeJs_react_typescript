import React from 'react';
import App from './App';
import * as ReactDOM from 'react-dom';
it('renders app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
/*
yet other part of the component will be continue testing here below in the comming soon
*/
