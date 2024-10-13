import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
