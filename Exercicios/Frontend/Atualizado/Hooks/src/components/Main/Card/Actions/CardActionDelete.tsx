import { CardActionDeleteProps } from '../../../../types/CardType';
import { MissionsActionType } from '../../../../types/MissionsEnum';

export const CardActionDelete = ({ information, dispatch }: CardActionDeleteProps) => {
	return (
		<input
			type='button'
			value='Remover'
			onClick={() => {
				dispatch({ type: MissionsActionType.DELETE, payload: { currentValues: information } });
			}}
		/>
	);
};
