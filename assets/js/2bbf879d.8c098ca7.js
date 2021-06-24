(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(8),o=(n(0),n(103)),r=["components"],l={title:"Configuration"},s={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Frictionless Repository can work without any additional configuration. It will just validate all the CSV and EXCEL files it can find in your repository (respecting .gitignore file).",source:"@site/../docs/configuration.md",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/configuration.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1624554693,formattedLastUpdatedAt:"6/24/2021",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Inquiries",permalink:"/docs/inquiries"}},c=[{value:"Configuration File",id:"configuration-file",children:[]},{value:"Inquiry Parameter",id:"inquiry-parameter",children:[]},{value:"Validation Strategy",id:"validation-strategy",children:[{value:"Single Workflow",id:"single-workflow",children:[]},{value:"Multiple Workflow",id:"multiple-workflow",children:[]},{value:"Complex Workflow",id:"complex-workflow",children:[]}]},{value:"Validation Triggers",id:"validation-triggers",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,r);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless Repository can work without any additional configuration. It will just validate all the CSV and EXCEL files it can find in your repository (respecting ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore")," file)."),Object(o.b)("h2",{id:"configuration-file"},"Configuration File"),Object(o.b)("p",null,"You can add a ",Object(o.b)("inlineCode",{parentName:"p"},".github/frictionless.yaml")," file to your Github repository to provide an additional configuration. This file is a mapping in a form of ",Object(o.b)("inlineCode",{parentName:"p"},"inquiry name: inqiury descriptor"),". It's easier to understand using an example:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"main:\n  tasks:\n    - path: data/valid.csv\n    - path: data/invalid.csv\n")),Object(o.b)("p",null,"The inquiry descriptor is a Frictionless Framework's ",Object(o.b)("a",{parentName:"p",href:"/docs/inquiries"},"Inquiry")," so you can use whatever is possible to use for the Frictionless Framework validation. Here is a more complex example:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://github.com/roll/flat-demo-bitcoin-price/blob/main/.github/frictionless.yaml"},"https://github.com/roll/flat-demo-bitcoin-price/blob/main/.github/frictionless.yaml"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"main:\n  tasks:\n    - path: btc-price-postprocessed.json\n      schema:\n        fields:\n          - name: currency\n            type: string\n          - name: bitcoinRate\n            type: number\n            groupChar: ','\n            constraints:\n              maximum: 40000\n")),Object(o.b)("p",null,"Note, that we used the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," inquiry name because it's a default inquiry. You can have multiple inquiries in your repository setting the ",Object(o.b)("inlineCode",{parentName:"p"},"inquiry")," parameter in your workflow."),Object(o.b)("h2",{id:"inquiry-parameter"},"Inquiry Parameter"),Object(o.b)("p",null,"Frictionless Repository step as a part of Github Workflow accepts only one parameter called ",Object(o.b)("inlineCode",{parentName:"p"},"inquiry"),". Here is an example:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},".github/workflows/(name).yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"- name: Validate data\n  uses: frictionlessdata/repository@v0.8.0\n  with:\n    inquiry: extra\n")),Object(o.b)("p",null,"By default, the ",Object(o.b)("inlineCode",{parentName:"p"},"inqiury")," parameter is set to ",Object(o.b)("inlineCode",{parentName:"p"},"main"),". So the examples in the previous section will work for any step without the ",Object(o.b)("inlineCode",{parentName:"p"},"inqiury")," parameter or when it's set to ",Object(o.b)("inlineCode",{parentName:"p"},"main"),". When we have, as in our example, ",Object(o.b)("inlineCode",{parentName:"p"},"inquiry: extra")," we need to provide a corresponding configuration:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"extra:\n  tasks:\n    - path: data/table.csv\n    - path: data/other.csv\n")),Object(o.b)("h2",{id:"validation-strategy"},"Validation Strategy"),Object(o.b)("p",null,"You can use Frictionless in many ways and this limit is only our imagination. Thanks to composability of Github Actions, it's possible to integrate Frictionless with many other steps and implement complex validation strategies. On the other hand, if you are new to Github Actions we recommend to start from these setups:"),Object(o.b)("h3",{id:"single-workflow"},"Single Workflow"),Object(o.b)("p",null,"The simplest way to use Frictionless Repository is to create a single workflow called ",Object(o.b)("inlineCode",{parentName:"p"},"frictionless"),". This workflow will be responsible of all your data validation and you can have one status badge for the whole project:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},".github/workflows/frictionless.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"name: frictionless\n\n# ...\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n      - name: Validate data\n        uses: frictionlessdata/repository@v0.8.0 # update to the latest version\n")),Object(o.b)("p",null,'Using this setup you will have a single "Frictionless" badge that you can add to your README.md file.'),Object(o.b)("h3",{id:"multiple-workflow"},"Multiple Workflow"),Object(o.b)("p",null,"You have a few groups of independent data or interested in more sophisticated logic you might use multiple workflows. For example, consider we have some data related to humans and some to animals:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},".github/workflows/people.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"name: people\n\n# ...\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n      - name: Validate data\n        uses: frictionlessdata/repository@v0.8.0 # update to the latest version\n        with:\n            inquiry: people\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},".github/workflows/animals.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"name: animals\n\n# ...\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n      - name: Validate data\n        uses: frictionlessdata/repository@v0.8.0 # update to the latest version\n        with:\n            inquiry: animals\n")),Object(o.b)("p",null,"The only missing part in this case is the ",Object(o.b)("a",{parentName:"p",href:"#configuration-file"},"Configuration File")," that will tell Frictionless what are these inquiries:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"people:\n  tasks:\n    - source: people/*.csv\n\nanimals:\n  tasks:\n    - source: animals/*.csv\n")),Object(o.b)("p",null,"Don't forget that we use Frictionless Framework's ",Object(o.b)("a",{parentName:"p",href:"/docs/inquiries"},"Inquiry")," that gives us even more flexibility. For example, you can write quite complex tasks logic and combine it with your single or multiple workflows."),Object(o.b)("h3",{id:"complex-workflow"},"Complex Workflow"),Object(o.b)("p",null,"On top of dedicated validation workflows, you can integrate Frictionless Repository inside existent workflows. For example, here is a Frictionless-Flat Data integration:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://github.com/roll/flat-demo-bitcoin-price/blob/main/.github/workflows/flat.yaml"},"https://github.com/roll/flat-demo-bitcoin-price/blob/main/.github/workflows/flat.yaml"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"name: Flat\n\n# ...\n\njobs:\n  scheduled:\n    runs-on: ubuntu-latest\n    steps: # This workflow has 3 steps\n      # The first step is to check out the repository so it can read the files inside of it and do other operations\n      - name: Check out repo\n        uses: actions/checkout@v2\n      # This step installs Deno, which is a new Javascript runtime that improves on Node. We'll use it for postprocessing later\n      - name: Setup deno\n        uses: denoland/setup-deno@main\n        with:\n          deno-version: v1.x\n      # The third step is a Flat Action step. We fetch the data in the http_url and save it as downloaded_filename\n      - name: Fetch data\n        uses: githubocto/flat@v2\n        with:\n          http_url: https://api.coindesk.com/v2/bpi/currentprice.json # The data to fetch every 5 minutes\n          downloaded_filename: btc-price.json # The http_url gets saved and renamed in our repository as btc-price.json\n          postprocess: postprocess.js # A postprocessing javascript or typescript file written in Deno\n      # The fourth step is validation using Frictionless Repository\n      - name: Frictionless Repository\n        uses: frictionlessdata/repository@v0.8.0\n")),Object(o.b)("h2",{id:"validation-triggers"},"Validation Triggers"),Object(o.b)("p",null,"Github Actions provides a great deal of flexibility regarding on when your workflow will be run. Here is a quick example:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},".github/workflows/(name).yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"on:\n  # Trigger the workflow on push or pull request,\n  # but only for the main branch\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\n  # Also trigger on page_build, as well as release created events\n  page_build:\n  release:\n    types: # This configuration does not affect the page_build event above\n      - created`\n")),Object(o.b)("p",null,"This knowledge is related not only to Frictionless Repository but to all Github Actions so we really recommend to read ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows"},"Github Documentaion")," on this topic."))}p.isMDXComponent=!0}}]);