import React from "react";
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');

if (!container) throw new Error(`We cannot find 'root' element.`)

const root = createRoot(container);
root.render(
  <App />
)
