'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is the MERN + Next.js stack?',
    a: 'MERN stands for MongoDB, Express.js, React, and Node.js. Next.js sits on top of React to add routing, server rendering, API routes, and great DX. Together, you get a full‑stack framework to build UI, APIs, and data in one codebase.',
  },
  {
    q: 'How does data flow from client to database?',
    a: 'The React/Next.js UI calls Next.js API routes or Express endpoints. Those handlers run on the server (Node.js), validate input, and read/write data in MongoDB using an ODM like Mongoose or the MongoDB driver.',
  },
  {
    q: 'How do you structure a full‑stack project?',
    a: 'Keep UI components/pages in the app directory, server logic in API routes (app/api/*) or a separate Express app, and shared types/utils in a shared folder. Use environment variables for secrets and .env files per environment.',
  },
  {
    q: 'How do you handle auth and state?',
    a: 'Use NextAuth.js or JWTs for authentication. Store session securely (HTTP‑only cookies). Manage client state with React state, Context, or libraries like Zustand/Redux; query server state with SWR/React Query.',
  },
  {
    q: 'How do you deploy MERN + Next.js apps?',
    a: 'Deploy the Next.js app to Vercel or Netlify. For dedicated backends, host Express/Node on Render/Railway. Use managed MongoDB (Atlas). Set environment variables on the platform and connect your Git repo for CI/CD.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left md:text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 text-white hover:bg-gray-800/60 transition-colors"
                >
                  <span className="font-medium">{item.q}</span>
                  <span className="text-gray-400">{isOpen ? '▾' : '▸'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-400">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
