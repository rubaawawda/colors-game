
import './App.css';
import React from 'react';
import Form from './components/Container/container.component';
import Row from './components/Row/row.component';
import List from './components/AnswersList/answers_list.component';
import { useState, useEffect } from 'react';
import colors from './Data/data';
import Hedear from './components/header/header';
import Win from './components/Win/win.component';

function App() {
  const [answers, setAnswers] = useState([]);
  const [qustion, setQustion] = useState([])
  const [win, setWin] = useState(false);


  useEffect(() => {
    PrepearRandomQuestion();
  }, []);


  const PrepearRandomQuestion = () => {
    const ArrayQuestion = [];
    for (let i = 0; i < colors.length; i++) {
      ArrayQuestion.push(colors[Math.floor((Math.random() * 10) % 3)])
    }
    setQustion(ArrayQuestion);
    console.log(ArrayQuestion);
  }


  const checkAnswer = (answer) => {
    let cc = 0;
    let cr = 0;
    const map = {}
    for (let i = 0; i < qustion.length; i++) {
      if (!map[qustion[i]])
        map[qustion[i]] = 0;
      map[qustion[i]]++;
    }

    for (let i = 0; i < answer.length; i++) {
      if (map[answer[i]]) {
        cr += 1;
        map[answer[i]]--;
      }
    }

    for (let i = 0; i < answer.length; i++) {
      if (qustion[i] === answer[i]) {
        cc += 1;
        cr--;
      }
    }
    return { cc, cr }
  }


  const handleAnswer = (answer) => {
    const result = checkAnswer(answer);
    if (result.cc === (colors.length) - 1) {
      setWin(true);

    }

    setAnswers([{ answer, calculations: result }, ...answers]);
  };


  return (
    <div className="App">
      <div className='container'>
        <Hedear answers={answers} />
        <Row value={qustion} hidden={!win} />
        <Win win={win} setAnswers={setAnswers} setWin={setWin} />
        <List answers={answers} />
        <Form SubmitAnswer={handleAnswer} />
      </div>
    </div>
  );

}

export default App;
