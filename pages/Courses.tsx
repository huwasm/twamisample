import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Courses: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-20">
      <div className="flex items-center bg-[#112217] p-4 pb-2 justify-between">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 shrink-0 items-center justify-center">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Courses</h2>
      </div>

       {/* Search Input */}
       <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#23482f] overflow-hidden">
            <div className="flex items-center justify-center pl-4 pr-2">
              <Search size={24} className="text-[#92c9a4]" />
            </div>
            <input
              placeholder="Search courses"
              className="flex w-full min-w-0 flex-1 resize-none bg-transparent border-none text-white focus:outline-0 focus:ring-0 placeholder:text-[#92c9a4] px-0 text-base h-full"
            />
          </div>
        </label>
      </div>

      {/* Tabs */}
      <div className="pb-3">
        <div className="flex border-b border-[#326744] px-4 gap-8">
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-[#13ec5b] text-white pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">All</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92c9a4] pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">In progress</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92c9a4] pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Completed</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {[
            {
                title: "Mindful Living",
                desc: "Learn to integrate mindfulness into your daily routine for a more balanced life.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRRJZwzhfaANLvIthxzgoL3HdrCOztNhwC4dhX15SZFBAWZwLDI9KjDCH6KMSQXMdqtAt9ql1qBZTxmn9VpTc_UEH4RytodkRgXxFTbtSMiLfSDCnTaKRt3lkm2ijE7f_vxl63iznGnW7MEbnHrZ334E8aDvBjDPHb8xoUJnshOwX8fXOswZdP8KO9eSimjc7uUBcYgNcGkxuToEqrUiRL3hLgu4Fg-btw5q58hyukSJKxvQldKYootGmJM8CI74JBiOy6Dc_yHLx1"
            },
            {
                title: "Stress Management",
                desc: "Techniques to effectively manage stress and improve your overall well-being.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZyO0prgkvZcdta7eSXx4EkNv1JvoDZuDJ-8yR4gXef5wWKsty-pGQsFqhCzN923sQ1NJC0_UWvECCR3AdDPqPkRF6R-d2peGqaSRrTHHa7mg_dl8T612VRMXoKhvQKjxjyomBVeH1LfZ4R9puQHXgiij9B3u4-_qK106hbEvyDaE4RW6SJk-BwZpt1wxUluu_spHWFbcTvwMksq2o7lzPct865raJ9qD7O72S38zR-Ae98pn1zM-oLdlSm6-WI2JXWx5LNcKhgh4X"
            },
            {
                title: "Sleep Improvement",
                desc: "Strategies for achieving better sleep quality and waking up refreshed.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR_ht3A2SrjANR0GjfrOC3v3YsTaDRNde2JHVpGPxwidFg9RW8JmuMwwlSN5Y5NfOXHIOfY-o0CaRAQE7f115yx0sWVtmW41fEZVdGKKKNvkHiYH8pttnPrVZAbXNW_-dv8SgAZELCXZX9s5vcfY55kQGrUlR8K_QPzBxDu08fSvr80p_ZujMKzixcWp4REDhtxsrQ4zE8W5jm2VasKszD6IgcFt7q8e_KhYKeUeBu8EZZ57sVaumv0WZR38XrtUAuMAZ-wgidLbWy"
            }
        ].map((item, i) => (
            <div key={i} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-lg">
                    <div className="flex flex-col gap-1 flex-[2_2_0px]">
                        <p className="text-white text-base font-bold leading-tight">{item.title}</p>
                        <p className="text-[#92c9a4] text-sm font-normal leading-normal">{item.desc}</p>
                    </div>
                    <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                    style={{ backgroundImage: `url("${item.img}")` }}
                    ></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;