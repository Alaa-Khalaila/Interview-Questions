import React,{Component} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="box">
                <h1>Pick subject</h1>
                <div className="buttons">
                    <Link to='/node'><button>Node.js</button></Link>
                    <Link to='/react'><button>React.js</button></Link>
                    <Link to='/devlopers'><button>For Devlopers</button></Link>
                    <Link to='/all'><button>All subjects</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
