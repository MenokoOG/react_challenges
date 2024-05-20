// src/components/HouseCard.jsx
import React from 'react';

function HouseCard({ houseData, index, array }) {
  const {
    image,
    price,
    location,
    squareFeet,
    acres,
    bedrooms,
    bathrooms,
    otherRooms,
    yearBuilt,
    garage,
    airConditioning,
    heating,
    haunted
  } = houseData;

  const houseDetails = [
    { label: 'Price:', value: price },
    { label: 'Location:', value: location },
    { label: 'Square Feet:', value: squareFeet },
    { label: 'Acres:', value: acres },
    { label: 'Year Built:', value: yearBuilt },
    { label: 'Bedrooms:', value: bedrooms },
    { label: 'Bathrooms:', value: bathrooms },
    { label: 'Other Rooms:', value: otherRooms },
    { label: 'Garage:', value: garage ? 'Yes' : 'No' },
    { label: 'Air Conditioning:', value: airConditioning ? 'Yes' : 'No' },
    { label: 'Heating:', value: heating ? 'Yes' : 'No' },
    { label: 'Haunted:', value: haunted ? 'Yes' : 'No' }
  ];

  return (
    <div className="house-card" key={houseData.id}>
      <p>
        Listing {index + 1} of {array.length}
      </p>
      <img src={image} alt="House" />
      <div>
        <ul>
          {houseDetails.map((detail, idx) => (
            <li key={idx}>
              <span>{detail.label}</span>
              {detail.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HouseCard;
