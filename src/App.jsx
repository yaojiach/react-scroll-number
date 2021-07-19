import ScrollNumber from './ScrollNumber'
import './App.css'

function App() {
  return (
    <div className="App">
      <ul className="flex">
        {'866'.split('').map((i, index) => {
          return (
            <ScrollNumber
              key={index}
              WrapperComponent="li"
              number={parseInt(i)}
              delay={index + 1}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default App
