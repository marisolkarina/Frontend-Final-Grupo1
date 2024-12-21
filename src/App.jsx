import Header from './components/Header'
import Filtros from './components/Filtros'
import Footer from './components/Footer'
import Products from './components/Products'

function App() {

  return (

    <>
      <Header />
      <Filtros />
      <main class="main-index" id="misProductos">
        <Products />
      </main>
      <Footer />
    </>
          

  )
}

export default App
