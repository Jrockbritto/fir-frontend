import { createSvgIcon, SvgIconProps } from "@mui/material/utils"; // eslint-disable-line no-use-before-define

const home = (
  <svg
    width="24"
    height="24"
    viewBox="0 2 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_190_938)">
      <path
        d="M5 12H3L12 3L21 12H19"
        stroke="#0CA37E"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
        stroke="#0CA37E"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21"
        stroke="#0CA37E"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_190_938">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const edit = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="edit" clip-path="url(#clip0_190_956)">
      <path
        id="Vector"
        d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
        stroke="#8391A1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M9 15H12L20.5 6.49998C20.8978 6.10216 21.1213 5.56259 21.1213 4.99998C21.1213 4.43737 20.8978 3.89781 20.5 3.49998C20.1022 3.10216 19.5626 2.87866 19 2.87866C18.4374 2.87866 17.8978 3.10216 17.5 3.49998L9 12V15Z"
        stroke="#8391A1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M16 5L19 8"
        stroke="#8391A1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_190_956">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const add = (
  <svg
    style={{ marginBottom: "-2px" }}
    width="20"
    height="20"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Add">
      <path
        id="Line7"
        d="M14.5 11H10.9667H7.5"
        stroke="#8895AA"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        id="Line8"
        d="M11 7.5L11 11L11 14.5"
        stroke="#8895AA"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <rect
        id="Rectangle86"
        x="1"
        y="1"
        width="20"
        height="20"
        rx="6"
        stroke="#8895AA"
        strokeWidth={1.4}
      />
    </g>
  </svg>
);

export { add, edit, home };
