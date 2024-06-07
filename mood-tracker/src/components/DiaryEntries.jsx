import React from 'react';
import diaryData from '../dairyData';
import DiaryCard from './DiaryCard';
import '../App.css';

export default function DiaryEntries() {
    return (
        <main className="main-container">
            <div className="sub-header">
                <h3>April Reports</h3>
            </div>
            {diaryData.map(diary => (
                <DiaryCard
                    key={diary.id}
                    date={diary.date}
                    rating={diary.rating}
                    emotions={diary.emotions}
                    activities={diary.activities}
                    note={diary.note}
                />
            ))}
        </main>
    );
}
