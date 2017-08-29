import React from 'react'
import Label from '../Label'

export default ({ actions, activeAction }) =>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {actions.map((action, index) =>
      <div key={index} style={{ paddingBottom: 5 }}>
        <Label status={action === activeAction ? 'active' : 'idle'}>
          {action}
        </Label>
      </div>
    )}
  </div>
