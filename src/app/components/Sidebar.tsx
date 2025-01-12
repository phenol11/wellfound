export default function Sidebar() {
  return (
    <div className="w-64 bg-white text-black min-h-screen p-4 pt-16 pl-0">
      <ul className="space-y-4 mt-0">
        <li className="group flex items-center space-x-3 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            className="object-contain text-black group-hover:text-white"
          >
            <path d="M13 8H15V20H13V8Z" />
            <path d="M5 16H7V20H5V16Z" />
            <path d="M9 12H11V20H9V12Z" />
          </svg>
          <a href="/dashboard" className="text-lg no-underline">
            Dashboard
          </a>
        </li>

        <li className="group flex items-center space-x-3 p-2 rounded-lg bg-[#f4f6f8] text-[#3E51C9] active:bg-[#f4f6f8] active:text-[#3E51C9] w-full rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="object-contain text-[#3E51C9] group-hover:text-[#3E51C9]"
          >
            <path d="M12,16c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,16,12,16z M12,2C8.7,2,6,4.7,6,8s2.7,6,6,6s6-2.7,6-6S15.3,2,12,2z" />
            <path d="M16,24c-0.2,0-0.3,0-0.4-0.1L12,22.1l-3.6,1.8c-0.3,0.2-0.7,0.1-1,0C7.2,23.7,7,23.3,7,23v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v7.4l2.6-1.3c0.3-0.1,0.6-0.1,0.9,0l2.6,1.3V14c0-0.6,0.4-1,1-1s1,0.4,1,1v9c0,0.3-0.2,0.7-0.5,0.9C16.4,23.9,16.2,24,16,24z" />
          </svg>
          <a href="/skill-test" className="text-lg no-underline text-[#3E51C9]">
            Skill Test
          </a>
        </li>

        <li className="group flex items-center space-x-3 p-2">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4V20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20V8.34162C20 7.8034 19.7831 7.28789 19.3982 6.91161L14.9579 2.56999C14.5842 2.20459 14.0824 2 13.5597 2L6 2C4.89543 2 4 2.89543 4 4Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 2V6C14 7.10457 14.8954 8 16 8H20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <a href="/internship" className="text-lg no-underline">
            Internship
          </a>
        </li>
      </ul>
    </div>
  );
}
