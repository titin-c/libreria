/*  antes

import React from 'react';
import ReactDOM from 'react-dom';

import { Libreria } from './Libreria';

ReactDOM.render(
    <Libreria />,
  document.getElementById('root')
);
*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Libreria } from './Libreria';

import './styles/index.scss'

const divRoot = document.getElementById('root');
const root = createRoot(divRoot);

root.render( <Libreria /> );