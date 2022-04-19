import "./topbar.scss"
import {Computer, Code} from '@material-ui/icons/';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className = {"topbar " + (menuOpen && "active")}>
            <div className = "wrapper">
                <div className="left">
                    <a href ="#intro" className = "logo" >Malik.Dev</a>
                    <div className="itemContainer">
                        <Computer className = "icon"/>
                        <span>+44 7411 777 820</span>

                    </div>
                    <div className="itemContainer">
                        <Code className = "icon"/>
                        <span>Developer Portfolio</span>

                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
                        <span className = "line1"> </span>
                        <span className = "line2"> </span>
                        <span className = "line3"> </span>

                    </div>
                </div>
            </div>
        </div>
    );
}
