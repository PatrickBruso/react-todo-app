import React from 'react';

const Navbar = () => {
    return (
        <div>
            <title>Todo App</title>
            <div className="topnav">
            <a href="/" active>Todos</a>
            <div className="topnav-right">
                <a href="/about">About</a>
                <a href="#register">Register</a>
                <a href="#Login">Login</a>
            </div>
            </div>
        </div>
    );
}

export default Navbar;