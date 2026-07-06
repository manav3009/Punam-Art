// Punam Henna Atelier - Three.js 3D Backdrop Scene

let scene, camera, renderer;
let mandalaGroup, coneGroup, particlesGeometry, particlesMesh;
let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;

const clock = new THREE.Clock();

initThreeScene();

function initThreeScene() {
  const container = document.getElementById("three-canvas-container");
  if (!container) return;

  // 1. Create Scene & Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.z = 4.5;

  // 2. WebGL Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // 3. Lights
  const ambientLight = new THREE.AmbientLight(0xF4E8D7, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xF4E8D7, 1.8);
  dirLight.position.set(5, 5, 5);
  scene.add(dirLight);

  const backlight1 = new THREE.PointLight(0xE0C097, 1.2, 15);
  backlight1.position.set(-5, -3, -2);
  scene.add(backlight1);

  const backlight2 = new THREE.PointLight(0xE0C097, 1.5, 15);
  backlight2.position.set(5, 2, 2);
  scene.add(backlight2);

  // 4. Materials
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xE0C097,
    roughness: 0.15,
    metalness: 0.9,
    side: THREE.DoubleSide
  });

  const coneBodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x3D121B, // Wine/Burgundy color
    roughness: 0.1,
    metalness: 0.8
  });

  // 5. Create 3D Mandala Wireframe Group
  mandalaGroup = new THREE.Group();
  mandalaGroup.position.set(-1.2, 0, 0); // Positioned slightly left to balance text on right
  scene.add(mandalaGroup);

  // Center Core
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), goldMaterial);
  mandalaGroup.add(core);

  // Concentric Rings
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.02, 8, 48), goldMaterial);
  ring1.rotation.x = Math.PI / 2;
  mandalaGroup.add(ring1);

  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.025, 8, 64), goldMaterial);
  ring2.rotation.x = Math.PI / 2;
  mandalaGroup.add(ring2);

  const ring3 = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.03, 8, 80), goldMaterial);
  ring3.rotation.x = Math.PI / 2;
  mandalaGroup.add(ring3);

  // Spoke spokes
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI * 2) / 12;
    const spokeGroup = new THREE.Group();
    spokeGroup.rotation.z = angle;

    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.05, 0.02), goldMaterial);
    bar.position.x = 0.4;
    spokeGroup.add(bar);

    const diamond = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.05), goldMaterial);
    diamond.position.x = 0.6;
    diamond.rotation.z = Math.PI / 4;
    spokeGroup.add(diamond);

    mandalaGroup.add(spokeGroup);
  }

  // Lotus Petals (Cones)
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI * 2) / 16 + Math.PI / 16;
    const spokeGroup = new THREE.Group();
    spokeGroup.rotation.z = angle;

    const petal = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.4, 4), goldMaterial);
    petal.position.x = 0.9;
    petal.rotation.z = -Math.PI / 2;
    spokeGroup.add(petal);

    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), goldMaterial);
    bulb.position.x = 1.2;
    spokeGroup.add(bulb);

    mandalaGroup.add(spokeGroup);
  }

  // Outer circles
  for (let i = 0; i < 24; i++) {
    const angle = (i * Math.PI * 2) / 24;
    const spokeGroup = new THREE.Group();
    spokeGroup.rotation.z = angle;

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.015, 6, 16), goldMaterial);
    ring.position.x = 1.5;
    spokeGroup.add(ring);

    const pin = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), goldMaterial);
    pin.position.x = 1.8;
    spokeGroup.add(pin);

    mandalaGroup.add(spokeGroup);
  }

  // Scale Mandala down on mobile/tablet viewports
  if (window.innerWidth < 768) {
    mandalaGroup.scale.set(0.65, 0.65, 0.65);
    mandalaGroup.position.set(0, 0.8, 0); // Positioned above text on mobile
  } else if (window.innerWidth < 1024) {
    mandalaGroup.scale.set(0.75, 0.75, 0.75);
    mandalaGroup.position.set(0, 0.9, 0);
  }

  // 6. Create 3D Mehendi Cone Group
  coneGroup = new THREE.Group();
  coneGroup.position.set(2.5, 0, 0); // Placed on right side
  scene.add(coneGroup);

  const mainCone = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.8, 32), coneBodyMaterial);
  mainCone.rotation.z = Math.PI / 1.2;
  coneGroup.add(mainCone);

  const goldTip = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.3, 16), goldMaterial);
  goldTip.position.set(-0.7, -0.4, 0);
  goldTip.rotation.z = Math.PI / 1.2;
  coneGroup.add(goldTip);

  const goldCap = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.28, 0.15, 32), goldMaterial);
  goldCap.position.set(0.7, 0.4, 0);
  goldCap.rotation.z = Math.PI / 1.2;
  coneGroup.add(goldCap);

  const wrapRibbon = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 8, 32), goldMaterial);
  wrapRibbon.rotation.z = Math.PI / 1.2;
  coneGroup.add(wrapRibbon);

  // Hide or reposition cone on small displays to keep text readable
  if (window.innerWidth < 1024) {
    coneGroup.visible = false;
  }

  // 7. Floating Light Sparkles (Particles)
  const particlesCount = 80;
  particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particlesCount * 3);
  const speeds = new Float32Array(particlesCount);

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8; // X
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6; // Y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4; // Z
    speeds[i] = Math.random() * 0.2 + 0.1; // Speed
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0xE0C097,
    size: 0.035,
    transparent: true,
    opacity: 0.6,
    depthWrite: false
  });

  particlesMesh = new THREE.Points(particlesGeometry, pointsMaterial);
  scene.add(particlesMesh);

  // 8. Event Listeners
  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove);

  // Start animation loop
  animate();
}

