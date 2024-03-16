import './App.css';

function App() {
  return (
    <div className="App">
      {/*
      Build alınca elimizde html css ve js kodları gelir statik olan görselleri direkt public klasörü altında tutmalıyız ona bir değer ataması yapıyor build alınca ve direkt olarak 
      sen hangi klasörde olursa olsun bir resme ulaşmak için /koyup direkt çağırabilirisin.
      */}
      <img src="/logo192.png" alt='test'/>
      {/* burda ben app içindeyim ama direkt kullanabildim resmi */}
    </div>
  );
}

export default App;
