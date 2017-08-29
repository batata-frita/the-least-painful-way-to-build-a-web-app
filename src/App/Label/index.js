import React from 'react'

const backgroundColorStatus = {
  idle: '#6F6F6F',
  active: 'white',
  ok: '#10A208',
  error: '#D63017',
}

const colorStatus = {
  idle: 'white',
  active: 'black',
  ok: 'white',
  error: 'white',
}

export default ({ children, status }) =>
  <div
    style={{
      backgroundColor: backgroundColorStatus[status],
      color: colorStatus[status],
      fontFamily: 'Interface, Roboto, sans-serif',
      fontWeight: 'bold',
      fontSize: 13,
      letterSpacing: 1,
      height: 25,
      lineHeight: '25px',
      textTransform: 'uppercase',
      paddingLeft: 7,
      paddingRight: 7,
      display: 'inline-block',
      textRendering: 'geometricPrecision',
      WebkitFontSmoothing: 'antialiased',
    }}
  >
    {children}
  </div>
