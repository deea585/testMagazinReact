
import './App.css';
import Produs from './components/Produs';
import GetAllProducts from './data/products';
import Header from './components/Header';
function App() {


  const produse = GetAllProducts()
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <body>
          {produse.map(produs =>
            <Produs product={produs}>
            </Produs>
            
          )}

        </body>
      </header>
    </div>
  )
}

export default App;
