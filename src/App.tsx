import '@sadang-new/ui/design-system.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main';
import PlaygroundPage from './pages/playground';
import QueryClientProvider from '@shared/providers/QueryClientProvider';
import SigninPage from '@pages/signin';
import AuthGuard from '@shared/components/AuthGuard';
import Navbar from '@shared/components/Navabr';

function App() {
  return (
    <AuthGuard>
      <QueryClientProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthGuard>
  );
}

export default App;
