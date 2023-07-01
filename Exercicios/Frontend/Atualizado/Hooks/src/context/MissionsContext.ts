import { createContext } from 'react';
import { MissionSetType } from '../types/MissionType';


export const MissionsContext = createContext<MissionSetType>({missions: [], setMissions: () =>[]}); // default value
