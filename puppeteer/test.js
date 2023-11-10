const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page1 = await browser.newPage();

  try {
    await page1.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 

    //  Check for basic tags
    await page1.waitForSelector('h1',{timeout: 2000});

    console.log('TESTCASE:h1_tag:success');
  } catch (e) {
    console.log('TESTCASE:h1_tag:failure');
  }

  const page2 = await browser.newPage();

  try {
    await page2.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 

    //  Check for basic tags
    await page2.waitForSelector('div',{timeout: 2000});

    console.log('TESTCASE:div_tag:success');
  } catch (e) {
    console.log('TESTCASE:div_tag:failure');
  }

  const page3 = await browser.newPage();

  try {
    await page3.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 

    //  Check for basic tags
    await page3.waitForSelector('h2',{timeout: 2000});
    console.log('TESTCASE:h2_tag:success');
  } catch (e) {
    console.log('TESTCASE:h2_tag:failure');
  }

  const page4 = await browser.newPage();

  try {
    await page4.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 

    await page4.waitForSelector('p',{timeout: 2000});

    console.log('TESTCASE:paragraph_tag:success');
  } catch (e) {
    console.log('TESTCASE:paragraph_tag:failure');
  }

  const page5 = await browser.newPage();
  try {
    await page5.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
    //  Check if there are 5 tabs with data-tab attributes.
    await page5.waitForSelector('.tab[data-tab]',{timeout: 2000});

    const result1 = await page5.evaluate(() => {
      const tabs = document.querySelectorAll('.tab[data-tab]');
      return tabs.length === 5 ? 'success' : 'failure';
    });

    if(result1=='success'){
      console.log('TESTCASE:Tab_Elements_Count:success' );
    }else{
      console.log('TESTCASE:Tab_Elements_Count:failure');
    }
  } catch (e) {
    console.log('An error occurred:', e);
  }


  const page6 = await browser.newPage();

  try {

    await page6.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
    // Check if the 'Next' button text is 'Next'.
    await page6.waitForSelector('.next-page',{timeout: 2000});

    const result3 = await page6.evaluate(() => {
      const nextButton = document.querySelector('.next-page');
      return nextButton.textContent.trim() === 'Next' ? 'success' : 'failure';
    });

    if(result3 =='success'){
      console.log('TESTCASE:Next_Button_Text:success');
    }else{
      console.log('TESTCASE:Next_Button_Text:failure');
    }

  } catch (e) {
    console.log('An error occurred:', e);
  }

  const page7 = await browser.newPage();
  //  Check if all tabs have unique data-tab values.
  try {
    await page7.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 

    const result4 = await page7.evaluate(() => {
      const tabs = document.querySelectorAll('.tab[data-tab]');
      const tabValues = Array.from(tabs).map(tab => tab.getAttribute('data-tab'));
      const uniqueTabValues = new Set(tabValues);
      return uniqueTabValues.size === tabs.length ? 'success' : 'failure';
    });
    if(result4=='success'){
      console.log('TESTCASE:Unique_Tab_Values:success');
    }else{
      console.log('TESTCASE:Unique_Tab_Values:failure');
    }

  } catch (e) {
    console.log('An error occurred:', e);
  }

const page8 = await browser.newPage();
  // Check if the 'current-page' element is present with text '1'.
  try {
    await page8.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
    await page8.waitForSelector('.current-page',{timeout: 2000});

    const result5 = await page8.evaluate(() => {
      const currentPage = document.querySelector('.current-page');
      return currentPage.textContent.trim() === '1' ? 'success' : 'failure';
    });

    if(result5=='success'){
      console.log('TESTCASE:Current_Page_Text:success');
    }else{
      console.log('TESTCASE:Current_Page_Text:failure');
    }
  } catch (e) {
    console.log('An error occurred:', e);
  }

