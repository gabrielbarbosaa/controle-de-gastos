import React from 'react';
import { 
  Aside,
  Header 
} from './components';
import * as S from './style';
import MantineProvider from './styles/GlobalStyles';
import { BrowserRouter as Router} from "react-router-dom";
import AuthRoutes from './routes/Auth.routes';
import { QueryClientProvider  } from '@tanstack/react-query';
import { queryClient } from './services';
import PublicRoutes from './routes/Public.routes';
import { AuthProvider } from './context';

const App: React.FC = () => {
  let token = localStorage.getItem("token");

  return (
    <QueryClientProvider client={queryClient} >
      <MantineProvider>
        <AuthProvider>
          <Router>
            {/* <S.Container>
              <Header />
              <Aside />
              <S.Content>
                <AuthRoutes/>
              </S.Content>
            </S.Container> */}

            <PublicRoutes />
          </Router>
        </AuthProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
