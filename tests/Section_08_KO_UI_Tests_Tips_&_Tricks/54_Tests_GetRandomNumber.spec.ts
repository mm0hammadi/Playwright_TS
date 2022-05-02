/**************************************************/

/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Playwright (https://www.udemy.com/course/automated-software-testing-with-playwright/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

import {test,expect} from '@playwright/test'
import {getRandomNumber} from '../../utils/Utils_DataHelpers'

    test('Section_08_KO_UI_Tests_ - Get Random Number',async ({browser})=>{
        
        let randomNumber = await getRandomNumber()
        console.log(randomNumber)

        randomNumber = await getRandomNumber()
        console.log(randomNumber)
        
        randomNumber = await getRandomNumber()
        console.log(randomNumber)

    })//test

  