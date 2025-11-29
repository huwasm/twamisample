import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GeminiChat from '../components/GeminiChat';

const Reading: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Reading' | 'Comments' | 'Chat'>('Reading');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-[#112217] overflow-hidden">
      {/* Header */}
      <div className="flex items-center bg-[#112217] p-4 pb-2 justify-between shrink-0 z-10">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 shrink-0 items-center justify-center">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12 truncate">
          The Power of Now
        </h2>
      </div>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center shrink-0">Eckhart Tolle</p>

      {/* Tabs */}
      <div className="pb-3 shrink-0 z-10 bg-[#112217]">
        <div className="flex border-b border-[#326744] px-4 gap-8">
          {['Reading', 'Comments', 'Chat'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 ${
                activeTab === tab
                  ? 'border-b-[#13ec5b] text-white'
                  : 'border-b-transparent text-[#92c9a4]'
              }`}
            >
              <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${activeTab === tab ? 'text-white' : 'text-[#92c9a4]'}`}>
                {tab}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar bg-[#112217]">
        {activeTab === 'Reading' && (
          <div className="px-4 pb-20 animate-in fade-in duration-300">
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1">
              Chapter 1: You Are Not Your Mind
            </p>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 text-justify">
              The greatest obstacle to enlightenment is the mind. Not the content of the mind, but the mind
              itself. The mind is a superb instrument if used rightly. Used wrongly, however, it becomes very
              destructive. To put it more accurately, it is not so much that you use your mind wrongly - you
              usually don't use it at all. It uses you. This is the disease. You believe that you are your mind. This
              is the delusion. The instrument has taken you over. I don't quite agree with that. It's not that I
              don't understand what you mean. I just don't think it's that simple. I believe that the mind is a
              very complex thing, and that it's not something that can be easily controlled. I think that it's
              something that we have to learn to live with, and that we have to learn to use it in a way that is
              beneficial to us. I don't think that it's something that we can just turn off, or that we can just
              control. I think that it's something that we have to learn to work with, and that we have to learn
              to use it in a way that is beneficial to us.
            </p>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 text-justify">
              Enlightenment is rising above thought, not falling back to a level below thought, the level of an animal or a plant. In the enlightened state, you still use your thinking mind when needed, but in a much more focused and effective way.
            </p>
             <div className="h-5"></div>
          </div>
        )}

        {activeTab === 'Comments' && (
             <div className="px-4 py-8 flex flex-col items-center justify-center text-center text-[#92c9a4] animate-in fade-in duration-300">
                 <p>Community comments are coming soon.</p>
             </div>
        )}

        {activeTab === 'Chat' && (
             <div className="h-full animate-in fade-in duration-300">
                 <GeminiChat />
             </div>
        )}
      </div>
    </div>
  );
};

export default Reading;