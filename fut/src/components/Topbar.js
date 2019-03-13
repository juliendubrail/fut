import React from 'react';

const Topbar = ({onInputChange}) => (
   <div className ="top-bar">
   <h1>Movies</h1>
   <input type='search' placeholder='search movie' onChange={onInputChange} />
   </div>
);

export default Topbar;




