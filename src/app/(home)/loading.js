import React from 'react';
import '../globals.css';
import LoadingSpinner from '../components/shared/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center items-center h-screen align-items-center">
        <LoadingSpinner />
       
      </div>
    </div>
  );
}
