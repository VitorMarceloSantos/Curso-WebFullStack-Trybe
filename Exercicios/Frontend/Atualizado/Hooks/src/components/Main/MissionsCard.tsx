import { ReturnMissionsType } from "../../types/MissionType";

export const MissionsCard = ({information}: ReturnMissionsType) => {
  return(
    <div className="card-mission">
      <h3>{information.name}</h3>
      <div className="card-mission-informations">
        <p>{information.year}</p>
        <p>{information.country}</p>
        <p>{information.destination}</p>
      </div>
    </div>
  );
}