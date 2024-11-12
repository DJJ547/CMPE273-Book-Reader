import React, { useState, useContext, useRef } from "react";
import { TTSContext } from "./context/TTSContext";
import { AudioTTSContext } from "./context/AudioTTSContext";
import ReactPlayer from "react-player";

export default function AudioTTS() {
  const audio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const { isPlaying, setIsPlaying, AudioRef, dropdown, setDropdown } =
    useContext(AudioTTSContext);
  const { bookcover } = useContext(TTSContext);
  return (
    <div className="audio-tts">
      <h5 className="text-lg font-semibold text-black">Audio TTS</h5>

      {/* cover rotating disc */}
      <div className="audio-player-container">
        <div className="rotating-disc">
          <img src={bookcover} alt="Album Cover" className="album-cover" />
        </div>
        {/* drop down menu */}
        <div className="ml-auto">
          <div className="mt-4 relative inline-block text-left">
            <div>
              <button
                onClick={() => setDropdown((prev) => !prev)}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                aria-expanded="true"
                aria-haspopup="true"
              >
                AI Voices
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {dropdown && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    English man
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* audio player */}
        <ReactPlayer
          ref={AudioRef}
          url={audio}
          controls={true}
          isPlaying={isPlaying}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          width="100%"
          height="100px"
        />
      </div>
    </div>
  );
}