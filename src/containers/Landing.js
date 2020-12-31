import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Container from '../components/Container'
import Featured from '../components/Featured'
import { getUser } from '../redux/actions'

function Landing (props) {

    // useEffect(() => {
    //     props.getUser()
    //     setTimeout(() => console.log('user data: ', props.user))
        
    // }, [])

    return (
        <>
        <Container>
            <Featured />
        </Container>
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