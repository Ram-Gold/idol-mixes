import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <div className="container mx-auto px-6 py-12 max-w-4xl min-h-screen" style={{ backgroundColor: 'var(--bg-page)' }}>
      <Helmet>
        <title>Changelog &amp; Credits - Idol Mixes</title>
        <meta name="description" content="Updates and credits for the Idol Mixes tool." />
        <link rel="canonical" href="https://idol-mixes.vercel.app/others" />
      </Helmet>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 tracking-tight" style={{ color: 'var(--text-heading)' }}>Changelog</h1>
        <div className="space-y-10">
          {changelog.map((log, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>{log.date}</h2>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-body)' }}>
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

      <div className="border-t my-12" style={{ borderColor: 'var(--border-subtle)' }}></div>

      <section>
        <h1 className="text-4xl font-bold mb-8 tracking-tight" style={{ color: 'var(--text-heading)' }}>Credits</h1>
        <div className="space-y-6 leading-relaxed max-w-2xl" style={{ color: 'var(--text-body)' }}>
          <p>
            Idol Chant Finder is a tool for fans to explore J-Pop idol chants.
          </p>
          <p>
            Special thanks to the following: <br />
            <a href="https://www.youtube.com/@etanaruidolmixes" rel="noreferrer" style={{ color: 'var(--accent)' }}>ETANARU Idol Mixes</a> - Call &amp; Mixes for Japanese Idol Songs<br />
            <a href="https://kprofiles.com/ultimate-j-pop-vocab-guide-the-idol-dictionary/" rel="noreferrer" style={{ color: 'var(--accent)' }}>KProfiles</a> - Ultimate J-Pop Vocab Guide (The Idol Dictionary)<br />
            <a href="https://yumetwins.com/blog/types-of-japanese-idols" rel="noreferrer" style={{ color: 'var(--accent)' }}>YumeTwins</a> - Types of Japanese Idols<br />
            <a href="https://www.fun-japan.jp/en/articles/14014" rel="noreferrer" style={{ color: 'var(--accent)' }}>FUN! JAPAN</a> - Complete Guide to Oshikatsu Terminology!<br />
            <a href="https://www.hello-online.org/index.php?/topic/14218-wotagei-chant-guide-for-morning-musume-anime-expo-2009/#entry731443" rel="noreferrer" style={{ color: 'var(--accent)' }}>Hello Online</a> - Wotagei Chant Guide for Morning Musume (Anime Expo 2009)<br />
          </p>
          <img
            src="https://c.tenor.com/lcyE7yhDA3kAAAAd/tenor.gif"
            alt="Agnes Digital"
            width="200"
            height="200"
            className="rounded-2xl w-full max-w-[200px]"
          />
          <p>
            Developed with React and Tailwind CSS. <br />Icons provided by Font Awesome and React Icons.
          </p>
          <p className="font-mono text-sm pt-4" style={{ color: 'var(--text-muted)' }}>
            v1.5.0 &copy; 2026 Idol Mixes
          </p>
        </div>
      </section>
    </div>
  );
}

export default Others;
