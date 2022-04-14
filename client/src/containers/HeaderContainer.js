import {connect} from 'react-redux'
import Header from '../components/Header'
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)