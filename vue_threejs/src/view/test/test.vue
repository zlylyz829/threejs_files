<template>
  <div id="test">
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
  const width = 800;
  const height = 500;
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 3000);
  camera.position.set(400, 400, 400);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  const geometry = new THREE.BoxGeometry(200, 200, 200);
  const material = new THREE.MeshLambertMaterial({
    color: 0xcccccc,
    // transparent: true,
    // opacity: 0.3,
  });

  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  //光源
  const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0.1);
  pointLight.position.set(200, 200, 200);
  scene.add(pointLight);
  
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
  scene.add(pointLightHelper);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 150, 0);
  scene.add(directionalLight);

  
  const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);
  scene.add(directionalLightHelper);


  const axesHelper = new THREE.AxesHelper(500);
  scene.add(axesHelper);

  const renderer = new THREE.WebGLRenderer({ alpha: true, precision: "highp" });
  renderer.shadowMap.enabled = true;
  renderer.setSize(width, height);
  //   renderer.render(scene, camera);

  const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
  threeDom.value.appendChild(renderer.domElement);

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();
}
</script>

<style lang="scss" src="./test.scss"/>