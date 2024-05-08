// import React, { useState } from "react";
// import QuestionButton from "../QuestionButton";

// const DropDown = () => {
//   const [expandedId, setExpandedId] = useState(null);

//   const toggleAnswer = (id) => {
//     if (expandedId === id) {
//       setExpandedId(null);
//     } else {
//       setExpandedId(id);
//     }
//   };

//   return (
//     <div className="h-screen">
//       <section className="w-full md:w-2/5 mx-0 md:mx-20 py-2 md:py-10 ">
//         <div className="flex items-start justify-start flex-col gap-y-2 py-5 mx-4">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
//             FAQ
//           </h2>
//         </div>
//         <div className="w-full px-7 md:px-16 gap-7 xl:px-2 py-4">
//           <div className="w-full border border-solid border-blue-500 rounded-lg text-[#28262C]">
//             <QuestionButton
//               question="Can education flashcards be used for all age groups?"
//               answer="Can education flashcards be used for all age groups?"
//               id="answer-1"
//               expanded={expandedId === "answer-1"}
//               onClick={() => toggleAnswer("answer-1")}
//             />
//             <QuestionButton
//               question="How do education flashcards work?"
//               answer="How do education flashcards work?"
//               id="answer-2"
//               expanded={expandedId === "answer-2"}
//               onClick={() => toggleAnswer("answer-2")}
//             />
//             <QuestionButton
//               question="Can education flashcards be used for test preparation?"
//               answer="Can education flashcards be used for test preparation?"
//               id="answer-3"
//               expanded={expandedId === "answer-3"}
//               onClick={() => toggleAnswer("answer-3")}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DropDown;

import React from 'react';
import QuestionButton from '../QuestionButton';

const items = [
  {
    title: 'Can educatioin flashcards be used for all age groups?',
    content: 'yes, education flashcards can be tailored to different age groups and learning levels. there are flashcards designed for preschoolers, elementary school students, high school students, and even for the college-level and adult learners.',
  },
  {
    title: ' How do education flashcards work?',
    content: 'education flashcard can be worked by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition',
  },
  {
    title: 'Can education flashcards be used for test preparation?',
    content: 'Absolutely, flashCards can be used for test preparation, allowing sstudents to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.',
  },
];

const App = () => {
  return (
    <div className=" pt-10 pl-20 pr-80 container mx-auto py-8">
      <h1 className="text-2xl text-blue-900 font-bold mb-4">FAQ</h1>
      <QuestionButton items={items} />
    </div>
  );
};

export default App;

