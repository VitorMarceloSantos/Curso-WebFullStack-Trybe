import { createContext } from 'react';
import { MissionValueType } from '../types/ReducerMissionsType';


export const MissionsContext = createContext<MissionValueType>({state: [], dispatch: () =>[]}); // default value
