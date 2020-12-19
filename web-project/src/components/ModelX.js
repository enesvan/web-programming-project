import React from 'react';
import ModelXimg from '../images/model-x.jpg';

const ModelX = () => {
    return(
        <>
        <div>
            <div style={{position: 'absolute', marginTop:'160px', marginLeft:'860px',paddingRight:'300px',textAlign:'center'}}>
            <h1 style={{textAlign:'center'}} >Model X</h1>
            <h6 style={{textAlign:'center'}} >Order Online for <a href="https://www.tesla.com/support/delivery-options">Touchless Delivery</a></h6>
            </div>
            <div style={{position: 'absolute', marginTop:'825px', marginLeft: '740px'}} >
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/modelx/design";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-dark">CUSTOM ORDER</button>
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/inventory/new/mx";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-light">EXISTING INVENTORY</button>
            </div>
        </div>
        <img src={ModelXimg} style={{maxWidth:'1920px',maxHeight:'969px',width:'1920px',height: '969px'}}/>
        </>
    )
}

export default ModelX;