import React from 'react';

const Topbar = ({onInputChange}, props) => (
   <div className ="top-bar">
   <h2>Fifa Ultimate Team</h2>
   <input type='text' placeholder='search' onChange={onInputChange} />
   </div>
);

export default Topbar;
