import React from 'react';

const ListItem = ({ children, order }) => {
  return (
    <div className={`flex pl-3 w-full mt-5 ${order.includes('a') ? 'ml-8' : ''}`}>
      <p className="w-4 mr-4">{order}</p>
      <>
        { children }
      </>
    </div>
  )
}

export default ListItem