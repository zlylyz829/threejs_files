import * as THREE from "three";
//创建场景
const scene = new THREE.Scene();

//创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//设置相机位置
camera.position.set(0, 0, 10);

scene.add(camera);

//添加物体
//创建几何体
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});

//根据几何体和材质创建物体
// const tube = new THREE.

