(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[5],{35:function(e,t,r){"use strict";var c=r(36),s=r.n(c),n=r(1);t.a=function(e){return Object(n.jsx)("div",{className:s.a.card,children:e.children})}},36:function(e,t,r){e.exports={card:"Card_card__2tbAQ"}},40:function(e,t,r){e.exports={form:"NewMeetupForm_form__3DUoS",control:"NewMeetupForm_control__3EmLC",actions:"NewMeetupForm_actions__1lfh0"}},43:function(e,t,r){"use strict";r.r(t);var c=r(2),s=r(0),n=r(35),i=r(40),o=r.n(i),a=r(1);var l=function(e){var t=Object(s.useRef)(),r=Object(s.useRef)(),c=Object(s.useRef)(),i=Object(s.useRef)();return Object(a.jsx)(n.a,{children:Object(a.jsxs)("form",{className:o.a.form,onSubmit:function(s){s.preventDefault();var n={title:t.current.value,image:r.current.value,address:c.current.value,description:i.current.value};console.log(n),e.onAddMeetup(n)},children:[Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(a.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"Image",children:"Meetup Image"}),Object(a.jsx)("input",{type:"url",required:!0,id:"Image",ref:r})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"address",children:"Meetup Address"}),Object(a.jsx)("input",{type:"text",required:!0,id:"address",ref:c})]}),Object(a.jsxs)("div",{className:o.a.control,children:[Object(a.jsx)("label",{htmlFor:"description",children:"Meetup Description"}),Object(a.jsx)("textarea",{required:!0,id:"description",rows:"5",ref:i})]}),Object(a.jsx)("div",{className:o.a.actions,children:Object(a.jsx)("button",{children:"Add Meetup"})})]})})};t.default=function(){var e=Object(c.f)();return Object(a.jsxs)("section",{children:[Object(a.jsx)("h1",{children:"NewMeetUp"}),Object(a.jsx)(l,{onAddMeetup:function(t){console.log(t),fetch("https://react-f2d79-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(t){e.replace("/")}))}})]})}}}]);
//# sourceMappingURL=5.67d158d0.chunk.js.map