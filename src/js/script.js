import Particle from './lib/particle';
import Fireworks1 from './lib/fireworks1';
import Fireworks2 from './lib/fireworks2';
import $ from 'jquery';

if (document.getElementsByClassName("canvas-fireworks1")[0]) {
  Fireworks1();
}

if (document.getElementsByClassName("canvas-fireworks2")[0]) {
  Fireworks2();
}
