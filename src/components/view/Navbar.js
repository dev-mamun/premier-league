/** ****************************************
 * Project: premier-league
 * File: Navbar.js
 * Created: 5/5/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <p>English Premier League</p>
        <div className="right-nav">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
