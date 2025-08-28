import React from 'react';
import '../globals.css';
import LoadingSpinner from '../components/shared/loadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
