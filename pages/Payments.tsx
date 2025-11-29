import React from 'react';
import { ArrowLeft, ChevronRight, Plus, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Payments: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-[#112217] text-white">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 shrink-0 items-center justify-center">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Payments</h2>
      </div>

      <h3 className="text-white text-lg font-bold px-4 pb-2 pt-4">Payment Methods</h3>
      
      <div className="flex items-center justify-between px-4 py-3 hover:bg-[#193322]">
        <div className="flex items-center gap-4">
             {/* Visa placeholder */}
             <div className="h-6 w-10 bg-white rounded flex items-center justify-center text-[#112217] text-xs font-bold font-serif">VISA</div>
             <div className="flex flex-col">
                <p className="text-base font-medium">Visa ... 4567</p>
                <p className="text-[#92c9a4] text-sm">Expires 03/2025</p>
             </div>
        </div>
        <ChevronRight size={24} />
      </div>

      <div className="flex items-center justify-between px-4 py-3 hover:bg-[#193322]">
        <div className="flex items-center gap-4">
             <div className="h-10 w-10 rounded-lg bg-[#23482f] flex items-center justify-center">
                <Plus size={24} />
             </div>
             <p className="text-base font-normal">Add Payment Method</p>
        </div>
        <ChevronRight size={24} />
      </div>

      <h3 className="text-white text-lg font-bold px-4 pb-2 pt-4">Transaction History</h3>

      <div className="flex flex-col">
        {[
            { date: 'May 15, 2024' },
            { date: 'April 15, 2024' },
            { date: 'March 15, 2024' }
        ].map((item, i) => (
             <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-[#193322]">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#23482f] flex items-center justify-center">
                        <Calendar size={24} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-base font-medium line-clamp-1">Mindful Moments Subscription</p>
                        <p className="text-[#92c9a4] text-sm">{item.date}</p>
                    </div>
                </div>
                <p className="text-base">$12.99</p>
             </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;