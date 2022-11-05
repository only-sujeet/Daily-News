import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'

import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {

    const [articles,setArticales] =  useState([])
    const [loading,setLoading] =  useState(true)
    const [page,setPage] =  useState(1)
    const [totalResults,setTotalResults] =  useState(0)
   

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    // document.title = `${capitalizeFirstLetter(props.category)}- Daily News Hunt`;
    const updateNews = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticales(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

       

    }
    useEffect(() =>{
        updateNews()
    },[])
   

    // const handleprev = async () => {
    //     setPage(page - 1 )
        
    //     updateNews()
    // }
    //  const handlenext = async () => {
        
    //     setPage(page + 1)
    //     updateNews()
    // }
     const fetchMoreData = async () => {

        setPage(page + 1 );
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey} &page=${page}&pageSize=${props.pageSize}`;
        
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticales(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
       
    };
    
        
        return (
            <div className='container my-3 '>

                <h2 className='text-center'>Daily News Hunt Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                {/* {loading && <Spinner mode={props.mode} />} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner mode={props.mode}/>}
                > <div className="container">
                        <div className="row">
                            {/* this for newt and Previous Button */}
                            {/* {!loading && articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <Newsitem mode={props.mode} title={element.title} description={element.description} imageurl={element.urlToImage} source={element.source.name} newsurl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })} */}
                            {/* this is for infinite Scroll */}
                            {articles.map((element) => {
                                return <div className="col-md-3" key={element.url}>
                                    <Newsitem mode={props.mode} title={element.title} description={element.description} imageurl={element.urlToImage} source={element.source.name} newsurl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={.page <= 1} type='button' className='btn btn-dark' onClick={handleprev}> &larr; Previous</button>
                    <button disabled={Math.ceil(page + 1 > totalResults / props.pageSize)} type='button' className='btn btn-dark' onClick={handlenext} >Next &rarr;</button>
                </div> */}
            </div>
        )
   
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string,

}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'

}

export default News
