import Greeting from './components/Greeting';
import ProductList from './components/ProductList';
import Mahasiswa from './components/Mahasiswa';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <h1>React Frontend - Pertemuan 9</h1>
      <Greeting name="Mahasiswa" />
      <ProductList />
      <Mahasiswa nama="Yogi" npm="3124522003" prodi="Teknologi Rekayasa Internet" />
 <PostList />
    </div>
  );
}

export default App;
