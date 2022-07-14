(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/github-actions-3f5e78b12f1e6569ae9fbac7c9382585.png"},265:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/dataportals-status-badge-8ca2a1deabd314083a47dda10558fc45.png"},266:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/github-actions-workflow-run-4cafe6efa081b08bab2068f1b4f2d1f1.png"},267:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/github-actions-workflow-run-menu-6d881a31ffc86017e86a798a8a5d1384.png"},268:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/github-actions-workflow-run-badge-code-fe22fe7cdd2db74158521a983d3a66d5.png"},80:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return b}));var a=o(3),i=o(7),n=(o(0),o(109)),r=["components"],s={title:"Migration from Goodtables"},l={unversionedId:"goodtables-migration",id:"goodtables-migration",isDocsHomePage:!1,title:"Migration from Goodtables",description:"In Goodtables you did need to create a goodtables.yml file in your repository, otherwise",source:"@site/../docs/goodtables-migration.md",slug:"/goodtables-migration",permalink:"/docs/goodtables-migration",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/goodtables-migration.md",version:"current",lastUpdatedBy:"Edgar Z. Alvarenga",lastUpdatedAt:1657804713,formattedLastUpdatedAt:"7/14/2022",sidebar:"docs",previous:{title:"Badges",permalink:"/docs/badges"}},d=[{value:"1. Deleted the Goodtables configuration file <code>goodtables.yml</code>",id:"1-deleted-the-goodtables-configuration-file-goodtablesyml",children:[]},{value:"2. Creation of a file inside the repository at the path <code>.github/frictionless.yml</code>",id:"2-creation-of-a-file-inside-the-repository-at-the-path-githubfrictionlessyml",children:[]},{value:"3. Creation of the configuration file for the Frictionless validation workflow at <code>.github/workflow/frictionless.yaml</code>",id:"3-creation-of-the-configuration-file-for-the-frictionless-validation-workflow-at-githubworkflowfrictionlessyaml",children:[]},{value:"4. Update of the validation badge",id:"4-update-of-the-validation-badge",children:[]}],c={toc:d};function b(e){var t=e.components,s=Object(i.a)(e,r);return Object(n.b)("wrapper",Object(a.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In ",Object(n.b)("a",{parentName:"p",href:"https://goodtables.io"},"Goodtables")," you did need to create a ",Object(n.b)("inlineCode",{parentName:"p"},"goodtables.yml")," file in your repository, otherwise\nit would validates all your files with extensions as CSV, ODS, XLS or XLSX as described\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/goodtables.io/blob/master/docs/configuration/index.md"},"here"),"."),Object(n.b)("p",null,"Instead of the ",Object(n.b)("inlineCode",{parentName:"p"},"goodtables.yml")," file, you will need to create a github workflow file ",Object(n.b)("inlineCode",{parentName:"p"},".github/frictionless.yaml")," as describe\n",Object(n.b)("a",{parentName:"p",href:"/docs/getting-started"},"here"),"."),Object(n.b)("h1",{id:"example-and-howto"},"Example and howto"),Object(n.b)("p",null,"The website ",Object(n.b)("a",{parentName:"p",href:"http://dataportals.org/"},"Dataportals")," used Goodtables in the past to validate their ",Object(n.b)("a",{parentName:"p",href:"https://github.com/okfn/dataportals.org/tree/master/data"},"data")," containing all the portals listed on it.\nThe migration steps from Goodtables to the current Frictionless workflow on Dataportals ",Object(n.b)("a",{parentName:"p",href:"https://github.com/okfn/dataportals.org"},"repository")," were:"),Object(n.b)("h2",{id:"1-deleted-the-goodtables-configuration-file-goodtablesyml"},"1. Deleted the Goodtables configuration file ",Object(n.b)("inlineCode",{parentName:"h2"},"goodtables.yml")),Object(n.b)("h2",{id:"2-creation-of-a-file-inside-the-repository-at-the-path-githubfrictionlessyml"},"2. Creation of a file inside the repository at the path ",Object(n.b)("inlineCode",{parentName:"h2"},".github/frictionless.yml")),Object(n.b)("p",null,"If the folder ",Object(n.b)("inlineCode",{parentName:"p"},".github")," does not exist in your repository, you do need to create it first. The content of the ",Object(n.b)("inlineCode",{parentName:"p"},"frictionless.yml")," file is:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"main:\n  tasks:\n    - path: data/datapackage.json\n")),Object(n.b)("p",null,"Note that the ",Object(n.b)("inlineCode",{parentName:"p"},"path")," must point to the place in your repository where the file that you do want to validate is located."),Object(n.b)("h2",{id:"3-creation-of-the-configuration-file-for-the-frictionless-validation-workflow-at-githubworkflowfrictionlessyaml"},"3. Creation of the configuration file for the Frictionless validation workflow at ",Object(n.b)("inlineCode",{parentName:"h2"},".github/workflow/frictionless.yaml")),Object(n.b)("p",null,"This file is were you configure how the validation is going to run as described ",Object(n.b)("a",{parentName:"p",href:"/docs/configuration"},"here"),". The content of this file for the Dataportals website is:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"name: portals\n\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n      - name: Validate data\n        uses: frictionlessdata/repository@v1\n")),Object(n.b)("p",null,"After you created this files in your repository, commit (",Object(n.b)("inlineCode",{parentName:"p"},"git commit -a"),") them and push the changes to Github (",Object(n.b)("inlineCode",{parentName:"p"},"git push"),") you can check the workflow running in your repository\nclicking in the tab Actions:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Github Actions",src:o(172).default})),Object(n.b)("h2",{id:"4-update-of-the-validation-badge"},"4. Update of the validation badge"),Object(n.b)("p",null,"In Goodtables, the badge showing the validation status was located at ",Object(n.b)("inlineCode",{parentName:"p"},"https://goodtables.io/badge/github/REPOSITORY-PATH.svg"),", in Dataportals case, this path was ",Object(n.b)("inlineCode",{parentName:"p"},"https://goodtables.io/badge/github/okfn/dataportals.org.svg"),". "),Object(n.b)("p",null,"To use the badge from the new workflow you can add a reference to the URL ",Object(n.b)("inlineCode",{parentName:"p"},"https://github.com/okfn/dataportals.org/actions/workflows/frictionless.yaml/badge.svg"),"."),Object(n.b)("p",null,"You can see how the Dataportals.org is being used at their ",Object(n.b)("a",{parentName:"p",href:"https://github.com/okfn/dataportals.org/tree/master/data"},"README page"),":"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Status Badge",src:o(265).default})),Object(n.b)("p",null,"If you look at the ",Object(n.b)("inlineCode",{parentName:"p"},"README.md"),"file content you will see how this badge is written in Markdown:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"[![Data](https://github.com/okfn/dataportals.org/actions/workflows/frictionless.yaml/badge.svg)](https://repository.frictionlessdata.io/report?user=okfn&repo=dataportals.org&flow=portals)\n")),Object(n.b)("p",null,"To get ther markdown code for your frictionless validation workflow, go again to Github Actions tab for your repository:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Github Actions",src:o(172).default})),Object(n.b)("p",null,"Click in the last workflow run:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Github Workflow Run",src:o(266).default})),Object(n.b)("p",null,"And then click in the three dots menu at the top right corner:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Github Workflow Run Menu",src:o(267).default})),Object(n.b)("p",null,'Select "Create status badge" and this will open a dialog where you can copy the badge markdown code:'),Object(n.b)("p",null,Object(n.b)("img",{alt:"Github Workflow Badge Code",src:o(268).default})))}b.isMDXComponent=!0}}]);