(this["webpackJsonptext-to-handwriting"]=this["webpackJsonptext-to-handwriting"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(8),i=n.n(c),l=(n(17),n(18),n(7)),r=n(2);var o=n(0),d=function(e){var t=e.styles,n=e.setStyles;return Object(o.jsxs)("div",{className:"customization w-1/2",children:[Object(o.jsx)("h2",{className:"text-3xl pl-36 font-bold mb-10",children:"Customizations"}),Object(o.jsxs)("div",{className:"flex justify-around",children:[Object(o.jsxs)("div",{className:"flex-col",children:[Object(o.jsx)("h4",{children:"Font Size :"}),Object(o.jsx)("input",{type:"number",min:0,defaultValue:10,className:"rounded-full fontSize py-1 px-2 mt-2",placeholder:"10",onChange:function(e){parseInt(e.target.value)<25&&(e.preventDefault(),n(Object(r.a)(Object(r.a)({},t),{},{fontSize:e.target.value})))}})]}),Object(o.jsxs)("div",{className:"flex-col",children:[Object(o.jsx)("h4",{children:"Ink color :"}),Object(o.jsxs)("select",{className:"ink rounded-full py-1 px-2 mt-2",defaultValue:"#000f55",onChange:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{inkColor:e.target.value}))},children:[Object(o.jsx)("option",{value:"#000f55",children:"Blue"}),Object(o.jsx)("option",{value:"red",children:"Red"}),Object(o.jsx)("option",{value:"black",children:"Black"})]})]})]}),Object(o.jsxs)("div",{className:"flex justify-around pt-10",children:[Object(o.jsxs)("div",{className:"flex-col",children:[Object(o.jsx)("h4",{children:"Vertical Spacing :"}),Object(o.jsx)("input",{type:"number",defaultValue:3,className:"rounded-full verticalSpacing py-1 px-2 mt-2",placeholder:"3",onChange:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{verticalSpacing:e.target.value}))}})]}),Object(o.jsxs)("div",{className:"flex-col",children:[Object(o.jsx)("h4",{children:"Effects :"}),Object(o.jsxs)("select",{className:"effect rounded-full py-1 px-2 mt-2",defaultValue:"shadow",onChange:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{effect:e.target.value}))},children:[Object(o.jsx)("option",{value:"shadow",children:"Shadow"}),Object(o.jsx)("option",{value:"scanner",children:"Scanner"}),Object(o.jsx)("option",{value:"no-effect",children:"No-effect"})]})]})]}),Object(o.jsxs)("div",{className:"flex justify-around pt-10 -ml-14",children:[Object(o.jsxs)("div",{className:"flex-col",children:[Object(o.jsx)("h4",{children:"Font Family :"}),Object(o.jsxs)("select",{className:"fontFamily rounded-full py-1 px-2 mt-2",defaultValue:"Homemade apple",onChange:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{fontFamily:e.target.value}))},children:[Object(o.jsx)("option",{value:"Homemade apple",children:"Homemade apple"}),Object(o.jsx)("option",{value:"Caveat",children:"Caveat"}),Object(o.jsx)("option",{value:"Shadows Into Light",children:"Shawdows Into Light"})]})]}),Object(o.jsxs)("div",{className:"upload flex-col -ml-28",children:[Object(o.jsx)("h4",{children:"Upload :"}),Object(o.jsx)("input",{accept:".ttf, .otf",className:"mt-2 rounded-full bg-transparent text-white",type:"file",onChange:function(e){return function(e){var t=document.querySelectorAll(".contentPage")[0],n=new FileReader;n.onload=function(e){new FontFace("temp-font",e.target.result).load().then((function(e){document.fonts.add(e),t.style.fontFamily="temp-font"}))},n.readAsArrayBuffer(e)}(e.target.files[0])}})]})]}),Object(o.jsxs)("div",{className:"flex justify-around pt-10 -ml-16",children:[Object(o.jsxs)("div",{className:"flex-col pr-2",children:[Object(o.jsx)("h4",{children:"Paper Margin: "}),Object(o.jsxs)("label",{className:"switch mt-2",children:[Object(o.jsx)("input",{type:"checkbox",defaultChecked:!0,checked:t.margin,onClick:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{margin:!t.margin}))}}),Object(o.jsx)("span",{className:"slider round"})]})]}),Object(o.jsxs)("div",{className:"flex-col -ml-20",children:[Object(o.jsx)("h4",{children:"Paper Lines: "}),Object(o.jsxs)("label",{className:"switch mt-2",children:[Object(o.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:!0,checked:t.lines,onClick:function(e){return n(Object(r.a)(Object(r.a)({},t),{},{lines:!t.lines}))}}),Object(o.jsx)("span",{className:"slider round"})]})]})]})]})},u=function(){return Object(o.jsxs)("div",{className:"container mx-28 w-3/4",children:[Object(o.jsx)("div",{className:"faq-header",children:"Frequently Asked Questions"}),Object(o.jsxs)("div",{className:"faq-content",children:[Object(o.jsxs)("div",{className:"faq-question",children:[Object(o.jsx)("input",{id:"q1",type:"checkbox",className:"panel"}),Object(o.jsx)("div",{className:"plus",children:"+"}),Object(o.jsx)("label",{htmlFor:"q1",className:"panel-title",children:"How can I add my own handwriting?"}),Object(o.jsxs)("div",{className:"panel-content",children:[Object(o.jsx)("li",{children:"To use your own handwriting you will have to generate your own font"}),Object(o.jsx)("li",{children:"Check out the websites like https://www.calligraphr.com/en/ that let's you do that. "}),Object(o.jsx)("li",{children:"Once you generate .ttf file then upload it in the Customization section."})]})]}),Object(o.jsxs)("div",{className:"faq-question",children:[Object(o.jsx)("input",{id:"q2",type:"checkbox",className:"panel"}),Object(o.jsx)("div",{className:"plus",children:"+"}),Object(o.jsx)("label",{htmlFor:"q2",className:"panel-title",children:"How can I get more fonts?"}),Object(o.jsxs)("div",{className:"panel-content",children:["Checkout google fonts and download the font which you like or which is close to your type of handwriting.",Object(o.jsx)("br",{})," Upload the .ttf or .otf file in the Customization section and you are good to go."]})]}),Object(o.jsxs)("div",{className:"faq-question",children:[Object(o.jsx)("input",{id:"q3",type:"checkbox",className:"panel"}),Object(o.jsx)("div",{className:"plus",children:"+"}),Object(o.jsx)("label",{htmlFor:"q3",className:"panel-title",children:"Where can I report bug or request feature?"}),Object(o.jsxs)("div",{className:"panel-content",children:["This is the best place where you can create an issue for it.",Object(o.jsx)("br",{}),"https://github.com/imrishabh18/text-to-handwriting/issues/new"]})]})]}),Object(o.jsxs)("div",{className:"star mt-8 px-4 text-lg mb-32",children:["If you liked this tool and are using it, please do give it a GitHub star ",Object(o.jsx)("a",{href:"",className:"text-blue-400",children:"here"}),".",Object(o.jsx)("br",{})," Also, if you get caught by your teacher, tell them to star the repository as well. \ud83d\ude06"]}),Object(o.jsxs)("div",{className:"flex end justify-center -mr-32",children:["Created with \u2764\ufe0f by ",Object(o.jsx)("a",{className:"pl-1 pb-1 font-extrabold",href:"https://imrishabh18.github.io",children:" Rishabh"})]})]})},j=n(9),h=n.n(j),m=n.p+"static/media/pencil.c740dbff.svg",b=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"Navbar sticky top-0 flex justify-between items-center px-28",children:[Object(o.jsx)("h4",{className:"logo text-white font-bold text-3xl",children:"Text to Handwriting \u270d\ud83c\udffb"}),Object(o.jsx)("a",{href:"https://github.com/imrishabh18/text-to-handwriting",children:Object(o.jsx)("h5",{className:"text-white font-bold text-2xl",children:"GitHub"})})]}),Object(o.jsxs)("div",{className:"banner flex items-center",children:[Object(o.jsxs)("div",{className:"flex-1 w-1/5 px-32",children:[Object(o.jsx)("h1",{className:"font-medium text-7xl w-3/5 pb-10",children:Object(o.jsx)(h.a,{onInit:function(e){e.typeString("Text to Handwriting!").pauseFor(4500).start()}})}),Object(o.jsx)("div",{className:"startNow pt-10",children:Object(o.jsx)("button",{onClick:function(){document.querySelectorAll(".customization")[0].scrollIntoView()},className:"rounded-full px-4 py-2 font-semibold text-xl",children:"Try now"})})]}),Object(o.jsx)("img",{className:"flex-1",style:{width:"200px",height:"650px"},src:m})]})]})},x=function(e){var t=e.array;return Object(s.useEffect)((function(){if(t.length>0&&t.length<=4){var e=document.querySelectorAll(".array")[0],n='<div class="here" style="display: flex; justify-content: space-between;" >';t.forEach((function(e){n+='\n                  <div style="height: 100px !important; position: relative;">\n                    <img src='.concat(e.toDataURL("image/png"),' class="outputImage" style="height: 250px; width: 175px;" />\n                    <a\n                    download="image.png"\n                    class="downloadButton"\n                    style="position: absolute;top: 270px;background-color: #006eb8 !important;border-radius: 20px;padding: 15px;color: white;"\n                    href=').concat(e.toDataURL("image/png").replace("image/png","image/oct"),"\n                    >\n                      Download Image\n                    </a>\n                  </div>\n              ")})),n+="</div>",e.innerHTML=n}else t.length>4&&alert("Sorry, reload the browser to render more images")}),[t]),Object(o.jsxs)("div",{className:"output relative w-4/6 mx-32",children:[Object(o.jsx)("h1",{className:"text-4xl pt-10 pb-4",children:"Output"}),t.length>0?Object(o.jsx)("div",{className:"array"}):Object(o.jsx)("div",{className:"noOutput mt-10 border-gray-200 border-2 text-gray-400 text-2xl flex justify-center items-center h-4/6",children:"No output"})]})},p=n(6),f=n.n(p),O=n(12),g=n(10),y=n(11),v=n.n(y),N=function(e){var t=e.styles,n=e.array,a=e.setArray,c=document.querySelectorAll(".pinkMarginedLines")[0],i=document.querySelectorAll(".contentPage")[0],l=document.querySelectorAll(".overlay")[0],r=(document.querySelectorAll(".array")[0],document.querySelectorAll(".topMargin")[0],document.querySelectorAll(".leftMargin")[0],document.querySelectorAll(".tm")[0]),d=document.querySelectorAll(".lm")[0],u=function(){var e=Object(g.a)(f.a.mark((function e(){var s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c&&(c.style.border="none",c.style.overflowY="hidden",l.style.display="block"),"scanned"==t.effect&&l?l.style.background="linear-gradient(".concat(Math.floor(71*Math.random())+50,"deg, #0008, #0000"):"shadow"==t.effect&&l&&(l.style.background="linear-gradient(".concat(360*Math.random(),"deg, #0008, #0000)")),s=document.querySelectorAll("#capture")[0],i={scrollX:0,scrollY:-window.scrollY,useCORS:!0},e.next=5,v()(s,i).then((function(e){a([].concat(Object(O.a)(n),[e]))}));case 5:c.style.border="1px solid var(--elevation-background)",c.style.overflowY="hidden",l.style.display="none";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){0==t.margin&&i?setTimeout((function(){i.style.paddingLeft="15px",r.classList.remove("topMargin"),d.classList.remove("leftMargin")}),300):t.margin&&i&&setTimeout((function(){i.style.paddingLeft="55px",r.classList.add("topMargin"),d.classList.add("leftMargin")}),300),0==t.lines&&i?setTimeout((function(){return i.style.backgroundImage="none"}),300):t.lines&&i&&setTimeout((function(){return i.style.backgroundImage="linear-gradient(#999 0.05em, transparent 0.1em)"}),300)}),[t.margin,t.lines]),Object(o.jsxs)("div",{className:"w-full flex-1 pl-32 pt-20",children:[Object(o.jsxs)("div",{className:"pageContainer flex-1",children:[Object(o.jsx)("h4",{className:"pb-2 text-sm",children:"Type/paste text here"}),Object(o.jsxs)("div",{className:"pinkMarginedLines",id:"capture",children:[Object(o.jsx)("div",{className:"topMargin tm"}),Object(o.jsxs)("div",{className:"midPage flex-col",children:[Object(o.jsx)("div",{className:"leftMargin lm"}),Object(o.jsx)("div",{contentEditable:"true",className:"contentPage cp",style:{fontSize:"".concat(t.fontSize,"pt"),color:t.inkColor,fontFamily:"".concat(t.fontFamily),paddingTop:"".concat(t.verticalSpacing,"pt")},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus dui eget tortor feugiat iaculis. Morbi et dolor in felis viverra efficitur. Integer id laoreet arcu. Mauris turpis nibh, scelerisque sed tristique non, hendrerit in erat. Duis interdum nisl risus, ac ultrices ipsum auctor at. Aliquam faucibus iaculis metus sit amet tincidunt. Vestibulum cursus urna vel nunc imperdiet suscipit. Ut eu augue egestas, porta orci lobortis, pharetra orci. Morbi eu tellus quis nisi tempor accumsan nec eu urna. empor, ullamcorper tortor. Mauris quis fermentum augue. Phasellus ac nisl hendrerit, fringilla enim aliquam, placerat odio. Ut tortor nisi, pellentesque sed nisi at, hendrerit imperdiet turpis. Proin interdum porttitor metus at hendrerit. Proin ipsum nisl, lacinia vitae purus ullamcorper, maximus convallis sem. Sed nec lacinia lorem. Duis arcu metus, cursus non odio quis, tincidunt tempor augue. Donec eget vestibulum risus. Nullam blandit quis est vitae feugiat."})]}),Object(o.jsx)("div",{className:"overlay"})]})]}),Object(o.jsx)("div",{className:"w-full flex items-center",children:Object(o.jsx)("button",{className:"generateButton mt-10 p-3 text-white rounded-2xl z-10",onClick:u,children:"Generate Image"})})]})},w=function(){Object(s.useEffect)((function(){var e=document.querySelectorAll(".checkbox")[0];setTimeout((function(){e.click()}),200)}),[]);var e=window.innerWidth<800,t=Object(s.useState)({fontSize:10,effect:"shadow",inkColor:"#000f55",fontFamily:"Homemade apple",verticalSpacing:3,margin:!0,lines:!1}),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)([]),r=Object(l.a)(i,2),j=r[0],h=r[1];return Object(o.jsx)(o.Fragment,{children:e?Object(o.jsx)("div",{className:"h-screen w-screen flex items-center justify-center px-10 font-sans",children:Object(o.jsx)("h1",{children:"Kindly open this website in your PC or Laptop \ud83d\ude4f. Currently, not supported for mobile browsers. "})}):Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"flex middle",children:[Object(o.jsx)(N,{styles:a,array:j,setArray:h}),Object(o.jsx)(d,{styles:a,setStyles:c})]}),Object(o.jsx)(x,{array:j}),Object(o.jsx)(u,{})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8f4c5ad9.chunk.js.map