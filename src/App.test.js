import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './Global/store';


describe('SafePanel', () =>{

  test('renders 12 buttons in keypad', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(12);
  });
  
  test('renders CLR button', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const clearButton = screen.getByRole('button', { name: 'CLR' });
    expect(clearButton).toBeInTheDocument();
  });
  
  test('renders ENTER button', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const clearButton = screen.getByRole('button', { name: '⇨' });
    expect(clearButton).toBeInTheDocument();
  });

});

