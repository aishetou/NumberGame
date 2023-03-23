import React, { useState } from 'react';
import spongebob from '../assets/spongebob.webp';
import Spongehappy from '../assets/Spongehappy.webp';
import { motion } from "framer-motion";


const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const NumberGame = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [playAgain, setPlayAgain]=useState(false);

  const handleGuess = (e) => {
    e.preventDefault();
    const guessNumber = parseInt(guess);
    setAttempts(attempts + 1);
    if (guessNumber === randomNumber) {
      setMessage(`You win in ${attempts + 1} attempts!`);
      setPlayAgain(true);
     
    } else if (Math.abs(guessNumber - randomNumber) <= 5) {
      setMessage(<p className=" text-green-800 ">You're getting warmer, Try again.</p>);
   
    } else if (guessNumber > randomNumber) {
      setMessage('Too high,  Try again.');
     
    } else {
      setMessage(`Too low,  Try again.`);
    
    }
    setGuess("")
  };
  const handlePlayAgain = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttempts(0);
    setPlayAgain(false);
  };
  

  return (
    <div className=" flex justify-center  shadowed bg-cover bg-hero-pattern h-screen  items-center  mx-auto  ">
    <div className="bg-blue-400 bg-opacity-70  rounded py-4" >

     {playAgain?
      <> <div className=" flex flex-col items-center justify-center px-20 py-20" >
     <p className="text-2xl text-purple-100 font-sans-serif "> You win !!  </p>
     <div>
     <img src={Spongehappy} alt="SpongeBob" className="w-24 mt-8 h-24 object-contain animate-bounce " /> </div>
    <motion.button
    onClick={handlePlayAgain}
    className="bg-green-700 text-purple-100 font-bold mt-8 py-1 px-4 rounded hover:bg-purple-800"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
   >
    Play Again
   </motion.button>
  </div>  </>
       :
      <>
     <h1 className="text-3xl text-center  text-blue-900 mb-8 ">Number Game</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-xl text-purple-100 px-3  font-sans-serif ml-4">Guess a number  between 1 and 100</h2>
        </div>
  </div>
<form className="flex flex-col items-center" onSubmit={handleGuess}>
<p className="text-xl font-bold text-red-800 text-center mt-8 mb-8">{message}</p>
<div className="flex items-center">
  <input
    type="number"
    required
    placeholder="guess here"
    className="w-32   font-semibold 
     text-sm text-purple-900 rounded-md px-3 py-1 text-center placeholder-gray-400
     bg-white border border-purple-400 mr-2 
     hover:border-purple-600 focus:text-lg focus:placeholder-text-sm focus:placeholder-gray-300 focus:outline-none focus:ring focus:ring-violet-300 transition ease-in-out duration-150"
    value={guess}
    min="1"
    max="100"
    onChange={(e) => setGuess(e.target.value)}
  />
  <div>
  <motion.button
    type="submit"
    className="bg-purple-700 text-purple-100 font-bold py-1 px-4 rounded hover:bg-purple-800"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    Check !
  </motion.button>
  </div>
</div>

 <img src={spongebob} alt="SpongeBob" className="w-24 mt-8 h-24 object-contain animate-bounce  " />
</form>

     </>
     }
</div>
</div>
);
};

export default NumberGame;
