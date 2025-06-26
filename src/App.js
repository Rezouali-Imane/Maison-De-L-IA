import './App.css';
import PixelButton  from './components/PixelButton';

function App() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-black">
      <h1 className=" text-white text-3xl font-pixel">Tailwind fonctionne !</h1>
      <PixelButton  className="font-pixel text-white text-xl" onClick={() => alert('Clicked!')}>
        SIGNUP
      </PixelButton>
    </div>
  );
}

export default App;
