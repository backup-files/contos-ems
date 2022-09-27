import React from 'react'

export default function Navbar() {
    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                    <a className="navbar-brand" href="#">
                        <img src=" https://png.pngtree.com/png-vector/20190327/ourlarge/pngtree-eco-energy-logo-design-png-image_880934.jpg" width="70" height="50" alt="" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Equipments</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Notifications</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>

                    <span className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://th.bing.com/th/id/OIP._VoTfUzENldEmDbFEcQi4QHaHa?pid=ImgDet&rs=1" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small">
                            <li><a className="dropdown-item" href="#">New Notification...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </span>
                </div>
            </div>
        </header>

    )
}