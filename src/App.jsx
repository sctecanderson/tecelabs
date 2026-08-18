import "./App.css";

import { Suspense, useState } from "react";
import { Html } from "@react-three/drei";

import ModelScene from "./scene/ModelScene";

function Loading() {
  return (
    <Html center>
      <div className="loading">CARREGANDO MODELO...</div>
    </Html>
  );
}

function App() {
  const [isRotating, setIsRotating] = useState(false);
  const [showGrid, setShowGrid] = useState(true);

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">T</span>

          <div>
            <strong>TECE</strong>
            <span>LABS</span>
          </div>
        </div>

        <div className="status">
          <span className="status-dot" />
          SISTEMA ONLINE
        </div>
      </header>

      <section className="viewer">
        <ModelScene
          isRotating={isRotating}
          showGrid={showGrid}
        />
        
        <div className="hero-copy">
          <span className="eyebrow">ENGENHARIA • TECNOLOGIA • PRECISÃO</span>

          <h1>
            TECNOLOGIA
            <br />
            QUE <span>TRANSFORMA</span>
          </h1>

          <p>
            Visualize nossos equipamentos em 3D e explore cada detalhe
            diretamente no ambiente TECELABS.
          </p>
        </div>

        <div className="viewer-info">
          <span>MODEL</span>
          <strong>BASE ROLO</strong>
        </div>

        <div className="controls">
          <button
            className={isRotating ? "active" : ""}
            onClick={() => setIsRotating(!isRotating)}
          >
            {isRotating ? "PARAR" : "GIRAR"}
          </button>

          <button
            className={showGrid ? "active" : ""}
            onClick={() => setShowGrid(!showGrid)}
          >
            GRID
          </button>
        </div>
      </section>

      <footer className="footer">
        <div>
          <span>TECELABS</span>
          <small>3D ENGINEERING EXPERIENCE</small>
        </div>

        <div className="footer-right">
          <span>INTERACTIVE MODEL</span>
          <span>V1.0</span>
        </div>
      </footer>
    </main>
  );
}

export default App;