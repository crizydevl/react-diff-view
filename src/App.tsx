/*
 * @Description: 
 * @Author: lqx
 * @Date: 2024-10-17 10:10:14
 */

import { DiffCodeEditor } from '.'
import { newValue, oldValue } from './data'

import './App.css'


function App() {
  return (
    <div>
      <DiffCodeEditor newValue={newValue} oldValue={oldValue} />
    </div>
  )
}

export default App
