import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persister } from './app/store';
import App from './App';
import './index.css';
import {PersistGate} from 'redux-persist/integration/react';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>
);

