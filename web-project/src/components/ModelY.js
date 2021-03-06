import React from 'react';
import ModelYimg from '../images/model-y.jpeg';

const ModelY = () => {
    return(
        <>
        <div>
            <div style={{position: 'absolute', marginTop:'160px', marginLeft:'860px',paddingRight:'300px',textAlign:'center'}}>
            <h1 style={{textAlign:'center'}} >Model Y</h1>
            <h6 style={{textAlign:'center'}} >Order Online for <a href="https://www.tesla.com/support/delivery-options">Touchless Delivery</a></h6>
            </div>
            <div style={{position: 'absolute', marginTop:'825px', marginLeft: '740px'}} >
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/modely/design";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-dark">CUSTOM ORDER</button>
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/modely";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-light">LEARN MORE</button>
            </div>
        </div>
        <img src={ModelYimg} style={{maxWidth:'1920px',maxHeight:'969px',width:'1920px',height: '969px'}}/>
        </>
    )
}

export default ModelY;