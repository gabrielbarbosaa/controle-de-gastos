import React from 'react';
import { 
  Aside,
  Header 
} from './components';
import * as S from './style';
import MantineProvider from './styles/GlobalStyles';
import { BrowserRouter as Router} from "react-router-dom";
import AuthRoutes from './routes/AuthRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { QueryClientProvider  } from '@tanstack/react-query';
import { queryClient } from './services';

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <MantineProvider>
        <Router>
          <PublicRoutes />
          {/* <S.Container>
            <Header />
            <Aside />
            <S.Content>
              <AuthRoutes/>
            </S.Content>
          </S.Container> */}
        </Router>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
