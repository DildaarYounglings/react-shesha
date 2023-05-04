import React, { useEffect } from 'react';
import { TopNav } from '../components/TopNav';
import LocalStorage_SessionStorage from '../components/LocalStorage_SessionStorage';
import PostDataTo_API from '../components/PostDataTo_API';


export const Home = () => {
  
  return (
    <React.Fragment>
      <TopNav/>
      <div className='home_header1'>

        <div className='home_header_left'>
            <h1>Life is uncertain. Eat  first</h1>
            <h3 className="homeHeaderLeft_H3">
                “ A recipe has no soul .<br/>You as the cook must bring soul to the recipe”<br/>-Thomas Keller
            </h3>
            <img src="images/swirlyArrow.png" style={{position:"relative",right:"-28vh",top:"-5vh"}}></img>
          <button className="homeHeaderLeft_Button" onClick={function(){let a = document.createElement('a');a.href = "/recipes";a.click()}}>Explore Recipes</button>
        </div>

        <div className='home_header_right'>
            <img src={`images/homeHeaderRight.png`} style={{height:"100%",width:"100%",}} alt=''/>
        </div>

      </div>

      <div className='home_header2'>

        <div className='home_header_right'>
          <img src={`images/homeHeader2.png`} style={{height:"100%",width:"100%",}} alt=''/>
        </div>

        <div className='home_header_left'>
            <h1>Create your own Recipe</h1>
            <h3 className="homeHeaderLeft_H3">
              Using the ingredients you have we can help you make a meal<br/><br/>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </h3>
        </div>

      </div>

      <div style={{margin:"40vh 0vw",width:"fit-content"}}>

        <h1 style={{textAlign:"left"}}>Trending Recipes for the Month</h1>

        <div className="home_footer">

          <div className="homeFooter_div1" >
            <div style={{position:"relative"}} >
              <button style={{position:"absolute",backgroundColor:"green",right:"0"}}><img src={`images/bookmarkFeature.png`} alt=''/></button>
              <img src={`images/pancake.png`} alt=''/>
              <button style={{position:"absolute",backgroundColor:"green",left:"0",bottom:"0"}}><img src={`images/ViewIngredientsButton.png`} alt=''/></button>
            </div>
            <h2 className="homeHeaderLeft_h2">Pancake</h2><h2 className="homeHeaderLeft_h2"><img src={`images/gordonRamsy.png`} alt=''/> Gordon Ramsay</h2>
          </div>

          <div className="homeFooter_div2" >
            <div style={{position:"relative"}} >
              <button style={{position:"absolute",backgroundColor:"green",right:"0"}}><img src={`images/bookmarkFeature.png`} alt=''/></button>
              <img src={`images/burger.png`} alt=''/>
              <button style={{position:"absolute",backgroundColor:"green",left:"0",bottom:"0"}}><img src={`images/ViewIngredientsButton.png`} alt=''/></button>
            </div>
            <h2 className="homeHeaderLeft_h2">Burger & Fries</h2><h2 className="homeHeaderLeft_h2"><img src={`images/pierreGagnaire.png`} alt=''/> Pierre Gagnaire</h2>
          </div>

          <div className="homeFooter_div3">
            <div style={{position:"relative"}} >
              <button style={{position:"absolute",backgroundColor:"green",right:"0"}}><img src={`images/bookmarkFeature.png`} alt=''/></button>
              <img src={`images/friedChickenAndRice.png`} alt=''/>
              <button style={{position:"absolute",backgroundColor:"green",left:"0",bottom:"0"}}><img src={`images/ViewIngredientsButton.png`} alt=''/></button>
            </div>
              <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2><h2><img src={`images/gordonRamsy.png`} alt=''/> Gordon Ramsay</h2>
          </div>

        </div>
      </div>
      <LocalStorage_SessionStorage/><PostDataTo_API/>
    </React.Fragment>
  )
}