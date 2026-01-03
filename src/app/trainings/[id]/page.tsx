import { trainings } from "@/src/data/trainings";
import TrainingSinglepageComponent from "@/components/Training";
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
      openGraph: {
        title: "Training Not Found",
        description: "",
        url: `https://www.sriyog.com/trainings/${id}`,
        images: [
          {
            url: "https://sriyog.com/og/default.jpg",
            alt: "Training Not Found"
          }
        ]
      }
    };
  }

  return {
    title: training.metaTitle || training.title,
    description: training.metaDescription || training.desc,
    openGraph: {
      title: training.metaTitle || training.title,
      description: training.metaDescription || training.desc,
      url: `https://www.sriyog.com/trainings/${id}`,
      images: [
        {
          url: "/homepage/hero-banner.jpg",
          alt: training.title
        }
      ]
    }
  };
}

export default async function TrainingSinglepage({ params }: Props) {
  const { id } = await params; 
  return <TrainingSinglepageComponent id={id} />;
}
