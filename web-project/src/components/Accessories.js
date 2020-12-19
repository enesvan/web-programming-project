import React from 'react';
import Accessoriesimg from '../images/wallconnector.png';

const Accessories = () => {
    return(
        <>
        <div style={{marginBottom:'100px'}} >
        <div style={{marginTop:'150px', marginLeft:'280px',paddingRight:'300px',textAlign:'center'}}>
            <h1 style={{marginBottom:'50px',textAlign:'center'}} >Accessories</h1>
            <img src={Accessoriesimg} style={{maxWidth:'1920px',maxHeight:'969px',height: '500px'}}/>
        </div>
        <button onClick={(e)=>{e.preventDefault(); window.location.href="https://shop.tesla.com/";}} style={{margin:'10px',marginLeft:'850px', fontWeight:'bold',fontSize: '12px',borderRadius:'20px',padding:'10px',paddingLeft:'60px',paddingRight:'60px'}} type="button" class="btn btn-dark">SHOP NOW</button>
        </div>
        </>
    )
}

export default Accessories;