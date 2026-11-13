import React from 'react';
import './VolunteerBenefits.css';

const benefits = [
  {
    title: 'Certificate of Participation',
    description: 'Official recognition for successfully completing an agreed volunteer programme.',
  },
  {
    title: 'Training and Certificates of Completion',
    description: 'Access to relevant training, workshops and certificates for eligible completed programmes.',
  },
  {
    title: 'Real-World Professional Experience',
    description: 'Hands-on contributions to research support, cancer education, awareness campaigns, community programmes and other initiatives.',
  },
  {
    title: 'Professional References and Recommendations',
    description: 'Eligible volunteers may request references based on verified contributions, performance and conduct.',
  },
  {
    title: 'Mentorship and Professional Networking',
    description: 'Opportunities to learn from and collaborate with professionals and fellow volunteers.',
  },
  {
    title: 'Leadership and Career Development',
    description: 'Opportunities to develop professional skills and take on leadership responsibilities.',
  },
  {
    title: 'Cross-Disciplinary and International Collaboration',
    description: 'Opportunities to work with contributors across fields and locations.',
  },
  {
    title: 'Recognition and Meaningful Impact',
    description: 'Recognition for valuable contributions to cancer awareness and public-health initiatives.',
  },
];

const expectations = [
  'Bring a genuine commitment to Oncetra’s mission.',
  'Be reliable in completing the responsibilities we agree on together.',
  'Communicate respectfully and work well with others.',
  'Stay open to learning and constructive feedback.',
  'Handle confidential information responsibly.',
  'Follow Oncetra’s safeguarding, scientific accuracy and professional conduct policies.',
];

export default function VolunteerBenefits() {
  return (
    <div className="volunteer-opportunities">
      <div className="vo-container">
        <section aria-labelledby="volunteer-benefits-title">
          <header className="vo-heading">
            <h2 id="volunteer-benefits-title">What You'll Gain as an Oncetra Volunteer</h2>
            <p className="vo-subtitle">Volunteering with Oncetra is an opportunity to make a meaningful contribution while developing your skills, gaining practical experience and growing your professional network.</p>
          </header>
          <ul className="vo-benefits">
            {benefits.map(({ title, description }) => (
              <li key={title} className="vo-benefit">
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="vo-expectations" aria-labelledby="volunteer-expectations-title">
          <header>
            <h2 id="volunteer-expectations-title">What We Expect From You</h2>
            <p>You bring your time and talents. Together, we create a supportive, responsible environment where everyone can contribute.</p>
          </header>
          <ul>
            {expectations.map(expectation => (
              <li key={expectation}>{expectation}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
