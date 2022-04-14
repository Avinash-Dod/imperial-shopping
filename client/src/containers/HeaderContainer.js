import {connect} from 'react-redux'
import Header from '../components/Header'
const mapStateToProps=state=>({
    data:state.ShoppinReducer,
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)