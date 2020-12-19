import React from 'react';
import logo from '../images/teslaLogo.png';

const Navbar = () => {
    return (
    <nav style={{zIndex:'999', fontSize: '15px', paddingTop: '4px', position: 'fixed'}} className="navbar navbar-expand-lg navbar-light bg-transparent font-weight-bold">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} style={{width:'85px', marginRight:'150px'}}/>
            </a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul style={{marginLeft: '380px', marginRight: '430px'}} className="NavbarList navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.tesla.com/models">MODEL S</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="https://www.tesla.com/model3">MODEL 3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="https://www.tesla.com/modelx">MODEL X</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="https://www.tesla.com/modely">MODEL Y</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="https://www.tesla.com/solarroof">SOLAR ROOF</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="https://www.tesla.com/solarpanels">SOLAR PANELS</a>
                </li>
            </ul>
            <ul className="NavbarList navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href="https://shop.tesla.com/">SHOP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="https://auth.tesla.com">TESLA ACCOUNT</a>
                </li>
            </ul>
            <button class="btn btn-danger navbar-btn" style={{padding:'1px',paddingLeft:'5px',paddingRight:'5px',fontSize:'30px',color:'black',backgroundColor:'transparent',borderStyle:'none'}}>≡</button>
        </div>
        </div>
    </nav>
    );
  }
  
  export default Navbar;