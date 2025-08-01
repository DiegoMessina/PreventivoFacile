import { useState } from "react";
import "../styles/DatabasePage.css";
import { Button, Form, InputGroup } from "react-bootstrap";

function DatabasePage() {
    // Stato preventivi mock (poi da API)
    const [preventivi, setPreventivi] = useState([
        { id: 1, nome: "Mario", cognome: "Rossi", data: "2025-08-01" },
        { id: 2, nome: "Luca", cognome: "Bianchi", data: "2025-07-28" },
        { id: 3, nome: "Giulia", cognome: "Verdi", data: "2025-07-15" }
    ]);

    const [search, setSearch] = useState("");

    // Filtra preventivi
    const filtered = preventivi.filter(p =>
        `${p.nome} ${p.cognome}`.toLowerCase().includes(search.toLowerCase())
    );

    // Azioni
    const handleApri = (id) => {
        console.log("Apri preventivo", id);
    };

    const handleScarica = (id) => {
        console.log("Scarica preventivo", id);
    };

    const handleElimina = (id) => {
        setPreventivi(prev => prev.filter(p => p.id !== id));
    };

    return (
        <div className="database-page">
            {/* Titolo e info ricerca */}
            <h2 className="page-title">Archivio Preventivi</h2>
            <p className="search-info">
                Usa la barra sottostante per cercare un preventivo tramite nome o cognome.
            </p>

            {/* Barra di ricerca */}
            <div className="search-bar">
                <InputGroup>
                    <Form.Control
                        placeholder="Cerca preventivo per nome o cognome..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </InputGroup>
            </div>

            {/* Tabella preventivi */}
            <div className="preventivi-table">
                <table>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Data</th>
                        <th>Azioni</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filtered.length > 0 ? (
                        filtered.map(p => (
                            <tr key={p.id}>
                                <td>{p.nome}</td>
                                <td>{p.cognome}</td>
                                <td>{p.data}</td>
                                <td>
                                    <Button variant="outline-primary" size="sm" onClick={() => handleApri(p.id)}>Apri</Button>{' '}
                                    <Button variant="outline-success" size="sm" onClick={() => handleScarica(p.id)}>Scarica</Button>{' '}
                                    <Button variant="outline-danger" size="sm" onClick={() => handleElimina(p.id)}>Elimina</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="no-results">Nessun preventivo trovato</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DatabasePage;
