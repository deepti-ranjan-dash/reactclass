import { useEffect } from 'react';
import './App.css';

// function Menuitem({label, link}) {
function Menuitem({menuItem={}}) {
  //console.log(params);
  //console.log(menuItem);
  useEffect(()=>{
    console.log(menuItem);
  });
  const {label, link} = menuItem;
  return (
    <>
      <li style={{display:'inline-block', margin:'0 5px'}}>
        <a href={link}>{label}</a>
      </li>
    </>
  );
}

export default Menuitem;
