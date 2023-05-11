"use client";

import Header from "@/components/header/header";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StyledComponentsRegistry from "../../lib/registery";
import { Layout } from "@/components/layout/layout";
import ShopProvider from "@/utils/context/shop-provider";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    },
  },
});
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ShopProvider>
        <StyledComponentsRegistry>
          <html lang="en">
            <body className={inter.className}>
              <Layout>
                <Header />
                {children}
              </Layout>
            </body>
          </html>
        </StyledComponentsRegistry>
      </ShopProvider>
    </QueryClientProvider>
  );
}
