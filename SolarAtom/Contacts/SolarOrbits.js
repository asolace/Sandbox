import React from 'react'

const SolarOrbits = () => {
  return (
    <div className="scene">
      <ul className="system ">
        <li className="orbit top-most-orbit">
          <h1 style={{color: "#FDE528"}} className="sphere ">Sun</h1>

          <ul className="system ">
            <li className="orbit ">
              <h2 style={{color: "#C1B4AC"}} className="sphere ">Mercury</h2>
            </li>

            <li className="orbit ">
              <h2 style={{color: "#F2D299"}} className="sphere ">Venus</h2>
            </li>

            <li className="orbit ">
              <h2 style={{color: "#05f"}} className="sphere ">Earth</h2>
              <ol className="system ">
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Moon</h3>
                </li>
              </ol>
            </li>

            <li className="orbit ">
              <h2 style={{color: "#E67E5A"}} className="sphere ">Mars</h2>
              <ol className="system ">
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Phobos</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Deimos</h3>
                </li>
              </ol>
            </li>

            <li className="orbit ">
              <h2 style={{color: "#C5AA96"}} className="sphere ">Jupiter</h2>
              <ol className="system ">
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Io</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Europa</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Ganymede</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Callisto</h3>
                </li>
              </ol>
            </li>

            <li className="orbit ">
              <h2 style={{color: "#AF9D8E"}} className="sphere ">Saturn</h2>
              <ol className="system ">
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Mimas</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Enceladus</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Tethys</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Dione</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Rhea</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Titan</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Iapetus</h3>
                </li>
              </ol>
            </li>

            <li className="orbit ">
              <h2 style={{color: "#C2E8EA"}} className="sphere ">Uranus</h2>
              <ol className="system ">
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Miranda</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Ariel</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Umbriel</h3>
                </li>
                  <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Titania</h3>
                </li>
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Oberon</h3>
                </li>
              </ol>
            </li>

            <li className="orbit ">
              <h2 style={{color: "#5C92F0"}} className="sphere ">Neptune</h2>
              <ol className="system ">
                <li className="orbit ">
                  <h3 style={{color: "#BDC5C7"}} className="sphere ">Triton</h3>
                </li>
              </ol>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default SolarOrbits
