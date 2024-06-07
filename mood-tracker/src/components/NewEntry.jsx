import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function NewEntry() {
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');
    const [emotions, setEmotions] = useState([]);
    const [activities, setActivities] = useState([]);
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add the new entry to diaryData
        console.log({
            id: nanoid(),
            date,
            rating,
            emotions,
            activities,
            note
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Date:
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
                Rating:
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <label>
                Emotions:
                <input type="text" value={emotions} onChange={(e) => setEmotions(e.target.value.split(','))} />
            </label>
            <label>
                Activities:
                <input type="text" value={activities} onChange={(e) => setActivities(e.target.value.split(','))} />
            </label>
            <label>
                Note:
                <textarea value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            </label>
            <button type="submit">Add Entry</button>
        </form>
    );
}
