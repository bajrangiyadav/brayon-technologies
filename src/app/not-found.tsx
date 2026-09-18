import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-32">
        <Container>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto text-blue-400">
              <FileQuestion className="w-8 h-8" />
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-blue-400">
              ERROR 404 · RESOURCE NOT FOUND
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Page Does Not Exist
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              The page or route you requested could not be located. It may have been moved, updated, or does not exist on this server.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="primary"
                size="md"
                href="/"
                iconLeft={<Home className="w-4 h-4" />}
              >
                Return to Home
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/services"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
