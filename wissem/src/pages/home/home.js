
import './home.css';

import Karline from "../../components/karline/karline.js"
import MyGallery from '../../components/gallery/galery.js'

function Home() {
  return (
<div >
<div className="main">
<div className="detail">
                <h1>Votre traget ,</h1>
                <h1>Notre Excellence</h1>
                <p>I'm a professional Web Developer. Our Main Goal to help & Satisficed the Local & Global Clients by
                    web development solutions
                </p>
                <div className="btn-first">
                    <button className='btn-orange'>devis en reservation</button> <button className='btn-blue'>en savoir +</button>
                </div>
               
               
            </div>

           
            <div className="images">
  
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"alt="" className="img-w"/>
      
</div>
</div>

<Karline/>




</div>
  );
}

export default Home;
