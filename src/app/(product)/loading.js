import React from 'react';
import '../globals.css';
import LoadingSpinner from '../components/shared/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="text-center">
        <LoadingSpinner />
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Loading Attendance Management...
        </h2>
      </div>
    </div>
  );
}
