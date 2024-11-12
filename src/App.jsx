import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <nav aria-label="Main Navigation" role="navigation">
          <ul>
            <li><a href="#women">Women's</a></li>
            <li><a href="#men">Men's</a></li>
            <li><a href="#street">On The Street</a></li>
            <li><a href="#catwalk">The Catwalk</a></li>
            <li><a href="#adwatch">AdWatch</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <h1 className="date"> 11/12/20</h1>
          <h2>On the Street in Brooklyn</h2>
          <img src="blog-image-1.jpg" alt="Women in Red" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Bibendum mollis mattis sociosqu maecenas nulla maximus. Primis consequat magna venenatis iaculis quis tempor viverra mus. Lacus integer aliquet cursus netus vitae fermentum ante commodo. Sociosqu ridiculus amet diam porttitor potenti platea aenean. Felis sed proin diam inceptos duis ullamcorper. Urna curae platea magna sem penatibus molestie eu iaculis. Ridiculus nunc sem orci proin, gravida amet bibendum sapien.</p>
          <a href="#">Continues...</a>
        </article>

        <article>
          <h1 className="date"> 11/11/20</h1>
          <h2>Vintage in Vogue</h2>
          <img src="blog-image-2.jpg" alt="Fashion group" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam mauris adipiscing facilisi consectetur sodales turpis. Netus neque erat eleifend montes senectus posuere cras neque cursus. Posuere mi purus ut amet fringilla ante accumsan. Porttitor sagittis ac penatibus sociosqu posuere eros tempus. Fames sociosqu aptent habitant, adipiscing curae faucibus. Varius ut luctus phasellus nam feugiat feugiat ultricies cras condimentum. Vivamus placerat lacinia ridiculus duis posuere lorem dolor maecenas quis. Nulla lacinia ac arcu vivamus leo ornare. Adipiscing elit mauris himenaeos suscipit adipiscing ac libero cursus. Elementum penatibus accumsan; nisi risus maximus orci dignissim commodo?</p>
          <a href="#">Continues...</a>
        </article>
      </main>

      <footer>
        <nav aria-label="Footer Navigation" role="navigation">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 Fashion Blog</p>
      </footer>
    </div>
  );
}

export default App;
