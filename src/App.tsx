import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurantes from './paginas/AdministracaoRestaurantes/AdministracaoRestaurantes';
import FormularioRestaurantes from './paginas/AdministracaoRestaurantes/FormularioRestaurantes';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdministracaoRestaurantes />} />
      <Route path="/admin/restaurantes/novo" element={<FormularioRestaurantes />} />
    </Routes>

    </>

  );
}

export default App;
