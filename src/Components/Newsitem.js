import React from 'react'

const Newsitem = (props) => {

   
        let { title, description, imageurl, newsurl, mode, author, date, source } = props;
        return (
            <div className='my-3' style={{}}>
                <div className="card" style={{ backgroundColor: mode === "light" ? "white" : "darkgrey", color: mode === "light" ? "black" : "white" }}>
                    <img src={!imageurl ? "https://sportshub.cbsistatic.com/i/r/2022/09/27/56f25ac9-fdf1-41ba-af5b-475c41d0c34d/thumbnail/1200x675/a1a4eb87b7eab518950c7f56a479eec1/mac-jones-patriots-usatsi.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="badge rounded-pill text-bg-info">{source}</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className={`btn  btn-sm btn-${mode === "light" ? "primary" : "info"}`}>Read More ..</a>
                    </div>
                </div>
            </div>
        )
   
}

export default Newsitem
