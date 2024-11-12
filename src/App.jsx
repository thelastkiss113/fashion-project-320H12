// src/App.js
import './App.css';
import Header from './components/Header.jsx'; // Updated
import Nav from './components/Nav.jsx'; // Updated
import Article from './components/Article.jsx'; // Updated
import Footer from './components/Footer.jsx'; // Updated

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          imgSrc="blog-image-1.jpg"
          imgAlt="Women in Red"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Bibendum mollis mattis sociosqu maecenas nulla maximus. Primis consequat magna venenatis iaculis quis tempor viverra mus. Lacus integer aliquet cursus netus vitae fermentum ante commodo. Sociosqu ridiculus amet diam porttitor potenti platea aenean. Felis sed proin diam inceptos duis ullamcorper. Urna curae platea magna sem penatibus molestie eu iaculis. Ridiculus nunc sem orci proin, gravida amet bibendum sapien."
        />
        
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          imgSrc="blog-image-2.jpg"
          imgAlt="Fashion group"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam mauris adipiscing facilisi consectetur sodales turpis. Netus neque erat eleifend montes senectus posuere cras neque cursus. Posuere mi purus ut amet fringilla ante accumsan. Porttitor sagittis ac penatibus sociosqu posuere eros tempus. Fames sociosqu aptent habitant, adipiscing curae faucibus. Varius ut luctus phasellus nam feugiat feugiat ultricies cras condimentum. Vivamus placerat lacinia ridiculus duis posuere lorem dolor maecenas quis. Nulla lacinia ac arcu vivamus leo ornare. Adipiscing elit mauris himenaeos suscipit adipiscing ac libero cursus. Elementum penatibus accumsan; nisi risus maximus orci dignissim commodo?"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
