(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{84:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),s=t(101),a=t(23);n.default=function(){return o.a.createElement(s.a,{title:"Report",description:"Report renderer"},o.a.createElement(a.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/frictionless-components/dist/frictionless-components.css"}),o.a.createElement("script",{src:"https://unpkg.com/frictionless-components/dist/frictionless-components.js"}),o.a.createElement("script",null,"\n          if (document.readyState === 'complete') location.reload()\n          if (document.readyState === 'loading') window.addEventListener(\"load\", () => {\n            const value = 'Z2hwXzVkQ3BTZUoxTURJNlF3MzlwOWlqVmlxU2YwcnpnaTNSVklBcA=='\n            const params = new URLSearchParams(window.location.search)\n            const user = params.get('user')\n            const repo = params.get('repo')\n            const flow = params.get('flow')\n            const run = params.get('run')\n            const callback = (error, {user, repo, flow, run}) => {\n              const params = new URLSearchParams(location.search)\n              params.set('user', user)\n              params.set('repo', repo)\n              params.set('flow', flow)\n              if (run) params.set('run', run)\n              const url = location.pathname + '?' + params.toString()\n              window.history.replaceState({}, '',  url)\n            }\n            const element = document.getElementById('workflow')\n            const props = { token: atob(value), user, repo, flow, run, callback }\n            frictionlessComponents.render(frictionlessComponents.Workflow, props, element)\n          })\n        ")),o.a.createElement("div",{style:{margin:"2rem 0"}},o.a.createElement("div",{id:"workflow"})))}}}]);