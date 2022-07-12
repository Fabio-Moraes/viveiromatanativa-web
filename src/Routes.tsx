import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Page/Home';
import { Plants } from './Page/Plants';
import {Contacts} from './Page/Contacts';
import {Gallery} from './Page/Gallery';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mudas" element={<Plants />} />
      <Route path="/contatos" element={<Contacts />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="*" element={<h1>Pagina em Desenvolvimento!</h1>} />
    </Routes>
  );
}
