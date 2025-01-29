import { ThemeProvider } from '@/components/theme-provider';
import { Routes } from '@/routes';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="restaurant-theme">
      <main className="min-h-screen bg-background">
        <Routes />
      </main>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;