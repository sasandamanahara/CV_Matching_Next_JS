import React from 'react';

export default function CardsGrid({ pendingCount, interviewingCount, offeredCount }) {
  return (
    <section>
      <div className="relative items-center w-full px-1 py-1 mx-auto md:px-1 lg:px-2 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">

          <div className="px-8">
            <div className="flex items-center justify-between w-72 p-6 bg-orange-100 shadow-lg rounded-2xl">
              <div className="w-2/6">
                <span className="font-bold text-orange-500 text-xl">
                  {pendingCount}
                </span>
              </div>
              <div className="w-3/6">
                <p className="text-lg text-orange-700">
                  Candidates to Review
                </p>
              </div>
            </div>
          </div>

          <div className="px-8">
            <div className="flex items-center justify-between w-72 p-6 bg-orange-300 shadow-lg rounded-2xl">
              <div className="w-2/6">
                <span className="font-bold text-orange-700 text-xl">
                  {interviewingCount}
                </span>
              </div>
              <div className="w-3/6">
                <p className="text-lg text-orange-700">
                  Schedule for Interview
                </p>
              </div>
            </div>
          </div>

          <div className="px-8">
            <div className="flex items-center justify-between w-72 p-6 bg-orange-100 shadow-lg rounded-2xl">
              <div className="w-2/6">
                <span className="font-bold text-orange-500 text-xl">
                  {offeredCount}
                </span>
              </div>
              <div className="w-3/6">
                <p className="text-lg text-orange-700">
                  Awaiting Acceptance
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
