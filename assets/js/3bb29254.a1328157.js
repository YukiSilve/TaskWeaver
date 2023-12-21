"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5887],{5461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const o={},r="Auto Plugin Selection",a={id:"customization/plugin/plugin_selection",title:"Auto Plugin Selection",description:"In TaskWeaver, we provide an auto plugin selection mechanism to dynamically select the best plugin for each user request.",source:"@site/docs/customization/plugin/plugin_selection.md",sourceDirName:"customization/plugin",slug:"/customization/plugin/plugin_selection",permalink:"/TaskWeaver/docs/customization/plugin/plugin_selection",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/docs/website/docs/customization/plugin/plugin_selection.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Plugin Introduction",permalink:"/TaskWeaver/docs/plugin/plugin_intro"},next:{title:"Embedding",permalink:"/TaskWeaver/docs/customization/plugin/embedding"}},l={},c=[{value:"Auto Plugin Selection Overview",id:"auto-plugin-selection-overview",level:2},{value:"Auto Plugin Selection Configuration",id:"auto-plugin-selection-configuration",level:2},{value:"Auto Plugin Selection Example",id:"auto-plugin-selection-example",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"auto-plugin-selection",children:"Auto Plugin Selection"}),"\n",(0,i.jsx)(n.p,{children:"In TaskWeaver, we provide an auto plugin selection mechanism to dynamically select the best plugin for each user request.\nIt targets to solve the following two problems:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"An excessive number of plugins may cause confusion for LLM, leading to inaccuracies in generating the correct code."}),"\n",(0,i.jsx)(n.li,{children:"A large number of plugins could lead to increased token usage (potentially exceeding the token limit of LLM) and extended response time."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"auto-plugin-selection-overview",children:"Auto Plugin Selection Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Below is the overview workflow of the auto plugin selection mechanism.\n",(0,i.jsx)(n.img,{alt:"Auto Plugin Selection Overview",src:t(802).Z+"",width:"1846",height:"543"})]}),"\n",(0,i.jsx)(n.p,{children:"NOTE: the automatic plugin selection mechanism is only activated during the code generation process in the Code Interpreter and does not affect the planning process of the Planner."}),"\n",(0,i.jsxs)(n.p,{children:["At the start of TaskWeaver initialization, the automatic plugin selector is activated to generate embedding vectors for all plugins, including their names and descriptions.\nThe embedding vectors are created using the specified embedding model configured in the ",(0,i.jsx)(n.code,{children:"taskweaver_config.json"})," file.\nFor more information, please refer to the ",(0,i.jsx)(n.a,{href:"/TaskWeaver/docs/customization/plugin/embedding",children:"embedding"})," documentation."]}),"\n",(0,i.jsxs)(n.p,{children:["When the Planner sends a request to the Code Interpreter, the auto plugin selection mechanism will be triggered.\nIt will first generate an embedding vector for the request using the same embedding model.\nThen, it will calculate the cosine similarity between the request embedding vector and the embedding vectors of all plugins.\nIt will select the top-k plugins with the highest cosine similarity scores and  load them into the ",(0,i.jsx)(n.code,{children:"code_generator"})," prompt."]}),"\n",(0,i.jsxs)(n.p,{children:["Upon completing the code generation, the ",(0,i.jsx)(n.code,{children:"code_generator"})," employs one or more plugins to produce the desired code.\nWe have established a plugin pool to store the plugins involved in the code generation process while filtering out any unused ones.\nDuring the subsequent automatic plugin selection phase, newly chosen plugins are appended to the existing ones."]}),"\n",(0,i.jsx)(n.h2,{id:"auto-plugin-selection-configuration",children:"Auto Plugin Selection Configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"code_generator.enable_auto_plugin_selection"}),": Whether to enable auto plugin selection. The default value is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"code_generator.auto_plugin_selection_topk"}),":\tThe number of auto selected plugins in each round. The default value is ",(0,i.jsx)(n.code,{children:"3"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"auto-plugin-selection-example",children:"Auto Plugin Selection Example"}),"\n",(0,i.jsx)(n.p,{children:"We show the auto plugin selection mechanism in the following example."}),"\n",(0,i.jsx)(n.p,{children:"First, we start TaskWeaver with the auto plugin selection mechanism enabled."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"=========================================================\n _____         _     _       __\n|_   _|_ _ ___| | _ | |     / /__  ____ __   _____  _____\n  | |/ _` / __| |/ /| | /| / / _ \\/ __ `/ | / / _ \\/ ___/\n  | | (_| \\__ \\   < | |/ |/ /  __/ /_/ /| |/ /  __/ /\n  |_|\\__,_|___/_|\\_\\|__/|__/\\___/\\__,_/ |___/\\___/_/\n=========================================================\nTaskWeaver: I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\nHuman: \n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then we can check the log file ",(0,i.jsx)(n.code,{children:"task_weaver.log"})," in the ",(0,i.jsx)(n.code,{children:"logs"})," folder to see the auto plugin selector is initialized successfully because the ",(0,i.jsx)(n.code,{children:"Plugin embeddings generated"})," message is printed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"2023-12-18 14:23:44,197 - INFO - Planner initialized successfully\n2023-12-18 14:24:10,488 - INFO - Plugin embeddings generated\n2023-12-18 14:24:10,490 - INFO - CodeInterpreter initialized successfully.\n2023-12-18 14:24:10,490 - INFO - Session 20231218-062343-c18494b1 is initialized\n"})}),"\n",(0,i.jsx)(n.p,{children:'We ask TaskWeaver to "search Xbox price for me".\nThe Planner instructs the Code Interpreter to search Xbox price.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"TaskWeaver: I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\nHuman: search xbox price for me\n>>> [INIT_PLAN]\n1. search xbox price\n2. report the result to the user <interactively depends on 1>\n>>> [PLAN]\n1. instruct CodeInterpreter to search xbox price\n2. report the result to the user\n>>> [CURRENT_PLAN_STEP]\n1. instruct CodeInterpreter to search xbox price\n>>> [SEND_TO]\nCodeInterpreter\n>>> [MESSAGE]\nPlease search xbox price\n>>> [PLANNER->CODEINTERPRETER]\nPlease search xbox price\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Back to the Code Interpreter, the auto plugin selection mechanism is triggered.\nWe can check the log file ",(0,i.jsx)(n.code,{children:"task_weaver.log"})," again to see the auto plugin selector selected the top-3 plugins with the highest cosine similarity scores."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"023-12-18 14:24:34,513 - INFO - Planner talk to CodeInterpreter: Please search xbox price using klarna_search plugin\n2023-12-18 14:24:34,669 - INFO - Selected plugins: ['klarna_search', 'sql_pull_data', 'paper_summary']\n2023-12-18 14:24:34,669 - INFO - Selected plugin pool: ['klarna_search', 'sql_pull_data', 'paper_summary']\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then the Code Interpreter will generate the code using the selected plugins."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:">>> [THOUGHT]\nProgramApe will call the klarna_search plugin function to search for Xbox prices.\n>>> [PYTHON]\nsearch_results, description = klarna_search(query=\"xbox\")\nsearch_results, description\n>>> [VERIFICATION]\nNONE\n>>> [STATUS]\nSUCCESS\n>>> [RESULT]\nThe execution of the generated python code above has succeeded\n\nThe result of above Python code after execution is:\n(                                                 name    price                                                url                                         attributes\n 0             Microsoft Xbox Series X - Black Edition  $399.00  https://www.klarna.com/us/shopping/pl/cl52/495...  [Release Year:2020, Included Accessories:1 gam...\n 1                 Microsoft Xbox Series S 1TB - Black  $349.00  https://www.klarna.com/us/shopping/pl/cl52/320...  [Included Accessories:1 gamepad, Media Type:DV...\n ..                                                ...      ...                                                ...                                                ...\n 3                      Xbox Series S \u2013 Starter Bundle  $239.00  https://www.klarna.com/us/shopping/pl/cl52/320...                                [Platform:Xbox One]\n 4   Microsoft Xbox Series X 1TB Console - Diablo I...  $385.58  https://www.klarna.com/us/shopping/pl/cl52/320...  [Release Year:2023, Included Accessories:1 gam...\n\n [5 rows x 4 columns],\n 'The response is a dataframe with the following columns: name, price, url, attributes. The attributes column is a list of tags. The price is in the format of $xx.xx.')\n>>> [CODEINTERPRETER->PLANNER]\nThe following python code has been executed:\n```python\nsearch_results, description = klarna_search(query=\"xbox\")\nsearch_results, description\n```\n\nThe execution of the generated python code above has succeeded\n\nThe result of above Python code after execution is:\n(                                                 name    price                                                url                                         attributes\n 0             Microsoft Xbox Series X - Black Edition  $399.00  https://www.klarna.com/us/shopping/pl/cl52/495...  [Release Year:2020, Included Accessories:1 gam...\n 1                 Microsoft Xbox Series S 1TB - Black  $349.00  https://www.klarna.com/us/shopping/pl/cl52/320...  [Included Accessories:1 gamepad, Media Type:DV...\n ..                                                ...      ...                                                ...                                                ...\n 3                      Xbox Series S \u2013 Starter Bundle  $239.00  https://www.klarna.com/us/shopping/pl/cl52/320...                                [Platform:Xbox One]\n 4   Microsoft Xbox Series X 1TB Console - Diablo I...  $385.58  https://www.klarna.com/us/shopping/pl/cl52/320...  [Release Year:2023, Included Accessories:1 gam...\n\n [5 rows x 4 columns],\n 'The response is a dataframe with the following columns: name, price, url, attributes. The attributes column is a list of tags. The price is in the format of $xx.xx.')\n"})}),"\n",(0,i.jsx)(n.p,{children:"Finally, the Planner will report the result to the user."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:">>> [INIT_PLAN]\n1. search xbox price using klarna_search plugin\n2. report the result to the user <interactively depends on 1>\n>>> [PLAN]\n1. instruct CodeInterpreter to search xbox price using klarna_search plugin\n2. report the result to the user\n>>> [CURRENT_PLAN_STEP]\n2. report the result to the user\n>>> [SEND_TO]\nUser\n>>> [MESSAGE]\nHere are some Xbox prices I found:\n\n1. Microsoft Xbox Series X - Black Edition: $399.00\n2. Microsoft Xbox Series S 1TB - Black: $349.00\n3. Xbox Series S \u2013 Starter Bundle: $239.00\n4. Microsoft Xbox Series X 1TB Console - Diablo Immortal Edition: $385.58\n\nPlease note that these prices are subject to change and availability.\n>>> [PLANNER->USER]\nHere are some Xbox prices I found:\n\n1. Microsoft Xbox Series X - Black Edition: $399.00\n2. Microsoft Xbox Series S 1TB - Black: $349.00\n3. Xbox Series S \u2013 Starter Bundle: $239.00\n4. Microsoft Xbox Series X 1TB Console - Diablo Immortal Edition: $385.58\n\nPlease note that these prices are subject to change and availability.\nTaskWeaver: Here are some Xbox prices I found:\n\n1. Microsoft Xbox Series X - Black Edition: $399.00\n2. Microsoft Xbox Series S 1TB - Black: $349.00\n3. Xbox Series S \u2013 Starter Bundle: $239.00\n4. Microsoft Xbox Series X 1TB Console - Diablo Immortal Edition: $385.58\n\nPlease note that these prices are subject to change and availability.\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},802:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/APS-1dc4d286038dedc17487146cec8214fd.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);