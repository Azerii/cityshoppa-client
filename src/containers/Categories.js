import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Container from '../components/Container'
import { dummyData } from '../utils'

import arrow_places from '../assets/landing/arrow_places.svg'
import chevron_left from '../assets/global/chevron_left.svg'
import Modal from '../components/Modal'
import getCollection from '../redux/actions'
import { API_HOST } from '../utils/config'
import { Route, useParams } from 'react-router-dom'

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

    .backToCategories {
      display: flex;
      align-items: center;
      color: #ff7235;

      img {
        height: 1rem;
      }
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;

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
    padding-top: 1rem;
    border-top: 1px solid #e5e5e5;
    
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

function Content () {
  const { category } = useParams()
  const [categories] = useState(dummyData.categories)
  const [results, setResults] = useState([])
  const [limit, setLimit] = useState(15)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('Categories')

  async function fetchData () {
    setLoading(true)
    const res = await getCollection('products')
    setLoading(false)
    if (res) setResults(res)
  }

  useEffect(() => {
    fetchData()
    setTitle(category || 'Categories')
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <TopBar>
        <div className='title'>
          <p className='caption'>{title}</p>
          {title !== 'Categories' && <a href='/categories' className='backToCategories' >
            <img src={chevron_left} alt='' />
            categories
          </a>}
          {title === 'Categories' && <p className='smallText'>Click on a category to see more specific results</p>}
        </div>
        {title === 'Categories' && <div className='list'>
          <div className='item'>
              <span>All</span>
            </div>
          {categories.slice(0, limit).map((category) => (
            <a key={category} href={`/categories/${category}`} className='item'>
              <span>{category}</span>
            </a>
          ))}
          <p className='item seeMore' onClick={() => setLimit((limit === categories.length) ? 15 : categories.length)}>See {!(limit === categories.length) ? 'More >>' : 'Less <<'}</p>
        </div>}
      </TopBar>
      <Results>
        {!results.length && !loading && <h2>No Results</h2>}
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
    </>
  )
}


function Categories (props) {

  return (
    <>
    {props.modalOpen && <Modal />}
    <Container>

      {/* Handle when user lands on the categories page */}
      <Route exact path='/categories'>
        <Content />
      </Route> 

      {/* Handle when user clicks on a category */}
      <Route exact path='/categories/:category'>
        <Content />
      </Route> 

      {/* Handle when user searches for content using the global search bar */}
      <Route exact path='/categories/search/:keyword'>
        <Content />
      </Route> 

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