const page9 = await browser.newPage();
  //  Check if all 'data-page' elements have non-empty 'h2' content.
  try {
    await page9.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
    const result6 = await page9.evaluate(() => {
      const dataPages = document.querySelectorAll('.data-page');
      return Array.from(dataPages).every(dataPage => {
        const h2 = dataPage.querySelector('h2');
        return h2 && h2.textContent.trim() !== '';
      }) ? 'success' : 'failure';
    });

    if(result6=='success'){
      console.log('TESTCASE:Non_Empty_H2_Elements:success');
    }else{
      console.log('TESTCASE:Non_Empty_H2_Elements:failure');
    }
  } catch (e) {
      console.log('An error occurred:', e);
  }


  const page10 = await browser.newPage();
  //  Check if all 'data-page' elements have 'p' elements with content.
  try {
    await page10.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
    const result7 = await page10.evaluate(() => {
      const dataPages = document.querySelectorAll('.data-page');
      return Array.from(dataPages).every(dataPage => {
        const pElements = dataPage.querySelectorAll('p');
        return pElements.length > 0 && Array.from(pElements).every(p => p.textContent.trim() !== '');
      }) ? 'success' : 'failure';
    });
    if(result7 == 'success'){
      console.log('TESTCASE:Non_Empty_P_Elements:success');
    }else{
      console.log('TESTCASE:Non_Empty_P_Elements:failure');
    }

  } catch (e) {
  console.log('An error occurred:', e);
  }


  const page11 = await browser.newPage();
  //  Check if the 'Previous' button is present in the page-navigation div.
  try {
    await page11.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
    await page11.waitForSelector('.page-navigation',{timeout: 2000});
    const result8 = await page11.evaluate(() => {
      const prevButton = document.querySelector('.prev-page');
      return prevButton ? 'success' : 'failure';
    });
    if(result8=='success'){
      console.log('TESTCASE:Previous_Button_Presence:success');
    }else{
      console.log('TESTCASE:Previous_Button_Presence:failure');
    }
  } catch (e) {
  console.log('An error occurred:', e);

  }


//JAVASCRIPT 
// testcase1
const page12 = await browser.newPage();
try {
  // Test Case 1: Check if 'DOMContentLoaded' event is triggered.
  await page12.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
  await page12.waitForSelector('.tab',{timeout: 2000});

  await page12.waitForSelector('.tab.active',{timeout: 2000});
    await page12.waitForSelector('.details.active',{timeout: 2000});
    await page12.waitForSelector('.prev-page',{timeout: 2000});
    await page12.waitForSelector('.next-page',{timeout: 2000});
    await page12.waitForSelector('.current-page',{timeout: 2000});


  console.log('TESTCASE:DOMContentLoaded_Event_Triggered:success');
} catch (e) {
  console.log('TESTCASE:DOMContentLoaded_Event_Triggered:failure');
  console.log('An error occurred:', e);

}

// testcase2
const page13 = await browser.newPage();
try {
  await page13.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
  // Test Case 2: Check if clicking a tab activates it and shows corresponding details.
  await page13.click('.tab:nth-child(2)'); // Click the second tab
  await page13.waitForSelector('.tab.active',{timeout: 2000});

  const result2 = await page13.evaluate(() => {
    return document.querySelector('.tab:nth-child(2)').classList.contains('active') &&
      document.querySelector('.details:nth-child(2)').classList.contains('active') ? 'success' : 'failure';
  });

  if(result2 == 'success'){
    console.log('TESTCASE:Click_Tab_Activates_And_Shows_Details:success');
  }else{
    console.log('TESTCASE:Click_Tab_Activates_And_Shows_Details:failure');
  }

} catch (e) {
  console.log('An error occurred:', e);
}


