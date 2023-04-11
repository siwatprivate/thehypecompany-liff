import logo from './logo.svg';
import './App.css';

import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <div className="App">
        <Container
          maxWidth="sm"
          style={{
            width: "100%",
            minHeight: "100vh",
            paddingLeft: "0px",
            paddingRight: "0px",
            backgroundColor: '#282c34'
          }}
        >
          <div style={{ color: '#ffffff', paddingTop: '10px', paddingBottom: '10px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '28px' }}>MENU</div>
          </div>
          <div>
            <img
              src={Stankhouse}
              style={{ maxWidth: "100%" }}
              alt="Stankhouse"
            />
            <div style={{ marginTop: "20px", textAlign: 'left', color: '#ffffff', paddingLeft: '8px', paddingRight: '8px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Stankhouse</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>bleeder: Exotic Genetic</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>family: 70 sativa / 30 Indica</div>
              <div></div>
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
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Ultra violet</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>bleeder: Grower's choice</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>family: 20% sativa / 80% indica</div>
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
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Nortern Light</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>bleeder: Sensi Seeds</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>family: 10% sativa / 90% indica</div>
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
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Lemon Berry Candy</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>bleeder: Ethos genetic</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>family: Sativa dominant </div>
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
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Dream factory</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>bleeder: Exotic genetic</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>family:  60 Sativa / 40 Indica </div>
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
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Do-Si-Dos</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>bleeder: Flavour Chasers</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>family: Indica Dominant (80%) </div>
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
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>OG Kush</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>bleeder: Grower's choice</div>
              <div style={{ fontSize: '12px', marginLeft: '8px' }}>family: 80% indica 20% sativa </div>
              <div></div>
              <div style={{ fontSize: '12px', marginLeft: '6px', marginTop: '4px' }}>• 1 gram : 220 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 15 grams : 200 bath</div>
              <div style={{ fontSize: '12px', marginLeft: '6px' }}>• 30 grams : 180 bath</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
