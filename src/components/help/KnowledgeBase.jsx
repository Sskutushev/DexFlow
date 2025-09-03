import React, { useState } from 'react';
import { helpArticles } from '../../data/helpData';

const KnowledgeBase = () => {
    const [selectedArticleId, setSelectedArticleId] = useState(helpArticles[0].id);

    const selectedArticle = helpArticles.find(article => article.id === selectedArticleId) || helpArticles[0];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <ul className="space-y-2 bg-surface p-4 rounded-lg md:sticky md:top-24 overflow-x-auto md:overflow-x-hidden">
                    {helpArticles.map(article => (
                        <li key={article.id}>
                            <button
                                onClick={() => setSelectedArticleId(article.id)}
                                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                                    selectedArticleId === article.id
                                        ? 'font-semibold text-text bg-glass'
                                        : 'text-muted hover:bg-glass-strong'
                                }`}
                            >
                                {article.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:col-span-3 bg-surface p-8 rounded-lg mt-8 md:mt-0">
                <h2 className="text-3xl font-bold mb-6 text-text">{selectedArticle.title}</h2>
                <div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed">
                    <p>{selectedArticle.content}</p>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeBase;
