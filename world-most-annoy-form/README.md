# React + Vite

### Challenge
  
    This form isn't annoying enough. Your task is to make it more annoying by doing the following:
  	
      1. Every element of the form should be a controlled element. Each one should be controlled 
         by its corresponding property in the formData state object on line 123 below. The elements and their corresponding properties are the following: 
  	
          +------+----------------+--------------+-------------------+-------------------+
          | Line | Element Type   | Value        | Name              | formData Property |
          +------+----------------+--------------+-------------------+-------------------+
          | 137  | text input     | n/a          | firstName         | firstName         |
          +------+----------------+--------------+-------------------+-------------------+
          | 144  | text input     | n/a          | lastName          | lastName          |
          +------+----------------+--------------+-------------------+-------------------+
          | 151  | email input    | n/a          | email             | email             |
          +------+----------------+--------------+-------------------+-------------------+
          | 164  | radio input    | "yes"        | privacyResponse   | privacyResponse   |
          +------+----------------+--------------+-------------------+-------------------+
          | 175  | radio input    | "no"         | privacyResponse   | privacyResponse   |
          +------+----------------+--------------+-------------------+-------------------+
          | 187  | radio input    | "absolutely" | privacyResponse   | privacyResponse   |
          +------+----------------+--------------+-------------------+-------------------+
          | 204  | select         | "n/a         | rating            | rating            |
          +------+----------------+--------------+-------------------+-------------------+
          | 226  | checkbox input | "n/a"        | marketingResponse | marketingResponse |
          +------+----------------+--------------+-------------------+-------------------+
        	
      2. Test your code by trying to input your real information and answering the questions the 
         way people normally would. If you completed the previous task correctly, all of your responses should be thwarted in humorous ways, thanks to the code above line 76. 
  	
    Tip: console.log(formData) while interacting with the form if you want to understand what *should* be happening with it (and would be happening if the form were controlled)!
