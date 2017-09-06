let width = window.innerWidth
let height = window.innerHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 )

let renderer = new THREE.WebGLRenderer()
renderer.setSize( width, height )
document.body.appendChild( renderer.domElement )

window.addEventListener('resize', () => {
  let width = window.innerWidth
  let height = window.innerHeight
  renderer.setSize( width, height )
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})

controls = new THREE.OrbitControls( camera, renderer.domElement )

let geometry = new THREE.BoxGeometry( 5, 5, 5 )
let geometry2 = new THREE.BoxGeometry( 2, 2, 2 )
let cubeMaterials = [
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/1.jpg'), side: THREE.DoubleSide }), // RIGHT
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/1.jpg'), side: THREE.DoubleSide }), // LEFT
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/1.jpg'), side: THREE.DoubleSide }), // TOP
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/1.jpg'), side: THREE.DoubleSide }), // BOTTOM
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/1.jpg'), side: THREE.DoubleSide }), // FRONT
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/1.jpg'), side: THREE.DoubleSide }), // BACK
]
let material = new THREE.MeshFaceMaterial( cubeMaterials )
let cube = new THREE.Mesh( geometry, material )
let cube2 = new THREE.Mesh( geometry2, material )
scene.add( cube )
scene.add( cube2 )

camera.position.z = 3

let ambientLight = new THREE.AmbientLight( 0xFFFFFF, 3.0 )
scene.add( ambientLight )

let update = () => {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.005
  cube2.rotation.x += 0.05
  cube2.rotation.y += 0.10
}

let render = () => {
  renderer.render( scene, camera )
}

let GameLoop = () => {
  requestAnimationFrame( GameLoop )

  update()
  render()
}

GameLoop()
