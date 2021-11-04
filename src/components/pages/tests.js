import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function spinningCube() {
  // === THREE.JS CODE START ===
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
  // === THREE.JS EXAMPLE CODE END ===
}

function beep() {
  return 'beep';
}

var clicked = false;

export function myFunc() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1);

  var material = new THREE.MeshBasicMaterial({ color: 'green' });
  var material2 = new THREE.MeshBasicMaterial({ color: 'yellow' });

  var cube = new THREE.Mesh(geometry, material);
  var cube2 = new THREE.Mesh(geometry, material2);

  // cube2.position = (0, 0, 1);

  scene.add(cube);
  scene.add(cube2);
  // scene.add(mesh);

  camera.position.z = 5;

  var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube2.rotation.x += 0.02;
    cube2.rotation.y += 0.02;

    // camera.position.z += 0.01;
    document.body.onkeyup = function (e) {
      console.log(e.keyCode);

      if (e.keyCode == 82) {
        //r
        console.log('reset');
        camera.position.z = 5;
        camera.position.x = 0;
        // camera.position.y = 0;
      } else if (e.keyCode == 87) {
        camera.position.z -= 0.5;
      } else if (e.keyCode == 83) {
        camera.position.z += 0.5;
      } else if (e.keyCode == 65) {
        camera.position.x -= 0.5;
      } else if (e.keyCode == 68) {
        camera.position.x += 0.5;
      }
    };

    renderer.render(scene, camera);
  };
  animate();
}
