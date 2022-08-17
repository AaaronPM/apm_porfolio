import React from 'react'

import { NavigationDots, SocialMedia } from '../components'

//higher order component
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`} >
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2022 AARON</p>
          <p className='p-text'>All Right Reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap