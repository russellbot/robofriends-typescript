import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
serviceWorker.register();
