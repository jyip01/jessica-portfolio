import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {PageProvider} from './contexts/page-context'

ReactDOM.render(
  <BrowserRouter>
    <PageProvider>
      <App />
    </PageProvider>
  </BrowserRouter>,  
  document.getElementById('root')
)