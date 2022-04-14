import { connect } from 'react-redux'
import Home from '../Pages/Home'
import { addToCart } from '../redux/actions/action'

const mapStateToProps = state => ({
  items: state.items
})
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)