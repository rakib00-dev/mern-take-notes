import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/create',
      element: <CreatePage />,
    },
    {
      path: '/note/:id',
      element: <NoteDetailPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
