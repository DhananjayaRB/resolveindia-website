import React from 'react';
import '../globals.css';
import NotFound from '../components/shared/NotFound';

export default function NotFoundPage() {
  return (
    <NotFound
      title="Attendance Page Not Found"
      message="The attendance management page you're looking for doesn't exist or has been moved."
      showHomeButton={true}
      showBackButton={true}
      showSearchButton={false}
    />
  );
}
