export default function Languages() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <h2 className="mb-10 text-4xl font-bold">
          Langues
        </h2>

        <div className="grid gap-4 md:grid-cols-4">

          <div className="rounded-xl border p-6 text-center">
            Malagasy
          </div>

          <div className="rounded-xl border p-6 text-center">
            Français
          </div>

          <div className="rounded-xl border p-6 text-center">
            Anglais
          </div>

          <div className="rounded-xl border p-6 text-center">
            Allemand
          </div>

        </div>

      </div>
    </section>
  );
}