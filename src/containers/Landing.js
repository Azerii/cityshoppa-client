import React from 'react'
import { connect } from 'react-redux'
import Container from '../components/Container'
import Discounted from '../components/Discounted'
import Featured from '../components/Featured'
import Places from '../components/Places'
import Trending from '../components/Trending'
import { getUser } from '../redux/actions'

function Landing (props) {

    // useEffect(() => {
    //     props.getUser()
    //     setTimeout(() => console.log('user data: ', props.user))
        
    // }, [])

    return (
        <>
        {/* <Places /> */}
        <Discounted />
        <Container>
            <Featured />
        </Container>
        <Places />
        <Trending />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser)
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)