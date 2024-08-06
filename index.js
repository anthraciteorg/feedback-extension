import*as t from"/script.js";function e(t,e,s,i){for(var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const h=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,b=globalThis,g=b.trustedTypes,m=g?g.emptyScript:"",v=b.reactiveElementPolyfillSupport,y=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!c(t,e),k={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),n=s.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:w).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??_)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(b.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,x=S.trustedTypes,C=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+T,U=`<${A}>`,I=document,O=()=>I.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,M="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,L=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,D=/"/g,z=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),V=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),W=new WeakMap,q=I.createTreeWalker(I,129);function G(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Y=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=B;for(let e=0;e<s;e++){const s=t[e];let h,a,c=-1,l=0;for(;l<s.length&&(o.lastIndex=l,a=o.exec(s),null!==a);)l=o.lastIndex,o===B?"!--"===a[1]?o=N:void 0!==a[1]?o=R:void 0!==a[2]?(z.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=L):void 0!==a[3]&&(o=L):o===L?">"===a[0]?(o=n??B,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,h=a[1],o=void 0===a[3]?L:'"'===a[3]?D:F):o===D||o===F?o=L:o===N||o===R?o=B:(o=L,n=void 0);const d=o===L&&t[e+1].startsWith("/>")?" ":"";r+=o===B?s+U:c>=0?(i.push(h),s.slice(0,c)+E+s.slice(c)+T+d):s+T+(-2===c?e:d)}return[G(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,h=this.parts,[a,c]=Y(t,e);if(this.el=Z.createElement(a,s),q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=q.nextNode())&&h.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=c[r++],s=i.getAttribute(t).split(T),o=/([.?@])?(.*)/.exec(e);h.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?et:"?"===o[1]?st:"@"===o[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(T)&&(h.push({type:6,index:n}),i.removeAttribute(t));if(z.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),q.nextNode(),h.push({type:2,index:++n});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===A)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)h.push({type:7,index:n}),t+=T.length-1}n++}}static createElement(t,e){const s=I.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===V)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=P(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??I).importNode(e,!0);q.currentNode=i;let n=q.nextNode(),r=0,o=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new X(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new nt(n,this,t)),this._$AV.push(e),h=s[++o]}r!==h?.index&&(n=q.nextNode(),r++)}return q.currentNode=I,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),P(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==J&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new X(this.S(O()),this.S(O()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=K(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const i=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=K(this,i[s+o],e,o),h===V&&(h=this._$AH[o]),r||=!P(h)||h!==this._$AH[o],h===J?t=J:t!==J&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}r&&!i&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class it extends tt{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??J)===V)return;const s=this._$AH,i=t===J&&s!==J||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==J&&(s===J||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=S.litHtmlPolyfillSupport;rt?.(Z,X),(S.litHtmlVersions??=[]).push("3.1.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new X(e.insertBefore(O(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ct={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:_},lt=(t=ct,e,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function dt(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ut(t){return dt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t,...e){if(!function(t){return t instanceof Uint8Array||null!=t&&"object"==typeof t&&"Uint8Array"===t.constructor.name}(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)}function ft(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}const bt="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,gt=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),mt=(t,e)=>t<<32-e|t>>>e;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */new Uint8Array(new Uint32Array([287454020]).buffer)[0];const vt=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function yt(t){pt(t);let e="";for(let s=0;s<t.length;s++)e+=vt[t[s]];return e}function wt(t){return"string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}(t)),pt(t),t}class _t{clone(){return this._cloneInto()}}function kt(t){const e=e=>t().update(wt(e)).digest(),s=t();return e.outputLen=s.outputLen,e.blockLen=s.blockLen,e.create=()=>t(),e}const $t=(t,e,s)=>t&e^~t&s,St=(t,e,s)=>t&e^t&s^e&s;class xt extends _t{constructor(t,e,s,i){super(),this.blockLen=t,this.outputLen=e,this.padOffset=s,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gt(this.buffer)}update(t){ft(this);const{view:e,buffer:s,blockLen:i}=this,n=(t=wt(t)).length;for(let r=0;r<n;){const o=Math.min(i-this.pos,n-r);if(o!==i)s.set(t.subarray(r,r+o),this.pos),this.pos+=o,r+=o,this.pos===i&&(this.process(e,0),this.pos=0);else{const e=gt(t);for(;i<=n-r;r+=i)this.process(e,r)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){ft(this),function(t,e){pt(t);const s=e.outputLen;if(t.length<s)throw new Error(`digestInto() expects output buffer of length at least ${s}`)}(t,this),this.finished=!0;const{buffer:e,view:s,blockLen:i,isLE:n}=this;let{pos:r}=this;e[r++]=128,this.buffer.subarray(r).fill(0),this.padOffset>i-r&&(this.process(s,0),r=0);for(let t=r;t<i;t++)e[t]=0;!function(t,e,s,i){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,s,i);const n=BigInt(32),r=BigInt(4294967295),o=Number(s>>n&r),h=Number(s&r),a=i?4:0,c=i?0:4;t.setUint32(e+a,o,i),t.setUint32(e+c,h,i)}(s,i-8,BigInt(8*this.length),n),this.process(s,0);const o=gt(t),h=this.outputLen;if(h%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const a=h/4,c=this.get();if(a>c.length)throw new Error("_sha2: outputLen bigger than state");for(let t=0;t<a;t++)o.setUint32(4*t,c[t],n)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const s=t.slice(0,e);return this.destroy(),s}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:s,length:i,finished:n,destroyed:r,pos:o}=this;return t.length=i,t.pos=o,t.finished=n,t.destroyed=r,i%e&&t.buffer.set(s),t}}const Ct=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Et=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Tt=new Uint32Array(64);class At extends xt{constructor(){super(64,32,8,!1),this.A=0|Et[0],this.B=0|Et[1],this.C=0|Et[2],this.D=0|Et[3],this.E=0|Et[4],this.F=0|Et[5],this.G=0|Et[6],this.H=0|Et[7]}get(){const{A:t,B:e,C:s,D:i,E:n,F:r,G:o,H:h}=this;return[t,e,s,i,n,r,o,h]}set(t,e,s,i,n,r,o,h){this.A=0|t,this.B=0|e,this.C=0|s,this.D=0|i,this.E=0|n,this.F=0|r,this.G=0|o,this.H=0|h}process(t,e){for(let s=0;s<16;s++,e+=4)Tt[s]=t.getUint32(e,!1);for(let t=16;t<64;t++){const e=Tt[t-15],s=Tt[t-2],i=mt(e,7)^mt(e,18)^e>>>3,n=mt(s,17)^mt(s,19)^s>>>10;Tt[t]=n+Tt[t-7]+i+Tt[t-16]|0}let{A:s,B:i,C:n,D:r,E:o,F:h,G:a,H:c}=this;for(let t=0;t<64;t++){const e=c+(mt(o,6)^mt(o,11)^mt(o,25))+$t(o,h,a)+Ct[t]+Tt[t]|0,l=(mt(s,2)^mt(s,13)^mt(s,22))+St(s,i,n)|0;c=a,a=h,h=o,o=r+e|0,r=n,n=i,i=s,s=e+l|0}s=s+this.A|0,i=i+this.B|0,n=n+this.C|0,r=r+this.D|0,o=o+this.E|0,h=h+this.F|0,a=a+this.G|0,c=c+this.H|0,this.set(s,i,n,r,o,h,a,c)}roundClean(){Tt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Ut=kt((()=>new At)),It={version:.5,endpoint:"https://rlhf.frammie.ee",feedback:{}};const Ot=new class e{static key="anthracite-feedback";container;constructor(){this.container=SillyTavern.getContext().extensionSettings[e.key],this.container||(this.container={...It,userId:this._generateUserId()},this.save())}save(){SillyTavern.getContext().extensionSettings[e.key]=this.container,t.saveSettings()}clearCache(){this.container.feedback={},this.save()}_generateUserId(){return yt(Ut(function(t=32){if(bt&&"function"==typeof bt.getRandomValues)return bt.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}(256)))}};var Pt;!function(t){t[t.Text=0]="Text",t[t.Chat=1]="Chat"}(Pt||(Pt={}));class jt{messageId;rating;explanation;tags;get partiallyFilled(){return!(!this.explanation&&!this.tags?.length)}constructor(t,e){this.messageId=jt._generateUniqueId(t),this.rating=e}load(){const t=Ot.container.feedback[this.messageId];t&&(this.messageId=t.messageId,this.rating=t.rating,this.explanation=t.explanation,this.tags=t.tags)}save(){Ot.container.feedback[this.messageId]=this,Ot.save()}delete(){delete Ot.container.feedback[this.messageId],Ot.save()}static _generateUniqueId(e){const s=t.chat[e],i=s.swipe_info[s.swipe_id],n=i.gen_started instanceof Date?i.gen_started.toISOString():i.gen_started;return yt(Ut([t.getCurrentChatId(),e,s.swipe_id,n].join("|")))}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mt extends ot{render(){return H`
        <link rel="stylesheet" href="/css/fontawesome.min.css">
        <link rel="stylesheet" href="/style.css">
        <link rel="stylesheet" href="/css/toggle-dependent.css">
        <link rel="stylesheet" href="/css/user.css">
      `}}const Bt=h`
    :host {
        position: relative;
    }

    :host([open]) {
        #container {
            pointer-events: all;
            opacity: 1;
        }
    }

    :host([anchor='top']) {
        #container {
            bottom: 1rem;
        }

        &:host([open]) {
            #container {
                transform: translateY(-1rem);
            }
        }
    }

    :host([anchor='bottom']) {
        #container {
            top: 1rem;
        }

        &:host([open]) {
            #container {
                transform: translateY(1rem);
            }
        }
    }
        
    #container {
        pointer-events: none;
        position: absolute;
        right: 0rem;
        opacity: 0;
        background:
            linear-gradient(
                var(--SmartThemeChatTintColor),
                var(--SmartThemeChatTintColor)
            ),
            linear-gradient(
                var(--SmartThemeBotMesBlurTintColor),
                var(--SmartThemeBotMesBlurTintColor)
            );
        border: 1px solid var(--SmartThemeBorderColor);
        border-radius: 10px;
        min-width: 20rem;
        padding: 1rem;
        transition:
            transform 300ms,
            opacity 300ms;
    }

    #header {
        display: flex;

        > p {
            flex: 1;
            white-space: pre;
        }
    }

    #explanation {
        height: 5rem;
        resize: both;
        margin-bottom: 0.75rem;
    }

    #controls {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
