import React from 'react';

const steps = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    text: "You try to learn on your own",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    text: "You get confused and give up",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    text: "You feel guilty and try again",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center animate-fade-up">
          Let Me Guess...
        </h2>

        <div className="max-w-3xl mx-auto animate-fade-up">
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-center md:text-left">
            You&#39;ve tried videos, apps, asking friends, but still can&#39;t read the Quran fluently. You&#39;re ashamed. You keep quitting. You feel stuck.
          </p>

          <div className="bg-emerald-50 rounded-xl p-6 md:p-8 mb-10 border-l-4 border-emerald-600">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-800">
              The Loop of Frustration
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {steps.map(({ icon, text }, i) => (
                <div key={i} className="flex flex-col items-center text-center animate-fade-up">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {icon}
                    </svg>
                  </div>
                  <p className="font-medium text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-center md:text-left animate-fade-up">
            This cycle repeats month after month, year after year. But it doesn&#39;t have to be this way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
