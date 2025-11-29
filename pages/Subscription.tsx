import React from 'react';
import { X, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Subscription: React.FC = () => {
  const navigate = useNavigate();

  const plans = [
      {
          name: "Free",
          price: "$0",
          period: "Forever",
          features: ["Limited access to content", "Basic meditation exercises"],
          buttonText: "Select"
      },
      {
          name: "Monthly/Yearly",
          price: "$9.99/$99.99",
          period: "Per month/Per year",
          features: ["Unlimited access to all content", "Exclusive courses and quests", "Personalized recommendations"],
          tag: "Best Value",
          buttonText: "Select"
      },
      {
          name: "Pro Super User",
          price: "$199.99",
          period: "Per year",
          features: ["All features of Monthly/Yearly", "Priority support", "Early access to new features", "Dedicated account manager"],
          tag: "For Power Users",
          buttonText: "Select"
      }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#112217] text-white">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 shrink-0 items-center justify-center">
          <X size={24} />
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Subscription Plans</h2>
      </div>

      <div className="px-4 pt-5 pb-3">
        <h1 className="text-[22px] font-bold leading-tight">Choose your plan</h1>
        <p className="text-base font-normal mt-1">Unlock the full potential of our meditation app with a plan that suits your needs.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 py-3">
        {plans.map((plan, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-lg border border-[#326744] bg-[#193322] p-6">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                         <h1 className="text-base font-bold">{plan.name}</h1>
                         {plan.tag && (
                             <span className="text-[#112217] text-xs font-medium bg-[#13ec5b] px-3 py-1 rounded-lg">
                                 {plan.tag}
                             </span>
                         )}
                    </div>
                    <p className="flex items-baseline gap-1">
                        <span className="text-4xl font-black">{plan.price}</span>
                        <span className="text-base font-bold">{plan.period}</span>
                    </p>
                </div>

                <button className="w-full h-10 rounded-lg bg-[#23482f] text-white text-sm font-bold hover:bg-[#326744] transition-colors">
                    {plan.buttonText}
                </button>

                <div className="flex flex-col gap-2">
                    {plan.features.map((feature, idx) => (
                        <div key={idx} className="text-[13px] font-normal flex gap-3">
                             <Check size={20} className="text-white shrink-0" />
                             {feature}
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>
      
      <div className="p-4 flex flex-col gap-3">
           <button className="w-full h-12 rounded-lg bg-[#13ec5b] text-[#112217] font-bold text-base hover:opacity-90 transition-opacity">
              Continue with Free
           </button>
           <button className="w-full h-12 rounded-lg bg-[#23482f] text-white font-bold text-base hover:opacity-90 transition-opacity">
              Restore Purchase
           </button>
      </div>
    </div>
  );
};

export default Subscription;