<template>
  <div id="test9" ref="test9"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";

onMounted(() => {
  initThree();
});

const test9 = ref(null);

function initThree() {
  const scene = new THREE.Scene();

  const light = new THREE.AmbientLight(0xffffff); // 柔和的白光
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
  directionalLight.position.set(-1000, -1000, 0);
  scene.add(directionalLight);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const geometry = new THREE.BoxGeometry(50, 50, 50);
      const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(i * 100, 0, j * 100);
      scene.add(mesh);

      // directionalLight.target = mesh;
    }
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 8000);
  camera.position.set(1000, 1000, 1000);
  camera.lookAt(500, 0, 500);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.render(scene, camera);

  test9.value.appendChild(renderer.domElement);

  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.target.set(500, 0, 500);
  orbitControls.update();
  orbitControls.addEventListener("change", function () {
    renderer.render(scene, camera);
  });
}
</script>

<style lang="scss" src="./test9.scss"/>