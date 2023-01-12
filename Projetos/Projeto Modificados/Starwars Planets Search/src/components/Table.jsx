import React, { useContext } from 'react';
import informationAPI from '../context/DataContext';
import '../styles/table.css';

function Table() {
  const { planets, planetsFiltered } = useContext(informationAPI);
  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>Rotation</td>
          <td>Orbital Period</td>
          <td>Diameter</td>
          <td>Climate</td>
          <td>Gravity</td>
          <td>Terrain</td>
          <td>Surface</td>
          <td>Population</td>
          <td>Films</td>
          <td>Created</td>
          <td>Edited</td>
          <td>Url</td>
        </tr>
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
          <tr data-testid="planet-name" key={ name }>
            <td>{name}</td>
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
      </table>
    </div>
  );
}

export default Table;
