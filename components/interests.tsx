export default function Interests() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        <h2 className="mb-10 text-4xl font-bold">
          Centres d intérêt
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border p-6 text-center">
            Piano
          </div>

          <div className="rounded-xl border p-6 text-center">
            Football
          </div>

          <div className="rounded-xl border p-6 text-center">
            Belote
          </div>

        </div>

      </div>
    </section>
  );
}