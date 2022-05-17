import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

function Header() {
  return (
    <div class="row">
      <div class="col-md-3">
        <img src={logo} alt="logo" style={{width:'150px', float:'left'}} />
      </div>
      <div class="col-md-9" style={{float:'right'}}>
        <Menu/>
      </div>
    </div>
    
  );
}

export default Header;
