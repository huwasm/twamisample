import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Library: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="flex items-center bg-[#112217] p-4 pb-2 justify-between">
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Library</h2>
        <div className="flex w-12 items-center justify-end">
          <Search size={24} className="text-white" />
        </div>
      </div>
      
      {/* Tabs */}
      <div className="pb-3">
        <div className="flex border-b border-[#326744] px-4 gap-8">
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-[#13ec5b] text-white pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Books</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92c9a4] pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Courses</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92c9a4] pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Quests</p>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#23482f] overflow-hidden">
            <div className="flex items-center justify-center pl-4 pr-2">
              <Search size={24} className="text-[#92c9a4]" />
            </div>
            <input
              placeholder="Search books"
              className="flex w-full min-w-0 flex-1 resize-none bg-transparent border-none text-white focus:outline-0 focus:ring-0 placeholder:text-[#92c9a4] px-0 text-base h-full"
            />
          </div>
        </label>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-3 p-3 overflow-x-hidden">
        {['All', 'Started', 'Completed'].map((filter) => (
          <button key={filter} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#23482f] px-4">
            <p className="text-white text-sm font-medium leading-normal">{filter}</p>
          </button>
        ))}
      </div>

      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Racks</h3>
      
      <div className="flex flex-col">
        {[
          {
            title: "All Books",
            stats: "5 books · 5,000 pages",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoFtIkeSevMbQ3ogGTCT5ZUcQR6d-QaO0wemd-Sf2X2_p1q8-_Sk3vHjUVg_Z0qhGKQs9axfLyjxxyt5VKhzTFX_S8ISeCUuzAZ5CZ-YKcVqwycDh68Q02C_7CgCQOuXW00qDYJEHmlx0dG0Zo-2Ss5_ZtGaILsj0Wt_MdyX9fqBszmii4U2ClA3ilMKiF2-7qcX8lE14MFOxQYwowHjLj4HxGWNXtovb_QsIfoJ11JFYN8xQPC7mkV5KIgL1hK5F9p3-x_Vz1y-zj"
          },
          {
            title: "Mindfulness",
            stats: "2 books · 2,000 pages",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7D0FeetxaojEw1DLjNiXD9KDPIY58d3ns5fv_pC4wsVdme3wy-zNLQ4DHCFjH-iz3Ve5d9Z13-Q5DT8gueto-Y02tzE0QnvtZXfv4qkBLWaxKLdWHvaR19Ok_6PFFLfBJAGeE8sx-nHppf1ZnEkHypTg3qkrtL5_N1JSye8R7_h8m9BIO2bW5gkSoSiReQx8GURFaKJ5YNRV1OurjG3WtGAl7RhDys9ZaDPIa7SBx7bzLEbfTNcIMRvT9f3nutUbOxiVwT2pg0X7O"
          },
          {
            title: "Stress Reduction",
            stats: "3 books · 3,000 pages",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGqGRLaoFUr4agFNNmJtuZEnSmsB03vW5g5hwz6rthqQfxR03KCSsBYZjoJngzTnKkpjRzZPqG5vE1GkVOo9q9Odsbumc5cVVagv3lwd0Ona3nTV6O1ZNfkxpPry8y21YVzPh0P9hAYW5mxVQf4-Mn8gq39YOMocun0jgBsfFB6pyIACQMXELBUcPBcK4tpkQPW-e6z123r9zKIeB37dXJFGoF73e28hm0BNRdtm0nCSzRRxjD9YDFEamUMLGnHTrgbJnI4Itkzfi5"
          }
        ].map((item, i) => (
          <Link to="/reading/1" key={i} className="flex items-center gap-4 px-4 py-2 hover:bg-[#193322]">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
              style={{ backgroundImage: `url("${item.img}")` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">{item.title}</p>
              <p className="text-[#92c9a4] text-sm font-normal leading-normal line-clamp-2">{item.stats}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Library;