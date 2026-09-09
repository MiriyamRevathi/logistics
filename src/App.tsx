/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LogisticsProvider } from './context/LogisticsContext';
import { AppShell } from './components/layout/AppShell';

export default function App() {
  return (
    <LogisticsProvider>
      <AppShell />
    </LogisticsProvider>
  );
}

