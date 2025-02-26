import {Praticiens} from './praticiens';
import {Patient} from './patient';

export interface PraticiensResponse {
  data: Praticiens[]
  message: string
  status: number
}


export interface PatientResponse {
  data: Patient[]
  message: string
  status: number
}
