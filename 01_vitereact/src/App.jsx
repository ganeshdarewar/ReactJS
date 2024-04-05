
import Chai from "./chai"
function App() {
  let username = "ganesh"

  return (
  <>{/* { without this empty tag or div jsx doesnt return multiple element} */}
    <Chai></Chai>
    <h2>Hi  {username}</h2>  {/*we {} can add js code because it is evaluted expression it only as it goes into react object*/}
  </>
  )
}

export default App
