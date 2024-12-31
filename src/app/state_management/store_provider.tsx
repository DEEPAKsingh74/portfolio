'use client';

import React, { PropsWithChildren, useRef } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { AppStore, makeStore } from './store'; // Ensure the path is correct

const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  
  if (!storeRef.current) {
    storeRef.current = makeStore(); // Use the `makeStore` function
    setupListeners(storeRef.current.dispatch); // Enable RTK Query listeners
  }

  return (
    <ReduxProvider store={storeRef.current}>
      {children}
    </ReduxProvider>
  );
};

export default StoreProvider;
