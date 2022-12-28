<script>
import Simulation from '/src/scene/simulation.js';

export default {
  mounted () {
    const canvas = document.querySelector('#scene-viewport');
    const simulation = new Simulation(canvas);
    simulation.init();
  }
};
</script>

<template>
    <canvas id="scene-viewport"></canvas>
</template>

