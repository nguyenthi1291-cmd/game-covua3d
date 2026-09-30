import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function createScene(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  container.insertBefore(renderer.domElement, container.firstChild);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f1826);
  scene.fog = new THREE.Fog(0x0f1826, 20, 44);

  // PMREM environment for reflective knight armor and gold trims
  const pm = new THREE.PMREMGenerator(renderer);
  const env = new THREE.Scene();
  const eg = new THREE.SphereGeometry(20, 32, 16);
  const cols = [];
  const pa = eg.attributes.position;
  for (let i = 0; i < pa.count; i++) {
    const y = pa.getY(i) / 20;
    const c = new THREE.Color();
    if (y > 0) c.setRGB(0.25 + y * 0.6, 0.3 + y * 0.6, 0.42 + y * 0.55);
    else c.setRGB(0.16, 0.12, 0.09);
    cols.push(c.r, c.g, c.b);
  }
  eg.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  env.add(new THREE.Mesh(eg, new THREE.MeshBasicMaterial({ side: THREE.BackSide, vertexColors: true })));

  const p1 = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
  p1.position.set(8, 12, 6);
  p1.lookAt(0, 0, 0);
  env.add(p1);

  const p2 = new THREE.Mesh(new THREE.PlaneGeometry(8, 4), new THREE.MeshBasicMaterial({ color: 0xffc070, side: THREE.DoubleSide }));
  p2.position.set(-9, 6, -6);
  p2.lookAt(0, 0, 0);
  env.add(p2);

  scene.environment = pm.fromScene(env, 0.03).texture;

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 10.5, 10.5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI * 0.46;
  controls.minDistance = 4.5;
  controls.maxDistance = 24;
  controls.enablePan = false;

  scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x1a1410, 0.6));

  const sun = new THREE.DirectionalLight(0xfff1d6, 1.3);
  sun.position.set(5, 13, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 40 });
  sun.shadow.bias = -0.0006;
  scene.add(sun);

  const rimL = new THREE.PointLight(0xffc070, 0.7, 30);
  rimL.position.set(-7, 5, -6);
  scene.add(rimL);

  const coolL = new THREE.PointLight(0x7aa0ff, 0.45, 30);
  coolL.position.set(7, 4, -5);
  scene.add(coolL);

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w / h < 1 ? 56 : 42;
    camera.updateProjectionMatrix();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  return {
    renderer,
    scene,
    camera,
    controls,
    sun,
    resize,
    dispose() {
      resizeObserver.disconnect();
      renderer.dispose();
      pm.dispose();
    }
  };
}
