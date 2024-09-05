import '../src/styles/global.scss'
import '../src/components/Header/Header'
import Header from '../src/components/Header/Header';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Overview />
    </div>
  );
}

export default App;
