import '../src/styles/global.scss'
import '../src/components/Header/Header'
import Header from '../src/components/Header/Header';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Overview />
      <Cards />
      <Footer />
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
