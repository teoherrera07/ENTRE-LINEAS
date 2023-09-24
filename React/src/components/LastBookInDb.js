import { React, useState, useEffect } from "react";


function LastBookInDb(){
    const [book, setBook] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/api/products/last')
          .then(res => res.json())
            .then((data)=>{
               
               setBook(data.data);
             
            })
      },[])
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last Book in Data Base</h5>
                </div>
                <div className="card-body">
                    {
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={book.image} alt=" Ultimo libro "/>
                    </div>
                    }
                    {
                    <p>{book.synopsis}</p>}
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View Book detail</a>
                    </div>
            </div>
        </div>
    )
}

export default LastBookInDb;
