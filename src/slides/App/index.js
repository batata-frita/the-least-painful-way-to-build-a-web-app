import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import subscribe from 'redux-heat'
import * as actions from './actions'

const callStates = {
  IDLE: 'IDLE',
  CALLING: 'CALLING',
  FIRE_DEPARTEMENT_ON_ITS_WAY: 'FIRE_DEPARTEMENT_ON_ITS_WAY',
}

const initialState = {
  thereIsFire: false,
  fireDepartmentState: callStates.IDLE,
}

const reducer = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case actions.LIGHTNING_STRIKE:
      return {
        ...state,
        thereIsFire: true,
      }

    case actions.PHONE_EXPLODES:
      return {
        ...state,
        thereIsFire: true,
      }

    case actions.CALL_FIRE_DEPARTMENT:
      return {
        ...state,
        fireDepartmentState: callStates.CALLING,
      }

    case actions.FIRE_DEPARTEMENT_ON_ITS_WAY:
      return {
        ...state,
        fireDepartmentState: callStates.FIRE_DEPARTEMENT_ON_ITS_WAY,
      }

    case actions.EXTINGUISH_FIRE:
      return {
        ...state,
        thereIsFire: false,
        fireDepartmentState: callStates.IDLE,
      }

    default:
      return state
  }
}

const callFireDepartmentHeat = state =>
  state
    .map(
      ({ thereIsFire, fireDepartmentState }) =>
        thereIsFire && fireDepartmentState === callStates.IDLE
    )
    .skipRepeats()
    .filter(x => x)
    .delay(500)
    .map(() => ({
      type: actions.CALL_FIRE_DEPARTMENT,
    }))

const fireDepartmentComingHeat = state =>
  state
    .map(({ fireDepartmentState }) => fireDepartmentState === callStates.CALLING)
    .skipRepeats()
    .filter(x => x)
    .delay(1000)
    .map(() => ({
      type: actions.FIRE_DEPARTEMENT_ON_ITS_WAY,
    }))

const extinguishFireHeat = state =>
  state
    .map(
      ({ fireDepartmentState }) => fireDepartmentState === callStates.FIRE_DEPARTEMENT_ON_ITS_WAY
    )
    .skipRepeats()
    .filter(x => x)
    .delay(2000)
    .map(() => ({
      type: actions.EXTINGUISH_FIRE,
    }))

const store = createStore(reducer)

subscribe(store, [callFireDepartmentHeat, fireDepartmentComingHeat, extinguishFireHeat])

const mapDispatchToProps = dispatch => ({
  onLightningStrike: () => dispatch({ type: actions.LIGHTNING_STRIKE }),
  onPhoneExplodes: () => dispatch({ type: actions.PHONE_EXPLODES }),
})

const App = connect(
  x => x,
  mapDispatchToProps
)(({ thereIsFire, fireDepartmentState, onLightningStrike, onPhoneExplodes }) =>
  <div>
    <button onClick={onLightningStrike}>⚡️</button>
    <button onClick={onPhoneExplodes}>📱💥</button>

    <div style={{ display: 'flex', placeItems: 'center', width: '100%' }}>
      <h1>
        🏠{thereIsFire && '🔥'}
      </h1>
      <h1>
        {fireDepartmentState === callStates.CALLING && '📞🤖'}
        {fireDepartmentState === callStates.FIRE_DEPARTEMENT_ON_ITS_WAY && '🚒💨'}
      </h1>
    </div>
  </div>
)

export default () =>
  <section>
    <Provider store={store}>
      <App />
    </Provider>
  </section>

/**
- expand the arrow (the reducer)
*/
