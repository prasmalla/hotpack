/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import CharacterCard from './Character';

const Characters = props => {
  const { characterIds, characters } = props;

  if (!characterIds) return null;

  if (!characterIds.length) return <div>Fetching...</div>;

  const charElems = characterIds.map((id, i) => {
    const char = characters[id];
    return <CharacterCard key={i} info={char} />;
  });

  return (
    <section className="mainSection">
      <header className="pageHeader">
        <h2>Characters</h2>
      </header>
      <div className="charContainer">{charElems}</div>
    </section>
  );
};

export default Characters;
