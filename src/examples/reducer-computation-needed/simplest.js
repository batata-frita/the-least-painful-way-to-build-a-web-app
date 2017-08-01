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
    case 'QUERY_A_CHANGE':
      return {
        ...state,
        queryA: action.payload,
        validationError: !validateTogether(action.payload, state.queryB),
      }
    case 'QUERY_B_CHANGE':
      return {
        ...state,
        queryB: action.payload,
        validationError: !validateTogether(state.queryA, action.payload),
      }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

const validateTogether = (queryA, queryB) => (queryA + queryB) % 2 === 0

const fetchResults = (queryA, queryB, accessToken) =>
  fetch(`?query=${queryA}:${queryB}&accessToken=${accessToken}`)

const App = ({
  onQueryAChange,
  onQueryBChange,
  queryA,
  queryB,
  validationError,
  accessToken,
  onResult,
  searchResults,
}) =>
  <main>
    <h1>Search</h1>
    {validationError && <p>Inputs are invalid</p>}
    <input
      onChange={e => {
        onQueryAChange(e.target.value)

        if (validateTogether(e.target.value, queryB)) {
          fetchResults(e.target.value, queryB, accessToken).then(result => onResult(result))
        }
      }}
      placeholder="Search"
    />
    <input
      onChange={e => {
        onQueryBChange(e.target.value)

        if (validateTogether(queryA, e.target.value)) {
          fetchResults(queryA, e.target.value, accessToken).then(result => onResult(result))
        }
      }}
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
  onQueryAChange: value =>
    dispatch({
      type: 'QUERY_A_CHANGE',
      payload: value,
    }),
  onQueryBChange: value =>
    dispatch({
      type: 'QUERY_B_CHANGE',
      payload: value,
    }),
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)
