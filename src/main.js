import { h } from 'sinuous';
import { observable, computed, cleanup } from 'sinuous/observable';
import { Scene, PerspectiveCamera, DirectionalLight, Mesh, box } from './sinuous-three.js';

const counts = [20, 100, 200, 500, 1000, 2000, 10000];
const count = observable(counts[0]);
const random = () => Math.random() * 360;
const frames = observable(Array(30).fill(0)); // for smoothing out FPS counter

const boxes = computed(() => Array(count()).fill().map(() =>
  observable([random(), random(), random()])));

const fps = computed(() =>
  frames().reduce((total, frame) => total + frame) / frames().length);

function App() {
  let last = Date.now();
  let frame = requestAnimationFrame(function loop() {
    frame = requestAnimationFrame(loop);

    boxes().forEach(box => {
      const b = box();
      box([
        b[0] + 0.01,
        b[1] + 0.01,
        b[2] + 0.01
      ]);
    });

    const now = Date.now();
    const elapsed = now - last;
    frames().shift();
    frames()[frames().length] = 1000 / elapsed;
    frames(frames());

    last = now;
  });

  cleanup(() => cancelAnimationFrame(frame));

  return html`
    <main>
      <${Scene}>
        <${PerspectiveCamera} location=${[0, 0, 3.2]} />
        <${DirectionalLight} direction=${[-5, 0, -10]} />
        ${() => boxes().map((r) =>
          html`<${Mesh} geometry=${box()} rotation=${r} />`)}
      </${Scene}>

      <div class="controls">
        <label>
          Amount
          <select onchange=${(e) => count(parseInt(e.target.value))}>
            ${counts.map(count => html`<option>${count}</option>`)}
          </select>
        </label>
<!--        <label>
          ${count}
          <input type=range oninput=${(e) => count(parseInt(e.target.value))}
            min=20 max=2000 step=1>
        </label> -->
      </div>

      <div class="info">
        <p><a href="https://github.com/luwes/sinuous-three-boxes">
          github.com/luwes/sinuous-three-boxes
        </a></p>
        FPS ${() => Math.round(fps())}
      </div>
    </main>
  `;
}

document.body.append(App());
