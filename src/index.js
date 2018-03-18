import './css/style.sass'
import ReactDOM from 'react-dom'
import App from './components/App'
ReactDOM.render(<App />, document.getElementById('main')
)
if (module.hot) {
  module.hot.accept()
}
