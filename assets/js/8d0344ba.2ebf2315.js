(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{113:function(t,e,o){"use strict";o.r(e),e.default=o.p+"assets/images/example-91daefdf8f182c3cf7470b7494ff7d04.png"},265:function(t,e,o){"use strict";o.r(e),e.default=o.p+"assets/images/statuses-eabb2fc63acb255153ca70be54194890.png"},266:function(t,e,o){"use strict";o.r(e),e.default=o.p+"assets/images/logs-5536508a0e3e8ec8ccf3b68264260d95.png"},86:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return s})),o.d(e,"metadata",(function(){return l})),o.d(e,"toc",(function(){return c})),o.d(e,"default",(function(){return d}));var a=o(3),n=o(8),i=(o(0),o(106)),r=["components"],s={title:"Getting Started"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Frictionless Repository will be validating your CSV and EXCEL files on every push, tag, or PR (or based on your configuration). After a commit and a workflow run you will see a link to a validation report within the workflow log or an error message.",source:"@site/../docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/getting-started.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1634283529,formattedLastUpdatedAt:"10/15/2021",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Configuration",permalink:"/docs/configuration"}},c=[{value:"Installation",id:"installation",children:[{value:"New Workflow",id:"new-workflow",children:[]},{value:"Existent Workflow",id:"existent-workflow",children:[]}]},{value:"Usage",id:"usage",children:[]}],u={toc:c};function d(t){var e=t.components,s=Object(n.a)(t,r);return Object(i.b)("wrapper",Object(a.a)({},u,s,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Frictionless Repository will be validating your CSV and EXCEL files on every push, tag, or PR (or based on your configuration). After a commit and a workflow run you will see a link to a validation report within the workflow log or an error message."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"There are two options of installing Fricitonless Repository, as a new workflow or adding a Frictionless Repository step to an existent workflow."),Object(i.b)("h3",{id:"new-workflow"},"New Workflow"),Object(i.b)("p",null,"Add a file shown below in your Github Repository:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},".github/workflows/frictionless.yaml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"name: frictionless\n\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n      - name: Validate data\n        uses: frictionlessdata/repository@v1\n")),Object(i.b)("h3",{id:"existent-workflow"},"Existent Workflow"),Object(i.b)("p",null,"Just add this step to an existent workflow:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},".github/workflows/(name).yaml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"- name: Validate data\n  uses: frictionlessdata/repository@v1\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"After Frictionless Repository installed as a part of your Github workflows it will be validating your data on every push, tag, or PR (or based on your configuration). You will be able to see results of the validation on Github as commit statuses:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Statuses",src:o(265).default})),Object(i.b)("p",null,'If you click on the "Details" link you will be redirected to the workflow logs when you can find a link to a validation report:'),Object(i.b)("p",null,Object(i.b)("img",{alt:"Logs",src:o(266).default})),Object(i.b)("p",null,"Clicking on that link will bring you to the validation report:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Example",src:o(113).default})),Object(i.b)("p",null,'There a "Badge" button to reveal a badge for this workflow. You can add this badge to your README.md file or any other markdown file:'),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://repository.frictionlessdata.io/report?user=frictionlessdata&repo=repository-demo&flow=experimental"},Object(i.b)("img",{parentName:"a",src:"https://github.com/frictionlessdata/repository-demo/actions/workflows/experimental.yaml/badge.svg",alt:"Experimental"}))))}d.isMDXComponent=!0}}]);