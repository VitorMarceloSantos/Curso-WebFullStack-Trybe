import { CardActionEditProps } from '../../../../types/CardType';
import { MissionsActionType } from '../../../../types/MissionsEnum';

export const CardActionEdit = ({
	information,
	setFormDisplay,
	actionSelected,
	missionValueUpdate,
}: CardActionEditProps) => {
	return (
		<input
			type='button'
			value='Editar'
			onClick={() => {
				missionValueUpdate.setValuesUpdate(information);
				actionSelected.setActionSelected(MissionsActionType.UPDATE); // alterando o estado para update
				setFormDisplay(true);
			}}
		/>
	);
};
