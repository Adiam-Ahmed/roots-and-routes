import '../src/styles/global.scss'
import '../src/components/Header/Header'
import Header from '../src/components/Header/Header';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Overview />
      <Cards />
      <Footer />
      <SignUp />
    </div>
  );
}

export default App;
