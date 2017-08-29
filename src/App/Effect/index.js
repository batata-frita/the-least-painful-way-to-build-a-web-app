import React from 'react'
import FireDepartment from '../FireDepartment'
import tilepattern from './tilepattern.svg'

export default props =>
  <div
    style={{
      width: 250,
      height: 250,
      background: `url(${tilepattern})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <FireDepartment />
  </div>
