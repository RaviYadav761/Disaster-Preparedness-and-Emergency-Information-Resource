import * as THREE from "https://unpkg.com/three@0.143.0/build/three.module.js";

const canvas = document.querySelector(".earth-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true
});

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(2.7, 64, 64),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("assets/earth.png")
    })
);

scene.add(earth);
camera.position.z = 9;

function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    earth.position.x = width > 700 ? 2.2 : 0;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
}

function animate() {
    earth.rotation.y += 0.0015;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

window.addEventListener("resize", resize);
resize();
animate();
