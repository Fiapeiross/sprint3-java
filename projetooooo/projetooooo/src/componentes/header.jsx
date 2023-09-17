import React from 'react';

function Header() {
  return (
    <header className="container mt-4">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-start" id="navbarNavLeft">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><b>Cidade Sustentável</b></a>
              </li>
            </ul>
          </div>

          <div className="navbar-center d-flex justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Vantagens</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Soluções</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Problemas</a>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavRight">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-person-circle"></i> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
