import mockAvailable from '../mocks/items-available.json';
import mockUser from '../mocks/items-user.json';

export function useData() {
  return [mockAvailable, mockUser];
}