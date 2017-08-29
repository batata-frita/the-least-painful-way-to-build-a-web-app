import React from 'react'
import Cogwheel from '../Cogwheel'
import Funnel from '../Funnel'
import Label from '../Label'

export default props =>
  <div
    style={{
      backgroundColor: '#D8D8D8',
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      height: 300,
      alignItems: 'center',
    }}
  >
    <div style={{ transform: 'translateX(-35px)' }}>
      <Cogwheel />
    </div>
    <div>
      <Label status="active">FIRE DEPARTMENT / CALLING</Label>
    </div>
    <div style={{ transform: 'translateX(35px)' }}>
      <Funnel />
    </div>
  </div>
