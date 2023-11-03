import React from 'react'
import '../styls/header.scss'
import {  AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import  Monder  from './pages/баннер 1.png'
import Kluch from './pages/2.png'
import Bred from './pages/3.png'
import Svert from './pages/4.png'
import Logo from './pages/logo.png' 
import { useSelector } from 'react-redux';
// import { decrement, increment, incrementByAmount } from '../store/slice/cartSlice'
import { Link } from 'react-router-dom'


const Heder = () => {
  // const dispatch = useDispatch();
  const { items, totalPrise } = useSelector((state) => state.counter)
  return (
    <div className='heder__'>
      {/* <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <div>{}</div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      </div> */}
        <div className='container'>
            <div className='imag'>
                <img src={Logo} alt="" />
            </div>
            
            {/* <p className='time'>Inst
Время работы:
10:00–20:00
</p> */}
            
            <div className='icon'>
            <AiOutlineHome style={{color: '#fff'}}/>
            <AiOutlineHeart  style={{color: '#fff'}}/>
<Link to={'/coreth'}>
  <span>  
    <BsCart2  style={{color: '#fff', fontSize: ''}}/>
</span>
</Link>
  <span style={{color: '#fff', }}>{totalPrise}$</span> 
    <span style={{color: '#fff', }}>{items.length}</span>
          
          

            </div>

        </div>
        <div className='header__top'>
            <ul className='list-non'>
                <li>О компании</li>
                <li>Акции</li>
                <li>Хиты сезона</li>
                <li>Новинки</li>
         
            </ul>
            <div className='Svg'>
                  <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="37.5" height="36" rx="18" fill="white"/>
<path d="M18.75 10.6265C21.2349 10.6265 21.5738 10.6265 22.5904 10.6265C23.494 10.6265 23.9458 10.8434 24.2846 10.9518C24.7364 11.1687 25.0753 11.2771 25.4142 11.6024C25.753 11.9277 25.9789 12.253 26.0919 12.6867C26.2048 13.012 26.3178 13.4458 26.4307 14.3133C26.4307 15.2892 26.4307 15.506 26.4307 18C26.4307 20.494 26.4307 20.7108 26.4307 21.6867C26.4307 22.5542 26.2048 22.988 26.0919 23.3133C25.866 23.747 25.753 24.0723 25.4142 24.3976C25.0753 24.7229 24.7364 24.9398 24.2846 25.0482C23.9458 25.1566 23.494 25.2651 22.5904 25.3735C21.5738 25.3735 21.3479 25.3735 18.75 25.3735C16.1521 25.3735 15.9262 25.3735 14.9096 25.3735C14.006 25.3735 13.5542 25.1566 13.2154 25.0482C12.7636 24.8313 12.4247 24.7229 12.0858 24.3976C11.747 24.0723 11.5211 23.747 11.4081 23.3133C11.2952 22.988 11.1822 22.5542 11.0693 21.6867C11.0693 20.7108 11.0693 20.494 11.0693 18C11.0693 15.506 11.0693 15.2892 11.0693 14.3133C11.0693 13.4458 11.2952 13.012 11.4081 12.6867C11.634 12.253 11.747 11.9277 12.0858 11.6024C12.4247 11.2771 12.7636 11.0602 13.2154 10.9518C13.5542 10.8434 14.006 10.7349 14.9096 10.6265C15.9262 10.6265 16.2651 10.6265 18.75 10.6265ZM18.75 9C16.1521 9 15.9262 9 14.9096 9C13.8931 9 13.2154 9.21687 12.6506 9.43374C12.0858 9.6506 11.5211 9.9759 10.9563 10.5181C10.3916 11.0602 10.1657 11.494 9.82681 12.1446C9.6009 12.6867 9.48795 13.3374 9.375 14.3133C9.375 15.2892 9.375 15.6145 9.375 18C9.375 20.494 9.375 20.7108 9.375 21.6867C9.375 22.6627 9.6009 23.3133 9.82681 23.8554C10.0527 24.3976 10.3916 24.9398 10.9563 25.4819C11.5211 26.0241 11.9729 26.241 12.6506 26.5663C13.2154 26.7831 13.8931 26.8916 14.9096 27C15.9262 27 16.2651 27 18.75 27C21.2349 27 21.5738 27 22.5904 27C23.6069 27 24.2846 26.7831 24.8494 26.5663C25.4142 26.3494 25.9789 26.0241 26.5437 25.4819C27.1084 24.9398 27.3343 24.506 27.6732 23.8554C27.8991 23.3133 28.012 22.6627 28.125 21.6867C28.125 20.7108 28.125 20.3855 28.125 18C28.125 15.6145 28.125 15.2892 28.125 14.3133C28.125 13.3374 27.8991 12.6867 27.6732 12.1446C27.4473 11.6024 27.1084 11.0602 26.5437 10.5181C25.9789 9.9759 25.5271 9.75904 24.8494 9.43374C24.2846 9.21687 23.6069 9.10843 22.5904 9C21.5738 9 21.3479 9 18.75 9Z" fill="black"/>
<path d="M18.75 13.3373C16.0392 13.3373 13.8931 15.3976 13.8931 18C13.8931 20.6024 16.0392 22.6627 18.75 22.6627C21.4608 22.6627 23.6069 20.6024 23.6069 18C23.6069 15.3976 21.4608 13.3373 18.75 13.3373ZM18.75 21.0361C17.0557 21.0361 15.5873 19.7349 15.5873 18C15.5873 16.3735 16.9428 14.9639 18.75 14.9639C20.4443 14.9639 21.9127 16.2651 21.9127 18C21.9127 19.6265 20.4443 21.0361 18.75 21.0361Z" fill="black"/>
<path d="M23.7199 14.3133C24.3437 14.3133 24.8494 13.8278 24.8494 13.2289C24.8494 12.6301 24.3437 12.1446 23.7199 12.1446C23.0961 12.1446 22.5904 12.6301 22.5904 13.2289C22.5904 13.8278 23.0961 14.3133 23.7199 14.3133Z" fill="black"/>
</svg> 

<svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="37.5" height="36" rx="18" fill="white"/>
<path d="M20.1711 24.3C13.1243 24.3 9.10497 19.5702 8.9375 11.7H12.4673C12.5833 17.4765 15.1855 19.9234 17.2468 20.4279V11.7H20.5705V16.6819C22.6059 16.4675 24.7444 14.1972 25.4658 11.7H28.7895C28.5177 12.9951 27.9758 14.2214 27.1978 15.3022C26.4197 16.383 25.4222 17.2949 24.2678 17.981C25.5564 18.608 26.6947 19.4953 27.6074 20.5845C28.52 21.6737 29.1864 22.9401 29.5625 24.3H25.9039C25.5662 23.1188 24.8801 22.0615 23.9313 21.2605C22.9825 20.4595 21.8134 19.9505 20.5705 19.7972V24.3H20.1711Z" fill="black"/>
</svg>

<svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="37.5" height="36" rx="18" fill="white"/>
<path d="M20.3035 18.3283H23.7931L24.3409 14.9044H20.3028V13.0332C20.3028 11.6108 20.784 10.3496 22.1615 10.3496H24.375V7.36172C23.9861 7.31099 23.1636 7.19995 21.6093 7.19995C18.3639 7.19995 16.4613 8.85532 16.4613 12.6267V14.9044H13.125V18.3283H16.4613V27.7389C17.122 27.8348 17.7912 27.9 18.4782 27.9C19.0992 27.9 19.7052 27.8451 20.3035 27.767V18.3283Z" fill="black"/>
</svg>
  </div>
        </div>

        <div className='foto'>  
 <img style={{width: ''}} src={Monder}  alt="" />
 <img style={{margin: ''}} src={Kluch} alt="" />
 <img style={{width: ''}} src={Monder}  alt="" />

 {/* <img style={{margin: ''}} src={Svert} alt="" /> */}
 {/* <img style={{margin: ''}} src={Bred} alt="" /> */}
 {/* <img style={{}} src={Bred} alt="" /> */}
        </div>

    
    </div>
  )
}

export default Heder