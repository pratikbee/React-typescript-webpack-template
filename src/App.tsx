import './styles.css';
import Image from '../assets/download.png'
import Logo from '../assets/download.svg'
const App = () => { 
    return <><h1>This is App</h1>
        <img src={Image} alt="React Logo" width={300} height={ 200} />
        <img src={Logo} alt="svg" width={300} height={ 200} />
    </>
}

export default App;