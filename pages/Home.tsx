import React from 'react';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="flex items-center bg-[#112217] p-4 pb-2 justify-between">
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Home</h2>
        <div className="flex w-12 items-center justify-end">
          <Link to="/profile" className="text-white">
            <Settings size={24} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between">
          <p className="text-white text-base font-medium leading-normal">Daily Progress</p>
        </div>
        <div className="rounded bg-[#326744] h-2 w-full">
          <div className="h-2 rounded bg-[#13ec5b]" style={{ width: '60%' }}></div>
        </div>
        <p className="text-[#92c9a4] text-sm font-normal leading-normal">15 min / 25 min</p>
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Continue Learning</h2>
      <div className="flex overflow-y-auto no-scrollbar px-4 gap-3">
        {[
          {
            title: "Mindful Moments",
            subtitle: "5 min meditation",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABbhhXwzQhzV5OfMbyVP3G30ia5_b4kAJfbfAUiFh9tYiA_jv36KXI5dsRLTte1l1jtoD0_v0DAFkyQ813xU6iJQ7IETf3Qr2B8BDnKFXYaV5Y3xbfusxDnuAogyWjekhz4w-AF5ILlImh757ilqZWmKW76tIbPstK3C_Bn-5qQ51xCYNGSMxiCmQIi5EttqDOyf4t2SFFvAD0PDZpsl6EvhVGBYxfYcv7dyZLXPYgjXhAzLaURNHA-KdqZJYRVhNvjFUugbbSfUdA"
          },
          {
            title: "The Art of Focus",
            subtitle: "Book",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA7wwFZgo8l36Xa7Xd9DtGJZrpKrSeJAmdFhShX-LlNUrW6IRKUAM_nA8arTIzdjSNCFkn62BbbC_meUqVjvUW9U71xuwi97vMQGMF__z7A8wT9VOLzjIPtYOmVQVgoh3BKXa25FQLNjZBf-q2kI6Mtj8yi1gWAKOQqA7BNn1QUrsDxaw4oQflwi2oI5hJ-sHCObtlamKf07Q9SeANn653fmsJ_2_Ffk4UAKbeJ05JtromB14T8e95dc95BiwVH0kOHKnwtLpYWRLM"
          }
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-4 rounded-lg min-w-[160px]">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{ backgroundImage: `url("${item.img}")` }}
            ></div>
            <div>
              <p className="text-white text-base font-medium leading-normal">{item.title}</p>
              <p className="text-[#92c9a4] text-sm font-normal leading-normal">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Explore</h2>
      <div className="pb-3">
        <div className="flex border-b border-[#326744] px-4 gap-8">
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-[#13ec5b] text-white pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">All</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92c9a4] pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Books</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92c9a4] pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Courses</p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4">
        {[
          {
            title: "The Power of Now",
            author: "Evelyn Reed",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqhjO4QUvkqmMYiwFYQUSUsyeML0GHaMp2NB0b8KxpzGF1EKgFCEiNBSSREFOw7iFrksQ-xn_VCqFEeAVvWq5ZDvDCp5mbuuLP7ycnhpR1adpMdlbJC3f4aW6RVCpRhGorZ_8eV1Mo55qt7u-9wRJtI-RcA5_PDMUdg4u_ODatDeddr3oRqHfpanbo0Wf1Nm5y3zlN6nY0WJF4EpW-rwXHXgtcNg5PUiBV8wySpN8vcLLRhGovdWBYhUhAtzXjCyHFom2eyIEt0RNX",
            link: "/reading/1"
          },
          {
            title: "Mindful Living",
            author: "Liam Carter",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXV34IJZegU6mGQS1v-yKHglIZENz3NR0qLe8DOEvL9XSDI6YB9jL-dFVQekYxKtxap0_Bt8zRXWH6TL9jsIKHvZzp8PK3LEapIvpe79QUWr1_1KtdCp73sv4GLVaqciXKVPicF31ax1vrjk550gCHl5AXCSO-hHEQ-Dl4bSWn3lh3WBLOBE057ta5Pf1pF4quKm3gTGSfnJIHAKcS1S_cfIljvq_1zdH38ivxKnmGLqycGPIVwnVb_tiGNiKaCSl2LU-x8Kv47gm0"
          },
          {
            title: "Stress Reduction",
            author: "Sophia Bennett",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG092_gHHpXYdEqrG2yWYOGc6FcZt9br57PpkBxokd5e-YuOuCD9hio87-q1IcWbPSBJ7HIetJax7kFBTAUUd6m2P9IkyqiddLpXqSJh5UbHI6AxrHi6mbz85iTZTK5Jpu-on7WpyDv9XPt64pfW47v-T-D-If_JdJQJJ-vMyGlQUO7KIPrWe-zxV1r-NnlH8m9Fq--h4CFJ8gPcu4Q1URa0gXmAvUbIRtPAr0s0xxIVoELp520xWXA5CaCsP5FFjSapjOdreWArrL"
          }
        ].map((item, i) => (
          <Link to={item.link || '#'} key={i} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{ backgroundImage: `url("${item.img}")` }}
            ></div>
            <div>
              <p className="text-white text-base font-medium leading-normal">{item.title}</p>
              <p className="text-[#92c9a4] text-sm font-normal leading-normal">{item.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;