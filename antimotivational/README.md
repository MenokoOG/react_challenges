# React + Vite Project 20

Challenge 
        
    The styles for the current pair of image and text are nested within the currentData state, but they aren't being applied to their respective JSX elements. Your task is to fix this as follows:
        
        1. The wrapperStyles in the currentData's image object should be applied to the <div> 
           with the className "wrapper".
         
        2. The containerStyles in the currentData's image object should be applied to the <div> 
           with the className "quote-container". 
        
        3. Either image.quoteFontSize or text.quoteFontSize — whichever one (if any) contains the 
           smallest font size — should be applied to the <p> with the className of "quote". To do this, you may use the getSmallestFontSize() function on line 61 of this file. See the comment above the function for info on how to use it. 
        
    Tip: Invoke showState(currentData) anywhere in the top level of this component to see the currentData state and familiarize yourself with its content and structure. 

