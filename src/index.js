import { h, app } from "hyperapp";
import simpleDuration from "simple-duration";
/* global h */
const scale = {
  "1M": 1000000,
  "10M": 10000000,
  "100M": 100000000,
  "1B": 1000000000,
  "10B": 10000000000,
  "100B": 100000000000,
  "1T": 1000000000000
};
app({
  init: {
    cookiesPerSec: 4854000
  },
  view: state => (
    <main>
      <input
        type="text"
        onchange={(state, ev) => {
          return {
            ...state,
            cookiesPerSec: parseInt(ev.target.value)
          };
        }}
        value={state.cookiesPerSec}
      />
      <div>
        <div>
          1M: {simpleDuration.stringify(scale["1M"] / state.cookiesPerSec)}
        </div>
        <div>
          10M: {simpleDuration.stringify(scale["10M"] / state.cookiesPerSec)}
        </div>
        <div>
          100M: {simpleDuration.stringify(scale["100M"] / state.cookiesPerSec)}
        </div>
        <div>
          1B: {simpleDuration.stringify(scale["1B"] / state.cookiesPerSec)}
        </div>
        <div>
          10B: {simpleDuration.stringify(scale["10B"] / state.cookiesPerSec)}
        </div>
        <div>
          100B: {simpleDuration.stringify(scale["100B"] / state.cookiesPerSec)}
        </div>
        <div>
          1T: {simpleDuration.stringify(scale["1T"] / state.cookiesPerSec)}
        </div>
      </div>
    </main>
  ),
  node: document.getElementById("app")
});
