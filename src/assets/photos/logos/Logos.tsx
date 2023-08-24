import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className: string;
};

export function ExtraHexLogo({ className }: Props) {
  return (
    <svg
      width="211"
      height="64"
      viewBox="0 0 211 64"
      className={cn('h-10 w-fit', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.55986 47.2641L6.09575 42.9955C6.01922 42.8372 6.01922 42.6527 6.09575 42.4945L8.8335 37.7521C8.93079 37.6031 9.09299 37.5092 9.27056 37.499H14.7435C14.9213 37.5094 15.0838 37.6032 15.1818 37.7521L17.9183 42.4945C17.9975 42.6539 17.9975 42.8412 17.9183 43.0007L15.1741 47.7404C15.076 47.8853 14.9177 47.9779 14.7435 47.9922H9.82693C9.31464 47.9592 8.84663 47.6902 8.55986 47.2641ZM26.3274 37.5029L20.8804 28.0545C20.7458 27.8524 20.5247 27.7248 20.2826 27.7093H9.37561C9.13343 27.7248 8.91233 27.8524 8.77774 28.0545L3.32427 37.5081C3.21674 37.7257 3.21674 37.981 3.32427 38.1986L4.92853 40.9708L7.72465 36.1272C7.87782 35.8934 8.13195 35.7453 8.41072 35.7275H15.5955C15.8764 35.7431 16.133 35.8915 16.2868 36.1272L19.8805 42.3569C20.0076 42.6082 20.0076 42.9051 19.8805 43.1564L17.0844 48H20.2787C20.5215 47.9856 20.7432 47.8571 20.8765 47.6535L26.3274 38.2012C26.4375 37.9815 26.4375 37.7226 26.3274 37.5029ZM36.2228 31.2511L27.8642 16.7463C27.5754 16.305 27.0937 16.0278 26.5673 16H9.83731C9.31091 16.0278 8.82926 16.305 8.5404 16.7463L0.177984 31.2511C-0.0593281 31.7194 -0.0593281 32.2728 0.177984 32.7411L2.0961 36.0649L7.65203 26.4257C7.84253 26.1349 8.15972 25.9518 8.50669 25.9325H21.1398C21.4864 25.9518 21.8032 26.1349 21.9932 26.4257L28.3078 37.3705C28.4647 37.6806 28.4647 38.0469 28.3078 38.3569L22.7467 47.9922H26.5725C27.0989 47.9644 27.5806 47.6872 27.8694 47.2459L36.2318 32.7424C36.4679 32.2738 36.4679 31.721 36.2318 31.2524L36.2228 31.2511Z" />
      <path d="M64.6487 43.5H48.9687V21.1H64.4567V26.86H55.3687V29.964H62.0887V34.764H55.3687V37.74H64.6487V43.5ZM73.4599 43.5H67.0599V39.052L73.0759 32.204L67.2519 25.548V21.1H73.6519V24.492L76.7239 28.076L79.7959 24.492V21.1H86.1959V25.548L80.3719 32.204L86.3879 39.052V43.5H79.9879V40.108L76.7239 36.3L73.4599 40.108V43.5ZM88.1424 26.86V21.1H105.422V26.86H99.9824V43.5H93.5824V26.86H88.1424ZM115.025 43.5H108.625V21.1H122.929L126.417 24.588V31.98L124.145 34.252L126.545 36.652V43.5H120.145V37.58L119.441 36.876H115.025V43.5ZM120.017 31.052V26.22H115.025V31.756H119.313L120.017 31.052ZM135.355 43.5H128.955V39.148L134.587 21.1H143.483L149.115 39.116V43.5H142.715V39.852L142.523 39.084H135.547L135.355 39.852V43.5ZM139.035 26.156L136.667 33.964H141.403L139.035 26.156ZM152.568 43.5V21.324H155.896V30.828H166.104V21.324H169.4V43.5H166.104V33.772H155.896V43.5H152.568ZM188.701 43.5H175.037V21.324H188.541V24.332H178.365V31.02H186.781V33.708H178.365V40.46H188.701V43.5ZM194.931 43.5H191.603V39.148L198.035 32.3L191.763 25.612V21.324H195.091V24.876L200.051 30.156L204.979 24.876V21.324H208.275V25.612L202.067 32.3L208.467 39.148V43.5H205.139V39.916L200.051 34.444L194.931 39.916V43.5Z" />
    </svg>
  );
}
