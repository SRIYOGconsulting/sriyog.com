// app/trainings/[id]/page.tsx
import { trainings } from "@/src/data/trainings";
import TrainingSinglepageComponent from "@/components/Training/Training";
import type { Metadata } from "next";

type PageProps = {
  params: { id: string };
};

// Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const training = trainings.find((t) => t.path === params.id);

  if (!training) {
    return {
      title: "Training Not Found",
      description: "",
    };
  }

  return {
    title: training.metaTitle || training.title,
    description: training.metaDescription || training.desc,
  };
}

export default function TrainingSinglepage({ params }: PageProps) {
  return <TrainingSinglepageComponent id={params.id} />;
}
