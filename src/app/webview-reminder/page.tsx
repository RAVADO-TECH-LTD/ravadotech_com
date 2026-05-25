export const metadata = {
  title: "Console Rent Reminder - Ravado Tech",
  description: "Console rent payment reminder.",
};

export default function WebviewReminderPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-white px-5 py-8 text-black">
      <section className="flex w-full max-w-sm flex-col items-center gap-8 text-center">
        <h1 className="text-4xl leading-tight sm:text-5xl">
          $ pay your console rent
        </h1>

        <a
          href="https://wa.me/qr/QRPSAA62KGIMA1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-lg text-white transition-colors hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          Contact on WhatsApp
        </a>
      </section>
    </main>
  );
}
