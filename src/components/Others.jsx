import React, { useEffect } from 'react';
import { CHANGELOG_DATA } from '../data/changelogData';

function Others() {
  const changelog = CHANGELOG_DATA;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      const existingScript = document.querySelector('script[src="https://tenor.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);


  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl min-h-screen">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 tracking-tight">Changelog</h1>
        <div className="space-y-10">
          {changelog.map((log, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold text-gray-400 mb-3">{log.date}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {log.items.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-2 flex justify-start">
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 my-12"></div>

      <section>
        <h1 className="text-4xl font-bold mb-8 tracking-tight">Credits</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-2xl">
          <p>
            Idol Chant Finder is a tool for fans to explore J-Pop idol chants.
          </p>
          <p>
            Special thanks to the following: <br />
            <a href="https://www.youtube.com/@etanaruidolmixes" rel="noreferrer">ETANARU Idol Mixes</a> - Call & Mixes for Japanese Idol Songs<br />
            <a href="https://kprofiles.com/ultimate-j-pop-vocab-guide-the-idol-dictionary/" rel="noreferrer">KProfiles</a> - Ultimate J-Pop Vocab Guide (The Idol Dictionary)<br />
            <a href="https://yumetwins.com/blog/types-of-japanese-idols" rel="noreferrer">YumeTwins</a> - Types of Japanese Idols<br />
            <a href="https://www.fun-japan.jp/en/articles/14014" rel="noreferrer">FUN! JAPAN</a> - Complete Guide to Oshikatsu Terminology!<br />
            <a href="https://www.hello-online.org/index.php?/topic/14218-wotagei-chant-guide-for-morning-musume-anime-expo-2009/#entry731443" rel="noreferrer">Hello Online</a> - Wotagei Chant Guide for Morning Musume (Anime Expo 2009)<br />
          </p>
          <img
            src="https://c.tenor.com/lcyE7yhDA3kAAAAd/tenor.gif"
            alt="Agnes Digital"
            className="rounded-2xl max-w-sm"
          />
          <p>
            Developed with React and Tailwind CSS. <br />Icons provided by Font Awesome and React Icons.
          </p>
          <p className="font-mono text-sm pt-4">
            v1.5.0 &copy; 2026 Idol Mixes
          </p>
        </div>
      </section>
    </div>
  );
}

export default Others;
