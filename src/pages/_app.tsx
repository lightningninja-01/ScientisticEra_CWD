import { Toaster } from "@/components/ui/toaster";
import { ResearchAssistanceModal } from "@/components/ResearchAssistanceModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ResearchAssistanceModal />
      <Toaster />
    </>
  );
}
