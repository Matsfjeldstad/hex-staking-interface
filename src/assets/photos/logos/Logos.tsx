import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className: string;
};

export function ExtraHexLogo({ className }: Props) {
  return (
    <svg
      width='211'
      height='64'
      viewBox='0 0 211 64'
      className={cn('h-10 w-fit', className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8.55986 47.2641L6.09575 42.9955C6.01922 42.8372 6.01922 42.6527 6.09575 42.4945L8.8335 37.7521C8.93079 37.6031 9.09299 37.5092 9.27056 37.499H14.7435C14.9213 37.5094 15.0838 37.6032 15.1818 37.7521L17.9183 42.4945C17.9975 42.6539 17.9975 42.8412 17.9183 43.0007L15.1741 47.7404C15.076 47.8853 14.9177 47.9779 14.7435 47.9922H9.82693C9.31464 47.9592 8.84663 47.6902 8.55986 47.2641ZM26.3274 37.5029L20.8804 28.0545C20.7458 27.8524 20.5247 27.7248 20.2826 27.7093H9.37561C9.13343 27.7248 8.91233 27.8524 8.77774 28.0545L3.32427 37.5081C3.21674 37.7257 3.21674 37.981 3.32427 38.1986L4.92853 40.9708L7.72465 36.1272C7.87782 35.8934 8.13195 35.7453 8.41072 35.7275H15.5955C15.8764 35.7431 16.133 35.8915 16.2868 36.1272L19.8805 42.3569C20.0076 42.6082 20.0076 42.9051 19.8805 43.1564L17.0844 48H20.2787C20.5215 47.9856 20.7432 47.8571 20.8765 47.6535L26.3274 38.2012C26.4375 37.9815 26.4375 37.7226 26.3274 37.5029ZM36.2228 31.2511L27.8642 16.7463C27.5754 16.305 27.0937 16.0278 26.5673 16H9.83731C9.31091 16.0278 8.82926 16.305 8.5404 16.7463L0.177984 31.2511C-0.0593281 31.7194 -0.0593281 32.2728 0.177984 32.7411L2.0961 36.0649L7.65203 26.4257C7.84253 26.1349 8.15972 25.9518 8.50669 25.9325H21.1398C21.4864 25.9518 21.8032 26.1349 21.9932 26.4257L28.3078 37.3705C28.4647 37.6806 28.4647 38.0469 28.3078 38.3569L22.7467 47.9922H26.5725C27.0989 47.9644 27.5806 47.6872 27.8694 47.2459L36.2318 32.7424C36.4679 32.2738 36.4679 31.721 36.2318 31.2524L36.2228 31.2511Z' />
      <path d='M64.6487 43.5H48.9687V21.1H64.4567V26.86H55.3687V29.964H62.0887V34.764H55.3687V37.74H64.6487V43.5ZM73.4599 43.5H67.0599V39.052L73.0759 32.204L67.2519 25.548V21.1H73.6519V24.492L76.7239 28.076L79.7959 24.492V21.1H86.1959V25.548L80.3719 32.204L86.3879 39.052V43.5H79.9879V40.108L76.7239 36.3L73.4599 40.108V43.5ZM88.1424 26.86V21.1H105.422V26.86H99.9824V43.5H93.5824V26.86H88.1424ZM115.025 43.5H108.625V21.1H122.929L126.417 24.588V31.98L124.145 34.252L126.545 36.652V43.5H120.145V37.58L119.441 36.876H115.025V43.5ZM120.017 31.052V26.22H115.025V31.756H119.313L120.017 31.052ZM135.355 43.5H128.955V39.148L134.587 21.1H143.483L149.115 39.116V43.5H142.715V39.852L142.523 39.084H135.547L135.355 39.852V43.5ZM139.035 26.156L136.667 33.964H141.403L139.035 26.156ZM152.568 43.5V21.324H155.896V30.828H166.104V21.324H169.4V43.5H166.104V33.772H155.896V43.5H152.568ZM188.701 43.5H175.037V21.324H188.541V24.332H178.365V31.02H186.781V33.708H178.365V40.46H188.701V43.5ZM194.931 43.5H191.603V39.148L198.035 32.3L191.763 25.612V21.324H195.091V24.876L200.051 30.156L204.979 24.876V21.324H208.275V25.612L202.067 32.3L208.467 39.148V43.5H205.139V39.916L200.051 34.444L194.931 39.916V43.5Z' />
    </svg>
  );
}
export function Github({ className }: Props) {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      className={cn('h-10 w-fit', className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1277_2418)'>
        <path d='M12.333 2C6.80801 2 2.33301 6.475 2.33301 12C2.33188 14.0993 2.99182 16.1456 4.21922 17.8487C5.44663 19.5517 7.17915 20.8251 9.17101 21.488C9.67101 21.575 9.85801 21.275 9.85801 21.012C9.85801 20.775 9.84501 19.988 9.84501 19.15C7.33301 19.613 6.68301 18.538 6.48301 17.975C6.37001 17.687 5.88301 16.8 5.45801 16.562C5.10801 16.375 4.60801 15.912 5.44501 15.9C6.23301 15.887 6.79501 16.625 6.98301 16.925C7.88301 18.437 9.32101 18.012 9.89501 17.75C9.98301 17.1 10.245 16.663 10.533 16.413C8.30801 16.163 5.98301 15.3 5.98301 11.475C5.98301 10.387 6.37001 9.488 7.00801 8.787C6.90801 8.537 6.55801 7.512 7.10801 6.137C7.10801 6.137 7.94501 5.875 9.85801 7.163C10.6721 6.93706 11.5132 6.82334 12.358 6.825C13.208 6.825 14.058 6.937 14.858 7.162C16.77 5.862 17.608 6.138 17.608 6.138C18.158 7.513 17.808 8.538 17.708 8.788C18.345 9.488 18.733 10.375 18.733 11.475C18.733 15.313 16.396 16.163 14.171 16.413C14.533 16.725 14.846 17.325 14.846 18.263C14.846 19.6 14.833 20.675 14.833 21.013C14.833 21.275 15.021 21.587 15.521 21.487C17.506 20.8168 19.2309 19.541 20.4529 17.8392C21.6749 16.1373 22.3324 14.0951 22.333 12C22.333 6.475 17.858 2 12.333 2Z' />
      </g>
      <defs>
        <clipPath id='clip0_1277_2418'>
          <rect width='24' height='24' transform='translate(0.333008)' />
        </clipPath>
      </defs>
    </svg>
  );
}
export function Twitter({ className }: Props) {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      className={cn('h-10 w-fit', className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M23.583 5.13282C22.739 5.49955 21.846 5.74116 20.9322 5.85001C21.8925 5.28769 22.6147 4.39434 22.9633 3.33751C22.0554 3.86841 21.0637 4.24092 20.0308 4.43907C19.5959 3.98322 19.0728 3.62059 18.4933 3.3732C17.9138 3.12581 17.2901 2.99884 16.66 3.00001C14.1091 3.00001 12.0447 5.03438 12.0447 7.5422C12.0429 7.89102 12.0829 8.23881 12.1638 8.57813C10.3346 8.49238 8.54341 8.02575 6.90487 7.2081C5.26634 6.39044 3.81652 5.23977 2.64816 3.8297C2.23828 4.52069 2.02151 5.30909 2.02051 6.11251C2.02051 7.68751 2.84223 9.0797 4.08301 9.89532C3.34788 9.87787 2.62782 9.68331 1.98395 9.32813V9.38438C1.98395 11.5875 3.5777 13.4203 5.68707 13.8375C5.29041 13.9433 4.88165 13.9968 4.47113 13.9969C4.17984 13.9974 3.88921 13.9691 3.60348 13.9125C4.18988 15.7172 5.8966 17.0297 7.91832 17.0672C6.27553 18.3333 4.25861 19.0175 2.18457 19.0125C1.81642 19.012 1.44862 18.99 1.08301 18.9469C3.19294 20.2942 5.64556 21.0068 8.14895 21C16.6502 21 21.2946 14.0766 21.2946 8.07188C21.2946 7.87501 21.2894 7.67813 21.28 7.48595C22.1815 6.84472 22.9614 6.04787 23.583 5.13282Z' />
    </svg>
  );
}
