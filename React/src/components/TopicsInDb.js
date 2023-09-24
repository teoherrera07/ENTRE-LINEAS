import { React, useState, useEffect } from "react";

function TopicsInDb() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/topics')
    .then(res => res.json())
    .then((data => {
      setTopics(data.data)
    }))
  }, [])
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Topics in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            
          {topics.length > 0 && topics.map((topic, i) => {
            return(
            <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
             <div className="card-body" key={`topic ${i}`}>{topic.name}</div>
            </div>
            </div>)
          })}

            

            </div>
          </div>
        </div>
      </div>
  );
}

export default TopicsInDb;
