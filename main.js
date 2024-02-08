                            /* LOOPS Exercise #1 */
                    
            // Use the following array:

var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

            // Use a for loop to print each student's name to the console.

for (let cOneS = 0; cOneS < cohortOneStudents.length; cOneS++) {
    console.log(cohortOneStudents[cOneS]); 
}


/*************************************************************************************************************************/
/*************************************************************************************************************************/


                            /* LOOPS Exercise #2 */

            // In your JavaScript file, create an array of 5 of your interests.
            // Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.

var myInterests = ["music", "gaming", "singing", "tinkering", "bowling" ]

for (let i = 0; i < myInterests.length; i++) {
    console.log(`One of my interests is: ${myInterests[i]}`);    
}

console.log("*------------------------------------")


/*************************************************************************************************************************/
/*************************************************************************************************************************/


                            /*  LOOPS Exercise #3 */

           /* 
           Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. 
           Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your 
           favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. 
           Any other interests can be printed the same way that they were in the previous exercise. 
           */   

"My absolute favorite interest is: "  

var myInt = ["music", "gaming", "singing", "tinkering", "bowling" ]

const myFav = myInt[0]

for (i = 0; i < myInt.length; i++) {
    if (myInt[i] === "music") {
    console.log(`My absolute favorite interest is: ${myFav}`)  
}
else {
console.log(`One of my interests is: ${myInt[i]}`)
}    
}

