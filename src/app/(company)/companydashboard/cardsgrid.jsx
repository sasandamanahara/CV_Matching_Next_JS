import React from 'react';

export default function CardsGrid({ pendingCount, interviewingCount, offeredCount }) {
  return (
    <section>
      <div className="relative items-center w-full px-1 py-1 mx-auto md:px-1 lg:px-2 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
          
          <div className="px-8">
            <div className="flex items-center justify-between w-72 p-6 bg-white shadow-lg rounded-2xl">
              <div className="w-2/6">
                <span className="font-bold text-indigo-500 text-xl">
                {pendingCount}
                </span>
              </div>
              <div className="w-3/6">
                {/* pending */}
                <p className="text-lg text-gray-500">
                  Candidates to Review
                </p>
              </div>
              
            </div>
          </div>

          <div className="px-8">
            <div className="flex items-center justify-between w-72 p-6 bg-white shadow-lg rounded-2xl">
              <div className="w-2/6">
                <span className="font-bold text-indigo-500 text-xl">
                 {interviewingCount}
                </span>
              </div>
              {/* Interviwing */}
              <div className="w-3/6">
                <p className="text-lg text-gray-500">
                  Schedule for Interview
                </p>
              </div>
             
            </div>
          </div>

          <div className="px-8">
            <div className="flex items-center justify-between w-72 p-6 bg-white shadow-lg rounded-2xl">
              <div className="w-2/6">
                <span className="font-bold text-indigo-500 text-xl">
                  {offeredCount}
                </span>
              </div>
              {/* Offered  */}
              <div className="w-3/6">
                <p className="text-lg text-gray-500">
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
