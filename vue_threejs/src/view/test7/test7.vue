<template>
  <div id="test7" ref="test7">

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from  'three/addons/libs/stats.module.js'

onMounted(() => {
  initThree();
});

const test7 = ref(null);

function initThree() {
  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    // transparent: true,
    // opacity: 0.7,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  const axesHelper = new THREE.AxesHelper(500);
  scene.add(axesHelper);

  const light = new THREE.AmbientLight(0x404040); // 柔和的白光
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
  directionalLight.position.set(0, 200, 0);
  directionalLight.target = cube;
  scene.add(directionalLight);

  const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
  scene.add(helper);

  const width = window.innerWidth;
  const height = window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(400, 400, 400);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.render(scene, camera);

  test7.value.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", function () {
    // renderer.render(scene, camera);
  });

  
  const clock = new THREE.Clock();
  const stats = new Stats();
  document.body.appendChild(stats.domElement);
  function animationCube() {
    // console.log(`时间间隔${clock.getDelta() * 1000}毫秒`)
    stats.update();
    cube.rotateY(0.01);
    requestAnimationFrame(animationCube);
    renderer.render(scene, camera);
  }
  animationCube();

  window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
}


</script>

<style lang="scss" src="./test7.scss"/>