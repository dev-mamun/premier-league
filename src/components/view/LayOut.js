/** ****************************************
 * Project: premier-league
 * File: ss.js
 * Created: 5/4/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';

function LayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default LayOut;
