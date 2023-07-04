import { ReturnMissionsType } from '../../types/MissionType';
import { MissionsActionType } from '../../types/MissionsEnum';

export const MissionsCard = ({
	information,
	dispatch,
	setFormDisplay,
	actionSelected,
	missionValueUpdate,
}: ReturnMissionsType) => {
	return (
		<div className='card-mission'>
			<h3>{information.name}</h3>
			<div className='card-mission-informations'>
				<p>{information.year}</p>
				<p>{information.country}</p>
				<p>{information.destination}</p>
			</div>
			<input
				type='button'
				value='Editar'
				onClick={() => {
					missionValueUpdate.setValuesUpdate(information);
					actionSelected.setActionSelected(MissionsActionType.UPDATE); // alterando o estado para update
					setFormDisplay(true);
				}}
			/>
			<input
				type='button'
				value='Remover'
				onClick={() => {
					dispatch({ type: MissionsActionType.DELETE, payload: { currentValues: information } });
				}}
			/>
		</div>
	);
};
