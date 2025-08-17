import { trainings } from "@/src/data/trainings";
import TrainingSinglepageComponent from "@/components/Training/Training";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>; 
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params; 

  const training = trainings.find((t) => t.path === id);

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

export default async function TrainingSinglepage({ params }: Props) {
  const { id } = await params; 
  return <TrainingSinglepageComponent id={id} />;
}
