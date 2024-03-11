import { BrowserRouter  } from 'react-router-dom'
import Router from './router/Router'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'
import defaultOptions from 'configs/reactQuery'
import Layout from 'layouts/Layout'


function App() {
  const queryClient = new QueryClient({defaultOptions})
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Layout>
              <Router/>
            </Layout>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
