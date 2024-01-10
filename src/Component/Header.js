import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() { 
  const [{basket,user},dispatch]=useStateValue()
  const handleAuthentication=()=>{
    if(user){
      auth.signOut()
    }
  }
  return (
    <div className="header">
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
        <Link to="/orders" className="no_uderline">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Yours</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <Link to="/CheckOut" className="link">
            <ShoppingBasketIcon />
          </Link>
          <spa className="header__optionLineTwo header__basketCount">
            {basket.length}
          </spa>
        </div>
      </div>
    </div>
  );
}

export default Header