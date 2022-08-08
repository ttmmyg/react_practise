import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { Page1 } from '../components/Page1';
import { Page2 } from '../components/Page2';
import { Page1DetailA } from '../components/Page1DetailA';
import { Page1DetailB } from '../components/Page1DetailB';

export const Router = () => {
    return(
        <Routes>
        <Route index element={<Home />} />
        <Route path='Page1/*' element={<Page1 />}>
          <Route path='detaila' element={<Page1DetailA />} />
          <Route path='detailb' element={<Page1DetailB />} />
        </Route>
        <Route path='/Page2' element={<Page2 />} />
      </Routes>
    );
};