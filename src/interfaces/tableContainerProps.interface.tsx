import { ObjectData } from './object.interface';
import { PersonnelData } from './personnel.interface';

export interface TableContainerProps {
  data: (ObjectData | PersonnelData)[];
}
