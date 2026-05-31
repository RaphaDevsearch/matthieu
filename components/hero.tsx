import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-blue-700
      text-white
      flex
      items-center
    "
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-5xl md:text-7xl font-bold">
              Georges Matthieu
            </h1>

            <h2 className="text-2xl mt-4 text-blue-200">
              Formateur de Mathématiques
            </h2>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Diplômé en Machinisme Agricole avec une expérience dans
              l’enseignement des matières scientifiques et techniques.
            </p>

            <div className="flex gap-4 mt-8">

              <Button size="lg">
                Me contacter
              </Button>

              <Button
                variant="outline"
                size="lg"
              >
                Télécharger CV
              </Button>

            </div>

          </div>

          <div className="flex justify-center">

            <Image
              src="/pic.png"
              alt="Georges Matthieu"
              width={300}
              height={300}
              className="
                rounded-full
                border-8
                border-white/20
                object-cover
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}