<template>
  <div id="test2">
    <div class="three-dom" ref="threeDom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

onMounted(() => {
  initThree();
});

const threeDom = ref(null);
function initThree() {
  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.3,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  //光源
  const light = new THREE.PointLight(0xff0000, 1, 100);
  light.position.set(500, 500, 500);
  scene.add(light);

  const axesHelper = new THREE.AxesHelper(500);
  scene.add(axesHelper);

  

  const width = 800;
  const height = 500;
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(400, 400, 400);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.render(scene, camera);

  threeDom.value.appendChild(renderer.domElement);

  const controls = new OrbitControls( camera, renderer.domElement );
  controls.addEventListener('change', function(){
    renderer.render(scene, camera);
  })
}
</script>

<style lang="scss" src="./test2.scss"/>