/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';

const loadImage = src => require(`../assets/images/${src}.jpg`);

const CharacterCard = ({ info }) => {
  const { name, gender, birth_year, eye_color, hair_color, films } = info;
  loadImage(name); // file-loader only loads required files

  return (
    <article className="card charCard">
      <div className="charHeadContainer">
        <div>
          <h3 className="charName">{name}</h3>
        </div>
      </div>
      <figure className="charPhoto">
        <img
          src={`./src/assets/images/${name}.jpg`}
          alt={`Character ${name}`}
          width="128"
        />
      </figure>
      <ul className="charDetailsList">
        <li className="charDetail">Gender: {gender}</li>
        <li className="charDetail">Birth Year: {birth_year}</li>
        <li className="charDetail">Eye Color: {eye_color}</li>
        <li className="charDetail">Hair Color: {hair_color}</li>
        <li className="charDetail">Number of Films: {films.length}</li>
      </ul>
    </article>
  );
};

export default CharacterCard;
