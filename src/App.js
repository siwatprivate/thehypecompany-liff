import logo from './logo.svg';
import './App.css';

import { Container, Typography } from "@mui/material";

import Stankhouse from './static/cannabis-stank-house.JPG'
import Ultraviolet from './static/cannabis-ultra-violet.JPG'
import NorternLight from './static/cannabis-nortern-light.JPG'
import LemonBerryCandy from './static/cannabis-lemon-berry-candy.JPG'
import DreamFactory from './static/cannabis-dream-factory.JPG'
import DoSiDos from './static/cannabis-do-si-dos.JPG'
import OGKush from './static/cannabis-og-kush.JPG'

function App() {
  const imageLoop = [
    { imgUrl: Stankhouse, alt: "Stankhouse" },
  ];
  return (
    <div className="App">
      <Container
        style={{
          width: "100%",
          minHeight: "100vh",
          paddingLeft: "0px",
          paddingRight: "0px",
          backgroundColor: '#282c34'
        }}
      >
        <Container
          maxWidth="sm"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            backgroundColor: '#282c34'
          }}
        >
          <div style={{ color: '#ffffff', paddingTop: '10px', paddingBottom: '10px' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '28px' }}>MENU</h3>
          </div>
          <div>
            <img
              src={Stankhouse}
              style={{ maxWidth: "100%" }}
              alt="Stankhouse"
            />
            <div style={{ marginTop: "20px", textAlign: 'left', color: '#ffffff', paddingLeft: '8px', paddingRight: '8px' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '12px' }}>Stankhouse</h1>
              <h2 style={{ fontSize: '11px', marginLeft: '8px' }}>Bleeder: Exotic Genetic<br />Family: 70 sativa / 30 Indica</h2>
              <div style={{ fontSize: '12px', marginLeft: '6px', marginTop: '4px' }}>• 1 gram : 220 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 15 grams : 200 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 30 grams : 180 bath</div>
            </div>
          </div>
          <div style={{ marginTop: '28px' }}>
            <img
              src={Ultraviolet}
              style={{ maxWidth: "100%" }}
              alt="Ultra violet"
            />
            <div style={{ marginTop: "20px", textAlign: 'left', color: '#ffffff', paddingLeft: '8px', paddingRight: '8px' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '12px' }}>Ultra violet</h1>
              <h2 style={{ fontSize: '11px', marginLeft: '8px' }}>Bleeder: Grower's choice<br />Family: 20% sativa / 80% indica</h2>
              <div></div>
              <div style={{ fontSize: '12px', marginLeft: '6px', marginTop: '4px' }}>• 1 gram : 220 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 15 grams : 200 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 30 grams : 180 bath</div>
            </div>
          </div>
          <div style={{ marginTop: '28px' }}>
            <img
              src={NorternLight}
              style={{ maxWidth: "100%" }}
              alt="Nortern Light"
            />
            <div style={{ marginTop: "20px", textAlign: 'left', color: '#ffffff', paddingLeft: '8px', paddingRight: '8px' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '12px' }}>Nortern Light</h1>
              <h2 style={{ fontSize: '11px', marginLeft: '8px' }}>Bleeder: Sensi Seeds<br />Family: 10% sativa / 90% indica</h2>
              <div></div>
              <div style={{ fontSize: '12px', marginLeft: '6px', marginTop: '4px' }}>• 1 gram : 180 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 15 grams : 150 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 30 grams : 120 bath</div>
            </div>
          </div>
          <div style={{ marginTop: '28px' }}>
            <img
              src={LemonBerryCandy}
              style={{ maxWidth: "100%" }}
              alt="Lemon Berry Candy"
            />
            <div style={{ marginTop: "20px", textAlign: 'left', color: '#ffffff', paddingLeft: '8px', paddingRight: '8px' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '12px' }}>Lemon Berry Candy</h1>
              <h2 style={{ fontSize: '11px', marginLeft: '8px' }}>Bleeder: Ethos genetic<br />Family: Sativa dominant</h2>
              <div></div>
              <div style={{ fontSize: '12px', marginLeft: '6px', marginTop: '4px' }}>• 1 gram : 250 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 15 grams : 230 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 30 grams : 220 bath</div>
            </div>
          </div>
          <div style={{ marginTop: '28px' }}>
            <img
              src={DreamFactory}
              style={{ maxWidth: "100%" }}
              alt="Dream factory"
            />
            <div style={{ marginTop: "20px", textAlign: 'left', color: '#ffffff', paddingLeft: '8px', paddingRight: '8px' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '12px' }}>Dream factory</h1>
              <h2 style={{ fontSize: '11px', marginLeft: '8px' }}>Bleeder: Exotic genetic<br />Family:  60 Sativa / 40 Indica</h2>
              <div></div>
              <div style={{ fontSize: '12px', marginLeft: '6px', marginTop: '4px' }}>• 1 gram : 250 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 15 grams : 230 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 30 grams : 220 bath</div>
            </div>
          </div>
          <div style={{ marginTop: '28px' }}>
            <img
              src={DoSiDos}
              style={{ maxWidth: "100%" }}
              alt="Do-si-dos"
            />
            <div style={{ marginTop: "20px", textAlign: 'left', color: '#ffffff', paddingLeft: '8px', paddingRight: '8px' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '12px' }}>Do-Si-Dos</h1>
              <h2 style={{ fontSize: '11px', marginLeft: '8px' }}>bleeder: Flavour Chasers<br />family: Indica Dominant (80%) </h2>
              <div></div>
              <div style={{ fontSize: '12px', marginLeft: '6px', marginTop: '4px' }}>• 1 gram : 180 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 15 grams : 150 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 30 grams : 120 bath</div>
            </div>
          </div>
          <div style={{ marginTop: '28px', paddingBottom: '28px' }}>
            <img
              src={OGKush}
              style={{ maxWidth: "100%" }}
              alt="OG-Kush"
            />
            <div style={{ marginTop: "20px", textAlign: 'left', color: '#ffffff', paddingLeft: '8px', paddingRight: '8px' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '12px' }}>OG Kush</h1>
              <h2 style={{ fontSize: '12px', marginLeft: '8px' }}>Bleeder: Grower's choice<br />Family: 80% indica 20% sativa</h2>
              <div></div>
              <div style={{ fontSize: '12px', marginLeft: '6px', marginTop: '4px' }}>• 1 gram : 220 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 15 grams : 200 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 30 grams : 180 bath</div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default App;