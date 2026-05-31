export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="container mx-auto px-6">

        <h2 className="mb-10 text-4xl font-bold">
          Compétences
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border p-6">
            <h3 className="mb-4 font-semibold">
              Pédagogie
            </h3>

            <ul className="space-y-2">
              <li>Mathématiques</li>
              <li>Formation Scientifique</li>
            </ul>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-4 font-semibold">
              Technique
            </h3>

            <ul className="space-y-2">
              <li>Mécanique</li>
              <li>DAO</li>
              <li>Hydraulique</li>
            </ul>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-4 font-semibold">
              Informatique
            </h3>

            <ul className="space-y-2">
              <li>Word</li>
              <li>Excel</li>
              <li>PowerPoint</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}