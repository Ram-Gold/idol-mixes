import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/glossaryData';

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
