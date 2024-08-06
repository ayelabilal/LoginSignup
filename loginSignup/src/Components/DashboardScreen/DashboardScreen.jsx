
import React from 'react';
import { productData } from '../Data';
import { useParams } from 'react-router-dom';
import Cards from '../Cards';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };
  const { id } = useParams();
  console.log(id);

  const filterData = productData.filter((e, i) => {
    return e.id == id;
  });

  console.log(filterData);
  return (
    <div>
      {productData.map((e, i) => {
        return (
          <div style={{ display: "inline-block", }}>
            <Cards
              id={e.id}
              title={e.title}
              desc={e.description}
              image={e.image}
              key={i}
            />
          </div>
        );
      })}
    <br />
    <br />
   
  
      <button onClick={handleLogout} className='button'>Logout</button>
    </div>
  );
};

export default Dashboard;

