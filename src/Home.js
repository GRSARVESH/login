import React from 'react'
const Home = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>WELCOME</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className=''>
                <h1>HEAD</h1>
            </div >
        </section>
    )
}

export default Home
