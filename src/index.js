import './css/style.sass'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './store'
store.connect()
ReactDOM.render(<App store={store} />, document.getElementById('main')
)
if (module.hot) {
  module.hot.accept()
}
