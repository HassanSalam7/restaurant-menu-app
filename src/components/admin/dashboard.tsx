import { useState } from 'react';
import {
  LayoutDashboard,
  UtensilsCrossed,
  Wine,
  Cigarette,
  Settings,
  LogOut,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, replace with real authentication
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Sign in to manage your restaurant menu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 border-r bg-card hidden md:block">
          <div className="h-16 flex items-center px-6 border-b">
            <LayoutDashboard className="w-6 h-6 mr-2" />
            <h1 className="font-semibold">Admin Dashboard</h1>
          </div>
          <nav className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <UtensilsCrossed className="w-5 h-5 mr-2" />
              Food Menu
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Wine className="w-5 h-5 mr-2" />
              Drinks Menu
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Cigarette className="w-5 h-5 mr-2" />
              Smoking Menu
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="w-5 h-5 mr-2" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={() => setIsAuthenticated(false)}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="h-16 border-b flex items-center justify-between px-6">
            <h2 className="font-semibold">Menu Management</h2>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsAuthenticated(false)}
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </header>

          <main className="p-6">
            <Tabs defaultValue="food" className="space-y-6">
              <TabsList>
                <TabsTrigger value="food">Food Menu</TabsTrigger>
                <TabsTrigger value="drinks">Drinks Menu</TabsTrigger>
                <TabsTrigger value="smoking">Smoking Menu</TabsTrigger>
              </TabsList>

              <TabsContent value="food" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Food Items</h3>
                  <Button>Add New Item</Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Sample Food Item Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-lg overflow-hidden shadow-sm"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop"
                      alt="Wagyu Beef"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Wagyu Beef Steak</h4>
                        <p className="font-bold">$120</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Premium Japanese A5 Wagyu beef...
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="drinks">
                {/* Similar structure for drinks */}
              </TabsContent>

              <TabsContent value="smoking">
                {/* Similar structure for smoking items */}
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
}