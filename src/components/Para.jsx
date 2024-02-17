import React from "react";

import { useRecoilState } from "recoil";
import { paragraphLengthState } from "../store/atoms";

function ParagraphGenerator () {
   const [paragraphLength , setParagraphLength] = useRecoilState(paragraphLengthState)

   const generateParagraph  = () => {
      const generateRandomWord  = (paragraphLength) => {
         const characters = 'abcdefghijklmnopqrstuvwxyz54826'
         let randomWord = ''
         for(let i =0 ; i<paragraphLength ; i++)
         {
            const randomIndex = Math.floor(Math.random() * characters.length)
            randomWord += characters[randomIndex]
         }
         return randomWord
      }
   

   const generateRandomParagraph = () => {
      const word = []
      for(let i =0 ; i<paragraphLength ;i++){
         word.push(generateRandomWord(5))
      }
      return word.join(' ')
   }
   return generateRandomParagraph()

}
return (
   <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <label className="block mb-4">
         Paragraph Length:
         <input type="number"
         value={paragraphLength}
         onChange={(e) => setParagraphLength(parseInt(e.target.value ,10))} 
         className="block w-full mt-1 p-2 border rounded-md"/>
         
      </label>
      <p className="text-lg">{generateParagraph()}</p>
   </div>
)

}

export default ParagraphGenerator
