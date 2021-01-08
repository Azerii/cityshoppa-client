import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Container from '../components/Container'
import Discounted from '../components/Discounted'
import Featured from '../components/Featured'
import FeaturedPlaces from '../components/FeaturedPlaces'
import Modal from '../components/Modal'
import Places from '../components/Places'
import Suppliers from '../components/Suppliers'
import Trending from '../components/Trending'
import { getUser } from '../redux/actions'

function Landing (props) {

    useEffect(() => {
        props.token && props.getUser()
        // setTimeout(() => console.log('user data: ', props.user))
        
    }, [])

    return (
        <>
        <Modal />
        <FeaturedPlaces />
        <Discounted />
        <Container>
            <Featured />
        </Container>
        <Places />
        <Trending />
        <Suppliers />
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
        token: state.token,
        user: state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)