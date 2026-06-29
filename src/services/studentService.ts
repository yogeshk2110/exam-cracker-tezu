import { fetcher } from './api';

export function getStudents() {
  return fetcher('getStudents', { method: 'GET' });
}
