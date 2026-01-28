export interface PartnershipFormValues {
  organizationName: string;
  organizationEmail: string;
  website: string;
  city: string;
  country: string;
  countryCode:string;
  personalName: string;
  personalEmail: string;
  designation: string;
  message: string;
  reason: string;
  organizationPhone: string;
  personalPhone: string;
}



export interface Trainings{
  id:number,
  title:string,
  desc:string,
  para_one:string,
  para_two:string,
  image:string,
  path:string,
  faq:TrainingsFAQ[];
  related_courses:string[];
  outputTraining:string,
  metaTitle:string,
  metaDescription:string
  virtual: {
      one_week: string,
      five_week: string,
    },
    physical: {
      one_week: string,
      five_hours: string,
    }
  title_Thumbnail:string,
  title_two?:string
}


export type TrainingsFAQ = {
  question: string;
  answer: string;
};
