import { createSignal, type Component, Show } from "solid-js";
import CSV from "./csv";

import "./index.css";

const App: Component = () => {
  const [section, setSection] = createSignal<"data" | "image">("data");

  return (
    <>
      <header id="header-app">
        <h1>Teste de Fertilité</h1>
      </header>
      <main id="main-app">
        <section class="choose">
          <button onClick={() => setSection((section) => (section = "image"))}>
            Faire une analyse par image
          </button>
          <button onClick={() => setSection((section) => (section = "data"))}>
            Faire une analyse par données
          </button>
        </section>
        <Show when={section() == "data"}>
          <CSV />
        </Show>
      </main>
    </>
  );
};

export default App;
