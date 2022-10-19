import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurantes from './paginas/AdministracaoRestaurantes/AdministracaoRestaurantes';
import FormularioRestaurantes from './paginas/AdministracaoRestaurantes/FormularioRestaurantes';
import PaginaBaseAdmin from './paginas/AdministracaoRestaurantes/PaginaBaseAdmin';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantes" element={<VitrineRestaurantes />} />
        <Route path='/admin/' element={<PaginaBaseAdmin/>}>
          <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
          <Route path="restaurantes/novo" element={<FormularioRestaurantes />} />
          <Route path="restaurantes/:id" element={<FormularioRestaurantes />} />

        </Route>
      </Routes>

    </>

  );
}

export default App;
