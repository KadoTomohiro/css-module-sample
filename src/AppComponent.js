import React from 'react'
import {Example} from "./Example/Example";

export default function AppComponent() {
  return (
      <div>
          <Example/>
          <div className={'example'}>
              Common Styling
          </div>
      </div>
  )
}
