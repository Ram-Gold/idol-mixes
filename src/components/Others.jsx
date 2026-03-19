import React from 'react';

function Others() {
  const changelog = [
    {
      date: '2026-03-20',
      items: [
        'Added navigation bar to Header',
        'Implemented Glossary page with minimalist dictionary style',
        'Created Others page with changelog and credits',
        'Implemented inline editable title for chant sets',
        'Added screenshot watermark with html2canvas'
      ]
    },
    {
      date: '2026-03-19',
      items: [
        'Updated lightstick color alignment in Header',
        'Added Hiragana and Katakana display options'
      ]
    },
    {
      date: '2026-03-18',
      items: [
        'Initial UI implementation with React and Tailwind CSS'
      ]
    }
  ];

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
        </div>
      </section>

      <div className="border-t border-gray-100 my-12"></div>

      <section>
        <h1 className="text-4xl font-bold mb-8 tracking-tight">Credits</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-2xl">
          <p>
            Idol Chant Finder is a dedicated tool created for fans to explore and manage J-Pop idol chants effectively.
          </p>
          <p>
            Special thanks to the open-source community and idol fans worldwide for providing the data and
            inspiration for this project.
          </p>
          <p>
            Developed with React and Tailwind CSS. Icons provided by Font Awesome and React Icons.
          </p>
          <p className="font-mono text-sm pt-4">
            v1.3.0 &copy; 2026 Idol Mixes
          </p>
        </div>
      </section>
    </div>
  );
}

export default Others;
