import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Products } from './components/sections/Products'
import { Story } from './components/sections/Story'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
