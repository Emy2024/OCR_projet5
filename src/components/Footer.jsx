import LogoKasaWhite from '../assets/LogoKasaWhite.png'

function Footer(){
  return (
    <footer className='footer'>
      <img src={LogoKasaWhite} className="footer__logo"></img>
      <p>@2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer