/** ****************************************
 * Project: premier-league
 * File: fetchData.test.js
 * Created: 5/5/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { fetchLeague } from '../redux/league/leagueSlice';

jest.mock('axios', () => 'Mockedaxios');
describe('League teams', () => {
  test('fetch correct teams', () => {
    const data = fetchLeague();
    expect(data.length).not.toBeNull();
  });
});