import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Routes from './routes/Routes';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
