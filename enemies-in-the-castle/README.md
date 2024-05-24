# React + Vite

Challenge
		
	The castle for this action RPG needs enemies! Your task is to create them as follows: 
	
		1. The "castle-container" div should contain 3 Enemy elements, the component for which 
		   has already been imported above. 
		
		2. Each Enemy element should receive 3 props, which, in turn, should receive the 
		   following values from 1 of the 3 objects of enemy data in the enemiesData state array: 
			
			   Props		 	Values (corresponding to*) 				  
			╷---------------╷-----------------------------╷					
		  	|  currentImage |	enemies[n].currentImage   |
			|---------------|-----------------------------|
			|  position     |	enemies[n].position 	  |
			|---------------|-----------------------------|
			|  orientation  |	enemies[n].orientation	  |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	
								        n = 0, 1, or 2
										
										*You can obtain the underlying values however you want!
			
		3. In the end, there should be 3 Enemy elements corresponding to each of the 3 
		   enemiesData objects, resulting in 3 different enemies in three different positions in the castle. When you click the "Play" button, they should start walking back and forth!
		   

