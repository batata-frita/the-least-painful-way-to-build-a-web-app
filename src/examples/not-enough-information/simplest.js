import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const initialState = {
  accessToken: 'ultrasecretstuff',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

const App = ({ accessToken, onResult, searchResults }) =>
  <main>
    <h1>Search</h1>
    <input
      onChange={e =>
        fetch(`?query=${e.target.value}&accessToken=${accessToken}`).then(result =>
          onResult(result)
        )}
      placeholder="Search"
    />
    <ul>
      {searchResults.map((result, index) =>
        <li key={index}>
          {result}
        </li>
      )}
    </ul>
  </main>

const mapStateToProps = ({ accessToken, searchResults }) => ({ accessToken, searchResults })

const mapDispatchToProps = dispatch => ({
  onResult: results =>
    dispatch({
      type: 'SEARCH_RESULTS',
      payload: results,
    }),
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)
