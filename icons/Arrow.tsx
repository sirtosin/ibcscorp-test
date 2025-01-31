export const ArrowRight = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.12793 11.3674H19.0184"
      stroke="white"
      strokeWidth="1.35367"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.9268 5.27588L19.0183 11.3674L12.9268 17.459"
      stroke="white"
      strokeWidth="1.35367"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowView = (props: any) => (
  <svg
    width="7"
    height="10"
    viewBox="0 0 7 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.248954 0.727041C0.522665 0.492029 0.963954 0.492029 1.23767 0.727041L5.87958 4.71265C6.09743 4.8997 6.09743 5.20186 5.87958 5.38891L1.23767 9.37452C0.963955 9.60953 0.522666 9.60953 0.248955 9.37452C-0.024756 9.13951 -0.0247561 8.76061 0.248955 8.5256L4.29317 5.04838L0.243369 1.57117C-0.0247559 1.34095 -0.0247569 0.957257 0.248954 0.727041Z"
      fill={props?.color}
    />
  </svg>
);
