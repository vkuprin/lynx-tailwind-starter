import { useCallback, useEffect, useState } from '@lynx-js/react';

import arrow from './assets/arrow.png';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('ReactLynx App Initialized');
  }, []);

  const onTapLogo = useCallback(() => {
    'background only';
    setAlterLogo((prev) => !prev);
  }, []);

  return (
    <view
      className="relative min-h-screen flex flex-col items-center justify-center p-6
                   bg-gradient-to-b from-sky-100 via-purple-100 to-pink-100
                   dark:bg-gradient-to-b dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950
                   overflow-hidden"
    >
      <view className="flex-[5] flex flex-col items-center justify-center z-10 mb-8 w-full">
        <view
          className="flex flex-col items-center justify-center mb-3
                     transform transition-transform duration-100 ease-in-out active:scale-95"
          bindtap={onTapLogo}
        >
          {alterLogo ? (
            <image
              src={reactLynxLogo}
              className="w-[110px] h-[110px] animate-spin-slow"
            />
          ) : (
            <image
              src={lynxLogo}
              className="w-[110px] h-[110px] animate-shake"
            />
          )}
        </view>
        <text className="text-[40px] font-bold text-blue-700 dark:text-blue-300">
          React
        </text>
        <text className="text-[24px] font-semibold italic mb-4 text-pink-600 dark:text-pink-300">
          on Lynx
        </text>
      </view>

      <view className="flex flex-col items-center justify-center z-10 w-full px-4">
        <image src={arrow} className="w-7 h-7 mb-2" />
        <text className="text-xl text-center font-medium text-gray-800 dark:text-gray-200 my-3">
          Tap the logo and have fun!
        </text>
        <text className="text-sm text-center text-gray-700 dark:text-gray-300 my-2">
          Edit
          <text className="italic font-mono text-yellow-700 dark:text-yellow-400 mx-1 px-1 bg-black/5 dark:bg-white/10 rounded">
            {'src/App.tsx'}
          </text>
          to see updates!
        </text>
        <text className="mt-6 py-2 px-4 bg-white/70 dark:bg-black/50 backdrop-blur-sm text-purple-900 dark:text-purple-200 rounded-lg text-sm font-medium shadow-md">
          Tailwind CSS is Enhanced!
        </text>
      </view>

      <view className="flex-1"></view>
    </view>
  );
}
