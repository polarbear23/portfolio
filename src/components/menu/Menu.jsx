import "./menu.scss"




export default function Menu({ menuOpen, setMenuOpen }) {
    const hideMenu = () => setMenuOpen(false);

    return (
        <div className = {"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick = {hideMenu}>
                    <a href = "#intro">Home</a>      
                </li>
                <li onClick = {hideMenu}>
                    <a href = "#portfolio">Portfolio</a> 
                </li>
                <li onClick = {hideMenu}>
                    <a href = "#works">Works</a> 
                </li>
                <li onClick = {hideMenu}>
                    <a href = "#contact">Contact</a> 
                </li>
                
            </ul>
        </div>
    )
}
