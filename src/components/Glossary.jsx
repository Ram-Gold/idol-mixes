import React, { useState } from 'react';

const GLOSSARY_TERMS = [
  {
    term: "Mix (ミックス)",
    definition: "A specific sequence of chants (usually in English, Japanese, or Ainu) shouted by fans during the intro or instrumental breaks of a song."
  },
  {
    term: "Standard Mix",
    definition: "The most common mix: 'Tiger, Fire, Cyber, Fiber, Diver, Viber, Jya Jya!'"
  },
  {
    term: "Overture",
    definition: "The instrumental track played at the beginning of a concert to build excitement before the idols appear on stage."
  },
  {
    term: "Call & Response",
    definition: "A planned interaction where the idol says something and the fans shout back a specific response."
  },
  {
    term: "Wotagei (ヲタ芸)",
    definition: "A style of dancing or cheering performed by fans (wota) involving distinct arm movements and lightsticks."
  },
  {
    term: "Kekkon Shite (結婚して)",
    definition: "Literally 'Marry me!'. A common shout during quiet moments or specific song parts."
  },
  {
    term: "Ike-kojo (言いたいことがあるんだよ...)",
    definition: "A long, emotional chant often performed during a long solo or instrumental part, usually starting with 'I have something I want to say!'"
  }
];

function Glossary() {
  const [search, setSearch] = useState('');

  const filteredTerms = GLOSSARY_TERMS.filter(item => 
    item.term.toLowerCase().includes(search.toLowerCase()) || 
    item.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl min-h-screen">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Glossary</h1>
      
      <div className="mb-12">
        <input 
          type="text" 
          placeholder="Search terms..." 
          className="w-full bg-transparent border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black transition-colors text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-8">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div key={index} className="pb-8 border-b border-gray-100 last:border-0">
              <h2 className="text-xl font-bold text-accent mb-2">{item.term}</h2>
              <p className="text-gray-700 leading-relaxed ml-4">
                {item.definition}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic">No terms found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Glossary;
