import {Context} from "../utils/context.js";
import {useContext} from "react";
const NavItem = ({itemTitle}) => {
const {changePage} = useContext(Context);
    return (
        <li onClick={()=> changePage(itemTitle)} className="nav-item btn btn-danger mx-1  border-warning">{itemTitle}</li>

    );
};

export default NavItem;