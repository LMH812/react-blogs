(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[5],{35:function(e,t,r){"use strict";var c=r(36),s=r.n(c),n=r(1);t.a=function(e){return Object(n.jsx)("div",{className:s.a.card,children:e.children})}},36:function(e,t,r){e.exports={card:"Card_card__2v_Ze"}},40:function(e,t,r){e.exports={form:"NewMeetupForm_form__izSD2",control:"NewMeetupForm_control__-QRP4",actions:"NewMeetupForm_actions__3uKhK"}},43:function(e,t,r){"use strict";r.r(t);var c=r(2),s=r(0),n=r(35),i=r(40),a=r.n(i),o=r(1);var l=function(e){var t=Object(s.useRef)(),r=Object(s.useRef)(),c=Object(s.useRef)(),i=Object(s.useRef)();return Object(o.jsx)(n.a,{children:Object(o.jsxs)("form",{className:a.a.form,onSubmit:function(s){s.preventDefault();var n={title:t.current.value,image:r.current.value,address:c.current.value,description:i.current.value};console.log(n),e.onAddMeetup(n)},children:[Object(o.jsxs)("div",{className:a.a.control,children:[Object(o.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(o.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(o.jsxs)("div",{className:a.a.control,children:[Object(o.jsx)("label",{htmlFor:"Image",children:"Meetup Image"}),Object(o.jsx)("input",{type:"url",required:!0,id:"Image",ref:r})]}),Object(o.jsxs)("div",{className:a.a.control,children:[Object(o.jsx)("label",{htmlFor:"address",children:"Meetup Address"}),Object(o.jsx)("input",{type:"text",required:!0,id:"address",ref:c})]}),Object(o.jsxs)("div",{className:a.a.control,children:[Object(o.jsx)("label",{htmlFor:"description",children:"Meetup Description"}),Object(o.jsx)("textarea",{required:!0,id:"description",rows:"5",ref:i})]}),Object(o.jsx)("div",{className:a.a.actions,children:Object(o.jsx)("button",{children:"Add Meetup"})})]})})};t.default=function(){var e=Object(c.f)();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:"NewMeetUp"}),Object(o.jsx)(l,{onAddMeetup:function(t){console.log(t),fetch("https://react-f2d79-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(t){e.replace("/")}))}})]})}}}]);
//# sourceMappingURL=5.cb31f667.chunk.js.map