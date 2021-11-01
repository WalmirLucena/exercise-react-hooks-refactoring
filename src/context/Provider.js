// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const CarsContext = createContext();

const Provider = ({children}) => {
  const [cars,setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  })

  const [signal , setColor] = useState({
    color: 'red',
  })
  

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    })
  }

  const changeSignal = (signalColor) => {
    setColor({ color: signalColor})
  }

  const context = {
      cars,
      signal,
      moveCar,
      changeSignal,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CarsContext, Provider};
