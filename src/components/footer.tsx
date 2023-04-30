"use client"
import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4 bg-dark mt-3 text-white">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <p>Para conocer mejor mi trabajo me puedes <br/>
                encontrar en estos links respectivos</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contacto</h5>
                <ul className="list-unstyled">
                    <li><a href="https://www.youtube.com/@abdiasurena1092">Youtube</a></li>
                    <li><a href="https://www.linkedin.com/in/abdias-ure%C3%B1a-382922274">Linkedln</a></li>
                    <li><a href="https://github.com/Abdias-Urena">GitHub</a></li>
                    <li><a href="https://twitter.com/AbdiasUrena">Twitter</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://abdiasurena.com/"> abdiasurena.com</a>
    </div>

</footer>

export default Footer