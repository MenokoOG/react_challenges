# React + Vite

### Challenge

    This video game character creator needs a starting character! Your task is to build one by doing the following: 
    
        1. Declare a state called characterData and a state setting function called 
           setCharacterData. 
           
        2. Make the value of the initial characterData state be an object with the following 
           properties and values.
           
            Property		 	       Values  				  
      ╷---------------╷------------------------------------╷					
        | hat           |	true or false                    |
      |---------------|------------------------------------|
      | shield        |	true or false                    |
      |---------------|------------------------------------|
            | weapon        |	The string "sword" or "staff" 	 |
      |---------------|------------------------------------|
            | name          |	A string* that is the name       | 
            |               |    of the character.               |
      |---------------|------------------------------------|
      | attackOptions |	An array of six strings*, each   |
            |               |   of which is a name of an attack. |
            |---------------|------------------------------------|
      | stats         |	An object with three properties: |
            |	            |      - hp: x**                     |
            |               |      - mp: y                       |
            |               |      - strength: z                 |
      ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ 	
            
                *  You can write your own character name and attack options, or you can use ones 
                   from the namesList and attackOptionsList arrays, which have already been imported into this file.
                  
                ** For the stats, x, y and z should be any numbers between 0 and 100 (inclusive).
                
        3. You should see your character with the property values you specified appear on the 
           screen when you run your code. You should test your code by manually changing some of the characterData property values and seeing if you get the correct results. You should also click the "Toggle" button, which will randomly change the values by using the state setting function! 
