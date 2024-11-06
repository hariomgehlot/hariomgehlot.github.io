//@ts-ignore
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
//@ts-ignore
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 20;

const scene = new THREE.Scene();
let bird;
const loader = new GLTFLoader();
loader.load(
  "/phoenix_bird.glb",
  function (gltf: any) {
    bird = gltf.scene;
    scene.add(bird);
    reRender3D();
  },
  function (progress: any) {
    console.log(progress);
  },
  function (error: any) {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D")?.appendChild(renderer.domElement);
const reRender3D = () => {
  requestAnimationFrame(reRender3D);
  renderer.render(scene, camera);
};

//light
const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);
reRender3D();
