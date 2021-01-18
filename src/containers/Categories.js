import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Container from '../components/Container'
import { dummyData } from '../utils'

import arrow_places from '../assets/landing/arrow_places.svg'
import Modal from '../components/Modal'
import getCollection from '../redux/actions'
import { API_HOST } from '../utils/config'

const TopBar = styled.div`
  width: 100%;
  // margin-top: 1rem;

  .title {

    .caption {
      font-size: 150%;
      font-weight: 500;
    }

    .smallText {
      font-size: 1rem;
      color: #707070;
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
    border-bottom: 1px solid #e5e5e5;

    .item {
      margin: 0.5rem;
      padding: 0.5rem;
      color: #707070;
      background-color: #ffffff;
      border: 1px solid #707070;
      border-radius: 0.3rem;
      cursor: pointer;
      transition: all eas-out 200ms;

      &.seeMore {
        font-weight: 500;
        color: #ff7235;
        border: none;
      }

      &:hover {
        background-color: #f9f9f9;
      }
    }
  }
`

const Results = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 5rem;
    
    .item {
        display: flex;
        align-items: flex-start;
        width: 50%;
        cursor: pointer;

        .imgWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 7rem;
            min-width: 7rem;
            max-width: 7rem;
            background-color: #f1f1f1;
            overflow: hidden;

            img {
                width: 100%;
            }
        }

        .textWrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-left: 2rem;

            .title {
                font-size: 100%;
                font-weight: 500;
            }

            .subtitle {
                font-size: 90%;
                margin: 0.3rem 0;
                max-width: 70%;

            }

            .contact {
                display: flex;
                align-items: center;
                font-size: 80%;
                text-transform: capitalize;
                color: #ff7235;

                img {
                    height: 0.5rem;
                    margin-left: 0.5rem;
                }
            }
        }
    }
`

function Categories (props) {

  const [categories] = useState(dummyData.categories)
  const [results, setResults] = useState([])
  const [limit, setLimit] = useState(15)
  const [loading, setLoading] = useState(false)

  async function fetchData () {
    setLoading(true)
    const res = await getCollection('products')
    setLoading(false)
    if (res) setResults(res)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
    {props.modalOpen && <Modal />}
    <Container>
      <TopBar>
        <div className='title'>
          <p className='caption'>Categories · </p>
          <p className='smallText'>Click on a category to see more specific results</p>
        </div>
        <div className='list'>
          <div className='item'>
              <span>All</span>
            </div>
          {categories.slice(0, limit).map((category) => (
            <div key={category} className='item'>
              <span>{category}</span>
            </div>
          ))}
          <p className='item seeMore' onClick={() => setLimit((limit === categories.length) ? 15 : categories.length)}>See {!(limit === categories.length) ? 'More >>' : 'Less <<'}</p>
        </div>
      </TopBar>
      <Results>
        {!results.length && <h2>No Results</h2>}
        {loading ? (<p>Loading...</p>) : (results.map((result) => (
          <div key={result.id} className='item'>
            <div className='imgWrapper'>
                {result.contentImage && <img src={`${API_HOST}${result.contentImage.url}`} alt='' />}
            </div>
            <div className='textWrapper'>
                <p className='title'>{result.name}</p>
                <p className='subtitle'>{result.description}</p>
                <p className='contact'>
                    contact
                    <img src={arrow_places} alt='' />
                </p>
            </div>
        </div>
        )))}
      </Results>
    </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    modalOpen: state.modalOpen,
  }
}

export default connect(mapStateToProps)(Categories)