import React from 'react';
import SolarRoofimg from '../images/solarroof.jpg';

const SolarRoof = () => {
    return(
        <>
        <div>
            <div style={{position: 'absolute', marginTop:'160px', marginLeft:'740px',paddingRight:'300px',textAlign:'center'}}>
            <h1 style={{textAlign:'center'}} >Solar for New Roofs</h1>
            <h6 style={{textAlign:'center'}} >Solar Roof Costs Less Than a New Roof Plus Solar Panels</h6>
            </div>
            <div style={{position: 'absolute', marginTop:'825px', marginLeft: '740px'}} >
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/solarroof/design";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-dark">ORDER NOW</button>
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/solarroof";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-light">LEARN MORE</button>
            </div>
        </div>
        <img src={SolarRoofimg} style={{maxWidth:'1920px',maxHeight:'969px',width:'1920px',height: '969px'}}/>
        </>
    )
}

export default SolarRoof;