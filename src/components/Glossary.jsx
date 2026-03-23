import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { GLOSSARY_TERMS } from '../data/glossaryData';

function Glossary() {
  const [search, setSearch] = useState('');

  const filteredTerms = GLOSSARY_TERMS.filter(item =>
    item.term.toLowerCase().includes(search.toLowerCase()) ||
    item.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl min-h-screen" style={{ backgroundColor: 'var(--bg-page)' }}>
      <Helmet>
        <title>Idol Culture Glossary - Idol Mixes</title>
        <meta name="description" content="A comprehensive glossary of Japanese idol culture, wotagei terms, and fan vocabulary." />
        <link rel="canonical" href="https://idol-mixes.vercel.app/glossary" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8 tracking-tight" style={{ color: 'var(--text-heading)' }}>Glossary</h1>

      <div className="mb-12">
        <input
          type="text"
          placeholder="Search terms..."
          className="w-full bg-transparent py-2 px-1 focus:outline-none text-lg transition-colors"
          style={{
            borderBottom: '1px solid var(--border-subtle)',
            color: 'var(--input-text)',
          }}
          onFocus={e => (e.target.style.borderBottomColor = 'var(--text-heading)')}
          onBlur={e => (e.target.style.borderBottomColor = 'var(--border-subtle)')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-8">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div
              key={index}
              className="pb-8 last:border-0"
              style={{ borderBottom: '1px solid var(--border-subtle)' }}
            >
              <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--accent)' }}>{item.term}</h2>
              <p className="leading-relaxed ml-4" style={{ color: 'var(--text-body)' }}>
                {item.definition}
              </p>
            </div>
          ))
        ) : (
          <p className="italic" style={{ color: 'var(--text-muted)' }}>No terms found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Glossary;
