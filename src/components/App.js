import { hot } from 'react-hot-loader'
import { view } from 'react-easy-state'
import Home from './Home'
class App extends React.Component {
  render() {
    const store = this.props.store
    return (
      <div className='fill flex-column'>
        {
          !store.user && (
            <div className='fill flex-column flex-center'>
              <h1>Loading...</h1>
            </div>
          )
        }
        {
          store.user && (
            <Home store={store} />
          )
        }
      </div>
    )
  }
}
export default hot(module)(view(App))
