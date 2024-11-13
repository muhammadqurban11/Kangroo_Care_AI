import Home from '../components/Main'
import About from './About';
import Product from '../components/Products';
import Contact from '../components/Contact';
import Demo from '../components/Demo'

export default function Main() {
  return (
    <div>
      <main>Main Page</main>
      <Home />
      <About />
      <Product />
      <Contact />
      <Demo />
    </div>
  );
}
