import { useEffect } from "react";
import "./ParticlesBackground.css"; 

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 47,
            "density": {
              "enable": true,
              "value_area": 710.2328774690454
            }
          },
          "color": { "value": "#ffffff" },
          "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" },
            "polygon": { "nb_sides": 5 },
            "image": { "src": "img/github.svg", "width": 100, "height": 100 }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
          },
          "size": {
            "value": 2.5,
            "random": true,
            "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "repulse" },
            "resize": true
          },
          "modes": {
            "grab": { "distance": 155.84415584415586, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
            "repulse": { "distance": 119.88011988011989, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
          }
        },
        "retina_detect": true
      });
    }

    // If you want to use stats.js for debugging particle count, you can add that code here.
    // For production, you might remove it.
    let count_particles, stats, update;
    if (window.Stats) {
      stats = new window.Stats();
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector('.js-count-particles');
      update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom &&
            window.pJSDom[0] &&
            window.pJSDom[0].pJS &&
            window.pJSDom[0].pJS.particles &&
            window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
  }, []);

  return (
    <>
      <div id="particles-js"></div>
    </>
  );
};

export default ParticlesBackground;