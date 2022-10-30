import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const options = Object.keys({ good, neutral, bad });
  console.log(options);

  const calcFeedbackValue = btnName => {
    if (btnName === 'good') {
      setGood(s => s + 1);
    }
    if (btnName === 'neutral') {
      setNeutral(s => s + 1);
    }
    if (btnName === 'bad') {
      setBad(s => s + 1);
    }
  };

  const total = good + bad + neutral;

  const percentage = Math.round((good / total) * 100);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} changeValue={calcFeedbackValue} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
