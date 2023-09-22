<template>
  <div id="test11">
    <div class="three-dom" ref="threeDom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

onMounted(() => {
  initThree();
});

const threeDom = ref(null);
function initThree() {
  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshPhongMaterial({
    color: 0x00ffff,
    shininess: 100,
    specular: 0xffffff,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  //光源
  const light = new THREE.AmbientLight(0x404040); // 柔和的白光
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(200,0,100);
  scene.add(directionalLight);

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

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", function () {
    renderer.render(scene, camera);
  });
}
</script>

<style lang="scss" src="./test11.scss"/>