import styles from './styles'
import {Stats, Navbar, Hero, Business, Billing, CardDeal, Clients, CTA, Testimonials, Footer} from './components/Components'

const App = () => (
  
  <div className="w-full bg-primary overflow-hidden">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero section */}
    <div className={`bg-primary ${styles.flexStart} ` }>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    

    {/*  */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients /> 
      <CTA /> 
      <Footer />
      </div>
    </div>

  </div>
);


export default App;
