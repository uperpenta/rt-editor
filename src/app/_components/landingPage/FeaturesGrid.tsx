import { Users, Zap, Lock, Pencil, type LucideIcon } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  hoverBorderColor: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  iconBgColor,
  iconColor,
  hoverBorderColor,
}: FeatureProps) {
  return (
    <div
      className={`rounded-2xl border-2 border-white bg-white/60 p-8 backdrop-blur-sm transition-all ${hoverBorderColor}`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${iconBgColor}`}
      >
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="mb-2 text-xl text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

const features: FeatureProps[] = [
  {
    icon: Users,
    title: "Real-time Sync",
    description: "See changes instantly as your team edits together",
    iconBgColor: "bg-landing-mint",
    iconColor: "text-gray-900",
    hoverBorderColor: "hover:border-landing-mint",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance",
    iconBgColor: "bg-landing-coral",
    iconColor: "text-gray-900",
    hoverBorderColor: "hover:border-landing-coral",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Enterprise-grade security for your documents",
    iconBgColor: "bg-landing-apricot",
    iconColor: "text-gray-900",
    hoverBorderColor: "hover:border-landing-apricot",
  },
  {
    icon: Pencil,
    title: "Rich Editor",
    description: "Full-featured editor with markdown support",
    iconBgColor: "bg-landing-lavender",
    iconColor: "text-gray-900",
    hoverBorderColor: "hover:border-landing-lavender",
  },
];

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl text-gray-900">
          Everything you need to collaborate
        </h2>
        <p className="text-lg text-gray-700">
          Simple tools for complex teamwork
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
