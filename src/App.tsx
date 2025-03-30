import { useCallback, useEffect, useState } from '@lynx-js/react';

import arrow from './assets/arrow.png';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className="fixed bg-gradient-custom rounded-full w-[200vw] h-[200vw] -top-[60vw] -left-[14vw] rotate-[15deg]" />
      <view className="relative min-h-screen flex flex-col items-center justify-center">
        <view className="flex-[5] flex flex-col items-center justify-center z-10">
          <view
            className="flex flex-col items-center justify-center mb-2"
            bindtap={onTap}
          >
            {alterLogo ? (
              <image
                src={reactLynxLogo}
                className="w-[100px] h-[100px] animate-spin-slow"
              />
            ) : (
              <image
                src={lynxLogo}
                className="w-[100px] h-[100px] animate-shake"
              />
            )}
          </view>
          <text className="text-[36px] font-bold text-blue-500">React</text>
          <text className="text-[22px] font-semibold italic mb-2 text-pink-400">
            on Lynx
          </text>
        </view>
        <view className="flex flex-col items-center justify-center">
          <image src={arrow} className="w-6 h-6" />
          <text className="text-[20px] text-white/85 font-bold m-[15px]">
            Tap the logo and have fun!
          </text>
          <text className="text-xs m-[5px] text-white/65">
            Edit
            <text className="italic text-yellow-300">{' src/App.tsx '}</text>
            to see updates!
          </text>
          <text className="mt-4 p-2 bg-purple-600 rounded-lg text-white">
            Tailwind CSS is working!
          </text>
        </view>
        <view className="flex-1"></view>
      </view>
    </view>
  );
}
