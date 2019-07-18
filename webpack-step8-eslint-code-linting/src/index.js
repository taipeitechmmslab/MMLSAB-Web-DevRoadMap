import search from "./js/search";
import "bootstrap";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

search();

// Needed for Hot Module Replacement
if (typeof module.hot !== "undefined") { // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
}
