import {
  AdaptiveDpr,
  AdaptiveEvents,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import Frame from "./Frame";
import { TypographyStyle } from "react-typography";
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
      <Helmet>
        <title>Pilgrim — Design for the Frontier</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pilgrim_inc" />
        <meta name="twitter:creator" content="@theflowingsky" />
        <meta
          name="twitter:title"
          content="Pilgrim — For the Frontier"
        />
        <meta
          name="twitter:description"
          content="Pilgrim is a research practice for the frontier. We use design to investigate the evolution of social reality."
        />
        <meta
          name="twitter:image"
          content="https://pilgrim.to/social-image.jpg"
        />

        <link
          rel="prefetch"
          href="/fonts/Compagnon-Light.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="prefetch"
          href="/fonts/Compagnon-Roman.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="prefetch"
          href="/fonts/Compagnon-Bold.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="prefetch"
          href="/fonts/Compagnon-Medium.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />

        <link
          rel="prefetch"
          href="/fonts/Minipax-Regular.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="prefetch"
          href="/fonts/Minipax-Medium.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="prefetch"
          href="/fonts/Minipax-SemiBold.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="prefetch"
          href="/fonts/Minipax-Bold.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />

        <link
          rel="prefetch"
          href="/fonts/Mono.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />

        <link
          rel="prefetch"
          href="/fonts/Steps-Mono-Mono.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="prefetch"
          href="/fonts/Steps-Mono-Thin.woff2"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
        />

        <link
          rel="shortcut icon"
          href="/favicon.png"
          type="image/x-icon"
        />
      </Helmet>

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
                <span>Pilgrim</span> is a research practice for the
                frontier. We use design to investigate and provoke the
                evolution of social reality.
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
            We are currently investigating post-disciplinary political
            economies, through the design of novel software systems
            for intuitive reasoning and systems awareness.
          </p>
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
