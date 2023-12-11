import Card from "@/components/Card";

interface Feature {
  name: string;
  description: string;
}

interface FeaturesProps {
  pill: string;
  title: string;
  description: string;
  features: Feature[];
  cardTitle: string;
  cardDescription: string;
  firstCol: "cards" | "features"; // New prop to control the order
}

export default function Features({
  pill,
  title,
  description,
  features,
  cardTitle,
  cardDescription,
  firstCol,
}: FeaturesProps) {
  const isFeaturesFirst = firstCol === "features";

  return (
    <div className="lg:max-h-screen min-h-screen w-full pb-32 lg:pb-24 flex items-center pt-10 lg:pt-0">
      <div
        className={`mx-auto flex flex-col lg:flex-row w-full items-center justify-center gap-x-20 lg:gap-y-16 gap-y-8 px-4 ${
          isFeaturesFirst ? "" : "lg:flex-row-reverse"
        }`}
      >
        <div className="w-full lg:w-1/2">
          <p className="text-primary">{pill}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4">{description}</p>

          <Card
            className="mt-8 relative overflow-hidden"
            title={cardTitle}
            description={cardDescription}
          >
            <img
              src="/squiggles/squiggleone.svg"
              alt="Squiggle"
              className="absolute -top-10 -right-10 h-40 w-40"
            />
          </Card>
        </div>

        <dl className="grid grid-cols-1 gap-y-3 lg:gap-y-4 w-full lg:w-1/2 bg">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="border border-black rounded-xl p-4"
            >
              <dt className="font-medium text-primary">{feature.name}</dt>
              <dd className="mt-2 text-sm">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
