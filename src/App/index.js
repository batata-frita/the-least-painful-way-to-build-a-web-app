import React from 'react'
import Actions from './Actions'
import State from './State'
import Effect from './Effect'

const actions = [
  'LIGHTNING_STRIKE',
  'PHONE_EXPLODES',
  'CALL_FIRE_DEPARTMENT',
  'FIRE_DEPARTEMENT_ON_ITS_WAY',
  'EXTINGUISH_FIRE',
]

export default props =>
  <div
    style={{
      backgroundColor: '#ACACAC',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
  >
    <Actions actions={actions} activeAction={'CALL_FIRE_DEPARTMENT'} />
    <State />
    <Effect />
  </div>
