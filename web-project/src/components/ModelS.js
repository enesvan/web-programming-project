import React from 'react';
import ModelSimg from '../images/model-s.jpg';

const ModelS = () => {
    return(
        <>
        <div>
            <div style={{position: 'absolute', marginTop:'160px', marginLeft:'890px',paddingRight:'300px',textAlign:'center'}}>
            <h1 style={{textAlign:'center'}} >Model S</h1>
            <h6 style={{textAlign:'center'}} >Starting at $69,420</h6>
            </div>
            <div style={{position: 'absolute', marginTop:'825px', marginLeft: '740px'}} >
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/models/design";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-dark">CUSTOM ORDER</button>
                <button onClick={(e)=>{e.preventDefault(); window.location.href="https://www.tesla.com/inventory/new/ms";}} style={{margin:'10px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-light">EXISTING INVENTORY</button>
            </div>
        </div>
        <img src={ModelSimg} style={{maxWidth:'1920px',maxHeight:'969px',width:'1920px',height: '969px'}}/>
        </>
    )
}

export default ModelS;