import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() { 
  const navigate=useNavigate()
  const [{basket,user},dispatch]=useStateValue()
  const handleAuthentication=()=>{
    if(user){
      auth.signOut().then(() => {
        console.log("User signed out");
        navigate("/");
      });

    }
    
  }

  const handleOrder=()=>{
    if(user){
      navigate("/orders")
    }
    else{
      navigate("/login")
    }
  }
  const handleCart=()=>{
     if (user) {
       navigate("/CheckOut");
     } else {
       navigate("/login");
     }
  }
  return (
    <div className="header">
      <span className="header_span">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>
      </span>
      <div className="header__nav">
        <Link className="no_uderline" to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user?.email}
            </span>
            <span className="header__optionLineTwo">
              {!user ? "Sign In" : "Sign Out"}
            </span>
          </div>
        </Link>
        <div className="header__option pointer" onClick={handleOrder}>
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option prime">
          <span className="header__optionLineOne">Yours</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <div className = "link pointer" onClick={handleCart}>
            <ShoppingBasketIcon />
          </div>

          <spa className="header__optionLineTwo header__basketCount">
            {basket.length}
          </spa>
        </div>
      </div>
    </div>
  );
}

export default Header