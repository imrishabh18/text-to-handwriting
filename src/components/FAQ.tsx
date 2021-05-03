import React from 'react';

const FAQ : React.FC = () => {
    return(
    <div className="container mx-28">
        <div className="faq-header">Frequently Asked Questions</div>
        
        <div className="faq-content">
          <div className="faq-question">
            <input id="q1" type="checkbox" className="panel" />
            <div className="plus">+</div>
            <label  htmlFor="q1" className="panel-title">How can I add my own handwriting?</label>
            <div className="panel-content">
              <li>To use your own handwriting you will have to generate your own font</li>
              <li>Check out the websites like https://www.calligraphr.com/en/ that let's you do that. </li>
              <li>Once you generate .ttf file then upload it in the Customization section.</li>
            </div>
          </div>
          
          {/* <div className="faq-question">
            <input id="q2" type="checkbox" className="panel" />
            <div className="plus">+</div>
            <label htmlFor="q2" className="panel-title">How can I get more fonts?</label>
            <div className="panel-content">Checkout google fonts and download the font which you like or which is close to your type of handwriting.<br /> Upload the .ttf file in the Customization section and you are good to go.</div>
          </div> */}
          
          <div className="faq-question">
            <input id="q3" type="checkbox" className="panel" />
            <div className="plus">+</div>
            <label  htmlFor="q3" className="panel-title">Where can I report bug or request feature?</label>
            <div className="panel-content">
              This is the best place where you can create an issue for it.<br/>
              https://github.com/imrishabh18/text-to-handwriting/issues/new
            </div>
          </div>
        </div>

        <div className="star mt-8 px-4 text-lg mb-32">
          If you liked this tool and are using it, please do give it a GitHub star <a href="" className="text-blue-400" >here</a>. 
          <br/> Also, if you get caught by your teacher, tell them to star the repository as well. 😆
        </div>
        <div className="flex justify-center end">
          Created with ❤️ by <a className="pl-1 pb-1 font-bold" href="https://imrishabh18.github.io"> Rishabh</a>
        </div>
    </div>
    )
}

export default FAQ