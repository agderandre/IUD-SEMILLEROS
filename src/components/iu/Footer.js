import React from 'react';
import './Footer.css';
import logo from '../iu/logo-blanco-iu.png'

export default function Footer() {
    return (
        <footer className="footer mt-auto py-4">
            <div className="container">
                <div className="row">

                    <div className="col-md-3 mt-md-0 mt-1"> 
                        <dl>
                            <dt>Asesor técnico y metodológico</dt>
                          <dd><dd>Ahmed Alejandro Cardona</dd></dd>
                        </dl>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-1">
                        <dl>
                            <dt>Investigador Principal</dt>
                            <dd>Javier Enrique Alvarez Palacios</dd>
                        </dl>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-5">
                        <dl>
                            <dt>Coinvestigador</dt>
                            <dd>Diego Alexander Ardila Sánchez</dd>
                        </dl>
                        
                    </div>
                    <div className="col-md-3 mt-md-0 mt-3">
                        <dl>
                            <dt>Coinvestigador</dt>
                            <dd>Jose Jovanny Espinosa Cervera</dd>
                        </dl>
                        
                    </div>
                    <div className="col-md-20 mt-md-4 mt-12">
                        <div className='container'></div>
                        <a className='navbar-brand' href='/'>
                            <img alt='Logo' src={logo} width={290} height="auto" />
                            
                        </a>
                    </div>
                </div>
            </div>
            <body class="d-flex flex-column">
                <div id="page-content">
                    <div class="container text-center">
                    </div>
                </div>
                <footer id="sticky-footer" class="flex-shrink-0 py-4 text-black-80">
                    <div class="container text-center">
                        <small>Copyright &copy; 2023 Proyecto Semillero IUD </small>
                    </div>
                </footer>
            </body>
        </footer>
    )
}
