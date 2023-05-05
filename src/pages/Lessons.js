import React from 'react'
import { TopNav } from '../components/TopNav'

export const Lessons = () => {
  return (
    <React.Fragment>
        <TopNav/>
        <section className="LessonsPage">
            <div className='LessonsRow' style={{margin:'0px auto'}}>
                <div className='LessonsItem'>
                    <div style={{paddingTop:'3.5vh'}}><img src='images/1st.png' alt='w'/></div>
                    <div style={{position:'relative'}}><img style={{position:'absolute',left:'10vh',marginTop:'10px'}} src='images/gordonRamsy.png' alt='a'/><h3>Will Smith</h3></div>
                </div>
                <div className='LessonsItem'>
                    <div style={{paddingTop:'3.5vh'}}><img src='images/2nd.png' alt='s'/></div>
                    <div style={{position:'relative'}}><img style={{position:'absolute',left:'10vh',marginTop:'10px'}} src='images/gordonRamsy.png' alt='d'/><h3>Will Smith</h3></div>
                </div>
                <div className='LessonsItem'>
                    <div style={{paddingTop:'3.5vh'}}><img src='images/3rd.png' alt='d'/></div>
                    <div style={{position:'relative'}}><img style={{position:'absolute',left:'10vh',marginTop:'10px'}} src='images/gordonRamsy.png' alt='e'/><h3>Will Smith</h3></div>
                </div>
                <div className='LessonsItem'>
                    <div style={{paddingTop:'3.5vh'}}><img src='images/4th.png' alt='d'/></div>
                    <div style={{position:'relative'}}><img style={{position:'absolute',left:'10vh',marginTop:'10px'}} src='images/gordonRamsy.png' alt='d'/><h3>Will Smith</h3></div>
                </div>
            </div>
            
            <div style={{margin:'0px auto'}}>
                <h1 style={{marginTop:'5rem',textAlign:'start',position:'relative',left:'2rem'}}>Popular Chefs</h1>
                <div className='LessonsRow'>
                    <div className='LessonsItem'>
                        <div style={{paddingTop:'3.5vh'}}><img src='images/1st.png' alt='w'/></div>
                        <div style={{position:'relative'}}><img style={{position:'absolute',left:'10vh',marginTop:'10px'}} src='images/gordonRamsy.png' alt='a'/><h3>Will Smith</h3></div>
                    </div>
                    <div className='LessonsItem'>
                        <div style={{paddingTop:'3.5vh'}}><img src='images/2nd.png' alt='s'/></div>
                        <div style={{position:'relative'}}><img style={{position:'absolute',left:'10vh',marginTop:'10px'}} src='images/gordonRamsy.png' alt='d'/><h3>Will Smith</h3></div>
                    </div>
                    <div className='LessonsItem'>
                        <div style={{paddingTop:'3.5vh'}}><img src='images/3rd.png' alt='d'/></div>
                        <div style={{position:'relative'}}><img style={{position:'absolute',left:'10vh',marginTop:'10px'}} src='images/gordonRamsy.png' alt='e'/><h3>Will Smith</h3></div>
                    </div>
                    <div className='LessonsItem'>
                        <div style={{paddingTop:'3.5vh'}}><img src='images/4th.png' alt='d'/></div>
                        <div style={{position:'relative',}}><img style={{position:'absolute',left:'10vh',marginTop:'10px'}} src='images/gordonRamsy.png' alt='d'/><h3>Will Smith</h3></div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
