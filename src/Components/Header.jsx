import React,{Component} from 'react'
import { Link } from 'react-router-dom'
class Header extends Component {

  state={clicked: false};
  handleClick=() =>{
    this.setState({clicked: !this.state.clicked})

  }
  render(){
  return (
    <nav>
        <Link to={"/"} ><h1>Frontend Gyaan</h1> </Link>
        <main>
        <ul id="navb"  className={this.state.clicked ? "#navb active" : "#navb"}>
            <Link className="active" to={"/"}>Home</Link>
            <Link to={"/contact-us"}>Contact</Link>
            <Link to={"/about-us"}>About</Link>
            <Link to={"/brands"}>Brands</Link>
            <Link to={"/services"}>Services</Link>
          </ul>
        </main>
        <div className="mobile" onClick={this.handleClick}>
            <i className={this.state.clicked ?"fas fa-times" : "fas fa-bars" }></i></div>

    </nav>
  )
}
}
export default Header

