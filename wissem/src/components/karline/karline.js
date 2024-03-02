import React from 'react'
import './karline.css';
import { FaKey } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { GrUserPolice } from "react-icons/gr";
import { FaTrophy } from "react-icons/fa";
const Karline = () => {
    return (
        <div className="karline">
            <h1> Pourquoi choisir <span> Karline ? </span> </h1>

            <div className="line"></div>
            <p>I'm a professional Web Developer. Our Main Goal to help & Satisficed the Local & Global Clients by
                    web development solutions</p>
<div className='button-carline'>
<button className="btn-orange">Reserve maintenant</button>




</div>
<div className="table">
    <div className='section'><FaKey size={30} color='#ff6e66' />
    <h1>
service personaliser
    </h1>
    <p>chaque chemin est adapter a votre trajet unique</p>
    </div>
    <div className='section'> <FaCar size={30} color='#ff6e66'/>
    <h1>
service personaliser
    </h1>
    <p>chaque chemin est adapter a votre trajet uniquec</p>
    </div>
    <div className='section'><GrUserPolice size={30} color='#ff6e66'/>
    <h1>
service personaliser
    </h1>
    <p>chaque chemin est adapter a votre trajet unique</p></div>
    <div className='section'><FaTrophy size={30} color='#ff6e66'/>
    <h1>
service personaliser
    </h1>
    <p>chaque chemin est adapter a votre trajet unique</p>
    
    </div>




</div>

        </div>
    )
}

export default Karline
