<template>
  <div id="test8" ref="test8"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";

onMounted(() => {
  initThree();
});

const test8 = ref(null);

function initThree() {
  const scene = new THREE.Scene();

  const num = 2000;
  for (let i = 0; i < num; i++) {
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.7,
    });
    const cube = new THREE.Mesh(geometry, material);
    const x = parseInt(Math.random() * 300);
    const y = parseInt(Math.random() * 300);
    const z = parseInt(Math.random() * 300);
    cube.position.set(x, y, z);
    scene.add(cube);
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(400, 400, 400);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.render(scene, camera);

  test8.value.appendChild(renderer.domElement);
  const stats = new Stats();
  document.body.appendChild(stats.domElement);

  function animationCube() {
    stats.update();
    // cube.rotateY(0.01);
    requestAnimationFrame(animationCube);
    renderer.render(scene, camera);
  }
  animationCube();

}
</script>

<style lang="scss" src="./test8.scss"/>