import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

renderer.setSize( 800, 800 );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 0.3, 0.2);
const material = new THREE.MeshBasicMaterial();
const dvd = new THREE.Mesh( geometry, material );
scene.add( dvd );

let xSpeed = 0.009;//THREE.MathUtils.randFloat(0.0085,0.009);
let ySpeed = 0.0035;//THREE.MathUtils.randFloat(0.0085,0.009);

camera.position.z = 1;
dvd.position.set(0,0,0);

updateColor();

function updateColor() {
    dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
}

function dvdSize(){
    dvd.scale.x -= 0.1;
    dvd.scale.y -= 0.1;
}

function animate() {

    dvd.position.x += xSpeed;
    dvd.position.y -= ySpeed;
    if(dvd.position.x > 0.90){
        xSpeed -= 0.009;
        dvdSize();
        updateColor();
    }
    if(dvd.position.y > 0.90){
        ySpeed += 0.009;
        dvdSize();
        updateColor();
    }
    if(dvd.position.x < -0.90){
        xSpeed += 0.009;
        dvdSize();
        updateColor();
    }
    if(dvd.position.y < -0.90){
        ySpeed -= 0.009;
        dvdSize();
        updateColor();
    }
    if(dvd.scale.x <0 && dvd.scale.y <0){
        dvd.visible = false;
    }

    renderer.render( scene, camera );

}