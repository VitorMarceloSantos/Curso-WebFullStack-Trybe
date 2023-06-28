import { createContext } from 'react';
import { MissionsType } from '../types/MissionType';


export const MissionsContext = createContext<MissionsType[] | null >(null); // default value
