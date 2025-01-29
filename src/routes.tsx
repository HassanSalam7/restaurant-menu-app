import { useState } from 'react';
import { Welcome } from '@/components/welcome';
import { Menu } from '@/components/menu';
import { AdminDashboard } from '@/components/admin/dashboard';

export function Routes() {
  const [entered, setEntered] = useState(false);
  const isAdmin = window.location.pathname === '/admin';

  if (isAdmin) {
    return <AdminDashboard />;
  }

  if (!entered) {
    return <Welcome onEnter={() => setEntered(true)} />;
  }

  return <Menu />;
}