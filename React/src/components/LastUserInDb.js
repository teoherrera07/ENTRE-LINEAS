import { React, useState, useEffect } from "react";

function LastUserInDb() {
  const [User, setLastUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/users/last')
    .then(res => res.json())
    .then((data => {
      setLastUser(data.data)
    }))
  }, [])

  switch(User.country_id){
    case 1:
           User.country = 'Argentina'    
    break;
    case 2:
           User.country = 'Bolivia'    
    break;
    case 3:
           User.country = 'Chile'   
    break;
    case 4:
           User.country = 'Colombia'    
    break;
    case 5:
           User.country = 'Ecuador'    
    break;
    case 6:
           User.country = 'Peru'    
    break;
    case 7:
           User.country = 'Uruguay'    
    break;
    case 8:
           User.country = 'Venezuela'    
    break;
    default:
        User.country = 'No tiene País'
    break;
    }

    User.avatar = 'http://localhost:3001/images/Users/' + User.avatar;
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last user in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            
          {
            <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
             <div className="card-body" key={`UserName ${User.id}`}>Nombre: {User.first_name + ' ' +User.last_name}</div>
            </div>
            </div>
          }
          {
            <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
             <div className="card-body" key={`UserEmail ${User.id}`}>Email: {User.email}</div>
            </div>
            </div>
          }
        
            {
            <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                
             <div className="card-body" key={`UserCountry ${User.id}`}>País: {User.country}</div>
            </div>
            </div>
          }
          {
            <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={User.avatar} alt=" Ultimo Usuario "/>
            </div>
            </div>
          }

            

            </div>
          </div>
        </div>
      </div>
  );
}

export default LastUserInDb;
