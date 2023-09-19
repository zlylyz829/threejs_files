import * as THREE from "three";
//创建场景
const scene = new THREE.Scene();

//创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//设置相机位置
camera.position.x = 5;
camera.position.z = 5;
camera.position.set(0, 0, 10);

scene.add(camera);

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

//添加物体
//创建几何体
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

const renderer = new THREE.WebGLRenderer();
const width = 800; //宽度
const height = 500; //高度
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.render(scene, camera); //执行渲染操作
document.body.appendChild(renderer.domElement);

