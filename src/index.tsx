import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faArrowRight,
  faQuestion,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { Map } from './components';
import { ChunkDataProvider } from './data';
import reportWebVitals from './reportWebVitals';

import './Styles.scss';

library.add(faArrowLeft as IconDefinition, faArrowRight as IconDefinition, faQuestion as IconDefinition, faSearch as IconDefinition, faTimes as IconDefinition);

ReactDOM.render(
  <React.StrictMode>
    <ChunkDataProvider>
      <Map />

      <ToastContainer autoClose={3000} />
    </ChunkDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
