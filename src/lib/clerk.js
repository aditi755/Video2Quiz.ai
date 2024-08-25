// lib/clerk.ts
import { ClerkProvider } from '@clerk/nextjs';

export default function MyClerkProvider({ children }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}
