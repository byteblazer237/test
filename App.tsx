
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatTab from './components/ChatTab';
import VisionTab from './components/VisionTab';
import SearchTab from './components/SearchTab';
import VoiceTab from './components/VoiceTab';
import { AppTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.CHAT);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.CHAT: return <ChatTab />;
      case AppTab.VISION: return <VisionTab />;
      case AppTab.SEARCH: return <SearchTab />;
      case AppTab.VOICE: return <VoiceTab />;
      default: return <ChatTab />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F9F9F9] text-[#1D1D1F]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 relative flex flex-col min-w-0">
        <header className="h-20 glass-panel border-b border-gray-100 px-10 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold capitalize">{activeTab.replace('-', ' ')}</h2>
            <div className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded-md border border-green-100">System Online</div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-black transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>
            <div className="h-8 w-[1px] bg-gray-100"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Nexus Pro</span>
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold apple-shadow">JS</div>
            </div>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-gray-50/50">
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default App;
