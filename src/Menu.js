import './App.css';
import Menuitem from './Menuitem';

function Menu() {

  const menuData = [
    { label:"Home", link:"home"},
    { label:"About", link:"about"},
    { label:"Products", link:"products"},
    { label:"Services", link:"services"},
    { label:"Contact", link:"contact"}
  ];


  return (
    <ul style={{listStyle:'none', float:'right'}}>
      {/* <Menuitem label='Home' link='home' /> */}
      {/* <Menuitem menuItem={{ label:"Home", link:"https://www.google.tech/home"}}  /> */}
      {menuData.map((item)=>{
        return (
          <Menuitem menuItem={item}  />
        )
      })}
    </ul>
  );
}

export default Menu;
