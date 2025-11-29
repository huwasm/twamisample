import React from 'react';
import { Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Quests: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="flex items-center bg-[#112217] p-4 pb-2 justify-between">
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Quests</h2>
        <div className="flex w-12 items-center justify-end">
          <Link to="/profile" className="text-white">
            <Settings size={24} />
          </Link>
        </div>
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Available Quests</h2>
      
      <div className="flex overflow-y-auto no-scrollbar px-4 gap-3">
        {[
          {
            title: "7-Day Mindfulness Quest",
            desc: "Learn the basics of mindfulness meditation in just one week.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvI30UYf77Y78ETXcSXJnbL7VRkk_KGFax_AKzUZ95OnjXeK-sLFX0F3WfqXLOBO9fYJAeOGZpOcpgTidiMVF6Y4IBIVPqyX9nwHlRWlKlavWQ7jqYhRUQtqhgmdSXbJRWaXMNFfJV7_TjMvyF8TL6HsY8EF011s_CMoflzpV6GKbNMkLaaBa57Qq3T0w3QKCKFCPxhamPmmb-bDlq4w4D0Ut-3FQv765zHjBq_cDUAwd4dvXrpp2yNkpHQ36jImeiDGIuYxDqLnwr"
          },
          {
            title: "30-Day Focus Quest",
            desc: "Deepen your focus and concentration with this month-long journey.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjGZTqFH9BqYkeIL2ctLjV7fUdWN8iJSV79Hsp14_2LmWgNM3Ra6wD29dhLhUsI3z0d6ATTgKRIR7E-NrZNqT15ntwVTxkI9m4AwmfH2uMqugOKktkbdBRGFvw2J4EMyUc_CXO27IM2gvAlloP-NzlgSVdzt1hA6fSoMQg2nvUqev6jT42-88YBchjrtc-T8huTYZQuDeDLd6QDS35TYwFDzLL0dFCZBMwxglSCFzvx15LTF-DFqA7RKOalRItBkiijDy2T-IwkPWi"
          },
          {
            title: "7-Day Relaxation Quest",
            desc: "Discover techniques to relax your mind and body in a week.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83m5MrJXvmXV24KUcFQh9z21zrXDKtqDHAQzDFC65Y0VgPHnsLKHd_1oP9hBjgvfsa_TKbU_j6gLMdZOLK_fkdgGV1UrHVlyoSQTEhCvdmn9dDpBcI4LR4B-nzs4wKx556g2D6zszIb6hjscMjetzmGcWOAhaQN440Mj6aObh0HkMFcNk1JeMOeVGy_8RToZdMVuqSB9YbJzmJ__3xpohOld7QCuWTvbH0xQCondxdlyr6Wnl7wT3fO63uaooP861rAP7nTJDN6nI"
          }
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-4 rounded-lg min-w-[240px]">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{ backgroundImage: `url("${item.img}")` }}
            ></div>
            <div>
              <p className="text-white text-base font-medium leading-normal">{item.title}</p>
              <p className="text-[#92c9a4] text-sm font-normal leading-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your Current Quests</h2>
      
      <div className="flex flex-col gap-2">
        {[
          {
            title: "7-Day Mindfulness Quest",
            status: "Day 3 of 7",
            progress: 43,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBod-WCb97eSKaspFYSBPv8wnXelyDo0JpOJ-mA5zaFOsWUd8GGVEjZrob4BbXWhX6s53oqruhLTSehTPMxOwErPJsghvE0Tpl7Kv4qck7OG3akQ6T_dx6wdmZNer93EF-4pBTTwrwMru6ikLM6tfiqmCMXE-c8w_aqjbXjU9wOQ6bBNAT1twackXp81Mo_G-1a7-E_Ozb975TZMeKfhMz5LpiCYPGqgbFWZZbQ_ipLeBqAvAi85h50JgxwnFHW7z3C0k-dqra-Q_t-"
          },
          {
            title: "30-Day Focus Quest",
            status: "Day 15 of 30",
            progress: 50,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA28SjrTZaEfArcyiYCIuafB7C2zpUwOt9iuoQogUW8vb14KpNzH-eTGgUTI9-TQ8BmF_WE0-wjHNDHcyJQsublNqulMrbL92m12STxZncyuqbKVQ7rig3c5jvTGP_WhF0Vt5LybVZx6lJKDDKhQ3QjPRtOPJH_aiSKUvsZqjUX0PTRfGFf5vJUP1PoN9m0eYnZeLacBTuAKsrYac6iq-0UPORQpOhbn8iG4Myl24FXJ0l1rWWxT8aqXYrLN8WRSHo6D56x3AsL51Ow"
          }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-4 bg-[#112217] px-4 py-2 hover:bg-[#193322]">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
                style={{ backgroundImage: `url("${item.img}")` }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">{item.title}</p>
                <p className="text-[#92c9a4] text-sm font-normal leading-normal line-clamp-2">{item.status}</p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-3">
               <div className="w-[88px] overflow-hidden rounded-sm bg-[#326744]">
                   <div className="h-1 rounded-full bg-[#13ec5b]" style={{ width: `${item.progress}%` }}></div>
               </div>
               <p className="text-white text-sm font-medium leading-normal">{item.progress}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Completed Quests</h2>
      
      <div className="flex items-center justify-between gap-4 bg-[#112217] px-4 py-2">
         <div className="flex items-center gap-4">
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgQk6gOAYkm-NhZGZglsdCzjhe7_NkxpAi4FhTX00TI7FNwluH20qibTajgl_hkGpEG5pAz1QEyPEBdSuyI0cqv1wZzapKk_WIrQowkaBD0KlIL2BwrPZt6BwzHkJLiknHm8gdvX5m3tn_TC_CxIb-DhsSEVNyJLqSsi_TR3qJKfXGkyFlCUeB6I_L9rxvEQF69RDqeVEiFpPXMKQH8WtSfqpGPQWSBLmhOaki313JJWGeOsj0JPEpRigDkhdaiu7AwXMxRFF44bY1")` }}
            ></div>
            <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">7-Day Relaxation Quest</p>
                <p className="text-[#92c9a4] text-sm font-normal leading-normal line-clamp-2">Completed on July 15, 2024</p>
            </div>
         </div>
         <div className="shrink-0">
             <Check size={24} className="text-white" />
         </div>
      </div>

    </div>
  );
};

export default Quests;