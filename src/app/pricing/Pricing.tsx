'use client'
import React, { useEffect, useState } from 'react'
type PlanType = {
  name: string
  description: string
  price: number
  features: string[]
}
const Pricing = () => {
  const [Monthly,setMonthly] = useState<boolean>(true);
  const [Yearly,setYearly] = useState<boolean>(false);
  const [plans, setPlans] = useState<PlanType[]>([])
  const YearlyPlans: PlanType[] = [
    {name:"Standard",
    description:"Perfect for Small businesses and Startups",
    price:49,
    features:["Max 10 pages website" ,"Free SSL" ,"analytics dashboard" ,"1 Business email" ,"30 Managed RoadBlock","1 Form" ,"1 GB Dedicated Space" ,"5 Monthly Social Banner","1 Campaign Yearly"]},
    
    {name:"Professional",
    description:"Perfect for Established business & startups",
    price:99,
    features:["Max 15 pages website" ,"Free SSL" ,"analytics dashboard" ,"4 Business email" ,"50 Managed RoadBlock","3 Forms" ,"5 GB Dedicated Space" ,"10 Monthly Social Banner","Social media Management","3 Campaigns Yearly","1 Social Contest","Premium Dashboard","API access","Digital Asset Management"]},
    
    {name:"Enterprise",
    description:"Perfect for corporates / brands",
    price:149,
    features:
        ["Max 50 pages website" ,
         "Free SSL" ,
         "Custom analytics & performance reporting" ,
         "10 Business email" ,
         "120 Managed RoadBlock",
         "3 Forms" ,
         "20 GB Dedicated Space" ,
         "10 Monthly Social Banner",
         "Social media Management",
         "5 Campaigns Yearly",
         "2 Social Contests",
         "Premium Dashboard",
         "API access",
         "Digital Asset Management",
         "Dedicated account manager",
         "Enterprise-grade security with global server support",
         "White-label options",
         "Highly Optimized SEO",
         "Premium Digital Assess Management",
         "Custom Pages",
         "Pages Included"]}]

  const MonthlyPlans: PlanType[] = [
    {name:"Standard",
    description:"Perfect for Small businesses and Startups",
    price:60,
    features:["Max 10 pages website" ,"Free SSL" ,"Analytics Dashboard" ,"1 Business eMail" ,"30 Managed RoadBlock","1 Form" ,"1 GB Dedicated Space" ,"5 Monthly Social Banner","1 Campaign Yearly"]},
    
    {name:"Professional",
    description:"Perfect for Established business & startups",
    price:120,
    features:["Max 15 pages website" ,"Free SSL" ,"Analytics Dashboard" ,"4 Business eMails" ,"50 Managed RoadBlock","3 Forms" ,"5 GB Dedicated Space" ,"10 Monthly Social Banner","Social media Management","3 Campaigns Yearly","1 Social Contest","Premium Dashboard","API access","Digital Asset Management"]},
    
    {name:"Enterprise",
    description:"Perfect for corporates / brands",
    price:180,
    features:
        ["Max 50 pages website" ,
         "Free SSL" ,
         "Custom analytics & performance reporting" ,
         "10 Business eMails" ,
         "120 Managed RoadBlock",
         "3 Forms" ,
         "20 GB Dedicated Space" ,
         "10 Monthly Social Banner",
         "Social media Management",
         "5 Campaigns Yearly",
         "2 Social Contests",
         "Premium Dashboard",
         "API access",
         "Digital Asset Management",
         "Dedicated account manager",
         "Enterprise-grade security with global server support",
         "White-label options",
         "Highly Optimized SEO",
         "Premium Digital Assess Management",
         "Custom Pages",
         "Pages Included"]}]

  useEffect(() => {
    setPlans(Monthly ? MonthlyPlans : YearlyPlans)
  }, [Monthly])
         
  return (
    <div className='space-y-16 sm:space-y-24 py-16'>
        <div className='space-y-6 flex flex-col items-center justify-center'>
            <h2 className='text-3xl'>Managed IT Solutions</h2>
            <p className='text-center'>Choose the plan that fits your company's size and digital needs</p>
            <div className='flex gap-6 rounded-2xl items-center justify-center bg-gray-300 px-6 py-2'>
                <button className='cursor-pointer' onClick={()=>{setMonthly(true);setYearly(false)}}><span className={`text-xl ${Monthly? 'bg-[#b7bcc3] py-1 px-2 rounded-md' : ""}`}>Monthly</span></button>
                <button className='cursor-pointer' onClick={()=>{setYearly(true);setMonthly(false)}}><span className={`text-xl ${Yearly? 'bg-[#b7bcc3] py-1 px-2 rounded-md' : ""}`}>Yearly</span></button>
            </div>
        </div>
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch lg:items-start gap-8 max-w-7xl mx-auto">
        {plans.map((plan,i) => (
            <div key={i} className={`border border-gray-300 relative max-w-sm w-full ${plan.name === "Professional" ? "bg-blue-200 p-0.5 mt-6 sm:mt-0 mb-2 sm:mb-0 rounded-b-xl" : "rounded-xl"}`}>
            {plan.name === "Professional" && (
                <p className="absolute z-0  -top-6 -left-[1px]   w-[100.3%] bg-blue-200  text-center font-medium py-1 rounded-t-xl">
                Recommended for you
                </p>
            )}

            <div className="relative z-10 space-y-4 bg-white rounded-xl p-5 pt-10">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-500">{plan.description}</p>
                <p className="font-semibold border-b pb-4">
                <span className="text-3xl pr-2">${plan.price}</span>
                <span className="text-md text-[#62656c]">
                    {Monthly ? "Per Month ( Paid Monthly )" : "Per Month ( Paid Yearly )"}
                </span>
                </p>

                <div>
                <h3 className="text-xl font-bold">Features</h3>
                <ul className="mt-4 list-disc pl-5">
                    {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                    ))}
                </ul>
                </div>
                <div className='flex items-center justify-center w-full'>
                <button className={`px-7 py-2 w-full mt-2 rounded-md cursor-pointer ${plan.name === "Professional" ? "bg-blue-900 text-white hover:bg-blue-950 active:bg-blue-400" : "bg-gray-200 hover:bg-gray-300 active:bg-gray-100 text-black"}`}>Subscribe</button>
                </div>
            </div>
            </div>
        ))}
        </div>

    </div>
  )
}

export default Pricing