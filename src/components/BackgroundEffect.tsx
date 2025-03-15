
import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main grid */}
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(255,125,59,0.1)_1px,transparent_1px)] bg-[size:30px_30px] z-0"
      ></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-[-15%] -left-[10%] w-[40%] h-[40%] rounded-full bg-hackathon-purple/10 blur-[100px] z-0"></div>
      <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-hackathon-orange/10 blur-[100px] z-0"></div>
      <div className="absolute -bottom-[10%] left-[30%] w-[35%] h-[35%] rounded-full bg-hackathon-green/10 blur-[100px] z-0"></div>
      
      {/* Circuit pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPXN5bWJvbCBpZD0iY2lyY3VpdCIgdmlld0JveD0iMCAwIDkwIDkwIj4KPGNpcmNsZSBjeD0iNDUiIGN5PSI0NSIgcj0iMiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTSA0NSAyMyBMIDQ1IDQ1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNCIvPgo8cGF0aCBkPSJNIDQ1IDY3IEwgNDUgNDUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC40Ii8+CjxwYXRoIGQ9Ik0gMjMgNDUgTCA0NSA0NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjQiLz4KPHBhdGggZD0iTSA2NyA0NSBMIDQ1IDQ1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNCIvPgo8L3N5bWJvbD4KPC9kZWZzPgo8dXNlIGhyZWY9IiNjaXJjdWl0IiB4PSIwIiB5PSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIiAvPgoKPC9zdmc+')] z-0"></div>
    </div>
  );
};

export default BackgroundEffect;
