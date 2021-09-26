import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOption';
import Statistic from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = feedback => {
    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / totalFeedback());
  };

  return (
    <div>
      <FeedbackOptions
        options={Object.keys({ good, neutral, bad })}
        onLeaveFeedback={handleIncrement}
      />
      {totalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

export default Feedback;
