import React from 'react';
import diaryData from '../dairyData';
import DiaryCard from './DiaryCard';

export default function Highlights() {
    const highlightedEntries = diaryData.filter(diary => diary.isHighlight);

    return (
        <main className="main-container">
            <div className="sub-header">
                <h3>Highlights</h3>
            </div>
            {highlightedEntries.map(diary => (
                <DiaryCard
                    key={diary.id}
                    date={diary.date}
                    rating={diary.rating}
                    emotions={diary.emotions}
                    activities={diary.activities}
                    note={diary.note}
                    isHighlight={diary.isHighlight}
                />
            ))}
        </main>
    );
}