`;var Nt;!function(t){t[t.Up=1]="Up",t[t.Down=-1]="Down"}(Nt||(Nt={}));const Rt={[Nt.Up]:!0,[Nt.Down]:!1};let Lt=class extends Mt{static styles=h`
        > div:focus-visible {
            opacity: 1;
        }

        :host([active]) {
            > div {
                opacity: 1;
            }
        }
    `;#t=Nt.Up;get type(){return this.#t}set type(t){this.#t=t}#e=!1;get active(){return this.#e}set active(t){this.#e=t}get title(){return this.active?"Remove vote":this.type===Nt.Up?"Upvote":"Downvote"}render(){return H`
            ${super.render()}
            <div title="${this.title}" class="mes_button interactable fa-regular fa-thumbs-${this.type===Nt.Up?"up":"down"}" data-i18n="[title]${this.title}" tabindex="0">
            </div>
        `}};e([dt({type:Number})],Lt.prototype,"type",null),e([dt({type:Boolean})],Lt.prototype,"active",null),Lt=e([at("ant-feedback-thumb")],Lt);const Ft={[Nt.Up]:[{id:"creative",name:"Creative"},{id:"compelling",name:"Compelling"},{id:"well-structured",name:"Well-structured"},{id:"engaging",name:"Engaging"},{id:"vivid",name:"Vivid"},{id:"insightful",name:"Insightful"}],[Nt.Down]:[{id:"slop",name:"Slop"},{id:"incoherent",name:"Incoherent"},{id:"long-winded",name:"Long-winded"},{id:"repetitive",name:"Repetitive"},{id:"uncreative",name:"Uncreative"},{id:"censored",name:"Censored"}]};let Dt=class extends Mt{static styles=h`
        :host {
            #tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                align-items: flex-start;

                > button {
                    margin: 0;
                    width: initial;
                }
            }
        }
    `;#t;get type(){return this.#t}set type(t){this.#t=t}#s={};get selected(){return this.#s}set selected(t){this.#s=t}render(){return H`
            ${super.render()}
            <div id="tags">
                ${(Ft[this.type??Nt.Down]??[]).map((t=>H`
                    <button class="${["menu_button",this.selected[t.id]&&"active"].join(" ")}" @click="${()=>this._onSelect(t)}">
                        ${t.name}
                    </button>
                `))}
            </div>
        `}_onSelect(t){const e={...this.selected};e[t.id]?delete e[t.id]:e[t.id]=!0,this.selected=e,this.dispatchEvent(new CustomEvent("selected",{detail:{selected:e}}))}};e([dt({type:Number})],Dt.prototype,"type",null),e([dt()],Dt.prototype,"selected",null),Dt=e([at("ant-feedback-tags")],Dt);let zt=class extends Mt{static styles=Bt;#i=!1;get open(){return this.#i}set open(t){this.#i=t}#n="top";get anchor(){return this.#n}set anchor(t){this.#n=t}#r=!1;get stuck(){return this.#r}set stuck(t){this.#r=t}#o;get feedback(){return this.#o}set feedback(t){this.#o=t}get selected(){return this.feedback?.tags?.reduce(((t,e)=>(t[e]=!0,t)),{})??{}}render(){return H`
            ${super.render()}
            <div id="container" @click="${this._onClick}">
                <div id="header">
                    <p>💬  Leave some feedback</p>
                    <div title="Close" class="mes_button fa-regular fa-xmark interactable" data-i18n="[title]Close" tabindex="0" @click="${this._onClose}"></div>
                </div>
                <textarea id="explanation" placeholder="${"Feel free to give an explanation of what happened, e.g. The AI didn't stick to the character well."}" .value="${this.feedback?.explanation??""}" @input="${this._onExplanationInput}" maxlength="${640}"></textarea>
                <ant-feedback-tags type="${(t=>t??J)(this.feedback?.rating)}" .selected="${this.selected}" @selected="${this._onTagSelect}"></ant-feedback-tags>
                <div id="controls">
                    <button class="menu_button" @click="${this._onClose}">
                        Cancel
                    </button>
                    <button class="menu_button" @click="${t=>this._onClose(t,!0)}">
                        Submit
                    </button>
                </div>
            </div>
        `}reset(){this.stuck=!1}_onClick(){this.stuck=!0}_onExplanationInput(t){this.feedback.explanation=t.target.value}_onTagSelect(t){this.feedback.tags=Object.keys(t.detail.selected)}_onClose(t,e){t.stopPropagation(),this.stuck=!1,this.dispatchEvent(new CustomEvent("close",{detail:{submit:e}}))}};e([dt({type:Boolean})],zt.prototype,"open",null),e([dt({type:String,reflect:!0})],zt.prototype,"anchor",null),e([dt({type:Boolean})],zt.prototype,"stuck",null),e([dt({type:Object})],zt.prototype,"feedback",null),zt=e([at("ant-feedback-popup")],zt);let Ht=class extends ot{#h;get _feedback(){return this.#h}set _feedback(t){this.#h=t}#a=!1;get _popupOpen(){return this.#a}set _popupOpen(t){this.#a=t}#c;get _popup(){return this.#c}set _popup(t){this.#c=t}_toggleTimeoutId;_mouseOver=!1;_eventListener;get messageId(){return parseInt(this.closest(".mes").attributes.getNamedItem("mesid").value)}get message(){return t.chat[this.messageId]}constructor(){super(),this._eventListener=this._onSwipe.bind(this),t.eventSource.on(t.event_types.MESSAGE_SWIPED,this._eventListener)}render(){if(null!=this.message?.swipe_id)return this._feedback||this._loadFeedback(),H`
            <div @mouseover="${this._onMouseEvent}" @mouseleave="${this._onMouseEvent}">
                <ant-feedback-thumb type="${Nt.Up}" ?active="${this._feedback?.rating===Nt.Up}" @click="${this._vote}"></ant-feedback-thumb>
                <ant-feedback-thumb type="${Nt.Down}" ?active="${this._feedback?.rating===Nt.Down}" @click="${this._vote}"></ant-feedback-thumb>
                <ant-feedback-popup ?open="${this._popupOpen}" anchor="${this.messageId<3?"bottom":"top"}" .feedback="${this._feedback}" @close="${this._onClose}"></ant-feedback-popup>
            </div>
        `}async _loadFeedback(){this.message.swipe_id&&this.message.swipe_info&&this.message.swipe_id>=this.message.swipe_info?.length||(this._feedback=new jt(this.messageId),this._feedback?.load())}_onSwipe(e){this.isConnected?e===this.messageId&&(this._reset(),this._loadFeedback()):t.eventSource.removeListener(this._eventListener)}_deleteFeedback(){this._feedback?.delete(),this._reset()}_onMouseEvent(t){t.relatedTarget&&(this._mouseOver="mouseover"===t.type,this._schedulePopup(this._mouseOver))}async _vote(t){const e=parseInt(t.target.attributes.getNamedItem("type").value);this._feedback=new jt(this.messageId,this._feedback?.rating!==e?e:void 0),void 0===this._feedback.rating?this._popupOpen=!1:this._schedulePopup(!0),this._submitFeedback()}_schedulePopup(t){this._shouldToggle(t)&&(clearTimeout(this._toggleTimeoutId),this._toggleTimeoutId=window.setTimeout((()=>{this._shouldToggle(t)&&(this._popupOpen=t)}),t?500:750))}_shouldToggle(t){return t!==this._popupOpen&&t===this._mouseOver&&!this._popup.stuck&&void 0!==this._feedback?.rating}_onClose(t){this._popupOpen=!1,t.detail.submit&&(this._feedback?.save(),this._submitFeedback())}_reset(){this._popupOpen=!1,this._popup.reset(),this._feedback=void 0}async _submitFeedback(){if(this._feedback)try{const e=await async function(){let e;const s=new Promise((t=>e=t)),i=t.chat.at(-1);let n={completion:i.mes,model:i.extra.model,generationType:"textgenerationwebui"===t.main_api?Pt.Text:Pt.Chat};function r(t){""!==t.prompt&&(n.prompt=n.generationType===Pt.Text?t.prompt:JSON.stringify(t.chat),e(n))}t.eventSource.on(t.event_types.GENERATE_AFTER_COMBINE_PROMPTS,r),t.eventSource.on(t.event_types.CHAT_COMPLETION_PROMPT_READY,r),t.Generate("swipe",{},!0);try{return await Promise.race([s,new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout exceeded"))),1e3)))])}finally{t.eventSource.removeListener(t.event_types.GENERATE_AFTER_COMBINE_PROMPTS,r),t.eventSource.removeListener(t.event_types.CHAT_COMPLETION_PROMPT_READY,r)}}();delete e.generationType;const s=await fetch(`${Ot.container.endpoint}/feedback/${Ot.container.userId}/${this._feedback.messageId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e.prompt,completion:e.completion,model:e.model,label:this._feedback.rating?Rt[this._feedback.rating]:null,explanation:this._feedback.explanation,tags:this._feedback.tags})});if(!s.ok)throw s;if(!this._feedback.rating)return void this._deleteFeedback();this._feedback.save(),this._mouseOver&&(this._popupOpen=!0)}catch(t){if(t instanceof Response)switch(t.status){case 429:case 503:toastr.warning("Rate limit has been reached. Please try again later.","Failed to send feedback");break;default:toastr.error("Invalid response when submitting feedback, please check console for further details.","Failed to send feedback")}else toastr.error("Unknown error occurred, please check console for further details.","Failed to send feedback");if(console.error(t),this._feedback.partiallyFilled)return;this._deleteFeedback()}}};e([ut()],Ht.prototype,"_feedback",null),e([ut()],Ht.prototype,"_popupOpen",null),e([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(e,s,i)=>((t,e,s)=>(s.configurable=!0,s.enumerable=!0,s))(0,0,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}("ant-feedback-popup")],Ht.prototype,"_popup",null),Ht=e([at("ant-feedback-controls")],Ht);let Vt=class extends Mt{_saveTimeoutId;static styles=h`
        .menu_button {
            width: initial;
        }

        #metadata {
            word-break: break-all;
            
            > * {
                display: block;
            }
        }
    `;render(){return H`
            ${super.render()}

            <div>
                <label data-i18n="Endpoint" for="ant_feedback_endpoint">
                    Endpoint
                </label>
                <input id="ant_feedback_endpoint" class="text_pole textarea_compact" .value="${Ot.container.endpoint}" @input="${this._onEndpointInput}">
            </div>
            <div>
                <label data-i18n="Endpoint" for="ant_feedback_clear_cache">
                    Clear cache
                </label>
                <button id="ant_feedback_clear_cache" class="menu_button interactable" @click="${this._onCacheClearClick}">
                    Clear cache
                </button>
            </div>
            <div id="metadata">
                <strong>Anthracite</strong>
                <small>Version 0.5.0</small>
                <small>User ID:</small>
                <small>${Ot.container.userId}</small>
            </div>
        `}_onEndpointInput(t){Ot.container.endpoint=t.target.value,this._scheduleSave()}_onCacheClearClick(){Ot.clearCache(),toastr.info("Cache has been cleared, refresh to notice effects.","Cache cleared")}_scheduleSave(){clearTimeout(this._saveTimeoutId),this._saveTimeoutId=window.setTimeout((()=>Ot.save()),1e3)}};Vt=e([at("ant-feedback-settings")],Vt);let Jt=class extends ot{render(){return H`
            <div id="ant_feedback_container" class="extension_container">
                <div id="ant_feedback_settings">
                    <div class="inline-drawer">
                        <div class="inline-drawer-toggle inline-drawer-header">
                            <b>Feedback</b>
                            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                        </div>
                        <div class="inline-drawer-content">
                            <ant-feedback-settings></ant-feedback-settings>
                        </div>
                    </div>
                </div>
            </div>
        `}createRenderRoot(){return this}};Jt=e([at("ant-feedback-settings-container")],Jt),document.querySelector("#message_template .mes_buttons").prepend(document.createElement("ant-feedback-controls")),document.getElementById("extensions_settings").append(document.createElement("ant-feedback-settings-container")),console.info("\n █████╗ ███╗   ██╗████████╗██╗  ██╗██████╗  █████╗  ██████╗██╗████████╗███████╗\n██╔══██╗████╗  ██║╚══██╔══╝██║  ██║██╔══██╗██╔══██╗██╔════╝██║╚══██╔══╝██╔════╝\n███████║██╔██╗ ██║   ██║   ███████║██████╔╝███████║██║     ██║   ██║   █████╗  \n██╔══██║██║╚██╗██║   ██║   ██╔══██║██╔══██╗██╔══██║██║     ██║   ██║   ██╔══╝  \n██║  ██║██║ ╚████║   ██║   ██║  ██║██║  ██║██║  ██║╚██████╗██║   ██║   ███████╗\n╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝   ╚═╝   ╚══════╝\nFeedback plugin injected\n");
