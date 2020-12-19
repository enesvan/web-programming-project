import React from 'react';

const NavbarLast=()=>{
    return(
        <ul style={{fontSize: '13px', paddingBottom: '30px', color: 'black'}} class="nav justify-content-center m-auto">
            <li class="nav-item">
                <a class="nav-link" href="https://www.tesla.com/about">Tesla © 2020</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tesla.com/about/legal">Privacy & Legal</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tesla.com/contact">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tesla.com/careers">Careers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tesla.com/updates">Get Newsletter</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tesla.com/blog">News</a>
            </li>
            <li class="nav-item">
                    <a class="nav-link" href="https://forums.tesla.com/">Forums</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tesla.com/findus/list">Locations</a>
            </li>
        </ul>
    );
}

export default NavbarLast;