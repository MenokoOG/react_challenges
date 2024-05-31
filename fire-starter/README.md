# React + Vite Project 17

Challenge:

	The user needs to be able to pick up the torch and use it to light the wood on fire! Your task is to allow them to do as follows:  
  
      1. The torchEquipped state should be set to true whenever the user's mouse button is down and 
         is anywhere inside the "torch-container" div (line 57). 
      
      2. The torchEquipped state should be set to false whenever the user's mouse button is up and 
         their cursor is anywhere inside the "wrapper" div (line 54).
      
      3. The woodKindling state should be set to true when *all* of the following conditions 
         are met: 
          - torchEquipped is true 
          - the user's cursor has entered the "wood-container" div (line 64)
        
      4. The woodOnFire state should be set to true when *all* of the following conditions are met:
          - torchEquipped is true
          - woodKindling is true
          - the user's cursor has left the "wood-container" div (line 64) 