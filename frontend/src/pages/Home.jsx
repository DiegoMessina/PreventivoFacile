import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="home-container">
            <h1 className="welcome-title">
                Benvenuto{user ? `, ${user.nome}` : ""}!
            </h1>
            <p className="subtitle">Scegli cosa vuoi fare:</p>

            <div className="quick-actions">
                <div className="card-action" onClick={() => navigate("/preventivi")}>
                    <i className="bi bi-file-earmark-text"></i>
                    <span>Crea Preventivo</span>
                </div>

                <div className="card-action" onClick={() => navigate("/database")}>
                    <i className="bi bi-gear"></i>
                    <span>Database Preventivi</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
