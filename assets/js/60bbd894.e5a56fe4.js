(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(8),s=(a(0),a(108)),o=["components"],l={title:"Inquiries"},r={unversionedId:"inquiries",id:"inquiries",isDocsHomePage:!1,title:"Inquiries",description:"As it's described in the Configuration section it's possible to provide custom inquiries in .github/frictionless.yaml file. An Inquiry is a Frictionless Framework concept used to define a validation job.",source:"@site/../docs/inquiries.md",slug:"/inquiries",permalink:"/docs/inquiries",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/inquiries.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1643878332,formattedLastUpdatedAt:"2/3/2022",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Reports",permalink:"/docs/reports"}},c=[{value:"File Paths",id:"file-paths",children:[]},{value:"File Details",id:"file-details",children:[]},{value:"Table Details",id:"table-details",children:[]},{value:"Validation Details",id:"validation-details",children:[]},{value:"Validating a Package",id:"validating-a-package",children:[]}],b={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,o);return Object(s.b)("wrapper",Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"As it's described in the ",Object(s.b)("a",{parentName:"p",href:"/docs/configuration"},"Configuration")," section it's possible to provide custom inquiries in ",Object(s.b)("inlineCode",{parentName:"p"},".github/frictionless.yaml")," file. An ",Object(s.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/framework/inquiry-guide"},"Inquiry")," is a Frictionless Framework concept used to define a validation job."),Object(s.b)("h2",{id:"file-paths"},"File Paths"),Object(s.b)("p",null,"The simplest way to customize an inquiry is to set validation paths:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"main:\n  tasks:\n    - path: data/table.csv\n    - path: data/table.xls\n")),Object(s.b)("p",null,"Note that by default it will create a task for every file found by glob ",Object(s.b)("inlineCode",{parentName:"p"},"**/*.{csv,tsv,xls,xlsx}")," respecting ",Object(s.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(s.b)("h2",{id:"file-details"},"File Details"),Object(s.b)("p",null,"A task can have any parameters accepted by the ",Object(s.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/framework/resource-guide"},"Resource")," class so you can provide scheme, format, etc:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"main:\n  tasks:\n    - path: data/table.csv.zip\n      scheme: file\n      format: csv\n      hashing: sha256\n      encoging: utf-8\n      compression: zip\n")),Object(s.b)("p",null,"By default, Fricitonless tries to infer all these parameters."),Object(s.b)("h2",{id:"table-details"},"Table Details"),Object(s.b)("p",null,"Let's provide a layout and a schema as it's described in ",Object(s.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/framework/resource-guide"},"Resource"),":"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"main:\n  tasks:\n    - path: table.csv\n      dialect:\n        separator: ;\n      layout:\n        headerRows: [1,2]\n      schema:\n        fields:\n          - name: currency\n            type: string\n          - name: rate\n            type: number\n            groupChar: ','\n            constraints:\n              maximum: 100\n")),Object(s.b)("p",null,"You can also provide dialect, layout, or schema as a file path e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"schema: schema.yaml"),"."),Object(s.b)("h2",{id:"validation-details"},"Validation Details"),Object(s.b)("p",null,"It's possible to configure how the validation happens as it's in ",Object(s.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/validation-guide#pickskip-errors"},"Errors Configuration"),":"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"main:\n  tasks:\n    - path: table.csv\n      pickErrors: ['#header']\n      skipErrors: ['#row']\n      limitErrors: 10\n      offsetErrors: 10\n")),Object(s.b)("p",null,"And provide additional ",Object(s.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/validation-checks"},"validation checks"),":"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"main:\n  tasks:\n    - path: table.csv\n      checks:\n        - code: duplicate-row\n        - code: forbidden-value\n          fieldName: country\n          values:\n            - not-existent\n")),Object(s.b)("h2",{id:"validating-a-package"},"Validating a Package"),Object(s.b)("p",null,"It's possible to validate a data package:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},".github/frictionless.yaml")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"main:\n  tasks:\n    - source: data/datapackage.json\n      type: package\n")))}d.isMDXComponent=!0}}]);