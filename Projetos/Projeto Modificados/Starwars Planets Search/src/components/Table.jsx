import React, { useContext } from 'react';
import informationAPI from '../context/DataContext';
import '../styles/table.css';

function Table() {
  const { planets, planetsFiltered } = useContext(informationAPI);
  return (
    <div className="container-table">
      <table>
        <tr>
          <td className="table-title">Name</td>
          <td className="table-title">Rotation</td>
          <td className="table-title">Orbital Period</td>
          <td className="table-title">Diameter</td>
          <td className="table-title">Climate</td>
          <td className="table-title">Gravity</td>
          <td className="table-title">Terrain</td>
          <td className="table-title">Surface</td>
          <td className="table-title">Population</td>
          <td className="table-title">Films</td>
          <td className="table-title">Created</td>
          <td className="table-title">Edited</td>
          <td className="table-title">Url</td>
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
            <td><a href={ films }>Link</a></td>
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
