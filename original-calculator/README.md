# React + Vite

## Project 9
### Challenge
    
  The number buttons aren't working because they aren't updating the currentCalc state. Your objective is to fix this by doing the following: 
  
      1. Complete the three tasks on lines 82, 100 and 118. Each task involves updating the state 
         in a certain way based on which of the six conditions defined on line 20 above is true. 
         
      2. Test the calculator by using it in a variety of ways that a real user might use it. Try to 
         reproduce each of the six conditions to test it throughly!  
  
  To make the calculator work, you *only* need to complete the three tasks below, and for each task,you *only* need to update the currentCalc state! */
  
  
        if (numFromClick) {
          
          if (conditionOne || conditionTwo || conditionThree || conditionFour) {
         
            
/* Task 1 of 3 — Building a Number 
  
      a. The numFromClick value should be added to the end of the currentNum array of currentCalc, 
         preserving any values that are already saved in the array. 
         
      b. All of the other properties of currentCalc should be preserved. 
                        
---------------Write your code for task 1 below.------------------------------------------------*/  
          
          
          
          
          
   
/*-------------Write your code for task 1 above.------------------------------------------------*/
          
          } else if (conditionFive) {
            
/* Task 2 of 3 — Starting a New Calculation
            
      a. The numFromClick value should be added to the currentNum array of currentCalc. Any   
         previous values in the array should *not* be preserved — the numFromClick value should become the *only* value in the array. 

      b. All of the other properties of currentCalc should be reverted to their initial values, 
         which are saved in INITIAL_STATE (line 9 above).
             
---------------Write your code for task 2 below.------------------------------------------------*/        
          
          
          
          
          
/*-------------Write your code for task 2 above.------------------------------------------------*/

          } else if (conditionSix) {
            
/* Task 3 of 3 — Continuing a Calculation 
            
      a. The value saved in the result array of currentCalc should be added to the empty 
          previousNum array, and the result array should be made empty. In other words:
                      
          Before      previousNum: []
                      result: [someValue]
                      
          After       previousNum: [someValue]
                      result: []
                        
      b. The value of numFromClick should be saved in the empty currentNum array. 
                
      c. The value of operation (a string) should be preserved. 
                       
---------------Write your code for task 3 below.------------------------------------------------*/
              
              
              



/*-------------Write your code for task 3 above.------------------------------------------------*/

          }
      }
        
/* 🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨    🚨  SPOILER ALERT!  🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨   
        
        
        
        
        To avoid any spoilers, don't scroll down! 

        Alternatively, if you're very stuck, consider scrolling down. Many of the subsequent 
        lines of code are analogous to the ones you're supposed to write above.  
        
        
      
        
 🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨    🚨  SPOILER ALERT!  🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨 
