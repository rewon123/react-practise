import React from 'react';

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" style={{fontWeight:'bold', fontFamily:"times new roman"}}>React site</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/shop">shop</a>
                        <a className="nav-item nav-link" href="/review"> order review</a>
                        <a className="nav-item nav-link" href="/manage">inventory</a>
                    </div>
                </div>
       
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
      
            </nav >
        </div >
    );
};

export default Header;