import { Link } from "react-router-dom";

import { menu } from '../data';

export function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div key={item.id} className="item flex flex-col gap-[10px] mb-[20px]">
          <span className="title text-xs font-extralight text-text-soft-color">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} key={listItem.id} className="item flex items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-soft-background">
              <img src={listItem.icon} alt="Icon" />
              <span className="item-title">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}