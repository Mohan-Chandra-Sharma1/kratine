import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./Navbar.css";
import { MyApp } from "./Calender";


const Sidebar1 = () =>{

    return(
        <div>
<Sidebar>
  <Menu className='Menu'>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    
    <MenuItem > Calendar </MenuItem>
  </Menu>
</Sidebar>;
        </div>
    )
}

export default Sidebar1;