function onWindowResize() {
  const container = document.getElementById("three-canvas-container");
  if (!container) return;

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);

  // Reposition elements based on size
  if (window.innerWidth < 768) {
    mandalaGroup.scale.set(0.65, 0.65, 0.65);
    mandalaGroup.position.set(0, 0.8, 0);
    coneGroup.visible = false;
  } else if (window.innerWidth < 1024) {
    mandalaGroup.scale.set(0.75, 0.75, 0.75);
    mandalaGroup.position.set(0, 0.9, 0);
    coneGroup.visible = false;
  } else {
    mandalaGroup.scale.set(0.9, 0.9, 0.9);
    mandalaGroup.position.set(-1.2, 0, 0);
    coneGroup.scale.set(0.85, 0.85, 0.85);
    coneGroup.position.set(2.5, 0, 0);
    coneGroup.visible = true;
  }
}

function onMouseMove(e) {
  // Normalize coordinates (-1 to 1)
  targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
  targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
}

// 9. Frame Animation loop
function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();

  // Slow Mandala Rotations
  if (mandalaGroup) {
    mandalaGroup.rotation.z = elapsed * 0.03; // Simple rotation
    mandalaGroup.rotation.y = Math.sin(elapsed * 0.5) * 0.15;
    mandalaGroup.rotation.x = Math.cos(elapsed * 0.4) * 0.1;
  }

  // Floating Mehendi Cone movements
  if (coneGroup && coneGroup.visible) {
    coneGroup.position.y = Math.sin(elapsed * 1.2) * 0.15;
    coneGroup.rotation.x = 0.5 + Math.sin(elapsed * 0.5) * 0.1;
    coneGroup.rotation.y = elapsed * 0.3;
    coneGroup.rotation.z = Math.cos(elapsed * 0.4) * 0.15;
  }

  // Floating Particles vertical drift
  if (particlesGeometry) {
    const positions = particlesGeometry.attributes.position.array;
    for (let i = 0; i < positions.length / 3; i++) {
      positions[i * 3 + 1] += 0.005; // Y drift speed
      // Reset if offscreen top
      if (positions[i * 3 + 1] > 3) {
        positions[i * 3 + 1] = -3;
        positions[i * 3] = (Math.random() - 0.5) * 8;
      }
    }
    particlesGeometry.attributes.position.needsUpdate = true;
    particlesMesh.rotation.y += 0.001;
  }

  // Smooth camera parallax matching cursor
  mouseX += (targetMouseX - mouseX) * 0.05;
  mouseY += (targetMouseY - mouseY) * 0.05;

  camera.position.x = mouseX * 0.6;
  camera.position.y = mouseY * 0.6;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}
