import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          The link you followed may be broken, or the page may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
