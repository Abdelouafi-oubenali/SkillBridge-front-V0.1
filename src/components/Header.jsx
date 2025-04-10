import CourseList from "../course/CourseList";

function Header() {
    return (
      <header className="sticky z-52 top-0 left-0 flex items-center justify-between w-full py-2 px-6 shadow-sm bg-white">
        <div className="flex items-center gap-10">
          <div className="w-auto">
            <a href="/" className="text-2xl font-bold font-unbounded text-orange">FootTicket</a>
          </div>
          <div className="border border-xs border-[#b2b2b2] rounded-full bg-gray-50 flex items-center gap-2 px-1 py-1">
            <div className="flex items-center gap-2 w-[300px] pl-0.5">
              <span>
                <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve" width="25px" className="fill-gray-600">
                  <path d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z" />
                </svg>
              </span>
              <div className="w-full">
                <input type="text" placeholder="Search for events" className="h-[35px] w-full outline-none border-none text-sm/12" />
              </div>
            </div>
            <div className="w-[1px] h-[38px] bg-[#B2B2B2]"></div>
            <div className="flex items-center gap-2 w-[300px]">
              <span>
                <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve" width="25px" className="fill-gray-600">
                  <path d="M11.6 11.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-7.6C8.5 4 6 6.5 6 9.6 6 13.8 11.6 20 11.6 20s5.6-6.2 5.6-10.4c0-3.1-2.5-5.6-5.6-5.6z" />
                </svg>
              </span>
              <div className="w-full">
                <input type="text" placeholder="Search for events" className="h-[35px] w-full outline-none border-none text-sm/12" />
              </div>
              <div>
                <button className="w-[38px] h-[38px] bg-green-600 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#d63621]">
                  <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve" width="25px" className="fill-white">
                    <path d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav className="flex justify-end">
          <ul className="flex gap-7 items-center">
            <li className="group">
              <a href="/organizer/create" className="flex flex-col items-center">
                <span className="group-hover:text-orange text-darkblue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </a>
            </li>
            <li className="group">
              <a href="/organizer/create" className="flex flex-col items-center">
                <span className="group-hover:text-orange text-darkblue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                  </svg>
                </span>
              </a>
            </li>
            <li className="group">
              <a href="/organizer/create" className="flex flex-col items-center">
                <span className="group-hover:text-orange text-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                    <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                    <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <button className="circl_nv flex justify-center items-center w-[42px] h-[42px] bg-gray-200 hover:bg-gray-300 text-orange rounded-full cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" />
              </button>
            </li>
          </ul>
  
          <div className="menu_nv absolute right-0 top-full bg-white border border-1 border-gray-300 hidden">
            <ul className="w-60 flex flex-col">
              <a href="/account/profile">
                <li className="flex flex-col w-full py-3 px-4 hover:bg-gray-100">
                  <span>John Doe</span>
                  <span>john.doe@example.com</span>
                </li>
              </a>
              <div className="w-full h-[1.7px] bg-gray-200"></div>
              <a href="/organizer/manage-events">
                <li className="w-full py-3 px-4 hover:bg-gray-100">
                  <span>Manage events</span>
                </li>
              </a>
              <a href="/organizer/tickets">
                <li className="w-full py-3 px-4 hover:bg-gray-100">
                  <span>Tickets (3)</span>
                </li>
              </a>
              <div className="w-full h-[1.7px] bg-gray-200"></div>
              <a href="/setting/profile">
                <li className="w-full py-3 px-4 hover:bg-gray-100">
                  <span>Settings</span>
                </li>
              </a>
              <a href="/logout">
                <li className="w-full py-3 px-4 hover:bg-gray-100">
                  <span>Log out</span>
                </li>
              </a>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;
  