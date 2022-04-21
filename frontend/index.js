import React from 'react'
import { createRoot } from 'react-dom/client'

// redux imports start
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './state/reducer'
// redux imports end

// putting together the redux store start
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
// putting together the redux store end

import ColorProvider from './contexts/colors'
import EmojiProvider from './contexts/emojis'

import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <h1>Todo App</h1>
    <EmojiProvider>
      <ColorProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ColorProvider>
    </EmojiProvider>
  </React.StrictMode>
)
