import MetaTags from "react-meta-tags";
import Typography from "typography";
import "./App.scss";
import "./Fonts.css";

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.5,
  scaleRatio: 2.25,
  headerFontFamily: ["Mono"],
  bodyFontFamily: ["Minipax", "serif"],
  // See below for the full list of options.
});

function App() {
  typography.injectStyles();

  return (
    <div className="App layout">
      <div class="image-fixed">
        <img
          src="/astronomer.jpg"
          alt="Johannes Vermeer, The Astronomer"
        />
      </div>

      <main>
        <div class="top">
          <blockquote>
            <p>
              What is currently happening is a mutation of our
              experiences, perceptions, values, and modes of behavior,
              <h1 className="rhythm-xl">
              In the next century, software will spell the end of the expert class and the division of skilled labor. Pilgrim is a design research lab investigating a new industrial revolution, driven by new computers, tools, and forms of media.
              </h1>{" "}
              a mutation of our being-in-the-world.<span>”</span>
            </p>
            <cite>
              Vilém Flusser, "Into the Universe of Technical Images"
            </cite>
          </blockquote>
          {/* <div class="rule mt-1 mb-1"></div> */}
        </div>
        {/* <div class="center">
          <div class="divider"></div>
        </div> */}
        <div class="bottom">
          <p className="rhythm-m">
            Here are some things we are interested in:
          </p>
          <ul>
            <li><strong>The technological evolution of writing systems</strong> — The medium of written language is entering a phase of rapid evolution in form and semantic capability, propelled by artificial intelligence and a boom in knowledge work and programming.</li>
            <li><strong>Design tools for modeling complex systems</strong> — There really aren't any great tools for software design. There's extremely high utility in creating tools for thinking with dynamic social systems, feedback mechanisms, and constraints.</li>
            <li><strong>Software for experts with incredibly low barriers to entry</strong> — Software has introduced new means of production around the world, yet so many jobs remain highly specialized and tightly gatekept. As access to advanced computing capabilities increases around the world, we'll see skilled labor proliferate.</li>
            <li><strong>Primitive protocols for interoperability in software</strong> — Open and interconnected software ecosystems are key to transforming the technical ability of the masses. The future of digital tools will involve a highly flexible, shared protocol for information storage and transfer.</li>
          </ul>
        </div>
      </main>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/pilgrim_inc">Twitter</a>
            </li>
            <li>
              <a href="https://form.substack.com/subscribe">
                Newsletter
              </a>
            </li>
          </ul>
        </nav>
      </footer>
      {/* <Helmet>
        <TypographyStyle typography={typography} />
      </Helmet> */}
      {/* <main> */}

      {/* </main> */}
      {/* <aside> */}
      {/* <div class="canvas">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Frame />

            <ambientLight intensity={0.1} shadow color="blue" />

            <directionalLight
              castShadow
              position={[2.5, 8, 5]}
              intensity={0.6}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div> */}
      {/* </aside> */}
    </div>
  );
}

export default App;
