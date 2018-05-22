import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import ThemeProvider from './theme';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
