import { Uuid } from '../model/uuid';
import { v4 } from 'uuid';

export function uuidV4(): Uuid {
  return new Uuid(v4());
}
