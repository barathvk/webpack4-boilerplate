import { view } from 'react-easy-state'
export default view(class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const store = this.props.store
    return (
      <div className='fill flex-column flex-center'>
        <h1>{store.user.name}</h1>
      </div>
    )
  }
})
