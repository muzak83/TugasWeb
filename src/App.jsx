import Hero from './components/hero'
// import './App.css'

const App = () => {
  return (
    <>
      <div className='__wrappper justify-center items-center min-h-screen'>
        <Hero />
        <section className='home'></section>
        <section className='alquran'></section>
        <section className='prayertime'></section>
        <section className='article'></section>
        <section className='zakatcalc'></section>
        <section className='kalenderhijriah'></section>
        <section className='about'></section>
      </div>
    </>
  )
}


  

export default App
