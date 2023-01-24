import Logo from "../assets/logo512.png";

const Header = (props) => {
  return (
    <header>
      <div id = "logo">
        <img src={Logo} className = "header-logo" alt = ""/>
        <h2>MRT <span className="spanLogo">Studio</span></h2>
      </div>
        <h1> {props.title}</h1>



    </header>
  )
}

export default Header