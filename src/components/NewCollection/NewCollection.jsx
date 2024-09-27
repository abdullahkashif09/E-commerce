import React from 'react';
import './NewCollection.css';
import new_collection from '../Assets/new_collections'; 
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>New Collections</h1>
      <hr />
      <div className='collection'>
        {new_collection.map(({ id, name, image, new_price, old_price }) => (
          <Item 
            key={id} 
            id={id}
            name={name}
            image={image}
            new_price={new_collection.new_price}
            old_price={new_collection.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
