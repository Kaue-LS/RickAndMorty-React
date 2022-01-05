import IconJPG from '../Libs/LoadIcon/Icon.jpg'
import IconGIF from '../Libs/LoadIcon/Icon.gif'
import '../NavBar/NavBar.scss'
import MenuBar from '../Libs/IMG/MenuBar.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function NavBar(){

   const [ativar,setAtivar]=useState(false)
   const [showButton,setShowButton]=useState(false)
    return(
        <>
        <div className="NavBar">
        <Link style={{textDecoration:'none'}} className='Navbar__Logo__Link' to={'/'}>
            <div className="NavBar__Logo">
            
                {
                    ativar?(
                      <>
                <img onMouseOut={()=>setAtivar(false)}className={`NavBar__Logo__Icon__${ativar}`}src={IconGIF} alt=''/>
                <h1>Rick And Morty API</h1>
                </>
                    ):(
                        <>
                <img onMouseOver={()=>setAtivar(true)} className={`NavBar__Logo__Icon__${ativar}`} src={IconJPG} alt=''/>
                <h1>Rick And Morty API</h1>
                </>
                    )
                }

                 <img className={`NavBar__Logo__Icon__Mobile`}src={IconJPG} alt=''/>

            </div>
            </Link>

            <div className='NavBar__Buttons'>
                    <button>
                        About site
                    </button>
                    <button>
                        About me
                    </button>
                    <button>
                        episodes
                    </button>
                    <Link style={{textDecoration:'none'}} to={'/'}>
                    <button>
                           characters
                       </button>
                       </Link>
            </div>
          {/* Versão Mobile */}
          <div className='NavBar__Mobile'>
              {
                  showButton?(
           <img onClick={()=>setShowButton(false)} src={MenuBar} alt=''/>

                  ):(
                    <img onClick={()=>setShowButton(true)} src={MenuBar} alt=''/>

                  )
              }
        </div>
        </div>
           {
               showButton?(
                   <div className='ButtonsMobile'>
                       <button>
                           About site
                       </button>
                       <button>
                           About me
                       </button>
                       <button>
                           episodes
                       </button>
                    <button>
                    <Link style={{textDecoration:'none',margin:'0 auto',width:'100%',color:'white'}} to={'/'}>
                           characters
                       </Link>

                       </button>
                       
                   </div>
               ):('')
           }
    
       </>
    )
}