import { useState , } from "react";
import { Nav } from "react-bootstrap";
import { Link ,useNavigate } from "react-router-dom";
import { List, X, House, FileEarmarkText, Gear, BoxArrowRight, Database  } from "react-bootstrap-icons"; // icone bootstrap
import "../styles/SideBar.css";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("jwt");
        navigate("/login");
    };
    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            {/* Pulsante toggle */}
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <List size={30} />}
            </button>

            {/* Contenuto sidebar */}
            <div className="SideBarContent">
                <Nav className="flex-column mt-4">
                    <Link to="/home" className="nav-link">
                        {isOpen && <span>Home</span>}
                        <div className="sidebar-icon">
                            <House/>
                        </div>

                    </Link>
                    <Link to="/preventivi" className="nav-link">
                        {isOpen && <span>Crea un preventivo</span>}
                        <FileEarmarkText />
                    </Link>
                    <Link to="/database" className="nav-link">
                        {isOpen && <span>Database</span>}
                        <Database />
                    </Link>
                    <Link to="/impostazioni" className="nav-link">
                        {isOpen && <span>Impostazioni</span>}
                        <Gear />
                    </Link>
                </Nav>
            </div>
            {/* Logout in basso */}
            <div className="logout-link" onClick={handleLogout}>
                {isOpen && <span>Logout</span>}
                <BoxArrowRight />
            </div>

        </div>
    );
}

export default Sidebar;
