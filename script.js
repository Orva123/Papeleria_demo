particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#000000" }, // Puntos negros para el minimalismo
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2 }, // Muy sutil para no cansar la vista
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.1,
      "width": 1
    },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, // Se conectan al pasar el mouse
      "onclick": { "enable": true, "mode": "push" }
    }
  },
  "retina_detect": true
});