import React from 'react';
import SolarPanelimg from '../images/solarpanel.jpg';

const SolarPanel = () => {
    return(
        <>
        <div>
            <div style={{position: 'absolute', marginTop:'160px', marginLeft:'640px',paddingRight:'300px',textAlign:'center'}}>
            <h1 style={{textAlign:'center'}} >Lowest Cost Solar Panels in America</h1>
            <h6 style={{textAlign:'center'}} >Money-back guarantee</h6>
            </div>
            <div style={{position: 'absolute', marginTop:'825px', marginLeft: '740px'}} >
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/energy/design";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-dark">ORDER NOW</button>
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/solarpanels";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-light">LEARN MORE</button>
            </div>
        </div>
        <img src={SolarPanelimg} style={{maxWidth:'1920px',maxHeight:'969px',width:'1920px',height: '969px'}}/>
        </>
    )
}

export default SolarPanel;