//CSS
//testcase1
const page14 = await browser.newPage();
try {
  await page14.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 

  // Evaluate and verify the styles for h1 element
  const h1Styles = await page14.evaluate(() => {
    const h1Element = document.querySelector('h1');
    return {
      marginTop: window.getComputedStyle(h1Element).marginTop,
      fontSize: window.getComputedStyle(h1Element).fontSize,
      color: window.getComputedStyle(h1Element).color,
    };
  });

  // Check if the styles for h1 match the expected values
  if (
    h1Styles.marginTop === '0px' &&
    h1Styles.fontSize === '24px' &&
    h1Styles.color === 'rgb(51, 51, 51)'
  ) {
    console.log('TESTCASE:h1_styles:success');
  } else {
    console.log('TESTCASE:h1_styles:failure');
  }
  }catch (e) {
    console.log('An error occurred:', e);
  }


  const page15 = await browser.newPage();
  try {
    await page15.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
  
    // Evaluate and verify the styles for h1 element
    const tabContainerStyles = await page15.evaluate(() => {
      const tabContainerElement = document.querySelector('.tabs-container');
      const computedStyle = window.getComputedStyle(tabContainerElement);

      return {
        display: computedStyle.getPropertyValue('display'),
        justifyContent: computedStyle.getPropertyValue('justify-content'),
        marginBottom: computedStyle.getPropertyValue('margin-bottom')
      };
    });
  
    // Check if the styles for h1 match the expected values
    if (
      tabContainerStyles.display === 'flex' &&
      tabContainerStyles.justifyContent === 'center' &&
      tabContainerStyles.marginBottom === '20px'
    ) {
      console.log('TESTCASE:tab_container_styles:success');
    } else {
      console.log('TESTCASE:tab_container_styles:failure');
    }
    }catch (e) {
      console.log('An error occurred:', e);
    }
  

  const page16 = await browser.newPage();
  try {
    await page16.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
  
    // Evaluate and verify the styles for h1 element
    const tabStyles = await page16.evaluate(() => {
      const tabElement = document.querySelector('.tab');
      const computedStyle = window.getComputedStyle(tabElement);

      return {
        cursor: computedStyle.getPropertyValue('cursor'),
        padding: computedStyle.getPropertyValue('padding'),
        margin: computedStyle.getPropertyValue('margin'),
        backgroundColor: computedStyle.getPropertyValue('background-color'),

      };
    });
    
    // Check if the styles for h1 match the expected values
    if (
      tabStyles.cursor === 'pointer' &&
      tabStyles.padding === '10px 15px' &&
      tabStyles.margin === '0px 5px' &&
      tabStyles.backgroundColor === 'rgb(153, 153, 153)'

    ) {
      console.log('TESTCASE:tab_styles:success');
    } else {
      console.log('TESTCASE:tab_styles:failure');
    }
    }catch (e) {
      console.log('An error occurred:', e);
    }


  const page17 = await browser.newPage();
  try {
    await page17.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
  
    // Evaluate and verify the styles for h1 element
    const containerStyles = await page16.evaluate(() => {
      const containerElement = document.querySelector('.avengers-slider');
      const computedStyle = window.getComputedStyle(containerElement);

      return {
        textalign: computedStyle.getPropertyValue('text-align'),
      };
    });
    
    // Check if the styles for h1 match the expected values
    if (
      containerStyles.textalign === 'center'

    ) {
      console.log('TESTCASE:align_container:success');
    } else {
      console.log('TESTCASE:align_container:failure');
    }
    }catch (e) {
      console.log('An error occurred:', e);
    }

  
    const page18 = await browser.newPage();

    try {
      await page18.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
  
      //  Check for basic tags
      await page18.waitForSelector('header',{timeout: 2000});
  
      console.log('TESTCASE:header_tag:success');
    } catch (e) {
      console.log('TESTCASE:header_tag:failure');
    }


    const page19 = await browser.newPage();

  try {
    await page19.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 

    //  Check for basic tags
    await page19.waitForSelector('section',{timeout: 2000});

    const sectionTagsExist = await page19.evaluate(() => {
      const sections = document.querySelectorAll('section');
      return sections.length == 6;
    });

    if (sectionTagsExist) {
      console.log('TESTCASE:section_tag:success');
    } else {
      console.log('TESTCASE:section_tag:failure');
    }

  } catch (e) {
    console.log('TESTCASE:section_tag:failure');
  }


  const page20 = await browser.newPage();
  try {
    await page20.goto('https://8081-ddcfabbbcbdbcbf305796715dbabfdcbcccfecfive.premiumproject.examly.io/'); 
  
    // Evaluate and verify the styles for h1 element
    const tabStyles = await page20.evaluate(() => {
      const tabElement = document.querySelector('.details');
      const computedStyle = window.getComputedStyle(tabElement);

      return {
        border: computedStyle.getPropertyValue('border'),
        borderRadius: computedStyle.getPropertyValue('border-radius'),
        padding: computedStyle.getPropertyValue('padding'),
        display: computedStyle.getPropertyValue('display'),

      };
    });
    console.log(tabStyles);
    
    // Check if the styles for h1 match the expected values
    if (
      tabStyles.border === '1px solid rgb(204, 204, 204)' &&
      tabStyles.borderRadius === '5px' &&
      tabStyles.padding === '75px' &&
      tabStyles.display === 'block'

    ) {
      console.log('TESTCASE:details_style:success');
    } else {
      console.log('TESTCASE:details_style:failure');
    }
    }catch (e) {
      console.log('An error occurred:', e);
    }


  finally {
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page6.close();
    await page7.close();
    await page8.close();
    await page9.close();
    await page10.close();
    await page11.close();
    await page12.close();
    await page13.close();
    await page14.close();
    await page15.close();
    await page16.close();
    await page17.close();
    await page18.close();
    await page19.close();
    await page20.close();

    await browser.close();
  }
})();
