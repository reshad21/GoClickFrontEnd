import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeContext>
        <Toaster />
        <RouterProvider router={router} />
      </ThemeContext>
    </>
  )
}

export default App
