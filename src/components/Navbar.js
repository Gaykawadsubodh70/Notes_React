import './Navbar.css'

function Navbar()
{
    
    return (
    <nav class="navbar background">
        <ul class="nav-list">
            {/* <div class="logo"><img src="res/images.jpeg" alt="logo"></div> */}
            <li><a href="#home" >Home</a></li>
            <li><a href="#Sevices" >Services</a></li>
            <li><a href="#Contact Us" >Contact Us</a></li>
            <li><a href="#About" >About</a></li>
        </ul>
        <div class="rightNav">
            {/* <input type="text" name="search" id="search" placeholder="Software Engineering..." style="color: white;"> */}
            {/* <div id='date'>{date.toISOString()}</div>
            <div id='title'>{title}</div>
            <div id='amount'>{amount}</div> */}
            <button class="btn btn-sm">Search</button>
            <button class="btn btn_lg">Login
                {/* <a href="#html/login.html" >Login</a> */}
            </button>
        </div>
    </nav>   )
}
export default Navbar