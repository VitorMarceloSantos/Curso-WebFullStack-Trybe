import React, { useContext } from 'react';
import informationAPI from '../context/DataContext';

function Table() {
  const { planets, planetsFiltered } = useContext(informationAPI);
  return (
    <div>
      {(planetsFiltered.length !== 0 ? planetsFiltered : planets).map(({
        name,
        rotation_period: rotationPeriod,
        orbital_period: orbitalPeriod,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water: surfaceWater,
        population,
        films,
        created,
        edited,
        url,
      }) => (
        <tr key={ name }>
          <td data-testid="planet-name">{name}</td>
          <td>{Number(rotationPeriod)}</td>
          <td>{Number(orbitalPeriod)}</td>
          <td>{Number(diameter)}</td>
          <td>{climate}</td>
          <td>{gravity}</td>
          <td>{terrain}</td>
          <td>{Number(surfaceWater)}</td>
          <td data-testid="test-unknown">{population}</td>
          <td>{films}</td>
          <td>{created}</td>
          <td>{edited}</td>
          <td>{url}</td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
