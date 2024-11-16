(()=>{"use strict";const e=[{type:"number",key:"numOfIcons",label:"Number of Icons",input:"true"},{type:"textfield",key:"filledColor",label:"Filled Color",input:"true"},{type:"textfield",key:"unfilledColor",label:"UnFilled Color",input:"true"},{type:"textfield",key:"iconHeight",label:"Icon Height",input:"true"},{type:"textfield",key:"iconWidth",label:"Icon Width",input:"true"},{type:"textarea",key:"icon",label:"Icon",input:!0},{key:"placeholder",ignore:!0}];function t(...t){return Formio.Components.baseEditForm([{key:"data",ignore:!0},{key:"display",components:e},{key:"validation",ignore:!0}],...t)}const n=Formio.Components.components.field;class s extends n{static editForm=t;static schema(...e){return n.schema({type:"rating",label:"rating",key:"rating",unfilledColor:"#ddd",filledColor:"yellow",numOfIcons:"5",iconHeight:"25px",iconWidth:"25px",icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n                \t viewBox="0 0 47.94 47.94" xml:space="preserve">\n                <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757\n                \tc2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042\n                \tc0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685\n                \tc-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528\n                \tc-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956\n                \tC22.602,0.567,25.338,0.567,26.285,2.486z"/>\n            </svg>'})}static get builderInfo(){return{title:"Rating",icon:"star",group:"basic",documentation:"/userguide/#textfield",weight:0,schema:s.schema()}}setIconProperties(){const e=(new DOMParser).parseFromString(this.component.icon,"text/xml");e.firstChild.style.fill=this.component.unfilledColor,e.firstChild.setAttribute("height",this.component.iconHeight),e.firstChild.setAttribute("width",this.component.iconWidth),this.component.icon=(new XMLSerializer).serializeToString(e.documentElement)}constructor(e,t,n){super(e,t,n)}init(){this.setIconProperties(),super.init()}get inputInfo(){return super.inputInfo}render(e){let t='<div ref="rating">';for(let e=0;e<this.component.numOfIcons;e++)t+=this.component.icon;return t+="</div>",super.render(t)}attach(e){function t(e,t){for(const n of e)n.style.fill=t}if(this.loadRefs(e,{rating:"single"}),!this.component.disabled){let e=this.refs.rating.children;for(let n=0;n<e.length;n++){let s=e[n];s.addEventListener("click",(()=>{t(e,this.component.unfilledColor),s.style.fill=this.component.filledColor;let i=s.previousElementSibling;for(;i;)i.style.fill=this.component.filledColor,i=i.previousElementSibling;this.updateValue(`${n+1}/${e.length}`)}))}}return super.attach(e)}detach(){return super.detach()}destroy(){return super.destroy()}normalizeValue(e,t={}){return super.normalizeValue(e,t)}getValue(){return super.getValue()}getValueAt(e){return super.getValueAt(e)}setValue(e,t={}){return super.setValue(e,t)}setValueAt(e,t,n={}){return super.setValueAt(e,t,n)}updateValue(e,t={}){return super.updateValue(...arguments)}}const i=Formio.Components.components.panel;class l extends i{static schema(...e){return i.schema({type:"customPanel",label:"Custom Panel",key:"customPanel",stepNumber:"2",title:"Custom Panel",theme:"default",breadcrumb:"default",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1})}static get builderInfo(){return{title:"Custom Panel",icon:"list-alt",group:"basic",documentation:"/userguide/form-building/layout-components#panel",showPreview:!1,weight:30,schema:l.schema()}}get defaultSchema(){return l.schema()}get templateName(){return"panel"}static savedValueTypes(){return[]}constructor(...e){super(...e),this.noField=!0,this.on("componentError",(e=>{utils.isChildOf(e.instance,this)&&this.collapsed&&(this.collapsed=!1)}))}static editForm(){const e=i.editForm();let t=e.components.find((e=>"display"===e.key));return t||(t={key:"display",components:[]},e.components.push(t)),t.components.push({type:"number",label:"Step Number",key:"stepNumber",input:!0,defaultValue:1,validate:{required:!0}}),e}attach(e){super.attach(e),this.loadRefs(e,{header:"single",collapsed:this.collapsed,[this.nestedKey]:"single",messageContainer:"single-scope"});const t=`\n            <div class="step-label">\n                <div class="step-number">${this.component.stepNumber}</div>\n                <span>${this.component.title||"Step Panel"}</span>\n                <div class="toggle-icon" style="transform: ${this.isCollapsed?"rotate(0deg)":"rotate(180deg)"};">\n                ${this.component.collapsible?"▼":""}\n            </div>\n            </div>\n            \n        `;this.refs.header.innerHTML=t;let n=Promise.resolve();this.refs[this.nestedKey]&&(n=this.attachComponents(this.refs[this.nestedKey])),this.visible||this.attachComponentsLogic(),this.component.collapsible&&this.refs.header&&(this.addEventListener(this.refs.header,"click",(()=>{this.collapsed=!this.collapsed,updateToggleIcon()})),this.addEventListener(this.refs.header,"keydown",(e=>{13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),this.collapsed=!this.collapsed)})))}}Formio.use([{components:{rating:s,customPanel:l}}])})();