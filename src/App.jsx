import { useState } from 'react';
import Quastion from './Question/Quastion';

function App() {
  const answers = [
    'დარწმუნებული ვარ.',
    'დიახ.',
    'უდაოდ.',
    'შესაძლებელია.',
    'სავარაუდოდ კი.',
    'პასუხის გაცემა მიჭირს, ახლიდან მკითხე.',
    'სჯობს ახლა არ გითხრა.',
    'არა.',
    'არასდროს.',
    'ცუდი იდეაა.',
    'არ გარისკო!',
  ];
  return (
    <>
      <Quastion answers={answers} />
    </>
  );
}

export default App;
