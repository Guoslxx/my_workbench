import { useState } from 'react'
import logo from './logo.svg'
import './App.less'

function App() {

  return (
    <div className="workbench">
      <div className="top-header"></div>
      <div className="search-container">
        <div className="input-warpper">
          <input className='search-input' type="text" placeholder='输入关键词' />
        </div>
        <div className="fast-link">
          <span>快捷导航</span>
          <ul>
            <li className='link'><a href="www.baidu.com">掘金</a></li>
            <li className='link'><a href="www.baidu.com">百度</a></li>
            <li className='link'><a href="www.baidu.com">知乎</a></li>
          </ul>
          <div className="more">···</div>
        </div>
      </div>
      <main className="main-container">
        <div className="l-area"></div>
        <div className="c-area"></div>
        <div className="r-area"></div>
      </main>
    </div>
  )
}

export default App
