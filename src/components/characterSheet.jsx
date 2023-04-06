import React, { useEffect, useReducer, useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST } from '../data/consts';
import { attributeReducer } from '../reducer/attributeReducer';
import AttributesModifier from './attributeModifier';
import CharacterDetails from './characterDetails';

const CharacterSheet = () => {
  const [characters, setCharacters] = useState('Bard');
  const initState = ATTRIBUTE_LIST.map((value) => {
    return {
      [value]: 10,
    };
  });
  const [state, dispatch] = useReducer(attributeReducer, initState);
  // compute matching character
  useEffect(() => {
    // computation when attributes change
  }, [state]);
  return (
    <div>
      <div onClick={() => setCharacters('Barbarian')}>{'Barbarian'}</div>
      <div onClick={() => setCharacters('Wizard')}>{'Wizard'}</div>
      <div onClick={() => setCharacters('Bard')}>{'Bard'}</div>
      <div>{<CharacterDetails character={CLASS_LIST[characters]} />}</div>
      {state.map((skill, index) => {
        let key = Object.keys(skill);
        let value = Object.values(skill);
        return (
          <AttributesModifier
            index={index}
            name={key[0]}
            value={value[0]}
            increment={() =>
              dispatch({
                type: 'INCREMENT',
                payload: { value: key[0] },
              })
            }
            decrement={() =>
              dispatch({
                type: 'DECREMENT',
                payload: { value: key[0] },
              })
            }
          />
        );
      })}
    </div>
  );
};

export default CharacterSheet;
