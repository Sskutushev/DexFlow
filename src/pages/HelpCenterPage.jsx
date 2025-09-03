import React, { useState } from 'react';
import KnowledgeBase from '../components/help/KnowledgeBase';
import NewsAndUpdates from '../components/help/NewsAndUpdates';
import VideoTutorials from '../components/help/VideoTutorials';

const TABS = {
  KNOWLEDGE_BASE: 'KNOWLEDGE_BASE',
  NEWS_AND_UPDATES: 'NEWS_AND_UPDATES',
  VIDEO_TUTORIALS: 'VIDEO_TUTORIALS',
};

const HelpCenterPage = () => {
    const [activeTab, setActiveTab] = useState(TABS.KNOWLEDGE_BASE);

    const renderContent = () => {
        switch (activeTab) {
            case TABS.KNOWLEDGE_BASE:
                return <KnowledgeBase />;
            case TABS.NEWS_AND_UPDATES:
                return <NewsAndUpdates />;
            case TABS.VIDEO_TUTORIALS:
                return <VideoTutorials />;
            default:
                return <KnowledgeBase />;
        }
    };

    const TabButton = ({ tabId, title }) => (
        <button
            onClick={() => setActiveTab(tabId)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                activeTab === tabId
                    ? 'bg-accent-gradient text-white'
                    : 'text-muted hover:bg-surface'
            }`}>
            {title}
        </button>
    );

    return (
        <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Центр помощи</h1>
                    <p className="text-lg text-muted">Найдите ответы, руководства и новости.</p>
                </div>

                <div className="flex justify-center items-center mb-10 bg-glass p-2 rounded-lg space-x-2 overflow-x-auto custom-scrollbar">
                    <TabButton tabId={TABS.KNOWLEDGE_BASE} title="База знаний" />
                    <TabButton tabId={TABS.NEWS_AND_UPDATES} title="Новости и обновления" />
                    <TabButton tabId={TABS.VIDEO_TUTORIALS} title="Видеоуроки" />
                </div>

                <div>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default HelpCenterPage;

