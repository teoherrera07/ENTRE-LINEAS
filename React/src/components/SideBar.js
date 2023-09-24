import React from 'react';
import image from '../assets/images/02-Logo-small.jpeg';
import ContentWrapper from './ContentWrapper';
import TopicsInDb from './TopicsInDb';
import LastBookInDb from './LastBookInDb';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import Chart from './Chart';
import ContentRowBooks from './ContentRowBooks';
import LastUserInDb from './LastUserInDb';

function SideBar(){
    return(
        <React.Fragment>
            
            <ul className="navbar-nav bg-gradient-blue sidebar sidebar-ligh accordion" id="accordionSidebar">

                
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Entrelineas"/>
                    </div>
                </a>

                
                <hr className="sidebar-divider my-0"/>

                
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Entrelineas</span></Link>
                </li>

                
                <hr className="sidebar-divider"/>

                
                <div className="sidebar-heading">Acciones</div>

                <li className="nav-item">
                <Link className="nav-link" to="/ContentRowBooks">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Columnas de datos</span>
                    </Link>
                </li>

               
                <li className="nav-item">
                <Link className="nav-link" to="/TopicsInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Generos Literarios</span>
                    </Link>
                </li>

                
                <li className="nav-item">
                    <Link className="nav-link" to="/LastBookInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto </span></Link>
                </li>

                
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla de productos</span></Link>
                </li>


                <li className="nav-item nav-link">
                <Link className="nav-link" to="/LastUserInDb">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Ultimo usuario</span></Link>
                </li>

                
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ContentRowBooks">
                    <ContentRowBooks />
                </Route>
                <Route path="/TopicsInDb">
                    <TopicsInDb />
                </Route>
                <Route path="/LastBookInDb">
                    <LastBookInDb />
                </Route>
                <Route path="/Chart">
                    <Chart />
                </Route>
                <Route path="/LastUserInDb">
                    <LastUserInDb />
                </Route>
                <Route component={NotFound} />
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;