import Navbar from './Components/Navbar';
import { publicRoute } from './routes/publicRoute';
import { Route, Routes } from 'react-router-dom';
import RequiredAuth from './Authentication/RequiredAuth';
import { privateRoute } from './routes/privateRoute';
import RequiredAdmin from './Authentication/RequiredAdmin';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddService from './Pages/Dashboard/AddService';
import AddAdmin from './Pages/Dashboard/AddAdmin';

function App() {
  return (
    <div >
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route element={<RequiredAuth />}>
            {privateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          <Route element={<RequiredAdmin />}>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}>
              <Route index path='add-service' element={<AddService />}></Route>
              <Route path='add-admin' element={<AddAdmin />}></Route>
            </Route>
          </Route>

        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
