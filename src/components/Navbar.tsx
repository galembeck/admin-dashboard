import { Bell, Grid2X2, Maximize, Search, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <div className="navbar w-[100%] p-[20px] flex items-center justify-between">
      <div className="logo flex items-center font-bold text-3xl gap-3">
        <img src="logo.svg" alt="Logo" />
        <span>uifry</span>
      </div>
      <div className="icons flex items-center gap-[20px]">
        <Search />
        <Grid2X2 />
        <Maximize />
        <div className="notification relative">
          <Bell />
          <span className="bg-red-700 text-white w-[16px] h-[16px] rounded-[50%] absolute top-[-10px] right-[-10px] flex items-center justify-center text-xs">3</span>
        </div>
        <div className="user flex items-center gap-[10px]">
          <img src="https://avatars.githubusercontent.com/u/51977156?v=4" alt="User image" className="w-[26px] h-[26px] rounded-[50%] object-cover" />
          <span>Pedro Galembeck</span>
        </div>
        <Settings />
      </div>
    </div>
  );
}