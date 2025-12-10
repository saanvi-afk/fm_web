
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  targetIndex: number;
  totalPoints: number;
}

export default function ThreeScene({ targetIndex, totalPoints }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Use refs to store progress to avoid closure staleness in loop
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);

  // Constants
  const MAX_PLAYABLE_DIST = 0.9; // Car stops at 90% of the generated road

  useEffect(() => {
    // Determine target progress based on season index
    const pct = targetIndex / Math.max(totalPoints - 1, 1);
    targetProgressRef.current = pct * MAX_PLAYABLE_DIST;
    
    // Reset to start if moving "backwards" or just to ensure consistent travel
    // logic: always start from 0 for the animation effect as per user request
    progressRef.current = 0;
  }, [targetIndex, totalPoints]);
  
  useEffect(() => {
    if (!mountRef.current) return;

    // --- SETUP ---
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.008); 

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 40, 20); 

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Append to DOM
    mountRef.current.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(50, 100, 50);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 500;
    dirLight.shadow.camera.left = -100;
    dirLight.shadow.camera.right = 100;
    dirLight.shadow.camera.top = 100;
    dirLight.shadow.camera.bottom = -100;
    scene.add(dirLight);

    // --- ROAD GENERATION (Random & Continuous) ---
    const points: THREE.Vector3[] = [];
    const segments = 300; 
    
    for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        // Move primarily along negative Z
        const z = -t * 600; 
        
        // SMOOTHER CURVES to prevent barrier mesh artifacts
        // Reduced frequency multipliers to widen turn radius
        const x = Math.sin(t * Math.PI * 4) * 40 + 
                  Math.cos(t * Math.PI * 2) * 20;
                  
        points.push(new THREE.Vector3(x, 0, z));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    
    // 1. Road Mesh
    const roadGeometry = new THREE.TubeGeometry(curve, 600, 8, 8, false);
    const roadMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x151515, 
        roughness: 0.8,
        side: THREE.DoubleSide 
    });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.receiveShadow = true;
    road.scale.y = 0.05; // Flatten. Radius 8 * 0.05 = 0.4 height from center
    scene.add(road);

    // 2. Curbs 
    const curbGeo = new THREE.TubeGeometry(curve, 600, 8.6, 8, false);
    const curbMat = new THREE.MeshStandardMaterial({ color: 0xcc0000, wireframe: true, transparent: true, opacity: 0.15 });
    const curb = new THREE.Mesh(curbGeo, curbMat);
    curb.scale.y = 0.04;
    curb.position.y = -0.1;
    scene.add(curb);

    // 3. Center Lines
    const lineCount = 100; // Decreased count to create gaps
    const lineGeo = new THREE.PlaneGeometry(0.6, 2); // Decreased length for dashed effect
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lineMesh = new THREE.InstancedMesh(lineGeo, lineMat, lineCount);
    
    const dummy = new THREE.Object3D();
    for (let i = 0; i < lineCount; i++) {
        const t = i / lineCount;
        const pt = curve.getPointAt(t);
        const tangent = curve.getTangentAt(t);
        const angle = Math.atan2(tangent.x, tangent.z);
        
        // Raised to 0.42 to sit ON TOP of the road surface (which is at ~0.4)
        dummy.position.set(pt.x, 0.42, pt.z); 
        dummy.rotation.set(-Math.PI / 2, 0, angle);
        dummy.updateMatrix();
        lineMesh.setMatrixAt(i, dummy.matrix);
    }
    scene.add(lineMesh);

    // 4. Barriers 
    const resolution = 600;
    const curvePoints = curve.getPoints(resolution);
    const leftPoints: THREE.Vector3[] = [];
    const rightPoints: THREE.Vector3[] = [];
    
    for (let i = 0; i < curvePoints.length; i++) {
        const t = i / resolution;
        const pt = curvePoints[i];
        const tangent = curve.getTangentAt(t);
        // Calculate normal manually for flat road to avoid twisting artifacts
        const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
        
        const offset = 9.5; 
        leftPoints.push(pt.clone().add(normal.clone().multiplyScalar(offset)));
        rightPoints.push(pt.clone().add(normal.clone().multiplyScalar(-offset)));
    }

    const leftBarrierCurve = new THREE.CatmullRomCurve3(leftPoints);
    const rightBarrierCurve = new THREE.CatmullRomCurve3(rightPoints);

    // Create Rails
    const railMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.4, metalness: 0.5 });
    const leftRailGeo = new THREE.TubeGeometry(leftBarrierCurve, 400, 0.2, 8, false);
    const rightRailGeo = new THREE.TubeGeometry(rightBarrierCurve, 400, 0.2, 8, false);
    
    const leftRail = new THREE.Mesh(leftRailGeo, railMat);
    const rightRail = new THREE.Mesh(rightRailGeo, railMat);
    leftRail.position.y = 1.0;
    rightRail.position.y = 1.0;
    scene.add(leftRail);
    scene.add(rightRail);

    const lowerRailMat = new THREE.MeshStandardMaterial({ color: 0xdc2626 });
    const leftLowRailGeo = new THREE.TubeGeometry(leftBarrierCurve, 400, 0.2, 8, false);
    const rightLowRailGeo = new THREE.TubeGeometry(rightBarrierCurve, 400, 0.2, 8, false);
    
    const leftLowRail = new THREE.Mesh(leftLowRailGeo, lowerRailMat);
    const rightLowRail = new THREE.Mesh(rightLowRailGeo, lowerRailMat);
    leftLowRail.position.y = 0.5;
    rightLowRail.position.y = 0.5;
    scene.add(leftLowRail);
    scene.add(rightLowRail);

    // Posts
    const postGeo = new THREE.BoxGeometry(0.3, 1.5, 0.3);
    const postMat = new THREE.MeshStandardMaterial({ color: 0x666666 });
    const postCount = 200;
    const postsMesh = new THREE.InstancedMesh(postGeo, postMat, postCount * 2);
    
    for (let i = 0; i < postCount; i++) {
        const t = i / postCount;
        
        // Left Post
        const lPt = leftBarrierCurve.getPointAt(t);
        dummy.position.set(lPt.x, 0.75, lPt.z);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        postsMesh.setMatrixAt(i, dummy.matrix);
        
        // Right Post
        const rPt = rightBarrierCurve.getPointAt(t);
        dummy.position.set(rPt.x, 0.75, rPt.z);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        postsMesh.setMatrixAt(postCount + i, dummy.matrix);
    }
    scene.add(postsMesh);

    // --- CAR MODEL ---
    const carGroup = new THREE.Group();
    
    const redMat = new THREE.MeshStandardMaterial({ 
        color: 0xff0000, 
        emissive: 0x550000,
        emissiveIntensity: 0.4,
        metalness: 0.6, 
        roughness: 0.2 
    });
    const whiteMat = new THREE.MeshStandardMaterial({ 
        color: 0xffffff,
        metalness: 0.8, 
        roughness: 0.2 
    });
    const carbonMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.9 });

    // Body
    const chassisGeo = new THREE.BoxGeometry(1.4, 0.6, 3.5);
    const chassis = new THREE.Mesh(chassisGeo, redMat);
    chassis.position.y = 0.5;
    chassis.castShadow = true;
    carGroup.add(chassis);

    // Center Stripe
    const stripeGeo = new THREE.BoxGeometry(0.4, 0.61, 3.5); 
    const stripe = new THREE.Mesh(stripeGeo, whiteMat);
    stripe.position.y = 0.5;
    carGroup.add(stripe);

    // Nose Cone
    const noseGeo = new THREE.ConeGeometry(0.7, 1.5, 4);
    const nose = new THREE.Mesh(noseGeo, redMat);
    nose.rotation.x = -Math.PI / 2;
    nose.rotation.y = Math.PI / 4;
    nose.position.set(0, 0.5, -2.5);
    carGroup.add(nose);

    // Rear Wing
    const rWingSup = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.6, 0.5), carbonMat);
    rWingSup.position.set(0, 0.8, 1.5);
    carGroup.add(rWingSup);
    const rWing = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.1, 0.8), carbonMat);
    rWing.position.set(0, 1.1, 1.5);
    carGroup.add(rWing);

    // Front Wing
    const fWing = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.1, 0.8), carbonMat);
    fWing.position.set(0, 0.3, -2.8);
    carGroup.add(fWing);

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.6, 32);
    const wheelPositions = [
        { x: -1.6, z: 1.8 }, { x: 1.6, z: 1.8 }, // Rear
        { x: -1.6, z: -1.8 }, { x: 1.6, z: -1.8 } // Front
    ];
    wheelPositions.forEach(pos => {
        const wheel = new THREE.Mesh(wheelGeo, tireMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(pos.x, 0.45, pos.z);
        wheel.castShadow = true;
        carGroup.add(wheel);
    });

    // Cockpit
    const cockpitGeo = new THREE.BoxGeometry(0.7, 0.4, 1.0);
    const cockpit = new THREE.Mesh(cockpitGeo, new THREE.MeshStandardMaterial({ color: 0x000000 }));
    cockpit.position.set(0, 0.8, 0);
    carGroup.add(cockpit);

    // Headlights
    const hlGeo = new THREE.ConeGeometry(0.1, 0.2, 16);
    const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffee });
    [1, -1].forEach(dir => {
        const hl = new THREE.Mesh(hlGeo, hlMat);
        hl.rotation.x = -Math.PI / 2;
        hl.position.set(0.5 * dir, 0.6, -2.0);
        carGroup.add(hl);
        
        const spot = new THREE.SpotLight(0xffffee, 5, 30, 0.5, 0.5, 1);
        spot.position.set(0.5 * dir, 0.6, -2.0);
        spot.target.position.set(0.5 * dir, 0, -10);
        carGroup.add(spot);
        carGroup.add(spot.target);
    });

    scene.add(carGroup);

    // --- ANIMATION ---
    const clock = new THREE.Clock();
    let requestID: number;

    const animate = () => {
      requestID = requestAnimationFrame(animate);

      // Animation Logic
      const speed = 0.002; 
      
      if (progressRef.current < targetProgressRef.current) {
          progressRef.current += speed;
          if (progressRef.current > targetProgressRef.current) {
              progressRef.current = targetProgressRef.current;
          }
      }

      const t = progressRef.current;
      const safeT = Math.max(0, Math.min(0.99, t));

      // Get Position
      const pos = curve.getPointAt(safeT);
      const lookAtPos = curve.getPointAt(Math.min(safeT + 0.005, 1));
      
      // Update Car
      carGroup.position.copy(pos);
      carGroup.lookAt(lookAtPos);
      carGroup.rotateY(Math.PI); // Correct model orientation

      // Update Camera
      const targetCamPos = new THREE.Vector3(pos.x, 30, pos.z);
      camera.position.lerp(targetCamPos, 0.1);
      camera.lookAt(pos.x, 0, pos.z);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const handleResize = () => {
        if (!mountRef.current) return;
        const w = mountRef.current.clientWidth;
        const h = mountRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    
    // Robust resize listener
    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(mountRef.current);

    // Cleanup
    return () => {
      cancelAnimationFrame(requestID);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
    };
  }, []); // Run once on mount

  return <div ref={mountRef} className="w-full h-full bg-black/90" />;
}
