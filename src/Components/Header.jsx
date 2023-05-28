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
            <Link onClick={this.handleClick} to={"/"}>Home</Link>
            <Link onClick={this.handleClick} to={"/contact-us"}>Contact</Link>
            <Link onClick={this.handleClick} to={"/about-us"}>About</Link>
            <Link onClick={this.handleClick} to={"/blogs"}>Blogs</Link>
            <Link onClick={this.handleClick} to={"/learn"}>Learn</Link>
          </ul>
        </main>
        <div className="mobile" onClick={this.handleClick}>
            <i className={this.state.clicked ?"fas fa-times" : "fas fa-bars" }></i></div>

    </nav>
  )
}
}
export default Header

