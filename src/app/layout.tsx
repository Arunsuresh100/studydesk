import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { AppLayout } from "@/components/layout/AppLayout";

import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "StudyDesk | Student Companion & Resource Hub",
  description: "Personalized study notes, syllabus tracker, PYQs & YouTube playlists for college students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <UserProvider>
            <AppLayout>{children}</AppLayout>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
