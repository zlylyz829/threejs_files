<template>
  <div id="test10">
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

  // const geometry = new THREE.SphereGeometry( 15, 32, 16 );
  // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  // const sphere = new THREE.Mesh( geometry, material );
  // scene.add( sphere );

  // const geometry = new THREE.CylinderGeometry(20, 20, 40, 32);
  // const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  // const cylinder = new THREE.Mesh(geometry, material);
  // scene.add(cylinder);

  // const geometry = new THREE.PlaneGeometry(300, 300);
  // const material = new THREE.MeshBasicMaterial({
  //   color: 0xffff00,
  //   side: THREE.DoubleSide,
  // });
  // const plane = new THREE.Mesh(geometry, material);
  // scene.add(plane);

  const geometry = new THREE.CircleGeometry(100, 50);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
  const circle = new THREE.Mesh(geometry, material);
  scene.add(circle);

  //光源
  // const light = new THREE.AmbientLight(0xcccccc); // 柔和的白光
  // scene.add(light);

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

<style lang="scss" src="./test10.scss"/>