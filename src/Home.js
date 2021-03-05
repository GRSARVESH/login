import React from 'react'
import Map from './Map'
const Home = ({handleLogout}) => {
    
    return (
        <section className="hero">
            <nav>
                <h2>WELCOME USER</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className='abcs'>
                <Map/>
            </div >
        </section>
    )
}

export default Home
