import './styles.css'
import Image from '../assets/download.png'
import Logo from '../assets/download.svg'
import jsonData from '../package.json'
const App = () => {
  const name = 'hehe'
  console.log(typeof jsonData)
  console.log(name)
  return (
    <>
      <h1>
        This is App {process.env.NODE_ENV} and {process.env.name}
      </h1>
      <img src={Image} alt="React Logo" width={300} height={200} />
      <img src={Logo} alt="svg" width={300} height={200} />
    </>
  )
}

export default App
