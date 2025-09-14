function Y1(l){return l!==null&&typeof l=="object"&&"constructor"in l&&l.constructor===Object}function V1(l,e){l===void 0&&(l={}),e===void 0&&(e={});const t=["__proto__","constructor","prototype"];Object.keys(e).filter((s=>t.indexOf(s)<0)).forEach((s=>{l[s]===void 0?l[s]=e[s]:Y1(e[s])&&Y1(l[s])&&Object.keys(e[s]).length>0&&V1(l[s],e[s])}))}const J1={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function X(){const l=typeof document<"u"?document:{};return V1(l,J1),l}const ae={document:J1,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:l=>typeof setTimeout>"u"?(l(),null):setTimeout(l,0),cancelAnimationFrame(l){typeof setTimeout<"u"&&clearTimeout(l)}};function R(){const l=typeof window<"u"?window:{};return V1(l,ae),l}function s1(l){return l===void 0&&(l=""),l.trim().split(" ").filter((e=>!!e.trim()))}function re(l){const e=l;Object.keys(e).forEach((t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}}))}function p1(l,e){return e===void 0&&(e=0),setTimeout(l,e)}function K(){return Date.now()}function ce(l){const e=R();let t;return e.getComputedStyle&&(t=e.getComputedStyle(l,null)),!t&&l.currentStyle&&(t=l.currentStyle),t||(t=l.style),t}function H1(l,e){e===void 0&&(e="x");const t=R();let s,a,i;const o=ce(l);return t.WebKitCSSMatrix?(a=o.transform||o.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map((r=>r.replace(",","."))).join(", ")),i=new t.WebKitCSSMatrix(a==="none"?"":a)):(i=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=i.toString().split(",")),e==="x"&&(a=t.WebKitCSSMatrix?i.m41:s.length===16?parseFloat(s[12]):parseFloat(s[4])),e==="y"&&(a=t.WebKitCSSMatrix?i.m42:s.length===16?parseFloat(s[13]):parseFloat(s[5])),a||0}function g1(l){return typeof l=="object"&&l!==null&&l.constructor&&Object.prototype.toString.call(l).slice(8,-1)==="Object"}function ne(l){return typeof window<"u"&&window.HTMLElement!==void 0?l instanceof HTMLElement:l&&(l.nodeType===1||l.nodeType===11)}function W(){const l=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const s=t<0||arguments.length<=t?void 0:arguments[t];if(s!=null&&!ne(s)){const a=Object.keys(Object(s)).filter((i=>e.indexOf(i)<0));for(let i=0,o=a.length;i<o;i+=1){const r=a[i],p=Object.getOwnPropertyDescriptor(s,r);p!==void 0&&p.enumerable&&(g1(l[r])&&g1(s[r])?s[r].__swiper__?l[r]=s[r]:W(l[r],s[r]):!g1(l[r])&&g1(s[r])?(l[r]={},s[r].__swiper__?l[r]=s[r]:W(l[r],s[r])):l[r]=s[r])}}}return l}function m1(l,e,t){l.style.setProperty(e,t)}function Q1(l){let{swiper:e,targetPosition:t,side:s}=l;const a=R(),i=-e.translate;let o,r=null;const p=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const c=t>i?"next":"prev",d=(m,h)=>c==="next"&&m>=h||c==="prev"&&m<=h,x=()=>{o=new Date().getTime(),r===null&&(r=o);const m=Math.max(Math.min((o-r)/p,1),0),h=.5-Math.cos(m*Math.PI)/2;let n=i+h*(t-i);if(d(n,t)&&(n=t),e.wrapperEl.scrollTo({[s]:n}),d(n,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:n})})),void a.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=a.requestAnimationFrame(x)};x()}function c1(l){return l.querySelector(".swiper-slide-transform")||l.shadowRoot&&l.shadowRoot.querySelector(".swiper-slide-transform")||l}function N(l,e){e===void 0&&(e="");const t=R(),s=[...l.children];return t.HTMLSlotElement&&l instanceof HTMLSlotElement&&s.push(...l.assignedElements()),e?s.filter((a=>a.matches(e))):s}function oe(l,e){const t=[e];for(;t.length>0;){const s=t.shift();if(l===s)return!0;t.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function de(l,e){const t=R();let s=e.contains(l);return!s&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(s=[...e.assignedElements()].includes(l),s||(s=oe(l,e))),s}function E1(l){try{return void console.warn(l)}catch{}}function U(l,e){e===void 0&&(e=[]);const t=document.createElement(l);return t.classList.add(...Array.isArray(e)?e:s1(e)),t}function M1(l){const e=R(),t=X(),s=l.getBoundingClientRect(),a=t.body,i=l.clientTop||a.clientTop||0,o=l.clientLeft||a.clientLeft||0,r=l===e?e.scrollY:l.scrollTop,p=l===e?e.scrollX:l.scrollLeft;return{top:s.top+r-i,left:s.left+p-o}}function pe(l,e){const t=[];for(;l.previousElementSibling;){const s=l.previousElementSibling;e?s.matches(e)&&t.push(s):t.push(s),l=s}return t}function ue(l,e){const t=[];for(;l.nextElementSibling;){const s=l.nextElementSibling;e?s.matches(e)&&t.push(s):t.push(s),l=s}return t}function l1(l,e){return R().getComputedStyle(l,null).getPropertyValue(e)}function v1(l){let e,t=l;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function r1(l,e){const t=[];let s=l.parentElement;for(;s;)e?s.matches(e)&&t.push(s):t.push(s),s=s.parentElement;return t}function f1(l,e){e&&l.addEventListener("transitionend",(function t(s){s.target===l&&(e.call(l,s),l.removeEventListener("transitionend",t))}))}function R1(l,e,t){const s=R();return t?l[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(l,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(l,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):l.offsetWidth}function O(l){return(Array.isArray(l)?l:[l]).filter((e=>!!e))}function C1(l){return e=>Math.abs(e)>0&&l.browser&&l.browser.need3dFix&&Math.abs(e)%90==0?e+.001:e}function e1(l,e){e===void 0&&(e=""),typeof trustedTypes<"u"?l.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):l.innerHTML=e}let j1,I1,$1;function xe(){const l=R(),e=X();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in l||l.DocumentTouch&&e instanceof l.DocumentTouch)}}function ee(){return j1||(j1=xe()),j1}function he(l){let{userAgent:e}=l===void 0?{}:l;const t=ee(),s=R(),a=s.navigator.platform,i=e||s.navigator.userAgent,o={ios:!1,android:!1},r=s.screen.width,p=s.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/);let d=i.match(/(iPad).*OS\s([\d_]+)/);const x=i.match(/(iPod)(.*OS\s([\d_]+))?/),m=!d&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=a==="Win32";let n=a==="MacIntel";return!d&&n&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${r}x${p}`)>=0&&(d=i.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),n=!1),c&&!h&&(o.os="android",o.android=!0),(d||m||x)&&(o.os="ios",o.ios=!0),o}function te(l){return l===void 0&&(l={}),I1||(I1=he(l)),I1}function ge(){const l=R(),e=te();let t=!1;function s(){const o=l.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(s()){const o=String(l.navigator.userAgent);if(o.includes("Version/")){const[r,p]=o.split("Version/")[1].split(" ")[0].split(".").map((c=>Number(c)));t=r<16||r===16&&p<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(l.navigator.userAgent),i=s();return{isSafari:t||i,needPerspectiveFix:t,need3dFix:i||a&&e.ios,isWebView:a}}function se(){return $1||($1=ge()),$1}function me(l){let{swiper:e,on:t,emit:s}=l;const a=R();let i=null,o=null;const r=()=>{e&&!e.destroyed&&e.initialized&&(s("beforeResize"),s("resize"))},p=()=>{e&&!e.destroyed&&e.initialized&&s("orientationchange")};t("init",(()=>{e.params.resizeObserver&&a.ResizeObserver!==void 0?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((c=>{o=a.requestAnimationFrame((()=>{const{width:d,height:x}=e;let m=d,h=x;c.forEach((n=>{let{contentBoxSize:u,contentRect:g,target:f}=n;f&&f!==e.el||(m=g?g.width:(u[0]||u).inlineSize,h=g?g.height:(u[0]||u).blockSize)})),m===d&&h===x||r()}))})),i.observe(e.el)):(a.addEventListener("resize",r),a.addEventListener("orientationchange",p))})),t("destroy",(()=>{o&&a.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),a.removeEventListener("resize",r),a.removeEventListener("orientationchange",p)}))}function fe(l){let{swiper:e,extendParams:t,on:s,emit:a}=l;const i=[],o=R(),r=function(p,c){c===void 0&&(c={});const d=new(o.MutationObserver||o.WebkitMutationObserver)((x=>{if(e.__preventObserver__)return;if(x.length===1)return void a("observerUpdate",x[0]);const m=function(){a("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)}));d.observe(p,{attributes:c.attributes===void 0||c.attributes,childList:e.isElement||(c.childList===void 0||c).childList,characterData:c.characterData===void 0||c.characterData}),i.push(d)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",(()=>{if(e.params.observer){if(e.params.observeParents){const p=r1(e.hostEl);for(let c=0;c<p.length;c+=1)r(p[c])}r(e.hostEl,{childList:e.params.observeSlideChildren}),r(e.wrapperEl,{attributes:!1})}})),s("destroy",(()=>{i.forEach((p=>{p.disconnect()})),i.splice(0,i.length)}))}var ve={on(l,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const a=t?"unshift":"push";return l.split(" ").forEach((i=>{s.eventsListeners[i]||(s.eventsListeners[i]=[]),s.eventsListeners[i][a](e)})),s},once(l,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function a(){s.off(l,a),a.__emitterProxy&&delete a.__emitterProxy;for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];e.apply(s,o)}return a.__emitterProxy=e,s.on(l,a,t)},onAny(l,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof l!="function")return t;const s=e?"unshift":"push";return t.eventsAnyListeners.indexOf(l)<0&&t.eventsAnyListeners[s](l),t},offAny(l){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(l);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(l,e){const t=this;return!t.eventsListeners||t.destroyed||t.eventsListeners&&l.split(" ").forEach((s=>{e===void 0?t.eventsListeners[s]=[]:t.eventsListeners[s]&&t.eventsListeners[s].forEach(((a,i)=>{(a===e||a.__emitterProxy&&a.__emitterProxy===e)&&t.eventsListeners[s].splice(i,1)}))})),t},emit(){const l=this;if(!l.eventsListeners||l.destroyed||!l.eventsListeners)return l;let e,t,s;for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return typeof i[0]=="string"||Array.isArray(i[0])?(e=i[0],t=i.slice(1,i.length),s=l):(e=i[0].events,t=i[0].data,s=i[0].context||l),t.unshift(s),(Array.isArray(e)?e:e.split(" ")).forEach((r=>{l.eventsAnyListeners&&l.eventsAnyListeners.length&&l.eventsAnyListeners.forEach((p=>{p.apply(s,[r,...t])})),l.eventsListeners&&l.eventsListeners[r]&&l.eventsListeners[r].forEach((p=>{p.apply(s,t)}))})),l}};function we(){const l=this;let e,t;const s=l.el;e=l.params.width!==void 0&&l.params.width!==null?l.params.width:s.clientWidth,t=l.params.height!==void 0&&l.params.height!==null?l.params.height:s.clientHeight,e===0&&l.isHorizontal()||t===0&&l.isVertical()||(e=e-parseInt(l1(s,"padding-left")||0,10)-parseInt(l1(s,"padding-right")||0,10),t=t-parseInt(l1(s,"padding-top")||0,10)-parseInt(l1(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(l,{width:e,height:t,size:l.isHorizontal()?e:t}))}function be(){const l=this;function e(w,v){return parseFloat(w.getPropertyValue(l.getDirectionLabel(v))||0)}const t=l.params,{wrapperEl:s,slidesEl:a,size:i,rtlTranslate:o,wrongRTL:r}=l,p=l.virtual&&t.virtual.enabled,c=p?l.virtual.slides.length:l.slides.length,d=N(a,`.${l.params.slideClass}, swiper-slide`),x=p?l.virtual.slides.length:d.length;let m=[];const h=[],n=[];let u=t.slidesOffsetBefore;typeof u=="function"&&(u=t.slidesOffsetBefore.call(l));let g=t.slidesOffsetAfter;typeof g=="function"&&(g=t.slidesOffsetAfter.call(l));const f=l.snapGrid.length,b=l.slidesGrid.length;let S=t.spaceBetween,y=-u,E=0,P=0;if(i===void 0)return;typeof S=="string"&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*i:typeof S=="string"&&(S=parseFloat(S)),l.virtualSize=-S,d.forEach((w=>{o?w.style.marginLeft="":w.style.marginRight="",w.style.marginBottom="",w.style.marginTop=""})),t.centeredSlides&&t.cssMode&&(m1(s,"--swiper-centered-offset-before",""),m1(s,"--swiper-centered-offset-after",""));const z=t.grid&&t.grid.rows>1&&l.grid;let C;z?l.grid.initSlides(d):l.grid&&l.grid.unsetSlides();const L=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter((w=>t.breakpoints[w].slidesPerView!==void 0)).length>0;for(let w=0;w<x;w+=1){let v;if(C=0,d[w]&&(v=d[w]),z&&l.grid.updateSlide(w,v,d),!d[w]||l1(v,"display")!=="none"){if(t.slidesPerView==="auto"){L&&(d[w].style[l.getDirectionLabel("width")]="");const k=getComputedStyle(v),M=v.style.transform,D=v.style.webkitTransform;if(M&&(v.style.transform="none"),D&&(v.style.webkitTransform="none"),t.roundLengths)C=l.isHorizontal()?R1(v,"width",!0):R1(v,"height",!0);else{const A=e(k,"width"),B=e(k,"padding-left"),H=e(k,"padding-right"),G=e(k,"margin-left"),q=e(k,"margin-right"),j=k.getPropertyValue("box-sizing");if(j&&j==="border-box")C=A+G+q;else{const{clientWidth:I,offsetWidth:T}=v;C=A+B+H+G+q+(T-I)}}M&&(v.style.transform=M),D&&(v.style.webkitTransform=D),t.roundLengths&&(C=Math.floor(C))}else C=(i-(t.slidesPerView-1)*S)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),d[w]&&(d[w].style[l.getDirectionLabel("width")]=`${C}px`);d[w]&&(d[w].swiperSlideSize=C),n.push(C),t.centeredSlides?(y=y+C/2+E/2+S,E===0&&w!==0&&(y=y-i/2-S),w===0&&(y=y-i/2-S),Math.abs(y)<.001&&(y=0),t.roundLengths&&(y=Math.floor(y)),P%t.slidesPerGroup==0&&m.push(y),h.push(y)):(t.roundLengths&&(y=Math.floor(y)),(P-Math.min(l.params.slidesPerGroupSkip,P))%l.params.slidesPerGroup==0&&m.push(y),h.push(y),y=y+C+S),l.virtualSize+=C+S,E=C,P+=1}}if(l.virtualSize=Math.max(l.virtualSize,i)+g,o&&r&&(t.effect==="slide"||t.effect==="coverflow")&&(s.style.width=`${l.virtualSize+S}px`),t.setWrapperSize&&(s.style[l.getDirectionLabel("width")]=`${l.virtualSize+S}px`),z&&l.grid.updateWrapperSize(C,m),!t.centeredSlides){const w=[];for(let v=0;v<m.length;v+=1){let k=m[v];t.roundLengths&&(k=Math.floor(k)),m[v]<=l.virtualSize-i&&w.push(k)}m=w,Math.floor(l.virtualSize-i)-Math.floor(m[m.length-1])>1&&m.push(l.virtualSize-i)}if(p&&t.loop){const w=n[0]+S;if(t.slidesPerGroup>1){const v=Math.ceil((l.virtual.slidesBefore+l.virtual.slidesAfter)/t.slidesPerGroup),k=w*t.slidesPerGroup;for(let M=0;M<v;M+=1)m.push(m[m.length-1]+k)}for(let v=0;v<l.virtual.slidesBefore+l.virtual.slidesAfter;v+=1)t.slidesPerGroup===1&&m.push(m[m.length-1]+w),h.push(h[h.length-1]+w),l.virtualSize+=w}if(m.length===0&&(m=[0]),S!==0){const w=l.isHorizontal()&&o?"marginLeft":l.getDirectionLabel("marginRight");d.filter(((v,k)=>!(t.cssMode&&!t.loop)||k!==d.length-1)).forEach((v=>{v.style[w]=`${S}px`}))}if(t.centeredSlides&&t.centeredSlidesBounds){let w=0;n.forEach((k=>{w+=k+(S||0)})),w-=S;const v=w>i?w-i:0;m=m.map((k=>k<=0?-u:k>v?v+g:k))}if(t.centerInsufficientSlides){let w=0;n.forEach((k=>{w+=k+(S||0)})),w-=S;const v=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(w+v<i){const k=(i-w-v)/2;m.forEach(((M,D)=>{m[D]=M-k})),h.forEach(((M,D)=>{h[D]=M+k}))}}if(Object.assign(l,{slides:d,snapGrid:m,slidesGrid:h,slidesSizesGrid:n}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){m1(s,"--swiper-centered-offset-before",-m[0]+"px"),m1(s,"--swiper-centered-offset-after",l.size/2-n[n.length-1]/2+"px");const w=-l.snapGrid[0],v=-l.slidesGrid[0];l.snapGrid=l.snapGrid.map((k=>k+w)),l.slidesGrid=l.slidesGrid.map((k=>k+v))}if(x!==c&&l.emit("slidesLengthChange"),m.length!==f&&(l.params.watchOverflow&&l.checkOverflow(),l.emit("snapGridLengthChange")),h.length!==b&&l.emit("slidesGridLengthChange"),t.watchSlidesProgress&&l.updateSlidesOffset(),l.emit("slidesUpdated"),!(p||t.cssMode||t.effect!=="slide"&&t.effect!=="fade")){const w=`${t.containerModifierClass}backface-hidden`,v=l.el.classList.contains(w);x<=t.maxBackfaceHiddenSlides?v||l.el.classList.add(w):v&&l.el.classList.remove(w)}}function ye(l){const e=this,t=[],s=e.virtual&&e.params.virtual.enabled;let a,i=0;typeof l=="number"?e.setTransition(l):l===!0&&e.setTransition(e.params.speed);const o=r=>s?e.slides[e.getSlideIndexByData(r)]:e.slides[r];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach((r=>{t.push(r)}));else for(a=0;a<Math.ceil(e.params.slidesPerView);a+=1){const r=e.activeIndex+a;if(r>e.slides.length&&!s)break;t.push(o(r))}else t.push(o(e.activeIndex));for(a=0;a<t.length;a+=1)if(t[a]!==void 0){const r=t[a].offsetHeight;i=r>i?r:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function ke(){const l=this,e=l.slides,t=l.isElement?l.isHorizontal()?l.wrapperEl.offsetLeft:l.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(l.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-t-l.cssOverflowAdjustment()}const F1=(l,e,t)=>{e&&!l.classList.contains(t)?l.classList.add(t):!e&&l.classList.contains(t)&&l.classList.remove(t)};function Se(l){l===void 0&&(l=this&&this.translate||0);const e=this,t=e.params,{slides:s,rtlTranslate:a,snapGrid:i}=e;if(s.length===0)return;s[0].swiperSlideOffset===void 0&&e.updateSlidesOffset();let o=-l;a&&(o=l),e.visibleSlidesIndexes=[],e.visibleSlides=[];let r=t.spaceBetween;typeof r=="string"&&r.indexOf("%")>=0?r=parseFloat(r.replace("%",""))/100*e.size:typeof r=="string"&&(r=parseFloat(r));for(let p=0;p<s.length;p+=1){const c=s[p];let d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=s[0].swiperSlideOffset);const x=(o+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+r),m=(o-i[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+r),h=-(o-d),n=h+e.slidesSizesGrid[p],u=h>=0&&h<=e.size-e.slidesSizesGrid[p],g=h>=0&&h<e.size-1||n>1&&n<=e.size||h<=0&&n>=e.size;g&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(p)),F1(c,g,t.slideVisibleClass),F1(c,u,t.slideFullyVisibleClass),c.progress=a?-x:x,c.originalProgress=a?-m:m}}function Ee(l){const e=this;if(l===void 0){const d=e.rtlTranslate?-1:1;l=e&&e.translate&&e.translate*d||0}const t=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:a,isBeginning:i,isEnd:o,progressLoop:r}=e;const p=i,c=o;if(s===0)a=0,i=!0,o=!0;else{a=(l-e.minTranslate())/s;const d=Math.abs(l-e.minTranslate())<1,x=Math.abs(l-e.maxTranslate())<1;i=d||a<=0,o=x||a>=1,d&&(a=0),x&&(a=1)}if(t.loop){const d=e.getSlideIndexByData(0),x=e.getSlideIndexByData(e.slides.length-1),m=e.slidesGrid[d],h=e.slidesGrid[x],n=e.slidesGrid[e.slidesGrid.length-1],u=Math.abs(l);r=u>=m?(u-m)/n:(u+n-h)/n,r>1&&(r-=1)}Object.assign(e,{progress:a,progressLoop:r,isBeginning:i,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(l),i&&!p&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(p&&!i||c&&!o)&&e.emit("fromEdge"),e.emit("progress",a)}const B1=(l,e,t)=>{e&&!l.classList.contains(t)?l.classList.add(t):!e&&l.classList.contains(t)&&l.classList.remove(t)};function Me(){const l=this,{slides:e,params:t,slidesEl:s,activeIndex:a}=l,i=l.virtual&&t.virtual.enabled,o=l.grid&&t.grid&&t.grid.rows>1,r=x=>N(s,`.${t.slideClass}${x}, swiper-slide${x}`)[0];let p,c,d;if(i)if(t.loop){let x=a-l.virtual.slidesBefore;x<0&&(x=l.virtual.slides.length+x),x>=l.virtual.slides.length&&(x-=l.virtual.slides.length),p=r(`[data-swiper-slide-index="${x}"]`)}else p=r(`[data-swiper-slide-index="${a}"]`);else o?(p=e.find((x=>x.column===a)),d=e.find((x=>x.column===a+1)),c=e.find((x=>x.column===a-1))):p=e[a];p&&(o||(d=ue(p,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),c=pe(p,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach((x=>{B1(x,x===p,t.slideActiveClass),B1(x,x===d,t.slideNextClass),B1(x,x===c,t.slidePrevClass)})),l.emitSlidesClasses()}const S1=(l,e)=>{if(!l||l.destroyed||!l.params)return;const t=e.closest(l.isElement?"swiper-slide":`.${l.params.slideClass}`);if(t){let s=t.querySelector(`.${l.params.lazyPreloaderClass}`);!s&&l.isElement&&(t.shadowRoot?s=t.shadowRoot.querySelector(`.${l.params.lazyPreloaderClass}`):requestAnimationFrame((()=>{t.shadowRoot&&(s=t.shadowRoot.querySelector(`.${l.params.lazyPreloaderClass}`),s&&s.remove())}))),s&&s.remove()}},O1=(l,e)=>{if(!l.slides[e])return;const t=l.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},q1=l=>{if(!l||l.destroyed||!l.params)return;let e=l.params.lazyPreloadPrevNext;const t=l.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const s=l.params.slidesPerView==="auto"?l.slidesPerViewDynamic():Math.ceil(l.params.slidesPerView),a=l.activeIndex;if(l.params.grid&&l.params.grid.rows>1){const o=a,r=[o-e];return r.push(...Array.from({length:e}).map(((p,c)=>o+s+c))),void l.slides.forEach(((p,c)=>{r.includes(p.column)&&O1(l,c)}))}const i=a+s-1;if(l.params.rewind||l.params.loop)for(let o=a-e;o<=i+e;o+=1){const r=(o%t+t)%t;(r<a||r>i)&&O1(l,r)}else for(let o=Math.max(a-e,0);o<=Math.min(i+e,t-1);o+=1)o!==a&&(o>i||o<a)&&O1(l,o)};function Ce(l){const{slidesGrid:e,params:t}=l,s=l.rtlTranslate?l.translate:-l.translate;let a;for(let i=0;i<e.length;i+=1)e[i+1]!==void 0?s>=e[i]&&s<e[i+1]-(e[i+1]-e[i])/2?a=i:s>=e[i]&&s<e[i+1]&&(a=i+1):s>=e[i]&&(a=i);return t.normalizeSlideIndex&&(a<0||a===void 0)&&(a=0),a}function Te(l){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:a,activeIndex:i,realIndex:o,snapIndex:r}=e;let p,c=l;const d=h=>{let n=h-e.virtual.slidesBefore;return n<0&&(n=e.virtual.slides.length+n),n>=e.virtual.slides.length&&(n-=e.virtual.slides.length),n};if(c===void 0&&(c=Ce(e)),s.indexOf(t)>=0)p=s.indexOf(t);else{const h=Math.min(a.slidesPerGroupSkip,c);p=h+Math.floor((c-h)/a.slidesPerGroup)}if(p>=s.length&&(p=s.length-1),c===i&&!e.params.loop)return void(p!==r&&(e.snapIndex=p,e.emit("snapIndexChange")));if(c===i&&e.params.loop&&e.virtual&&e.params.virtual.enabled)return void(e.realIndex=d(c));const x=e.grid&&a.grid&&a.grid.rows>1;let m;if(e.virtual&&a.virtual.enabled&&a.loop)m=d(c);else if(x){const h=e.slides.find((u=>u.column===c));let n=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(n)&&(n=Math.max(e.slides.indexOf(h),0)),m=Math.floor(n/a.grid.rows)}else if(e.slides[c]){const h=e.slides[c].getAttribute("data-swiper-slide-index");m=h?parseInt(h,10):c}else m=c;Object.assign(e,{previousSnapIndex:r,snapIndex:p,previousRealIndex:o,realIndex:m,previousIndex:i,activeIndex:c}),e.initialized&&q1(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==m&&e.emit("realIndexChange"),e.emit("slideChange"))}function ze(l,e){const t=this,s=t.params;let a=l.closest(`.${s.slideClass}, swiper-slide`);!a&&t.isElement&&e&&e.length>1&&e.includes(l)&&[...e.slice(e.indexOf(l)+1,e.length)].forEach((r=>{!a&&r.matches&&r.matches(`.${s.slideClass}, swiper-slide`)&&(a=r)}));let i,o=!1;if(a){for(let r=0;r<t.slides.length;r+=1)if(t.slides[r]===a){o=!0,i=r;break}}if(!a||!o)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Le={updateSize:we,updateSlides:be,updateAutoHeight:ye,updateSlidesOffset:ke,updateSlidesProgress:Se,updateProgress:Ee,updateSlidesClasses:Me,updateActiveIndex:Te,updateClickedSlide:ze};function Pe(l){l===void 0&&(l=this.isHorizontal()?"x":"y");const{params:e,rtlTranslate:t,translate:s,wrapperEl:a}=this;if(e.virtualTranslate)return t?-s:s;if(e.cssMode)return s;let i=H1(a,l);return i+=this.cssOverflowAdjustment(),t&&(i=-i),i||0}function Ae(l,e){const t=this,{rtlTranslate:s,params:a,wrapperEl:i,progress:o}=t;let r=0,p=0,c;t.isHorizontal()?r=s?-l:l:p=l,a.roundLengths&&(r=Math.floor(r),p=Math.floor(p)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?r:p,a.cssMode?i[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-r:-p:a.virtualTranslate||(t.isHorizontal()?r-=t.cssOverflowAdjustment():p-=t.cssOverflowAdjustment(),i.style.transform=`translate3d(${r}px, ${p}px, 0px)`);const d=t.maxTranslate()-t.minTranslate();c=d===0?0:(l-t.minTranslate())/d,c!==o&&t.updateProgress(l),t.emit("setTranslate",t.translate,e)}function De(){return-this.snapGrid[0]}function je(){return-this.snapGrid[this.snapGrid.length-1]}function Ie(l,e,t,s,a){l===void 0&&(l=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=!0);const i=this,{params:o,wrapperEl:r}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;const p=i.minTranslate(),c=i.maxTranslate();let d;if(d=s&&l>p?p:s&&l<c?c:l,i.updateProgress(d),o.cssMode){const x=i.isHorizontal();if(e===0)r[x?"scrollLeft":"scrollTop"]=-d;else{if(!i.support.smoothScroll)return Q1({swiper:i,targetPosition:-d,side:x?"left":"top"}),!0;r.scrollTo({[x?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(i.setTransition(0),i.setTranslate(d),t&&(i.emit("beforeTransitionStart",e,a),i.emit("transitionEnd"))):(i.setTransition(e),i.setTranslate(d),t&&(i.emit("beforeTransitionStart",e,a),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(x){i&&!i.destroyed&&x.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,t&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var $e={getTranslate:Pe,setTranslate:Ae,minTranslate:De,maxTranslate:je,translateTo:Ie};function Be(l,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${l}ms`,t.wrapperEl.style.transitionDelay=l===0?"0ms":""),t.emit("setTransition",l,e)}function le(l){let{swiper:e,runCallbacks:t,direction:s,step:a}=l;const{activeIndex:i,previousIndex:o}=e;let r=s;r||(r=i>o?"next":i<o?"prev":"reset"),e.emit(`transition${a}`),t&&r==="reset"?e.emit(`slideResetTransition${a}`):t&&i!==o&&(e.emit(`slideChangeTransition${a}`),r==="next"?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`))}function Oe(l,e){l===void 0&&(l=!0);const t=this,{params:s}=t;s.cssMode||(s.autoHeight&&t.updateAutoHeight(),le({swiper:t,runCallbacks:l,direction:e,step:"Start"}))}function Ge(l,e){l===void 0&&(l=!0);const t=this,{params:s}=t;t.animating=!1,s.cssMode||(t.setTransition(0),le({swiper:t,runCallbacks:l,direction:e,step:"End"}))}var _e={setTransition:Be,transitionStart:Oe,transitionEnd:Ge};function He(l,e,t,s,a){l===void 0&&(l=0),t===void 0&&(t=!0),typeof l=="string"&&(l=parseInt(l,10));const i=this;let o=l;o<0&&(o=0);const{params:r,snapGrid:p,slidesGrid:c,previousIndex:d,activeIndex:x,rtlTranslate:m,wrapperEl:h,enabled:n}=i;if(!n&&!s&&!a||i.destroyed||i.animating&&r.preventInteractionOnTransition)return!1;e===void 0&&(e=i.params.speed);const u=Math.min(i.params.slidesPerGroupSkip,o);let g=u+Math.floor((o-u)/i.params.slidesPerGroup);g>=p.length&&(g=p.length-1);const f=-p[g];if(r.normalizeSlideIndex)for(let E=0;E<c.length;E+=1){const P=-Math.floor(100*f),z=Math.floor(100*c[E]),C=Math.floor(100*c[E+1]);c[E+1]!==void 0?P>=z&&P<C-(C-z)/2?o=E:P>=z&&P<C&&(o=E+1):P>=z&&(o=E)}if(i.initialized&&o!==x&&(!i.allowSlideNext&&(m?f>i.translate&&f>i.minTranslate():f<i.translate&&f<i.minTranslate())||!i.allowSlidePrev&&f>i.translate&&f>i.maxTranslate()&&(x||0)!==o))return!1;let b;o!==(d||0)&&t&&i.emit("beforeSlideChangeStart"),i.updateProgress(f),b=o>x?"next":o<x?"prev":"reset";const S=i.virtual&&i.params.virtual.enabled;if(!(S&&a)&&(m&&-f===i.translate||!m&&f===i.translate))return i.updateActiveIndex(o),r.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),r.effect!=="slide"&&i.setTranslate(f),b!=="reset"&&(i.transitionStart(t,b),i.transitionEnd(t,b)),!1;if(r.cssMode){const E=i.isHorizontal(),P=m?f:-f;if(e===0)S&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),S&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{h[E?"scrollLeft":"scrollTop"]=P}))):h[E?"scrollLeft":"scrollTop"]=P,S&&requestAnimationFrame((()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1}));else{if(!i.support.smoothScroll)return Q1({swiper:i,targetPosition:P,side:E?"left":"top"}),!0;h.scrollTo({[E?"left":"top"]:P,behavior:"smooth"})}return!0}const y=se().isSafari;return S&&!a&&y&&i.isElement&&i.virtual.update(!1,!1,o),i.setTransition(e),i.setTranslate(f),i.updateActiveIndex(o),i.updateSlidesClasses(),i.emit("beforeTransitionStart",e,s),i.transitionStart(t,b),e===0?i.transitionEnd(t,b):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(E){i&&!i.destroyed&&E.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(t,b))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function Re(l,e,t,s){l===void 0&&(l=0),t===void 0&&(t=!0),typeof l=="string"&&(l=parseInt(l,10));const a=this;if(a.destroyed)return;e===void 0&&(e=a.params.speed);const i=a.grid&&a.params.grid&&a.params.grid.rows>1;let o=l;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)o+=a.virtual.slidesBefore;else{let r;if(i){const m=o*a.params.grid.rows;r=a.slides.find((h=>1*h.getAttribute("data-swiper-slide-index")===m)).column}else r=a.getSlideIndexByData(o);const p=i?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:c}=a.params;let d=a.params.slidesPerView;d==="auto"?d=a.slidesPerViewDynamic():(d=Math.ceil(parseFloat(a.params.slidesPerView,10)),c&&d%2==0&&(d+=1));let x=p-r<d;if(c&&(x=x||r<Math.ceil(d/2)),s&&c&&a.params.slidesPerView!=="auto"&&!i&&(x=!1),x){const m=c?r<a.activeIndex?"prev":"next":r-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?r+1:r-p+1,slideRealIndex:m==="next"?a.realIndex:void 0})}if(i){const m=o*a.params.grid.rows;o=a.slides.find((h=>1*h.getAttribute("data-swiper-slide-index")===m)).column}else o=a.getSlideIndexByData(o)}return requestAnimationFrame((()=>{a.slideTo(o,e,t,s)})),a}function qe(l,e,t){e===void 0&&(e=!0);const s=this,{enabled:a,params:i,animating:o}=s;if(!a||s.destroyed)return s;l===void 0&&(l=s.params.speed);let r=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(r=Math.max(s.slidesPerViewDynamic("current",!0),1));const p=s.activeIndex<i.slidesPerGroupSkip?1:r,c=s.virtual&&i.virtual.enabled;if(i.loop){if(o&&!c&&i.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&i.cssMode)return requestAnimationFrame((()=>{s.slideTo(s.activeIndex+p,l,e,t)})),!0}return i.rewind&&s.isEnd?s.slideTo(0,l,e,t):s.slideTo(s.activeIndex+p,l,e,t)}function Ve(l,e,t){e===void 0&&(e=!0);const s=this,{params:a,snapGrid:i,slidesGrid:o,rtlTranslate:r,enabled:p,animating:c}=s;if(!p||s.destroyed)return s;l===void 0&&(l=s.params.speed);const d=s.virtual&&a.virtual.enabled;if(a.loop){if(c&&!d&&a.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}function x(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const m=x(r?s.translate:-s.translate),h=i.map((f=>x(f))),n=a.freeMode&&a.freeMode.enabled;let u=i[h.indexOf(m)-1];if(u===void 0&&(a.cssMode||n)){let f;i.forEach(((b,S)=>{m>=b&&(f=S)})),f!==void 0&&(u=n?i[f]:i[f>0?f-1:f])}let g=0;if(u!==void 0&&(g=o.indexOf(u),g<0&&(g=s.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(g=g-s.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),a.rewind&&s.isBeginning){const f=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(f,l,e,t)}return a.loop&&s.activeIndex===0&&a.cssMode?(requestAnimationFrame((()=>{s.slideTo(g,l,e,t)})),!0):s.slideTo(g,l,e,t)}function Xe(l,e,t){e===void 0&&(e=!0);const s=this;if(!s.destroyed)return l===void 0&&(l=s.params.speed),s.slideTo(s.activeIndex,l,e,t)}function Ne(l,e,t,s){e===void 0&&(e=!0),s===void 0&&(s=.5);const a=this;if(a.destroyed)return;l===void 0&&(l=a.params.speed);let i=a.activeIndex;const o=Math.min(a.params.slidesPerGroupSkip,i),r=o+Math.floor((i-o)/a.params.slidesPerGroup),p=a.rtlTranslate?a.translate:-a.translate;if(p>=a.snapGrid[r]){const c=a.snapGrid[r];p-c>(a.snapGrid[r+1]-c)*s&&(i+=a.params.slidesPerGroup)}else{const c=a.snapGrid[r-1];p-c<=(a.snapGrid[r]-c)*s&&(i-=a.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,a.slidesGrid.length-1),a.slideTo(i,l,e,t)}function Ye(){const l=this;if(l.destroyed)return;const{params:e,slidesEl:t}=l,s=e.slidesPerView==="auto"?l.slidesPerViewDynamic():e.slidesPerView;let a,i=l.getSlideIndexWhenGrid(l.clickedIndex);const o=l.isElement?"swiper-slide":`.${e.slideClass}`,r=l.grid&&l.params.grid&&l.params.grid.rows>1;if(e.loop){if(l.animating)return;a=parseInt(l.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?l.slideToLoop(a):i>(r?(l.slides.length-s)/2-(l.params.grid.rows-1):l.slides.length-s)?(l.loopFix(),i=l.getSlideIndex(N(t,`${o}[data-swiper-slide-index="${a}"]`)[0]),p1((()=>{l.slideTo(i)}))):l.slideTo(i)}else l.slideTo(i)}var Fe={slideTo:He,slideToLoop:Re,slideNext:qe,slidePrev:Ve,slideReset:Xe,slideToClosest:Ne,slideToClickedSlide:Ye};function We(l,e){const t=this,{params:s,slidesEl:a}=t;if(!s.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{N(a,`.${s.slideClass}, swiper-slide`).forEach(((x,m)=>{x.setAttribute("data-swiper-slide-index",m)}))},o=t.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||o)&&(()=>{const x=N(a,`.${s.slideBlankClass}`);x.forEach((m=>{m.remove()})),x.length>0&&(t.recalcSlides(),t.updateSlides())})();const r=s.slidesPerGroup*(o?s.grid.rows:1),p=t.slides.length%r!=0,c=o&&t.slides.length%s.grid.rows!=0,d=x=>{for(let m=0;m<x;m+=1){const h=t.isElement?U("swiper-slide",[s.slideBlankClass]):U("div",[s.slideClass,s.slideBlankClass]);t.slidesEl.append(h)}};p?(s.loopAddBlankSlides?(d(r-t.slides.length%r),t.recalcSlides(),t.updateSlides()):E1("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"),i()):(c&&(s.loopAddBlankSlides?(d(s.grid.rows-t.slides.length%s.grid.rows),t.recalcSlides(),t.updateSlides()):E1("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")),i()),t.loopFix({slideRealIndex:l,direction:s.centeredSlides?void 0:"next",initial:e})}function Ue(l){let{slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:a,activeSlideIndex:i,initial:o,byController:r,byMousewheel:p}=l===void 0?{}:l;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:x,allowSlideNext:m,slidesEl:h,params:n}=c,{centeredSlides:u,initialSlide:g}=n;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&n.virtual.enabled)return t&&(n.centeredSlides||c.snapIndex!==0?n.centeredSlides&&c.snapIndex<n.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0):c.slideTo(c.virtual.slides.length,0,!1,!0)),c.allowSlidePrev=x,c.allowSlideNext=m,void c.emit("loopFix");let f=n.slidesPerView;f==="auto"?f=c.slidesPerViewDynamic():(f=Math.ceil(parseFloat(n.slidesPerView,10)),u&&f%2==0&&(f+=1));const b=n.slidesPerGroupAuto?f:n.slidesPerGroup;let S=u?Math.max(b,Math.ceil(f/2)):b;S%b!=0&&(S+=b-S%b),S+=n.loopAdditionalSlides,c.loopedSlides=S;const y=c.grid&&n.grid&&n.grid.rows>1;d.length<f+S||c.params.effect==="cards"&&d.length<f+2*S?E1("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&n.grid.fill==="row"&&E1("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],P=[],z=y?Math.ceil(d.length/n.grid.rows):d.length,C=o&&z-g<f&&!u;let L=C?g:c.activeIndex;i===void 0?i=c.getSlideIndex(d.find((A=>A.classList.contains(n.slideActiveClass)))):L=i;const w=s==="next"||!s,v=s==="prev"||!s;let k=0,M=0;const D=(y?d[i].column:i)+(u&&a===void 0?-f/2+.5:0);if(D<S){k=Math.max(S-D,b);for(let A=0;A<S-D;A+=1){const B=A-Math.floor(A/z)*z;if(y){const H=z-B-1;for(let G=d.length-1;G>=0;G-=1)d[G].column===H&&E.push(G)}else E.push(z-B-1)}}else if(D+f>z-S){M=Math.max(D-(z-2*S),b),C&&(M=Math.max(M,f-z+g+1));for(let A=0;A<M;A+=1){const B=A-Math.floor(A/z)*z;y?d.forEach(((H,G)=>{H.column===B&&P.push(G)})):P.push(B)}}if(c.__preventObserver__=!0,requestAnimationFrame((()=>{c.__preventObserver__=!1})),c.params.effect==="cards"&&d.length<f+2*S&&(P.includes(i)&&P.splice(P.indexOf(i),1),E.includes(i)&&E.splice(E.indexOf(i),1)),v&&E.forEach((A=>{d[A].swiperLoopMoveDOM=!0,h.prepend(d[A]),d[A].swiperLoopMoveDOM=!1})),w&&P.forEach((A=>{d[A].swiperLoopMoveDOM=!0,h.append(d[A]),d[A].swiperLoopMoveDOM=!1})),c.recalcSlides(),n.slidesPerView==="auto"?c.updateSlides():y&&(E.length>0&&v||P.length>0&&w)&&c.slides.forEach(((A,B)=>{c.grid.updateSlide(B,A,c.slides)})),n.watchSlidesProgress&&c.updateSlidesOffset(),t){if(E.length>0&&v){if(e===void 0){const A=c.slidesGrid[L],B=c.slidesGrid[L+k]-A;p?c.setTranslate(c.translate-B):(c.slideTo(L+Math.ceil(k),0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-B,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-B))}else if(a){const A=y?E.length/n.grid.rows:E.length;c.slideTo(c.activeIndex+A,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(P.length>0&&w)if(e===void 0){const A=c.slidesGrid[L],B=c.slidesGrid[L-M]-A;p?c.setTranslate(c.translate-B):(c.slideTo(L-M,0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-B,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-B))}else{const A=y?P.length/n.grid.rows:P.length;c.slideTo(c.activeIndex-A,0,!1,!0)}}if(c.allowSlidePrev=x,c.allowSlideNext=m,c.controller&&c.controller.control&&!r){const A={slideRealIndex:e,direction:s,setTranslate:a,activeSlideIndex:i,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach((B=>{!B.destroyed&&B.params.loop&&B.loopFix({...A,slideTo:B.params.slidesPerView===n.slidesPerView&&t})})):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...A,slideTo:c.controller.control.params.slidesPerView===n.slidesPerView&&t})}c.emit("loopFix")}function Ke(){const l=this,{params:e,slidesEl:t}=l;if(!e.loop||!t||l.virtual&&l.params.virtual.enabled)return;l.recalcSlides();const s=[];l.slides.forEach((a=>{const i=a.swiperSlideIndex===void 0?1*a.getAttribute("data-swiper-slide-index"):a.swiperSlideIndex;s[i]=a})),l.slides.forEach((a=>{a.removeAttribute("data-swiper-slide-index")})),s.forEach((a=>{t.append(a)})),l.recalcSlides(),l.slideTo(l.realIndex,0)}var Ze={loopCreate:We,loopFix:Ue,loopDestroy:Ke};function Je(l){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=l?"grabbing":"grab",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1}))}function Qe(){const l=this;l.params.watchOverflow&&l.isLocked||l.params.cssMode||(l.isElement&&(l.__preventObserver__=!0),l[l.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",l.isElement&&requestAnimationFrame((()=>{l.__preventObserver__=!1})))}var e2={setGrabCursor:Je,unsetGrabCursor:Qe};function t2(l,e){return e===void 0&&(e=this),(function t(s){if(!s||s===X()||s===R())return null;s.assignedSlot&&(s=s.assignedSlot);const a=s.closest(l);return a||s.getRootNode?a||t(s.getRootNode().host):null})(e)}function W1(l,e,t){const s=R(),{params:a}=l,i=a.edgeSwipeDetection,o=a.edgeSwipeThreshold;return!i||!(t<=o||t>=s.innerWidth-o)||i==="prevent"&&(e.preventDefault(),!0)}function s2(l){const e=this,t=X();let s=l;s.originalEvent&&(s=s.originalEvent);const a=e.touchEventsData;if(s.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==s.pointerId)return;a.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(a.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart")return void W1(e,s,s.targetTouches[0].pageX);const{params:i,touches:o,enabled:r}=e;if(!r||!i.simulateTouch&&s.pointerType==="mouse"||e.animating&&i.preventInteractionOnTransition)return;!e.animating&&i.cssMode&&i.loop&&e.loopFix();let p=s.target;if(i.touchEventsTarget==="wrapper"&&!de(p,e.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||a.isTouched&&a.isMoved)return;const c=!!i.noSwipingClass&&i.noSwipingClass!=="",d=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&d&&(p=d[0]);const x=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,m=!(!s.target||!s.target.shadowRoot);if(i.noSwiping&&(m?t2(x,p):p.closest(x)))return void(e.allowClick=!0);if(i.swipeHandler&&!p.closest(i.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;const h=o.currentX,n=o.currentY;if(!W1(e,s,h))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=n,a.touchStartTime=K(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,i.threshold>0&&(a.allowThresholdMove=!1);let u=!0;p.matches(a.focusableElements)&&(u=!1,p.nodeName==="SELECT"&&(a.isTouched=!1)),t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==p&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!p.matches(a.focusableElements))&&t.activeElement.blur();const g=u&&e.allowTouchMove&&i.touchStartPreventDefault;!i.touchStartForcePreventDefault&&!g||p.isContentEditable||s.preventDefault(),i.freeMode&&i.freeMode.enabled&&e.freeMode&&e.animating&&!i.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function l2(l){const e=X(),t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:o,enabled:r}=t;if(!r||!a.simulateTouch&&l.pointerType==="mouse")return;let p,c=l;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(s.touchId!==null||c.pointerId!==s.pointerId))return;if(c.type==="touchmove"){if(p=[...c.changedTouches].find((E=>E.identifier===s.touchId)),!p||p.identifier!==s.touchId)return}else p=c;if(!s.isTouched)return void(s.startMoving&&s.isScrolling&&t.emit("touchMoveOpposite",c));const d=p.pageX,x=p.pageY;if(c.preventedByNestedSwiper)return i.startX=d,void(i.startY=x);if(!t.allowTouchMove)return c.target.matches(s.focusableElements)||(t.allowClick=!1),void(s.isTouched&&(Object.assign(i,{startX:d,startY:x,currentX:d,currentY:x}),s.touchStartTime=K()));if(a.touchReleaseOnEdges&&!a.loop){if(t.isVertical()){if(x<i.startY&&t.translate<=t.maxTranslate()||x>i.startY&&t.translate>=t.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(o&&(d>i.startX&&-t.translate<=t.maxTranslate()||d<i.startX&&-t.translate>=t.minTranslate())||!o&&(d<i.startX&&t.translate<=t.maxTranslate()||d>i.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(s.focusableElements)&&e.activeElement!==c.target&&c.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&c.target===e.activeElement&&c.target.matches(s.focusableElements))return s.isMoved=!0,void(t.allowClick=!1);s.allowTouchCallbacks&&t.emit("touchMove",c),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=d,i.currentY=x;const m=i.currentX-i.startX,h=i.currentY-i.startY;if(t.params.threshold&&Math.sqrt(m**2+h**2)<t.params.threshold)return;if(s.isScrolling===void 0){let E;t.isHorizontal()&&i.currentY===i.startY||t.isVertical()&&i.currentX===i.startX?s.isScrolling=!1:m*m+h*h>=25&&(E=180*Math.atan2(Math.abs(h),Math.abs(m))/Math.PI,s.isScrolling=t.isHorizontal()?E>a.touchAngle:90-E>a.touchAngle)}if(s.isScrolling&&t.emit("touchMoveOpposite",c),s.startMoving===void 0&&(i.currentX===i.startX&&i.currentY===i.startY||(s.startMoving=!0)),s.isScrolling||c.type==="touchmove"&&s.preventTouchMoveFromPointerMove)return void(s.isTouched=!1);if(!s.startMoving)return;t.allowClick=!1,!a.cssMode&&c.cancelable&&c.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&c.stopPropagation();let n=t.isHorizontal()?m:h,u=t.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;a.oneWayMovement&&(n=Math.abs(n)*(o?1:-1),u=Math.abs(u)*(o?1:-1)),i.diff=n,n*=a.touchRatio,o&&(n=-n,u=-u);const g=t.touchesDirection;t.swipeDirection=n>0?"prev":"next",t.touchesDirection=u>0?"prev":"next";const f=t.params.loop&&!a.cssMode,b=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!s.isMoved){if(f&&b&&t.loopFix({direction:t.swipeDirection}),s.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const E=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(E)}s.allowMomentumBounce=!1,!a.grabCursor||t.allowSlideNext!==!0&&t.allowSlidePrev!==!0||t.setGrabCursor(!0),t.emit("sliderFirstMove",c)}if(new Date().getTime(),a._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&g!==t.touchesDirection&&f&&b&&Math.abs(n)>=1)return Object.assign(i,{startX:d,startY:x,currentX:d,currentY:x,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,void(s.startTranslate=s.currentTranslate);t.emit("sliderMove",c),s.isMoved=!0,s.currentTranslate=n+s.startTranslate;let S=!0,y=a.resistanceRatio;if(a.touchReleaseOnEdges&&(y=0),n>0?(f&&b&&s.allowThresholdMove&&s.currentTranslate>(a.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(a.slidesPerView!=="auto"&&t.slides.length-a.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>t.minTranslate()&&(S=!1,a.resistance&&(s.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+s.startTranslate+n)**y))):n<0&&(f&&b&&s.allowThresholdMove&&s.currentTranslate<(a.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(a.slidesPerView!=="auto"&&t.slides.length-a.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(a.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),s.currentTranslate<t.maxTranslate()&&(S=!1,a.resistance&&(s.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-s.startTranslate-n)**y))),S&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),t.allowSlidePrev||t.allowSlideNext||(s.currentTranslate=s.startTranslate),a.threshold>0){if(!(Math.abs(n)>a.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,s.currentTranslate=s.startTranslate,void(i.diff=t.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY)}a.followFinger&&!a.cssMode&&((a.freeMode&&a.freeMode.enabled&&t.freeMode||a.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(s.currentTranslate),t.setTranslate(s.currentTranslate))}function i2(l){const e=this,t=e.touchEventsData;let s,a=l;if(a.originalEvent&&(a=a.originalEvent),a.type==="touchend"||a.type==="touchcancel"){if(s=[...a.changedTouches].find((y=>y.identifier===t.touchId)),!s||s.identifier!==t.touchId)return}else{if(t.touchId!==null||a.pointerId!==t.pointerId)return;s=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:i,touches:o,rtlTranslate:r,slidesGrid:p,enabled:c}=e;if(!c||!i.simulateTouch&&a.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",a),t.allowTouchCallbacks=!1,!t.isTouched)return t.isMoved&&i.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,void(t.startMoving=!1);i.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=K(),x=d-t.touchStartTime;if(e.allowClick){const y=a.path||a.composedPath&&a.composedPath();e.updateClickedSlide(y&&y[0]||a.target,y),e.emit("tap click",a),x<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",a)}if(t.lastClickTime=K(),p1((()=>{e.destroyed||(e.allowClick=!0)})),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset)return t.isTouched=!1,t.isMoved=!1,void(t.startMoving=!1);let m;if(t.isTouched=!1,t.isMoved=!1,t.startMoving=!1,m=i.followFinger?r?e.translate:-e.translate:-t.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled)return void e.freeMode.onTouchEnd({currentPos:m});const h=m>=-e.maxTranslate()&&!e.params.loop;let n=0,u=e.slidesSizesGrid[0];for(let y=0;y<p.length;y+=y<i.slidesPerGroupSkip?1:i.slidesPerGroup){const E=y<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;p[y+E]!==void 0?(h||m>=p[y]&&m<p[y+E])&&(n=y,u=p[y+E]-p[y]):(h||m>=p[y])&&(n=y,u=p[p.length-1]-p[p.length-2])}let g=null,f=null;i.rewind&&(e.isBeginning?f=i.virtual&&i.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(g=0));const b=(m-p[n])/u,S=n<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(x>i.longSwipesMs){if(!i.longSwipes)return void e.slideTo(e.activeIndex);e.swipeDirection==="next"&&(b>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?g:n+S):e.slideTo(n)),e.swipeDirection==="prev"&&(b>1-i.longSwipesRatio?e.slideTo(n+S):f!==null&&b<0&&Math.abs(b)>i.longSwipesRatio?e.slideTo(f):e.slideTo(n))}else{if(!i.shortSwipes)return void e.slideTo(e.activeIndex);e.navigation&&(a.target===e.navigation.nextEl||a.target===e.navigation.prevEl)?a.target===e.navigation.nextEl?e.slideTo(n+S):e.slideTo(n):(e.swipeDirection==="next"&&e.slideTo(g!==null?g:n+S),e.swipeDirection==="prev"&&e.slideTo(f!==null?f:n))}}function U1(){const l=this,{params:e,el:t}=l;if(t&&t.offsetWidth===0)return;e.breakpoints&&l.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:a,snapGrid:i}=l,o=l.virtual&&l.params.virtual.enabled;l.allowSlideNext=!0,l.allowSlidePrev=!0,l.updateSize(),l.updateSlides(),l.updateSlidesClasses();const r=o&&e.loop;!(e.slidesPerView==="auto"||e.slidesPerView>1)||!l.isEnd||l.isBeginning||l.params.centeredSlides||r?l.params.loop&&!o?l.slideToLoop(l.realIndex,0,!1,!0):l.slideTo(l.activeIndex,0,!1,!0):l.slideTo(l.slides.length-1,0,!1,!0),l.autoplay&&l.autoplay.running&&l.autoplay.paused&&(clearTimeout(l.autoplay.resizeTimeout),l.autoplay.resizeTimeout=setTimeout((()=>{l.autoplay&&l.autoplay.running&&l.autoplay.paused&&l.autoplay.resume()}),500)),l.allowSlidePrev=a,l.allowSlideNext=s,l.params.watchOverflow&&i!==l.snapGrid&&l.checkOverflow()}function a2(l){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&l.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(l.stopPropagation(),l.stopImmediatePropagation())))}function r2(){const l=this,{wrapperEl:e,rtlTranslate:t,enabled:s}=l;if(!s)return;let a;l.previousTranslate=l.translate,l.isHorizontal()?l.translate=-e.scrollLeft:l.translate=-e.scrollTop,l.translate===0&&(l.translate=0),l.updateActiveIndex(),l.updateSlidesClasses();const i=l.maxTranslate()-l.minTranslate();a=i===0?0:(l.translate-l.minTranslate())/i,a!==l.progress&&l.updateProgress(t?-l.translate:l.translate),l.emit("setTranslate",l.translate,!1)}function c2(l){const e=this;S1(e,l.target),e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight||e.update()}function n2(){const l=this;l.documentTouchHandlerProceeded||(l.documentTouchHandlerProceeded=!0,l.params.touchReleaseOnEdges&&(l.el.style.touchAction="auto"))}const ie=(l,e)=>{const t=X(),{params:s,el:a,wrapperEl:i,device:o}=l,r=!!s.nested,p=e==="on"?"addEventListener":"removeEventListener",c=e;a&&typeof a!="string"&&(t[p]("touchstart",l.onDocumentTouchStart,{passive:!1,capture:r}),a[p]("touchstart",l.onTouchStart,{passive:!1}),a[p]("pointerdown",l.onTouchStart,{passive:!1}),t[p]("touchmove",l.onTouchMove,{passive:!1,capture:r}),t[p]("pointermove",l.onTouchMove,{passive:!1,capture:r}),t[p]("touchend",l.onTouchEnd,{passive:!0}),t[p]("pointerup",l.onTouchEnd,{passive:!0}),t[p]("pointercancel",l.onTouchEnd,{passive:!0}),t[p]("touchcancel",l.onTouchEnd,{passive:!0}),t[p]("pointerout",l.onTouchEnd,{passive:!0}),t[p]("pointerleave",l.onTouchEnd,{passive:!0}),t[p]("contextmenu",l.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&a[p]("click",l.onClick,!0),s.cssMode&&i[p]("scroll",l.onScroll),s.updateOnWindowResize?l[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",U1,!0):l[c]("observerUpdate",U1,!0),a[p]("load",l.onLoad,{capture:!0}))};function o2(){const l=this,{params:e}=l;l.onTouchStart=s2.bind(l),l.onTouchMove=l2.bind(l),l.onTouchEnd=i2.bind(l),l.onDocumentTouchStart=n2.bind(l),e.cssMode&&(l.onScroll=r2.bind(l)),l.onClick=a2.bind(l),l.onLoad=c2.bind(l),ie(l,"on")}function d2(){ie(this,"off")}var p2={attachEvents:o2,detachEvents:d2};const K1=(l,e)=>l.grid&&e.grid&&e.grid.rows>1;function u2(){const l=this,{realIndex:e,initialized:t,params:s,el:a}=l,i=s.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const o=X(),r=s.breakpointsBase!=="window"&&s.breakpointsBase?"container":s.breakpointsBase,p=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?l.el:o.querySelector(s.breakpointsBase),c=l.getBreakpoint(i,r,p);if(!c||l.currentBreakpoint===c)return;const d=(c in i?i[c]:void 0)||l.originalParams,x=K1(l,s),m=K1(l,d),h=l.params.grabCursor,n=d.grabCursor,u=s.enabled;x&&!m?(a.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),l.emitContainerClasses()):!x&&m&&(a.classList.add(`${s.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&s.grid.fill==="column")&&a.classList.add(`${s.containerModifierClass}grid-column`),l.emitContainerClasses()),h&&!n?l.unsetGrabCursor():!h&&n&&l.setGrabCursor(),["navigation","pagination","scrollbar"].forEach((E=>{if(d[E]===void 0)return;const P=s[E]&&s[E].enabled,z=d[E]&&d[E].enabled;P&&!z&&l[E].disable(),!P&&z&&l[E].enable()}));const g=d.direction&&d.direction!==s.direction,f=s.loop&&(d.slidesPerView!==s.slidesPerView||g),b=s.loop;g&&t&&l.changeDirection(),W(l.params,d);const S=l.params.enabled,y=l.params.loop;Object.assign(l,{allowTouchMove:l.params.allowTouchMove,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev}),u&&!S?l.disable():!u&&S&&l.enable(),l.currentBreakpoint=c,l.emit("_beforeBreakpoint",d),t&&(f?(l.loopDestroy(),l.loopCreate(e),l.updateSlides()):!b&&y?(l.loopCreate(e),l.updateSlides()):b&&!y&&l.loopDestroy()),l.emit("breakpoint",d)}function x2(l,e,t){if(e===void 0&&(e="window"),!l||e==="container"&&!t)return;let s=!1;const a=R(),i=e==="window"?a.innerHeight:t.clientHeight,o=Object.keys(l).map((r=>{if(typeof r=="string"&&r.indexOf("@")===0){const p=parseFloat(r.substr(1));return{value:i*p,point:r}}return{value:r,point:r}}));o.sort(((r,p)=>parseInt(r.value,10)-parseInt(p.value,10)));for(let r=0;r<o.length;r+=1){const{point:p,value:c}=o[r];e==="window"?a.matchMedia(`(min-width: ${c}px)`).matches&&(s=p):c<=t.clientWidth&&(s=p)}return s||"max"}var h2={setBreakpoint:u2,getBreakpoint:x2};function g2(l,e){const t=[];return l.forEach((s=>{typeof s=="object"?Object.keys(s).forEach((a=>{s[a]&&t.push(e+a)})):typeof s=="string"&&t.push(e+s)})),t}function m2(){const l=this,{classNames:e,params:t,rtl:s,el:a,device:i}=l,o=g2(["initialized",t.direction,{"free-mode":l.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:s},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),a.classList.add(...e),l.emitContainerClasses()}function f2(){const{el:l,classNames:e}=this;l&&typeof l!="string"&&(l.classList.remove(...e),this.emitContainerClasses())}var v2={addClasses:m2,removeClasses:f2};function w2(){const l=this,{isLocked:e,params:t}=l,{slidesOffsetBefore:s}=t;if(s){const a=l.slides.length-1,i=l.slidesGrid[a]+l.slidesSizesGrid[a]+2*s;l.isLocked=l.size>i}else l.isLocked=l.snapGrid.length===1;t.allowSlideNext===!0&&(l.allowSlideNext=!l.isLocked),t.allowSlidePrev===!0&&(l.allowSlidePrev=!l.isLocked),e&&e!==l.isLocked&&(l.isEnd=!1),e!==l.isLocked&&l.emit(l.isLocked?"lock":"unlock")}var b2={checkOverflow:w2},Z1={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function y2(l,e){return function(t){t===void 0&&(t={});const s=Object.keys(t)[0],a=t[s];typeof a=="object"&&a!==null?(l[s]===!0&&(l[s]={enabled:!0}),s==="navigation"&&l[s]&&l[s].enabled&&!l[s].prevEl&&!l[s].nextEl&&(l[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&l[s]&&l[s].enabled&&!l[s].el&&(l[s].auto=!0),s in l&&"enabled"in a&&(typeof l[s]!="object"||"enabled"in l[s]||(l[s].enabled=!0),l[s]||(l[s]={enabled:!1})),W(e,t)):W(e,t)}}const G1={eventsEmitter:ve,update:Le,translate:$e,transition:_e,slide:Fe,loop:Ze,grabCursor:e2,events:p2,breakpoints:h2,checkOverflow:b2,classes:v2},_1={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?t=a[0]:[e,t]=a,t||(t={}),t=W({},t),e&&!t.el&&(t.el=e);const o=X();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const d=[];return o.querySelectorAll(t.el).forEach((x=>{const m=W({},t,{el:x});d.push(new V(m))})),d}const r=this;r.__swiper__=!0,r.support=ee(),r.device=te({userAgent:t.userAgent}),r.browser=se(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const p={};r.modules.forEach((d=>{d({params:t,swiper:r,extendParams:y2(t,p),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const c=W({},Z1,p);return r.params=W({},c,_1,t),r.originalParams=W({},r.params),r.passedParams=W({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((d=>{r.on(d,r.params.on[d])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>r.params.direction==="horizontal",isVertical:()=>r.params.direction==="vertical",activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,a=N(t,`.${s.slideClass}, swiper-slide`),i=v1(a[0]);return v1(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find((t=>1*t.getAttribute("data-swiper-slide-index")===e)))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=N(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,t===void 0?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((s=>s.indexOf("swiper-slide")===0||s.indexOf(t.params.slideClass)===0)).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:o,size:r,activeIndex:p}=this;let c=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let d,x=a[p]?Math.ceil(a[p].swiperSlideSize):0;for(let m=p+1;m<a.length;m+=1)a[m]&&!d&&(x+=Math.ceil(a[m].swiperSlideSize),c+=1,x>r&&(d=!0));for(let m=p-1;m>=0;m-=1)a[m]&&!d&&(x+=a[m].swiperSlideSize,c+=1,x>r&&(d=!0))}else if(e==="current")for(let d=p+1;d<a.length;d+=1)(t?i[d]+o[d]-i[p]<r:i[d]-i[p]<r)&&(c+=1);else for(let d=p-1;d>=0;d-=1)i[p]-i[d]<r&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const o=e.rtlTranslate?-1*e.translate:e.translate,r=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((o=>{o.complete&&S1(e,o)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s.freeMode&&s.freeMode.enabled&&!s.cssMode)a(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const o=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(o.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||a()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const s=this,a=s.params.direction;return e||(e=a==="horizontal"?"vertical":"horizontal"),e===a||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach((i=>{e==="vertical"?i.style.width="":i.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(a()):N(s,a())[0];return!i&&t.params.createElements&&(i=U("div",t.params.wrapperClass),s.append(i),N(s,`.${t.params.slideClass}`).forEach((o=>{i.append(o)}))),Object.assign(t,{el:s,wrapperEl:i,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:i,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||l1(s,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||l1(s,"direction")==="rtl"),wrongRTL:l1(i,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach((a=>{a.complete?S1(t,a):a.addEventListener("load",(i=>{S1(t,i.target)}))})),q1(t),t.initialized=!0,q1(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const s=this,{params:a,el:i,wrapperEl:o,slides:r}=s;return s.params===void 0||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i&&typeof i!="string"&&i.removeAttribute("style"),o&&o.removeAttribute("style"),r&&r.length&&r.forEach((p=>{p.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")}))),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((p=>{s.off(p)})),e!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),re(s)),s.destroyed=!0),null}static extendDefaults(e){W(_1,e)}static get extendedDefaults(){return _1}static get defaults(){return Z1}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((t=>V.installModule(t))),V):(V.installModule(e),V)}}Object.keys(G1).forEach((l=>{Object.keys(G1[l]).forEach((e=>{V.prototype[e]=G1[l][e]}))})),V.use([me,fe]);function k2(l){let e,{swiper:t,extendParams:s,on:a,emit:i}=l;s({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const o=X();t.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const r=o.createElement("div");function p(d,x){const m=t.params.virtual;if(m.cache&&t.virtual.cache[x])return t.virtual.cache[x];let h;return m.renderSlide?(h=m.renderSlide.call(t,d,x),typeof h=="string"&&(e1(r,h),h=r.children[0])):h=t.isElement?U("swiper-slide"):U("div",t.params.slideClass),h.setAttribute("data-swiper-slide-index",x),m.renderSlide||e1(h,d),m.cache&&(t.virtual.cache[x]=h),h}function c(d,x,m){const{slidesPerView:h,slidesPerGroup:n,centeredSlides:u,loop:g,initialSlide:f}=t.params;if(x&&!g&&f>0)return;const{addSlidesBefore:b,addSlidesAfter:S}=t.params.virtual,{from:y,to:E,slides:P,slidesGrid:z,offset:C}=t.virtual;t.params.cssMode||t.updateActiveIndex();const L=m===void 0?t.activeIndex||0:m;let w,v,k;w=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",u?(v=Math.floor(h/2)+n+S,k=Math.floor(h/2)+n+b):(v=h+(n-1)+S,k=(g?h:n)+b);let M=L-k,D=L+v;g||(M=Math.max(M,0),D=Math.min(D,P.length-1));let A=(t.slidesGrid[M]||0)-(t.slidesGrid[0]||0);function B(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),i("virtualUpdate")}if(g&&L>=k?(M-=k,u||(A+=t.slidesGrid[0])):g&&L<k&&(M=-k,u&&(A+=t.slidesGrid[0])),Object.assign(t.virtual,{from:M,to:D,offset:A,slidesGrid:t.slidesGrid,slidesBefore:k,slidesAfter:v}),y===M&&E===D&&!d)return t.slidesGrid!==z&&A!==C&&t.slides.forEach((T=>{T.style[w]=A-Math.abs(t.cssOverflowAdjustment())+"px"})),t.updateProgress(),void i("virtualUpdate");if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:A,from:M,to:D,slides:(function(){const T=[];for(let $=M;$<=D;$+=1)T.push(P[$]);return T})()}),void(t.params.virtual.renderExternalUpdate?B():i("virtualUpdate"));const H=[],G=[],q=T=>{let $=T;return T<0?$=P.length+T:$>=P.length&&($-=P.length),$};if(d)t.slides.filter((T=>T.matches(`.${t.params.slideClass}, swiper-slide`))).forEach((T=>{T.remove()}));else for(let T=y;T<=E;T+=1)if(T<M||T>D){const $=q(T);t.slides.filter((_=>_.matches(`.${t.params.slideClass}[data-swiper-slide-index="${$}"], swiper-slide[data-swiper-slide-index="${$}"]`))).forEach((_=>{_.remove()}))}const j=g?-P.length:0,I=g?2*P.length:P.length;for(let T=j;T<I;T+=1)if(T>=M&&T<=D){const $=q(T);E===void 0||d?G.push($):(T>E&&G.push($),T<y&&H.push($))}if(G.forEach((T=>{t.slidesEl.append(p(P[T],T))})),g)for(let T=H.length-1;T>=0;T-=1){const $=H[T];t.slidesEl.prepend(p(P[$],$))}else H.sort(((T,$)=>$-T)),H.forEach((T=>{t.slidesEl.prepend(p(P[T],T))}));N(t.slidesEl,".swiper-slide, swiper-slide").forEach((T=>{T.style[w]=A-Math.abs(t.cssOverflowAdjustment())+"px"})),B()}a("beforeInit",(()=>{if(!t.params.virtual.enabled)return;let d;if(t.passedParams.virtual.slides===void 0){const x=[...t.slidesEl.children].filter((m=>m.matches(`.${t.params.slideClass}, swiper-slide`)));x&&x.length&&(t.virtual.slides=[...x],d=!0,x.forEach(((m,h)=>{m.setAttribute("data-swiper-slide-index",h),t.virtual.cache[h]=m,m.remove()})))}d||(t.virtual.slides=t.params.virtual.slides),t.classNames.push(`${t.params.containerModifierClass}virtual`),t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0,c(!1,!0)})),a("setTranslate",(()=>{t.params.virtual.enabled&&(t.params.cssMode&&!t._immediateVirtual?(clearTimeout(e),e=setTimeout((()=>{c()}),100)):c())})),a("init update resize",(()=>{t.params.virtual.enabled&&t.params.cssMode&&m1(t.wrapperEl,"--swiper-virtual-size",`${t.virtualSize}px`)})),Object.assign(t.virtual,{appendSlide:function(d){if(typeof d=="object"&&"length"in d)for(let x=0;x<d.length;x+=1)d[x]&&t.virtual.slides.push(d[x]);else t.virtual.slides.push(d);c(!0)},prependSlide:function(d){const x=t.activeIndex;let m=x+1,h=1;if(Array.isArray(d)){for(let n=0;n<d.length;n+=1)d[n]&&t.virtual.slides.unshift(d[n]);m=x+d.length,h=d.length}else t.virtual.slides.unshift(d);if(t.params.virtual.cache){const n=t.virtual.cache,u={};Object.keys(n).forEach((g=>{const f=n[g],b=f.getAttribute("data-swiper-slide-index");b&&f.setAttribute("data-swiper-slide-index",parseInt(b,10)+h),u[parseInt(g,10)+h]=f})),t.virtual.cache=u}c(!0),t.slideTo(m,0)},removeSlide:function(d){if(d==null)return;let x=t.activeIndex;if(Array.isArray(d))for(let m=d.length-1;m>=0;m-=1)t.params.virtual.cache&&(delete t.virtual.cache[d[m]],Object.keys(t.virtual.cache).forEach((h=>{h>d&&(t.virtual.cache[h-1]=t.virtual.cache[h],t.virtual.cache[h-1].setAttribute("data-swiper-slide-index",h-1),delete t.virtual.cache[h])}))),t.virtual.slides.splice(d[m],1),d[m]<x&&(x-=1),x=Math.max(x,0);else t.params.virtual.cache&&(delete t.virtual.cache[d],Object.keys(t.virtual.cache).forEach((m=>{m>d&&(t.virtual.cache[m-1]=t.virtual.cache[m],t.virtual.cache[m-1].setAttribute("data-swiper-slide-index",m-1),delete t.virtual.cache[m])}))),t.virtual.slides.splice(d,1),d<x&&(x-=1),x=Math.max(x,0);c(!0),t.slideTo(x,0)},removeAllSlides:function(){t.virtual.slides=[],t.params.virtual.cache&&(t.virtual.cache={}),c(!0),t.slideTo(0,0)},update:c})}function S2(l){let{swiper:e,extendParams:t,on:s,emit:a}=l;const i=X(),o=R();function r(d){if(!e.enabled)return;const{rtlTranslate:x}=e;let m=d;m.originalEvent&&(m=m.originalEvent);const h=m.keyCode||m.charCode,n=e.params.keyboard.pageUpDown,u=n&&h===33,g=n&&h===34,f=h===37,b=h===39,S=h===38,y=h===40;if(!e.allowSlideNext&&(e.isHorizontal()&&b||e.isVertical()&&y||g)||!e.allowSlidePrev&&(e.isHorizontal()&&f||e.isVertical()&&S||u))return!1;if(!(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey||i.activeElement&&(i.activeElement.isContentEditable||i.activeElement.nodeName&&(i.activeElement.nodeName.toLowerCase()==="input"||i.activeElement.nodeName.toLowerCase()==="textarea")))){if(e.params.keyboard.onlyInViewport&&(u||g||f||b||S||y)){let E=!1;if(r1(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&r1(e.el,`.${e.params.slideActiveClass}`).length===0)return;const P=e.el,z=P.clientWidth,C=P.clientHeight,L=o.innerWidth,w=o.innerHeight,v=M1(P);x&&(v.left-=P.scrollLeft);const k=[[v.left,v.top],[v.left+z,v.top],[v.left,v.top+C],[v.left+z,v.top+C]];for(let M=0;M<k.length;M+=1){const D=k[M];if(D[0]>=0&&D[0]<=L&&D[1]>=0&&D[1]<=w){if(D[0]===0&&D[1]===0)continue;E=!0}}if(!E)return}e.isHorizontal()?((u||g||f||b)&&(m.preventDefault?m.preventDefault():m.returnValue=!1),((g||b)&&!x||(u||f)&&x)&&e.slideNext(),((u||f)&&!x||(g||b)&&x)&&e.slidePrev()):((u||g||S||y)&&(m.preventDefault?m.preventDefault():m.returnValue=!1),(g||y)&&e.slideNext(),(u||S)&&e.slidePrev()),a("keyPress",h)}}function p(){e.keyboard.enabled||(i.addEventListener("keydown",r),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(i.removeEventListener("keydown",r),e.keyboard.enabled=!1)}e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{e.params.keyboard.enabled&&p()})),s("destroy",(()=>{e.keyboard.enabled&&c()})),Object.assign(e.keyboard,{enable:p,disable:c})}function E2(l){let{swiper:e,extendParams:t,on:s,emit:a}=l;const i=R();let o;t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let r,p=K();const c=[];function d(){e.enabled&&(e.mouseEntered=!0)}function x(){e.enabled&&(e.mouseEntered=!1)}function m(f){return!(e.params.mousewheel.thresholdDelta&&f.delta<e.params.mousewheel.thresholdDelta)&&!(e.params.mousewheel.thresholdTime&&K()-p<e.params.mousewheel.thresholdTime)&&(f.delta>=6&&K()-p<60||(f.direction<0?e.isEnd&&!e.params.loop||e.animating||(e.slideNext(),a("scroll",f.raw)):e.isBeginning&&!e.params.loop||e.animating||(e.slidePrev(),a("scroll",f.raw)),p=new i.Date().getTime(),!1))}function h(f){let b=f,S=!0;if(!e.enabled||f.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const y=e.params.mousewheel;e.params.cssMode&&b.preventDefault();let E=e.el;e.params.mousewheel.eventsTarget!=="container"&&(E=document.querySelector(e.params.mousewheel.eventsTarget));const P=E&&E.contains(b.target);if(!e.mouseEntered&&!P&&!y.releaseOnEdges)return!0;b.originalEvent&&(b=b.originalEvent);let z=0;const C=e.rtlTranslate?-1:1,L=(function(v){let k=0,M=0,D=0,A=0;return"detail"in v&&(M=v.detail),"wheelDelta"in v&&(M=-v.wheelDelta/120),"wheelDeltaY"in v&&(M=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(k=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(k=M,M=0),D=10*k,A=10*M,"deltaY"in v&&(A=v.deltaY),"deltaX"in v&&(D=v.deltaX),v.shiftKey&&!D&&(D=A,A=0),(D||A)&&v.deltaMode&&(v.deltaMode===1?(D*=40,A*=40):(D*=800,A*=800)),D&&!k&&(k=D<1?-1:1),A&&!M&&(M=A<1?-1:1),{spinX:k,spinY:M,pixelX:D,pixelY:A}})(b);if(y.forceToAxis)if(e.isHorizontal()){if(!(Math.abs(L.pixelX)>Math.abs(L.pixelY)))return!0;z=-L.pixelX*C}else{if(!(Math.abs(L.pixelY)>Math.abs(L.pixelX)))return!0;z=-L.pixelY}else z=Math.abs(L.pixelX)>Math.abs(L.pixelY)?-L.pixelX*C:-L.pixelY;if(z===0)return!0;y.invert&&(z=-z);let w=e.getTranslate()+z*y.sensitivity;if(w>=e.minTranslate()&&(w=e.minTranslate()),w<=e.maxTranslate()&&(w=e.maxTranslate()),S=!!e.params.loop||!(w===e.minTranslate()||w===e.maxTranslate()),S&&e.params.nested&&b.stopPropagation(),e.params.freeMode&&e.params.freeMode.enabled){const v={time:K(),delta:Math.abs(z),direction:Math.sign(z)},k=r&&v.time<r.time+500&&v.delta<=r.delta&&v.direction===r.direction;if(!k){r=void 0;let M=e.getTranslate()+z*y.sensitivity;const D=e.isBeginning,A=e.isEnd;if(M>=e.minTranslate()&&(M=e.minTranslate()),M<=e.maxTranslate()&&(M=e.maxTranslate()),e.setTransition(0),e.setTranslate(M),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!D&&e.isBeginning||!A&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:v.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(o),o=void 0,c.length>=15&&c.shift();const B=c.length?c[c.length-1]:void 0,H=c[0];if(c.push(v),B&&(v.delta>B.delta||v.direction!==B.direction))c.splice(0);else if(c.length>=15&&v.time-H.time<500&&H.delta-v.delta>=1&&v.delta<=6){const G=z>0?.8:.2;r=v,c.splice(0),o=p1((()=>{!e.destroyed&&e.params&&e.slideToClosest(e.params.speed,!0,void 0,G)}),0)}o||(o=p1((()=>{e.destroyed||!e.params||(r=v,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5))}),500))}if(k||a("scroll",b),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),y.releaseOnEdges&&(M===e.minTranslate()||M===e.maxTranslate()))return!0}}else{const v={time:K(),delta:Math.abs(z),direction:Math.sign(z),raw:f};c.length>=2&&c.shift();const k=c.length?c[c.length-1]:void 0;if(c.push(v),k?(v.direction!==k.direction||v.delta>k.delta||v.time>k.time+150)&&m(v):m(v),(function(M){const D=e.params.mousewheel;if(M.direction<0){if(e.isEnd&&!e.params.loop&&D.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&D.releaseOnEdges)return!0;return!1})(v))return!0}return b.preventDefault?b.preventDefault():b.returnValue=!1,!1}function n(f){let b=e.el;e.params.mousewheel.eventsTarget!=="container"&&(b=document.querySelector(e.params.mousewheel.eventsTarget)),b[f]("mouseenter",d),b[f]("mouseleave",x),b[f]("wheel",h)}function u(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",h),!0):!e.mousewheel.enabled&&(n("addEventListener"),e.mousewheel.enabled=!0,!0)}function g(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,h),!0):!!e.mousewheel.enabled&&(n("removeEventListener"),e.mousewheel.enabled=!1,!0)}s("init",(()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&g(),e.params.mousewheel.enabled&&u()})),s("destroy",(()=>{e.params.cssMode&&u(),e.mousewheel.enabled&&g()})),Object.assign(e.mousewheel,{enable:u,disable:g})}function X1(l,e,t,s){return l.params.createElements&&Object.keys(s).forEach((a=>{if(!t[a]&&t.auto===!0){let i=N(l.el,`.${s[a]}`)[0];i||(i=U("div",s[a]),i.className=s[a],l.el.append(i)),t[a]=i,e[a]=i}})),t}function M2(l){let{swiper:e,extendParams:t,on:s,emit:a}=l;function i(h){let n;return h&&typeof h=="string"&&e.isElement&&(n=e.el.querySelector(h)||e.hostEl.querySelector(h),n)?n:(h&&(typeof h=="string"&&(n=[...document.querySelectorAll(h)]),e.params.uniqueNavElements&&typeof h=="string"&&n&&n.length>1&&e.el.querySelectorAll(h).length===1?n=e.el.querySelector(h):n&&n.length===1&&(n=n[0])),h&&!n?h:n)}function o(h,n){const u=e.params.navigation;(h=O(h)).forEach((g=>{g&&(g.classList[n?"add":"remove"](...u.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=n),e.params.watchOverflow&&e.enabled&&g.classList[e.isLocked?"add":"remove"](u.lockClass))}))}function r(){const{nextEl:h,prevEl:n}=e.navigation;if(e.params.loop)return o(n,!1),void o(h,!1);o(n,e.isBeginning&&!e.params.rewind),o(h,e.isEnd&&!e.params.rewind)}function p(h){h.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),a("navigationPrev"))}function c(h){h.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),a("navigationNext"))}function d(){const h=e.params.navigation;if(e.params.navigation=X1(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!h.nextEl&&!h.prevEl)return;let n=i(h.nextEl),u=i(h.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:u}),n=O(n),u=O(u);const g=(f,b)=>{f&&f.addEventListener("click",b==="next"?c:p),!e.enabled&&f&&f.classList.add(...h.lockClass.split(" "))};n.forEach((f=>g(f,"next"))),u.forEach((f=>g(f,"prev")))}function x(){let{nextEl:h,prevEl:n}=e.navigation;h=O(h),n=O(n);const u=(g,f)=>{g.removeEventListener("click",f==="next"?c:p),g.classList.remove(...e.params.navigation.disabledClass.split(" "))};h.forEach((g=>u(g,"next"))),n.forEach((g=>u(g,"prev")))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null},s("init",(()=>{e.params.navigation.enabled===!1?m():(d(),r())})),s("toEdge fromEdge lock unlock",(()=>{r()})),s("destroy",(()=>{x()})),s("enable disable",(()=>{let{nextEl:h,prevEl:n}=e.navigation;h=O(h),n=O(n),e.enabled?r():[...h,...n].filter((u=>!!u)).forEach((u=>u.classList.add(e.params.navigation.lockClass)))})),s("click",((h,n)=>{let{nextEl:u,prevEl:g}=e.navigation;u=O(u),g=O(g);const f=n.target;let b=g.includes(f)||u.includes(f);if(e.isElement&&!b){const S=n.path||n.composedPath&&n.composedPath();S&&(b=S.find((y=>u.includes(y)||g.includes(y))))}if(e.params.navigation.hideOnClick&&!b){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let S;u.length?S=u[0].classList.contains(e.params.navigation.hiddenClass):g.length&&(S=g[0].classList.contains(e.params.navigation.hiddenClass)),a(S===!0?"navigationShow":"navigationHide"),[...u,...g].filter((y=>!!y)).forEach((y=>y.classList.toggle(e.params.navigation.hiddenClass)))}}));const m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),x()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),r()},disable:m,update:r,init:d,destroy:x})}function Q(l){return l===void 0&&(l=""),`.${l.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function C2(l){let{swiper:e,extendParams:t,on:s,emit:a}=l;const i="swiper-pagination";let o;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let r=0;function p(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(g,f){const{bulletActiveClass:b}=e.params.pagination;g&&(g=g[(f==="prev"?"previous":"next")+"ElementSibling"])&&(g.classList.add(`${b}-${f}`),(g=g[(f==="prev"?"previous":"next")+"ElementSibling"])&&g.classList.add(`${b}-${f}-${f}`))}function d(g){const f=g.target.closest(Q(e.params.pagination.bulletClass));if(!f)return;g.preventDefault();const b=v1(f)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const P=(S=e.realIndex,y=b,E=e.slides.length,(y%=E)==1+(S%=E)?"next":y===S-1?"previous":void 0);P==="next"?e.slideNext():P==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b);var S,y,E}function x(){const g=e.rtl,f=e.params.pagination;if(p())return;let b,S,y=e.pagination.el;y=O(y);const E=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,P=e.params.loop?Math.ceil(E/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,b=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):e.snapIndex!==void 0?(b=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,b=e.activeIndex||0),f.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const z=e.pagination.bullets;let C,L,w;if(f.dynamicBullets&&(o=R1(z[0],e.isHorizontal()?"width":"height",!0),y.forEach((v=>{v.style[e.isHorizontal()?"width":"height"]=o*(f.dynamicMainBullets+4)+"px"})),f.dynamicMainBullets>1&&S!==void 0&&(r+=b-(S||0),r>f.dynamicMainBullets-1?r=f.dynamicMainBullets-1:r<0&&(r=0)),C=Math.max(b-r,0),L=C+(Math.min(z.length,f.dynamicMainBullets)-1),w=(L+C)/2),z.forEach((v=>{const k=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((M=>`${f.bulletActiveClass}${M}`))].map((M=>typeof M=="string"&&M.includes(" ")?M.split(" "):M)).flat();v.classList.remove(...k)})),y.length>1)z.forEach((v=>{const k=v1(v);k===b?v.classList.add(...f.bulletActiveClass.split(" ")):e.isElement&&v.setAttribute("part","bullet"),f.dynamicBullets&&(k>=C&&k<=L&&v.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),k===C&&c(v,"prev"),k===L&&c(v,"next"))}));else{const v=z[b];if(v&&v.classList.add(...f.bulletActiveClass.split(" ")),e.isElement&&z.forEach(((k,M)=>{k.setAttribute("part",M===b?"bullet-active":"bullet")})),f.dynamicBullets){const k=z[C],M=z[L];for(let D=C;D<=L;D+=1)z[D]&&z[D].classList.add(...`${f.bulletActiveClass}-main`.split(" "));c(k,"prev"),c(M,"next")}}if(f.dynamicBullets){const v=Math.min(z.length,f.dynamicMainBullets+4),k=(o*v-o)/2-w*o,M=g?"right":"left";z.forEach((D=>{D.style[e.isHorizontal()?M:"top"]=`${k}px`}))}}y.forEach(((z,C)=>{if(f.type==="fraction"&&(z.querySelectorAll(Q(f.currentClass)).forEach((L=>{L.textContent=f.formatFractionCurrent(b+1)})),z.querySelectorAll(Q(f.totalClass)).forEach((L=>{L.textContent=f.formatFractionTotal(P)}))),f.type==="progressbar"){let L;L=f.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const w=(b+1)/P;let v=1,k=1;L==="horizontal"?v=w:k=w,z.querySelectorAll(Q(f.progressbarFillClass)).forEach((M=>{M.style.transform=`translate3d(0,0,0) scaleX(${v}) scaleY(${k})`,M.style.transitionDuration=`${e.params.speed}ms`}))}f.type==="custom"&&f.renderCustom?(e1(z,f.renderCustom(e,b+1,P)),C===0&&a("paginationRender",z)):(C===0&&a("paginationRender",z),a("paginationUpdate",z)),e.params.watchOverflow&&e.enabled&&z.classList[e.isLocked?"add":"remove"](f.lockClass)}))}function m(){const g=e.params.pagination;if(p())return;const f=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=O(b);let S="";if(g.type==="bullets"){let y=e.params.loop?Math.ceil(f/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&y>f&&(y=f);for(let E=0;E<y;E+=1)g.renderBullet?S+=g.renderBullet.call(e,E,g.bulletClass):S+=`<${g.bulletElement} ${e.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(S=g.renderFraction?g.renderFraction.call(e,g.currentClass,g.totalClass):`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(S=g.renderProgressbar?g.renderProgressbar.call(e,g.progressbarFillClass):`<span class="${g.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach((y=>{g.type!=="custom"&&e1(y,S||""),g.type==="bullets"&&e.pagination.bullets.push(...y.querySelectorAll(Q(g.bulletClass)))})),g.type!=="custom"&&a("paginationRender",b[0])}function h(){e.params.pagination=X1(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const g=e.params.pagination;if(!g.el)return;let f;typeof g.el=="string"&&e.isElement&&(f=e.el.querySelector(g.el)),f||typeof g.el!="string"||(f=[...document.querySelectorAll(g.el)]),f||(f=g.el),f&&f.length!==0&&(e.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(f)&&f.length>1&&(f=[...e.el.querySelectorAll(g.el)],f.length>1&&(f=f.find((b=>r1(b,".swiper")[0]===e.el)))),Array.isArray(f)&&f.length===1&&(f=f[0]),Object.assign(e.pagination,{el:f}),f=O(f),f.forEach((b=>{g.type==="bullets"&&g.clickable&&b.classList.add(...(g.clickableClass||"").split(" ")),b.classList.add(g.modifierClass+g.type),b.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(b.classList.add(`${g.modifierClass}${g.type}-dynamic`),r=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&b.classList.add(g.progressbarOppositeClass),g.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(g.lockClass)})))}function n(){const g=e.params.pagination;if(p())return;let f=e.pagination.el;f&&(f=O(f),f.forEach((b=>{b.classList.remove(g.hiddenClass),b.classList.remove(g.modifierClass+g.type),b.classList.remove(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(b.classList.remove(...(g.clickableClass||"").split(" ")),b.removeEventListener("click",d))}))),e.pagination.bullets&&e.pagination.bullets.forEach((b=>b.classList.remove(...g.bulletActiveClass.split(" "))))}s("changeDirection",(()=>{if(!e.pagination||!e.pagination.el)return;const g=e.params.pagination;let{el:f}=e.pagination;f=O(f),f.forEach((b=>{b.classList.remove(g.horizontalClass,g.verticalClass),b.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass)}))})),s("init",(()=>{e.params.pagination.enabled===!1?u():(h(),m(),x())})),s("activeIndexChange",(()=>{e.snapIndex===void 0&&x()})),s("snapIndexChange",(()=>{x()})),s("snapGridLengthChange",(()=>{m(),x()})),s("destroy",(()=>{n()})),s("enable disable",(()=>{let{el:g}=e.pagination;g&&(g=O(g),g.forEach((f=>f.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass))))})),s("lock unlock",(()=>{x()})),s("click",((g,f)=>{const b=f.target,S=O(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const y=S[0].classList.contains(e.params.pagination.hiddenClass);a(y===!0?"paginationShow":"paginationHide"),S.forEach((E=>E.classList.toggle(e.params.pagination.hiddenClass)))}}));const u=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=O(g),g.forEach((f=>f.classList.add(e.params.pagination.paginationDisabledClass)))),n()};Object.assign(e.pagination,{enable:()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=O(g),g.forEach((f=>f.classList.remove(e.params.pagination.paginationDisabledClass)))),h(),m(),x()},disable:u,render:m,update:x,init:h,destroy:n})}function T2(l){let{swiper:e,extendParams:t,on:s,emit:a}=l;const i=X();let o,r,p,c,d=!1,x=null,m=null;function h(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:C,rtlTranslate:L}=e,{dragEl:w,el:v}=C,k=e.params.scrollbar,M=e.params.loop?e.progressLoop:e.progress;let D=r,A=(p-r)*M;L?(A=-A,A>0?(D=r-A,A=0):-A+r>p&&(D=p+A)):A<0?(D=r+A,A=0):A+r>p&&(D=p-A),e.isHorizontal()?(w.style.transform=`translate3d(${A}px, 0, 0)`,w.style.width=`${D}px`):(w.style.transform=`translate3d(0px, ${A}px, 0)`,w.style.height=`${D}px`),k.hide&&(clearTimeout(x),v.style.opacity=1,x=setTimeout((()=>{v.style.opacity=0,v.style.transitionDuration="400ms"}),1e3))}function n(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:C}=e,{dragEl:L,el:w}=C;L.style.width="",L.style.height="",p=e.isHorizontal()?w.offsetWidth:w.offsetHeight,c=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),r=e.params.scrollbar.dragSize==="auto"?p*c:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?L.style.width=`${r}px`:L.style.height=`${r}px`,w.style.display=c>=1?"none":"",e.params.scrollbar.hide&&(w.style.opacity=0),e.params.watchOverflow&&e.enabled&&C.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function u(C){return e.isHorizontal()?C.clientX:C.clientY}function g(C){const{scrollbar:L,rtlTranslate:w}=e,{el:v}=L;let k;k=(u(C)-M1(v)[e.isHorizontal()?"left":"top"]-(o!==null?o:r/2))/(p-r),k=Math.max(Math.min(k,1),0),w&&(k=1-k);const M=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*k;e.updateProgress(M),e.setTranslate(M),e.updateActiveIndex(),e.updateSlidesClasses()}function f(C){const L=e.params.scrollbar,{scrollbar:w,wrapperEl:v}=e,{el:k,dragEl:M}=w;d=!0,o=C.target===M?u(C)-C.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,C.preventDefault(),C.stopPropagation(),v.style.transitionDuration="100ms",M.style.transitionDuration="100ms",g(C),clearTimeout(m),k.style.transitionDuration="0ms",L.hide&&(k.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),a("scrollbarDragStart",C)}function b(C){const{scrollbar:L,wrapperEl:w}=e,{el:v,dragEl:k}=L;d&&(C.preventDefault&&C.cancelable?C.preventDefault():C.returnValue=!1,g(C),w.style.transitionDuration="0ms",v.style.transitionDuration="0ms",k.style.transitionDuration="0ms",a("scrollbarDragMove",C))}function S(C){const L=e.params.scrollbar,{scrollbar:w,wrapperEl:v}=e,{el:k}=w;d&&(d=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",v.style.transitionDuration=""),L.hide&&(clearTimeout(m),m=p1((()=>{k.style.opacity=0,k.style.transitionDuration="400ms"}),1e3)),a("scrollbarDragEnd",C),L.snapOnRelease&&e.slideToClosest())}function y(C){const{scrollbar:L,params:w}=e,v=L.el;if(!v)return;const k=v,M=!!w.passiveListeners&&{passive:!1,capture:!1},D=!!w.passiveListeners&&{passive:!0,capture:!1};if(!k)return;const A=C==="on"?"addEventListener":"removeEventListener";k[A]("pointerdown",f,M),i[A]("pointermove",b,M),i[A]("pointerup",S,D)}function E(){const{scrollbar:C,el:L}=e;e.params.scrollbar=X1(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const w=e.params.scrollbar;if(!w.el)return;let v,k;if(typeof w.el=="string"&&e.isElement&&(v=e.el.querySelector(w.el)),v||typeof w.el!="string")v||(v=w.el);else if(v=i.querySelectorAll(w.el),!v.length)return;e.params.uniqueNavElements&&typeof w.el=="string"&&v.length>1&&L.querySelectorAll(w.el).length===1&&(v=L.querySelector(w.el)),v.length>0&&(v=v[0]),v.classList.add(e.isHorizontal()?w.horizontalClass:w.verticalClass),v&&(k=v.querySelector(Q(e.params.scrollbar.dragClass)),k||(k=U("div",e.params.scrollbar.dragClass),v.append(k))),Object.assign(C,{el:v,dragEl:k}),w.draggable&&e.params.scrollbar.el&&e.scrollbar.el&&y("on"),v&&v.classList[e.enabled?"remove":"add"](...s1(e.params.scrollbar.lockClass))}function P(){const C=e.params.scrollbar,L=e.scrollbar.el;L&&L.classList.remove(...s1(e.isHorizontal()?C.horizontalClass:C.verticalClass)),e.params.scrollbar.el&&e.scrollbar.el&&y("off")}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null},s("changeDirection",(()=>{if(!e.scrollbar||!e.scrollbar.el)return;const C=e.params.scrollbar;let{el:L}=e.scrollbar;L=O(L),L.forEach((w=>{w.classList.remove(C.horizontalClass,C.verticalClass),w.classList.add(e.isHorizontal()?C.horizontalClass:C.verticalClass)}))})),s("init",(()=>{e.params.scrollbar.enabled===!1?z():(E(),n(),h())})),s("update resize observerUpdate lock unlock changeDirection",(()=>{n()})),s("setTranslate",(()=>{h()})),s("setTransition",((C,L)=>{(function(w){e.params.scrollbar.el&&e.scrollbar.el&&(e.scrollbar.dragEl.style.transitionDuration=`${w}ms`)})(L)})),s("enable disable",(()=>{const{el:C}=e.scrollbar;C&&C.classList[e.enabled?"remove":"add"](...s1(e.params.scrollbar.lockClass))})),s("destroy",(()=>{P()}));const z=()=>{e.el.classList.add(...s1(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...s1(e.params.scrollbar.scrollbarDisabledClass)),P()};Object.assign(e.scrollbar,{enable:()=>{e.el.classList.remove(...s1(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...s1(e.params.scrollbar.scrollbarDisabledClass)),E(),n(),h()},disable:z,updateSize:n,setTranslate:h,init:E,destroy:P})}function z2(l){let{swiper:e,extendParams:t,on:s}=l;t({parallax:{enabled:!1}});const a="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",i=(r,p)=>{const{rtl:c}=e,d=c?-1:1,x=r.getAttribute("data-swiper-parallax")||"0";let m=r.getAttribute("data-swiper-parallax-x"),h=r.getAttribute("data-swiper-parallax-y");const n=r.getAttribute("data-swiper-parallax-scale"),u=r.getAttribute("data-swiper-parallax-opacity"),g=r.getAttribute("data-swiper-parallax-rotate");if(m||h?(m=m||"0",h=h||"0"):e.isHorizontal()?(m=x,h="0"):(h=x,m="0"),m=m.indexOf("%")>=0?parseInt(m,10)*p*d+"%":m*p*d+"px",h=h.indexOf("%")>=0?parseInt(h,10)*p+"%":h*p+"px",u!=null){const b=u-(u-1)*(1-Math.abs(p));r.style.opacity=b}let f=`translate3d(${m}, ${h}, 0px)`;n!=null&&(f+=` scale(${n-(n-1)*(1-Math.abs(p))})`),g&&g!=null&&(f+=` rotate(${g*p*-1}deg)`),r.style.transform=f},o=()=>{const{el:r,slides:p,progress:c,snapGrid:d,isElement:x}=e,m=N(r,a);e.isElement&&m.push(...N(e.hostEl,a)),m.forEach((h=>{i(h,c)})),p.forEach(((h,n)=>{let u=h.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(u+=Math.ceil(n/2)-c*(d.length-1)),u=Math.min(Math.max(u,-1),1),h.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`).forEach((g=>{i(g,u)}))}))};s("beforeInit",(()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)})),s("init",(()=>{e.params.parallax.enabled&&o()})),s("setTranslate",(()=>{e.params.parallax.enabled&&o()})),s("setTransition",((r,p)=>{e.params.parallax.enabled&&(function(c){c===void 0&&(c=e.params.speed);const{el:d,hostEl:x}=e,m=[...d.querySelectorAll(a)];e.isElement&&m.push(...x.querySelectorAll(a)),m.forEach((h=>{let n=parseInt(h.getAttribute("data-swiper-parallax-duration"),10)||c;c===0&&(n=0),h.style.transitionDuration=`${n}ms`}))})(p)}))}function L2(l){let{swiper:e,extendParams:t,on:s,emit:a}=l;const i=R();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,panOnMouseMove:!1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let o=1,r=!1,p=!1,c={x:0,y:0};const d=-3;let x,m;const h=[],n={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},u={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let f,b=1;function S(){if(h.length<2)return 1;const j=h[0].pageX,I=h[0].pageY,T=h[1].pageX,$=h[1].pageY;return Math.sqrt((T-j)**2+($-I)**2)}function y(){const j=e.params.zoom,I=n.imageWrapEl.getAttribute("data-swiper-zoom")||j.maxRatio;if(j.limitToOriginalSize&&n.imageEl&&n.imageEl.naturalWidth){const T=n.imageEl.naturalWidth/n.imageEl.offsetWidth;return Math.min(T,I)}return I}function E(j){const I=e.isElement?"swiper-slide":`.${e.params.slideClass}`;return!!j.target.matches(I)||e.slides.filter((T=>T.contains(j.target))).length>0}function P(j){const I=`.${e.params.zoom.containerClass}`;return!!j.target.matches(I)||[...e.hostEl.querySelectorAll(I)].filter((T=>T.contains(j.target))).length>0}function z(j){if(j.pointerType==="mouse"&&h.splice(0,h.length),!E(j))return;const I=e.params.zoom;if(x=!1,m=!1,h.push(j),!(h.length<2)){if(x=!0,n.scaleStart=S(),!n.slideEl){n.slideEl=j.target.closest(`.${e.params.slideClass}, swiper-slide`),n.slideEl||(n.slideEl=e.slides[e.activeIndex]);let T=n.slideEl.querySelector(`.${I.containerClass}`);if(T&&(T=T.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=T,n.imageWrapEl=T?r1(n.imageEl,`.${I.containerClass}`)[0]:void 0,!n.imageWrapEl)return void(n.imageEl=void 0);n.maxRatio=y()}if(n.imageEl){const[T,$]=(function(){if(h.length<2)return{x:null,y:null};const _=n.imageEl.getBoundingClientRect();return[(h[0].pageX+(h[1].pageX-h[0].pageX)/2-_.x-i.scrollX)/o,(h[0].pageY+(h[1].pageY-h[0].pageY)/2-_.y-i.scrollY)/o]})();n.originX=T,n.originY=$,n.imageEl.style.transitionDuration="0ms"}r=!0}}function C(j){if(!E(j))return;const I=e.params.zoom,T=e.zoom,$=h.findIndex((_=>_.pointerId===j.pointerId));$>=0&&(h[$]=j),h.length<2||(m=!0,n.scaleMove=S(),n.imageEl&&(T.scale=n.scaleMove/n.scaleStart*o,T.scale>n.maxRatio&&(T.scale=n.maxRatio-1+(T.scale-n.maxRatio+1)**.5),T.scale<I.minRatio&&(T.scale=I.minRatio+1-(I.minRatio-T.scale+1)**.5),n.imageEl.style.transform=`translate3d(0,0,0) scale(${T.scale})`))}function L(j){if(!E(j)||j.pointerType==="mouse"&&j.type==="pointerout")return;const I=e.params.zoom,T=e.zoom,$=h.findIndex((_=>_.pointerId===j.pointerId));$>=0&&h.splice($,1),x&&m&&(x=!1,m=!1,n.imageEl&&(T.scale=Math.max(Math.min(T.scale,n.maxRatio),I.minRatio),n.imageEl.style.transitionDuration=`${e.params.speed}ms`,n.imageEl.style.transform=`translate3d(0,0,0) scale(${T.scale})`,o=T.scale,r=!1,T.scale>1&&n.slideEl?n.slideEl.classList.add(`${I.zoomedSlideClass}`):T.scale<=1&&n.slideEl&&n.slideEl.classList.remove(`${I.zoomedSlideClass}`),T.scale===1&&(n.originX=0,n.originY=0,n.slideEl=void 0)))}function w(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function v(j){const I=j.pointerType==="mouse"&&e.params.zoom.panOnMouseMove;if(!E(j)||!P(j))return;const T=e.zoom;if(!n.imageEl)return;if(!u.isTouched||!n.slideEl)return void(I&&M(j));if(I)return void M(j);u.isMoved||(u.width=n.imageEl.offsetWidth||n.imageEl.clientWidth,u.height=n.imageEl.offsetHeight||n.imageEl.clientHeight,u.startX=H1(n.imageWrapEl,"x")||0,u.startY=H1(n.imageWrapEl,"y")||0,n.slideWidth=n.slideEl.offsetWidth,n.slideHeight=n.slideEl.offsetHeight,n.imageWrapEl.style.transitionDuration="0ms");const $=u.width*T.scale,_=u.height*T.scale;if(u.minX=Math.min(n.slideWidth/2-$/2,0),u.maxX=-u.minX,u.minY=Math.min(n.slideHeight/2-_/2,0),u.maxY=-u.minY,u.touchesCurrent.x=h.length>0?h[0].pageX:j.pageX,u.touchesCurrent.y=h.length>0?h[0].pageY:j.pageY,Math.max(Math.abs(u.touchesCurrent.x-u.touchesStart.x),Math.abs(u.touchesCurrent.y-u.touchesStart.y))>5&&(e.allowClick=!1),!u.isMoved&&!r&&(e.isHorizontal()&&(Math.floor(u.minX)===Math.floor(u.startX)&&u.touchesCurrent.x<u.touchesStart.x||Math.floor(u.maxX)===Math.floor(u.startX)&&u.touchesCurrent.x>u.touchesStart.x)||!e.isHorizontal()&&(Math.floor(u.minY)===Math.floor(u.startY)&&u.touchesCurrent.y<u.touchesStart.y||Math.floor(u.maxY)===Math.floor(u.startY)&&u.touchesCurrent.y>u.touchesStart.y)))return u.isTouched=!1,void w();j.cancelable&&j.preventDefault(),j.stopPropagation(),clearTimeout(f),e.touchEventsData.preventTouchMoveFromPointerMove=!0,f=setTimeout((()=>{e.destroyed||w()})),u.isMoved=!0;const Z=(T.scale-o)/(n.maxRatio-e.params.zoom.minRatio),{originX:J,originY:t1}=n;u.currentX=u.touchesCurrent.x-u.touchesStart.x+u.startX+Z*(u.width-2*J),u.currentY=u.touchesCurrent.y-u.touchesStart.y+u.startY+Z*(u.height-2*t1),u.currentX<u.minX&&(u.currentX=u.minX+1-(u.minX-u.currentX+1)**.8),u.currentX>u.maxX&&(u.currentX=u.maxX-1+(u.currentX-u.maxX+1)**.8),u.currentY<u.minY&&(u.currentY=u.minY+1-(u.minY-u.currentY+1)**.8),u.currentY>u.maxY&&(u.currentY=u.maxY-1+(u.currentY-u.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=u.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=u.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(u.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(u.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(u.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(u.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=u.touchesCurrent.x,g.prevPositionY=u.touchesCurrent.y,g.prevTime=Date.now(),n.imageWrapEl.style.transform=`translate3d(${u.currentX}px, ${u.currentY}px,0)`}function k(){const j=e.zoom;n.slideEl&&e.activeIndex!==e.slides.indexOf(n.slideEl)&&(n.imageEl&&(n.imageEl.style.transform="translate3d(0,0,0) scale(1)"),n.imageWrapEl&&(n.imageWrapEl.style.transform="translate3d(0,0,0)"),n.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),j.scale=1,o=1,n.slideEl=void 0,n.imageEl=void 0,n.imageWrapEl=void 0,n.originX=0,n.originY=0)}function M(j){if(o<=1||!n.imageWrapEl||!E(j)||!P(j))return;const I=i.getComputedStyle(n.imageWrapEl).transform,T=new i.DOMMatrix(I);if(!p)return p=!0,c.x=j.clientX,c.y=j.clientY,u.startX=T.e,u.startY=T.f,u.width=n.imageEl.offsetWidth||n.imageEl.clientWidth,u.height=n.imageEl.offsetHeight||n.imageEl.clientHeight,n.slideWidth=n.slideEl.offsetWidth,void(n.slideHeight=n.slideEl.offsetHeight);const $=(j.clientX-c.x)*d,_=(j.clientY-c.y)*d,Z=u.width*o,J=u.height*o,t1=n.slideWidth,i1=n.slideHeight,Y=Math.min(t1/2-Z/2,0),F=-Y,a1=Math.min(i1/2-J/2,0),b1=-a1,n1=Math.max(Math.min(u.startX+$,F),Y),o1=Math.max(Math.min(u.startY+_,b1),a1);n.imageWrapEl.style.transitionDuration="0ms",n.imageWrapEl.style.transform=`translate3d(${n1}px, ${o1}px, 0)`,c.x=j.clientX,c.y=j.clientY,u.startX=n1,u.startY=o1,u.currentX=n1,u.currentY=o1}function D(j){const I=e.zoom,T=e.params.zoom;if(!n.slideEl){j&&j.target&&(n.slideEl=j.target.closest(`.${e.params.slideClass}, swiper-slide`)),n.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?n.slideEl=N(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:n.slideEl=e.slides[e.activeIndex]);let h1=n.slideEl.querySelector(`.${T.containerClass}`);h1&&(h1=h1.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=h1,n.imageWrapEl=h1?r1(n.imageEl,`.${T.containerClass}`)[0]:void 0}if(!n.imageEl||!n.imageWrapEl)return;let $,_,Z,J,t1,i1,Y,F,a1,b1,n1,o1,y1,k1,z1,L1,P1,A1;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),n.slideEl.classList.add(`${T.zoomedSlideClass}`),u.touchesStart.x===void 0&&j?($=j.pageX,_=j.pageY):($=u.touchesStart.x,_=u.touchesStart.y);const D1=o,d1=typeof j=="number"?j:null;o===1&&d1&&($=void 0,_=void 0,u.touchesStart.x=void 0,u.touchesStart.y=void 0);const N1=y();I.scale=d1||N1,o=d1||N1,!j||o===1&&d1?(Y=0,F=0):(P1=n.slideEl.offsetWidth,A1=n.slideEl.offsetHeight,Z=M1(n.slideEl).left+i.scrollX,J=M1(n.slideEl).top+i.scrollY,t1=Z+P1/2-$,i1=J+A1/2-_,a1=n.imageEl.offsetWidth||n.imageEl.clientWidth,b1=n.imageEl.offsetHeight||n.imageEl.clientHeight,n1=a1*I.scale,o1=b1*I.scale,y1=Math.min(P1/2-n1/2,0),k1=Math.min(A1/2-o1/2,0),z1=-y1,L1=-k1,D1>0&&d1&&typeof u.currentX=="number"&&typeof u.currentY=="number"?(Y=u.currentX*I.scale/D1,F=u.currentY*I.scale/D1):(Y=t1*I.scale,F=i1*I.scale),Y<y1&&(Y=y1),Y>z1&&(Y=z1),F<k1&&(F=k1),F>L1&&(F=L1)),d1&&I.scale===1&&(n.originX=0,n.originY=0),u.currentX=Y,u.currentY=F,n.imageWrapEl.style.transitionDuration="300ms",n.imageWrapEl.style.transform=`translate3d(${Y}px, ${F}px,0)`,n.imageEl.style.transitionDuration="300ms",n.imageEl.style.transform=`translate3d(0,0,0) scale(${I.scale})`}function A(){const j=e.zoom,I=e.params.zoom;if(!n.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?n.slideEl=N(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:n.slideEl=e.slides[e.activeIndex];let T=n.slideEl.querySelector(`.${I.containerClass}`);T&&(T=T.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=T,n.imageWrapEl=T?r1(n.imageEl,`.${I.containerClass}`)[0]:void 0}n.imageEl&&n.imageWrapEl&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),j.scale=1,o=1,u.currentX=void 0,u.currentY=void 0,u.touchesStart.x=void 0,u.touchesStart.y=void 0,n.imageWrapEl.style.transitionDuration="300ms",n.imageWrapEl.style.transform="translate3d(0,0,0)",n.imageEl.style.transitionDuration="300ms",n.imageEl.style.transform="translate3d(0,0,0) scale(1)",n.slideEl.classList.remove(`${I.zoomedSlideClass}`),n.slideEl=void 0,n.originX=0,n.originY=0,e.params.zoom.panOnMouseMove&&(c={x:0,y:0},p&&(p=!1,u.startX=0,u.startY=0)))}function B(j){const I=e.zoom;I.scale&&I.scale!==1?A():D(j)}function H(){return{passiveListener:!!e.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!e.params.passiveListeners||{passive:!1,capture:!0}}}function G(){const j=e.zoom;if(j.enabled)return;j.enabled=!0;const{passiveListener:I,activeListenerWithCapture:T}=H();e.wrapperEl.addEventListener("pointerdown",z,I),e.wrapperEl.addEventListener("pointermove",C,T),["pointerup","pointercancel","pointerout"].forEach(($=>{e.wrapperEl.addEventListener($,L,I)})),e.wrapperEl.addEventListener("pointermove",v,T)}function q(){const j=e.zoom;if(!j.enabled)return;j.enabled=!1;const{passiveListener:I,activeListenerWithCapture:T}=H();e.wrapperEl.removeEventListener("pointerdown",z,I),e.wrapperEl.removeEventListener("pointermove",C,T),["pointerup","pointercancel","pointerout"].forEach(($=>{e.wrapperEl.removeEventListener($,L,I)})),e.wrapperEl.removeEventListener("pointermove",v,T)}Object.defineProperty(e.zoom,"scale",{get:()=>b,set(j){if(b!==j){const I=n.imageEl,T=n.slideEl;a("zoomChange",j,I,T)}b=j}}),s("init",(()=>{e.params.zoom.enabled&&G()})),s("destroy",(()=>{q()})),s("touchStart",((j,I)=>{e.zoom.enabled&&(function(T){const $=e.device;if(!n.imageEl||u.isTouched)return;$.android&&T.cancelable&&T.preventDefault(),u.isTouched=!0;const _=h.length>0?h[0]:T;u.touchesStart.x=_.pageX,u.touchesStart.y=_.pageY})(I)})),s("touchEnd",((j,I)=>{e.zoom.enabled&&(function(){const T=e.zoom;if(h.length=0,!n.imageEl)return;if(!u.isTouched||!u.isMoved)return u.isTouched=!1,void(u.isMoved=!1);u.isTouched=!1,u.isMoved=!1;let $=300,_=300;const Z=g.x*$,J=u.currentX+Z,t1=g.y*_,i1=u.currentY+t1;g.x!==0&&($=Math.abs((J-u.currentX)/g.x)),g.y!==0&&(_=Math.abs((i1-u.currentY)/g.y));const Y=Math.max($,_);u.currentX=J,u.currentY=i1;const F=u.width*T.scale,a1=u.height*T.scale;u.minX=Math.min(n.slideWidth/2-F/2,0),u.maxX=-u.minX,u.minY=Math.min(n.slideHeight/2-a1/2,0),u.maxY=-u.minY,u.currentX=Math.max(Math.min(u.currentX,u.maxX),u.minX),u.currentY=Math.max(Math.min(u.currentY,u.maxY),u.minY),n.imageWrapEl.style.transitionDuration=`${Y}ms`,n.imageWrapEl.style.transform=`translate3d(${u.currentX}px, ${u.currentY}px,0)`})()})),s("doubleTap",((j,I)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&B(I)})),s("transitionEnd",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&k()})),s("slideChange",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&k()})),Object.assign(e.zoom,{enable:G,disable:q,in:D,out:A,toggle:B})}function P2(l){let{swiper:e,extendParams:t,on:s}=l;function a(o,r){const p=(function(){let x,m,h;return(n,u)=>{for(m=-1,x=n.length;x-m>1;)h=x+m>>1,n[h]<=u?m=h:x=h;return x}})();let c,d;return this.x=o,this.y=r,this.lastIndex=o.length-1,this.interpolate=function(x){return x?(d=p(this.x,x),c=d-1,(x-this.x[c])*(this.y[d]-this.y[c])/(this.x[d]-this.x[c])+this.y[c]):0},this}function i(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0},s("beforeInit",(()=>{typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)?(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach((o=>{if(e.controller.control||(e.controller.control=[]),o&&o.swiper)e.controller.control.push(o.swiper);else if(o){const r=`${e.params.eventsPrefix}init`,p=c=>{e.controller.control.push(c.detail[0]),e.update(),o.removeEventListener(r,p)};o.addEventListener(r,p)}})):e.controller.control=e.params.controller.control})),s("update",(()=>{i()})),s("resize",(()=>{i()})),s("observerUpdate",(()=>{i()})),s("setTranslate",((o,r,p)=>{e.controller.control&&!e.controller.control.destroyed&&e.controller.setTranslate(r,p)})),s("setTransition",((o,r,p)=>{e.controller.control&&!e.controller.control.destroyed&&e.controller.setTransition(r,p)})),Object.assign(e.controller,{setTranslate:function(o,r){const p=e.controller.control;let c,d;const x=e.constructor;function m(h){if(h.destroyed)return;const n=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&((function(u){e.controller.spline=e.params.loop?new a(e.slidesGrid,u.slidesGrid):new a(e.snapGrid,u.snapGrid)})(h),d=-e.controller.spline.interpolate(-n)),d&&e.params.controller.by!=="container"||(c=(h.maxTranslate()-h.minTranslate())/(e.maxTranslate()-e.minTranslate()),!Number.isNaN(c)&&Number.isFinite(c)||(c=1),d=(n-e.minTranslate())*c+h.minTranslate()),e.params.controller.inverse&&(d=h.maxTranslate()-d),h.updateProgress(d),h.setTranslate(d,e),h.updateActiveIndex(),h.updateSlidesClasses()}if(Array.isArray(p))for(let h=0;h<p.length;h+=1)p[h]!==r&&p[h]instanceof x&&m(p[h]);else p instanceof x&&r!==p&&m(p)},setTransition:function(o,r){const p=e.constructor,c=e.controller.control;let d;function x(m){m.destroyed||(m.setTransition(o,e),o!==0&&(m.transitionStart(),m.params.autoHeight&&p1((()=>{m.updateAutoHeight()})),f1(m.wrapperEl,(()=>{c&&m.transitionEnd()}))))}if(Array.isArray(c))for(d=0;d<c.length;d+=1)c[d]!==r&&c[d]instanceof p&&x(c[d]);else c instanceof p&&r!==c&&x(c)}})}function A2(l){let{swiper:e,extendParams:t,on:s}=l;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let a,i,o=null,r=new Date().getTime();function p(w){const v=o;v.length!==0&&e1(v,w)}function c(w){(w=O(w)).forEach((v=>{v.setAttribute("tabIndex","0")}))}function d(w){(w=O(w)).forEach((v=>{v.setAttribute("tabIndex","-1")}))}function x(w,v){(w=O(w)).forEach((k=>{k.setAttribute("role",v)}))}function m(w,v){(w=O(w)).forEach((k=>{k.setAttribute("aria-roledescription",v)}))}function h(w,v){(w=O(w)).forEach((k=>{k.setAttribute("aria-label",v)}))}function n(w){(w=O(w)).forEach((v=>{v.setAttribute("aria-disabled",!0)}))}function u(w){(w=O(w)).forEach((v=>{v.setAttribute("aria-disabled",!1)}))}function g(w){if(w.keyCode!==13&&w.keyCode!==32)return;const v=e.params.a11y,k=w.target;if(!e.pagination||!e.pagination.el||k!==e.pagination.el&&!e.pagination.el.contains(w.target)||w.target.matches(Q(e.params.pagination.bulletClass))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const M=O(e.navigation.prevEl);O(e.navigation.nextEl).includes(k)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?p(v.lastSlideMessage):p(v.nextSlideMessage)),M.includes(k)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?p(v.firstSlideMessage):p(v.prevSlideMessage))}e.pagination&&k.matches(Q(e.params.pagination.bulletClass))&&k.click()}}function f(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function b(){return f()&&e.params.pagination.clickable}const S=(w,v,k)=>{c(w),w.tagName!=="BUTTON"&&(x(w,"button"),w.addEventListener("keydown",g)),h(w,k),(function(M,D){(M=O(M)).forEach((A=>{A.setAttribute("aria-controls",D)}))})(w,v)},y=w=>{i&&i!==w.target&&!i.contains(w.target)&&(a=!0),e.a11y.clicked=!0},E=()=>{a=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>{e.destroyed||(e.a11y.clicked=!1)}))}))},P=w=>{r=new Date().getTime()},z=w=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-r<100)return;const v=w.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!v||!e.slides.includes(v))return;i=v;const k=e.slides.indexOf(v)===e.activeIndex,M=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(v);k||M||w.sourceCapabilities&&w.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame((()=>{a||(e.params.loop?e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(v.getAttribute("data-swiper-slide-index"))),0):e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(v)),0),a=!1)})))},C=()=>{const w=e.params.a11y;w.itemRoleDescriptionMessage&&m(e.slides,w.itemRoleDescriptionMessage),w.slideRole&&x(e.slides,w.slideRole);const v=e.slides.length;w.slideLabelMessage&&e.slides.forEach(((k,M)=>{const D=e.params.loop?parseInt(k.getAttribute("data-swiper-slide-index"),10):M;h(k,w.slideLabelMessage.replace(/\{\{index\}\}/,D+1).replace(/\{\{slidesLength\}\}/,v))}))},L=()=>{const w=e.params.a11y;e.el.append(o);const v=e.el;w.containerRoleDescriptionMessage&&m(v,w.containerRoleDescriptionMessage),w.containerMessage&&h(v,w.containerMessage),w.containerRole&&x(v,w.containerRole);const k=e.wrapperEl,M=w.id||k.getAttribute("id")||`swiper-wrapper-${D=16,D===void 0&&(D=16),"x".repeat(D).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var D;const A=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";var B;B=M,O(k).forEach((q=>{q.setAttribute("id",B)})),(function(q,j){(q=O(q)).forEach((I=>{I.setAttribute("aria-live",j)}))})(k,A),C();let{nextEl:H,prevEl:G}=e.navigation?e.navigation:{};H=O(H),G=O(G),H&&H.forEach((q=>S(q,M,w.nextSlideMessage))),G&&G.forEach((q=>S(q,M,w.prevSlideMessage))),b()&&O(e.pagination.el).forEach((q=>{q.addEventListener("keydown",g)})),X().addEventListener("visibilitychange",P),e.el.addEventListener("focus",z,!0),e.el.addEventListener("focus",z,!0),e.el.addEventListener("pointerdown",y,!0),e.el.addEventListener("pointerup",E,!0)};s("beforeInit",(()=>{o=U("span",e.params.a11y.notificationClass),o.setAttribute("aria-live","assertive"),o.setAttribute("aria-atomic","true")})),s("afterInit",(()=>{e.params.a11y.enabled&&L()})),s("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{e.params.a11y.enabled&&C()})),s("fromEdge toEdge afterInit lock unlock",(()=>{e.params.a11y.enabled&&(function(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:w,prevEl:v}=e.navigation;v&&(e.isBeginning?(n(v),d(v)):(u(v),c(v))),w&&(e.isEnd?(n(w),d(w)):(u(w),c(w)))})()})),s("paginationUpdate",(()=>{e.params.a11y.enabled&&(function(){const w=e.params.a11y;f()&&e.pagination.bullets.forEach((v=>{e.params.pagination.clickable&&(c(v),e.params.pagination.renderBullet||(x(v,"button"),h(v,w.paginationBulletMessage.replace(/\{\{index\}\}/,v1(v)+1)))),v.matches(Q(e.params.pagination.bulletActiveClass))?v.setAttribute("aria-current","true"):v.removeAttribute("aria-current")}))})()})),s("destroy",(()=>{e.params.a11y.enabled&&(function(){o&&o.remove();let{nextEl:w,prevEl:v}=e.navigation?e.navigation:{};w=O(w),v=O(v),w&&w.forEach((k=>k.removeEventListener("keydown",g))),v&&v.forEach((k=>k.removeEventListener("keydown",g))),b()&&O(e.pagination.el).forEach((k=>{k.removeEventListener("keydown",g)})),X().removeEventListener("visibilitychange",P),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",z,!0),e.el.removeEventListener("pointerdown",y,!0),e.el.removeEventListener("pointerup",E,!0))})()}))}function D2(l){let{swiper:e,extendParams:t,on:s}=l;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let a=!1,i={};const o=x=>x.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),r=x=>{const m=R();let h;h=x?new URL(x):m.location;const n=h.pathname.slice(1).split("/").filter((g=>g!=="")),u=n.length;return{key:n[u-2],value:n[u-1]}},p=(x,m)=>{const h=R();if(!a||!e.params.history.enabled)return;let n;n=e.params.url?new URL(e.params.url):h.location;const u=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${m}"]`):e.slides[m];let g=o(u.getAttribute("data-history"));if(e.params.history.root.length>0){let b=e.params.history.root;b[b.length-1]==="/"&&(b=b.slice(0,b.length-1)),g=`${b}/${x?`${x}/`:""}${g}`}else n.pathname.includes(x)||(g=`${x?`${x}/`:""}${g}`);e.params.history.keepQuery&&(g+=n.search);const f=h.history.state;f&&f.value===g||(e.params.history.replaceState?h.history.replaceState({value:g},null,g):h.history.pushState({value:g},null,g))},c=(x,m,h)=>{if(m)for(let n=0,u=e.slides.length;n<u;n+=1){const g=e.slides[n];if(o(g.getAttribute("data-history"))===m){const f=e.getSlideIndex(g);e.slideTo(f,x,h)}}else e.slideTo(0,x,h)},d=()=>{i=r(e.params.url),c(e.params.speed,i.value,!1)};s("init",(()=>{e.params.history.enabled&&(()=>{const x=R();if(e.params.history){if(!x.history||!x.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);a=!0,i=r(e.params.url),(i.key||i.value)&&c(0,i.value,e.params.runCallbacksOnInit),e.params.history.replaceState||x.addEventListener("popstate",d)}})()})),s("destroy",(()=>{e.params.history.enabled&&(()=>{const x=R();e.params.history.replaceState||x.removeEventListener("popstate",d)})()})),s("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&p(e.params.history.key,e.activeIndex)})),s("slideChange",(()=>{a&&e.params.cssMode&&p(e.params.history.key,e.activeIndex)}))}function j2(l){let{swiper:e,extendParams:t,emit:s,on:a}=l,i=!1;const o=X(),r=R();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(d,x){if(e.virtual&&e.params.virtual.enabled){const m=e.slides.find((h=>h.getAttribute("data-hash")===x));return m?parseInt(m.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(N(e.slidesEl,`.${e.params.slideClass}[data-hash="${x}"], swiper-slide[data-hash="${x}"]`)[0])}}});const p=()=>{s("hashChange");const d=o.location.hash.replace("#",""),x=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex];if(d!==(x?x.getAttribute("data-hash"):"")){const m=e.params.hashNavigation.getSlideIndex(e,d);if(m===void 0||Number.isNaN(m))return;e.slideTo(m)}},c=()=>{if(!i||!e.params.hashNavigation.enabled)return;const d=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],x=d?d.getAttribute("data-hash")||d.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&r.history&&r.history.replaceState?(r.history.replaceState(null,null,`#${x}`||""),s("hashSet")):(o.location.hash=x||"",s("hashSet"))};a("init",(()=>{e.params.hashNavigation.enabled&&(()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;i=!0;const d=o.location.hash.replace("#","");if(d){const m=e.params.hashNavigation.getSlideIndex(e,d);e.slideTo(m||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&r.addEventListener("hashchange",p)})()})),a("destroy",(()=>{e.params.hashNavigation.enabled&&e.params.hashNavigation.watchState&&r.removeEventListener("hashchange",p)})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&c()})),a("slideChange",(()=>{i&&e.params.cssMode&&c()}))}function I2(l){let e,t,{swiper:s,extendParams:a,on:i,emit:o,params:r}=l;s.autoplay={running:!1,paused:!1,timeLeft:0},a({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,c,d,x,m,h,n,u,g=r&&r.autoplay?r.autoplay.delay:3e3,f=r&&r.autoplay?r.autoplay.delay:3e3,b=new Date().getTime();function S(M){s&&!s.destroyed&&s.wrapperEl&&M.target===s.wrapperEl&&(s.wrapperEl.removeEventListener("transitionend",S),u||M.detail&&M.detail.bySwiperTouchMove||L())}const y=()=>{if(s.destroyed||!s.autoplay.running)return;s.autoplay.paused?c=!0:c&&(f=p,c=!1);const M=s.autoplay.paused?p:b+f-new Date().getTime();s.autoplay.timeLeft=M,o("autoplayTimeLeft",M,M/g),t=requestAnimationFrame((()=>{y()}))},E=M=>{if(s.destroyed||!s.autoplay.running)return;cancelAnimationFrame(t),y();let D=M===void 0?s.params.autoplay.delay:M;g=s.params.autoplay.delay,f=s.params.autoplay.delay;const A=(()=>{let G;if(G=s.virtual&&s.params.virtual.enabled?s.slides.find((q=>q.classList.contains("swiper-slide-active"))):s.slides[s.activeIndex],!!G)return parseInt(G.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(A)&&A>0&&M===void 0&&(D=A,g=A,f=A),p=D;const B=s.params.speed,H=()=>{s&&!s.destroyed&&(s.params.autoplay.reverseDirection?!s.isBeginning||s.params.loop||s.params.rewind?(s.slidePrev(B,!0,!0),o("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(s.slides.length-1,B,!0,!0),o("autoplay")):!s.isEnd||s.params.loop||s.params.rewind?(s.slideNext(B,!0,!0),o("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(0,B,!0,!0),o("autoplay")),s.params.cssMode&&(b=new Date().getTime(),requestAnimationFrame((()=>{E()}))))};return D>0?(clearTimeout(e),e=setTimeout((()=>{H()}),D)):requestAnimationFrame((()=>{H()})),D},P=()=>{b=new Date().getTime(),s.autoplay.running=!0,E(),o("autoplayStart")},z=()=>{s.autoplay.running=!1,clearTimeout(e),cancelAnimationFrame(t),o("autoplayStop")},C=(M,D)=>{if(s.destroyed||!s.autoplay.running)return;clearTimeout(e),M||(n=!0);const A=()=>{o("autoplayPause"),s.params.autoplay.waitForTransition?s.wrapperEl.addEventListener("transitionend",S):L()};if(s.autoplay.paused=!0,D)return h&&(p=s.params.autoplay.delay),h=!1,void A();p=(p||s.params.autoplay.delay)-(new Date().getTime()-b),s.isEnd&&p<0&&!s.params.loop||(p<0&&(p=0),A())},L=()=>{s.isEnd&&p<0&&!s.params.loop||s.destroyed||!s.autoplay.running||(b=new Date().getTime(),n?(n=!1,E(p)):E(),s.autoplay.paused=!1,o("autoplayResume"))},w=()=>{if(s.destroyed||!s.autoplay.running)return;const M=X();M.visibilityState==="hidden"&&(n=!0,C(!0)),M.visibilityState==="visible"&&L()},v=M=>{M.pointerType==="mouse"&&(n=!0,u=!0,s.animating||s.autoplay.paused||C(!0))},k=M=>{M.pointerType==="mouse"&&(u=!1,s.autoplay.paused&&L())};i("init",(()=>{s.params.autoplay.enabled&&(s.params.autoplay.pauseOnMouseEnter&&(s.el.addEventListener("pointerenter",v),s.el.addEventListener("pointerleave",k)),X().addEventListener("visibilitychange",w),P())})),i("destroy",(()=>{s.el&&typeof s.el!="string"&&(s.el.removeEventListener("pointerenter",v),s.el.removeEventListener("pointerleave",k)),X().removeEventListener("visibilitychange",w),s.autoplay.running&&z()})),i("_freeModeStaticRelease",(()=>{(x||n)&&L()})),i("_freeModeNoMomentumRelease",(()=>{s.params.autoplay.disableOnInteraction?z():C(!0,!0)})),i("beforeTransitionStart",((M,D,A)=>{!s.destroyed&&s.autoplay.running&&(A||!s.params.autoplay.disableOnInteraction?C(!0,!0):z())})),i("sliderFirstMove",(()=>{!s.destroyed&&s.autoplay.running&&(s.params.autoplay.disableOnInteraction?z():(d=!0,x=!1,n=!1,m=setTimeout((()=>{n=!0,x=!0,C(!0)}),200)))})),i("touchEnd",(()=>{if(!s.destroyed&&s.autoplay.running&&d){if(clearTimeout(m),clearTimeout(e),s.params.autoplay.disableOnInteraction)return x=!1,void(d=!1);x&&s.params.cssMode&&L(),x=!1,d=!1}})),i("slideChange",(()=>{!s.destroyed&&s.autoplay.running&&(h=!0)})),Object.assign(s.autoplay,{start:P,stop:z,pause:C,resume:L})}function $2(l){let{swiper:e,extendParams:t,on:s}=l;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,i=!1;function o(){const c=e.thumbs.swiper;if(!c||c.destroyed)return;const d=c.clickedIndex,x=c.clickedSlide;if(x&&x.classList.contains(e.params.thumbs.slideThumbActiveClass)||d==null)return;let m;m=c.params.loop?parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):d,e.params.loop?e.slideToLoop(m):e.slideTo(m)}function r(){const{thumbs:c}=e.params;if(a)return!1;a=!0;const d=e.constructor;if(c.swiper instanceof d){if(c.swiper.destroyed)return a=!1,!1;e.thumbs.swiper=c.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(g1(c.swiper)){const x=Object.assign({},c.swiper);Object.assign(x,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new d(x),i=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",o),!0}function p(c){const d=e.thumbs.swiper;if(!d||d.destroyed)return;const x=d.params.slidesPerView==="auto"?d.slidesPerViewDynamic():d.params.slidesPerView;let m=1;const h=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(m=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(m=1),m=Math.floor(m),d.slides.forEach((g=>g.classList.remove(h))),d.params.loop||d.params.virtual&&d.params.virtual.enabled)for(let g=0;g<m;g+=1)N(d.slidesEl,`[data-swiper-slide-index="${e.realIndex+g}"]`).forEach((f=>{f.classList.add(h)}));else for(let g=0;g<m;g+=1)d.slides[e.realIndex+g]&&d.slides[e.realIndex+g].classList.add(h);const n=e.params.thumbs.autoScrollOffset,u=n&&!d.params.loop;if(e.realIndex!==d.realIndex||u){const g=d.activeIndex;let f,b;if(d.params.loop){const S=d.slides.find((y=>y.getAttribute("data-swiper-slide-index")===`${e.realIndex}`));f=d.slides.indexOf(S),b=e.activeIndex>e.previousIndex?"next":"prev"}else f=e.realIndex,b=f>e.previousIndex?"next":"prev";u&&(f+=b==="next"?n:-1*n),d.visibleSlidesIndexes&&d.visibleSlidesIndexes.indexOf(f)<0&&(d.params.centeredSlides?f=f>g?f-Math.floor(x/2)+1:f+Math.floor(x/2)-1:f>g&&d.params.slidesPerGroup,d.slideTo(f,c?0:void 0))}}e.thumbs={swiper:null},s("beforeInit",(()=>{const{thumbs:c}=e.params;if(c&&c.swiper)if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){const d=X(),x=()=>{const h=typeof c.swiper=="string"?d.querySelector(c.swiper):c.swiper;if(h&&h.swiper)c.swiper=h.swiper,r(),p(!0);else if(h){const n=`${e.params.eventsPrefix}init`,u=g=>{c.swiper=g.detail[0],h.removeEventListener(n,u),r(),p(!0),c.swiper.update(),e.update()};h.addEventListener(n,u)}return h},m=()=>{e.destroyed||x()||requestAnimationFrame(m)};requestAnimationFrame(m)}else r(),p(!0)})),s("slideChange update resize observerUpdate",(()=>{p()})),s("setTransition",((c,d)=>{const x=e.thumbs.swiper;x&&!x.destroyed&&x.setTransition(d)})),s("beforeDestroy",(()=>{const c=e.thumbs.swiper;c&&!c.destroyed&&i&&c.destroy()})),Object.assign(e.thumbs,{init:r,update:p})}function B2(l){let{swiper:e,extendParams:t,emit:s,once:a}=l;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(e,{freeMode:{onTouchStart:function(){if(e.params.cssMode)return;const i=e.getTranslate();e.setTranslate(i),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})},onTouchMove:function(){if(e.params.cssMode)return;const{touchEventsData:i,touches:o}=e;i.velocities.length===0&&i.velocities.push({position:o[e.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:o[e.isHorizontal()?"currentX":"currentY"],time:K()})},onTouchEnd:function(i){let{currentPos:o}=i;if(e.params.cssMode)return;const{params:r,wrapperEl:p,rtlTranslate:c,snapGrid:d,touchEventsData:x}=e,m=K()-x.touchStartTime;if(o<-e.minTranslate())e.slideTo(e.activeIndex);else if(o>-e.maxTranslate())e.slides.length<d.length?e.slideTo(d.length-1):e.slideTo(e.slides.length-1);else{if(r.freeMode.momentum){if(x.velocities.length>1){const y=x.velocities.pop(),E=x.velocities.pop(),P=y.position-E.position,z=y.time-E.time;e.velocity=P/z,e.velocity/=2,Math.abs(e.velocity)<r.freeMode.minimumVelocity&&(e.velocity=0),(z>150||K()-y.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=r.freeMode.momentumVelocityRatio,x.velocities.length=0;let h=1e3*r.freeMode.momentumRatio;const n=e.velocity*h;let u=e.translate+n;c&&(u=-u);let g,f=!1;const b=20*Math.abs(e.velocity)*r.freeMode.momentumBounceRatio;let S;if(u<e.maxTranslate())r.freeMode.momentumBounce?(u+e.maxTranslate()<-b&&(u=e.maxTranslate()-b),g=e.maxTranslate(),f=!0,x.allowMomentumBounce=!0):u=e.maxTranslate(),r.loop&&r.centeredSlides&&(S=!0);else if(u>e.minTranslate())r.freeMode.momentumBounce?(u-e.minTranslate()>b&&(u=e.minTranslate()+b),g=e.minTranslate(),f=!0,x.allowMomentumBounce=!0):u=e.minTranslate(),r.loop&&r.centeredSlides&&(S=!0);else if(r.freeMode.sticky){let y;for(let E=0;E<d.length;E+=1)if(d[E]>-u){y=E;break}u=Math.abs(d[y]-u)<Math.abs(d[y-1]-u)||e.swipeDirection==="next"?d[y]:d[y-1],u=-u}if(S&&a("transitionEnd",(()=>{e.loopFix()})),e.velocity!==0){if(h=Math.abs(c?(-u-e.translate)/e.velocity:(u-e.translate)/e.velocity),r.freeMode.sticky){const y=Math.abs((c?-u:u)-e.translate),E=e.slidesSizesGrid[e.activeIndex];h=y<E?r.speed:y<2*E?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void e.slideToClosest();r.freeMode.momentumBounce&&f?(e.updateProgress(g),e.setTransition(h),e.setTranslate(u),e.transitionStart(!0,e.swipeDirection),e.animating=!0,f1(p,(()=>{e&&!e.destroyed&&x.allowMomentumBounce&&(s("momentumBounce"),e.setTransition(r.speed),setTimeout((()=>{e.setTranslate(g),f1(p,(()=>{e&&!e.destroyed&&e.transitionEnd()}))}),0))}))):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(u),e.setTransition(h),e.setTranslate(u),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,f1(p,(()=>{e&&!e.destroyed&&e.transitionEnd()})))):e.updateProgress(u),e.updateActiveIndex(),e.updateSlidesClasses()}else{if(r.freeMode.sticky)return void e.slideToClosest();r.freeMode&&s("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||m>=r.longSwipesMs)&&(s("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}}}})}function O2(l){let e,t,s,a,{swiper:i,extendParams:o,on:r}=l;o({grid:{rows:1,fill:"column"}});const p=()=>{let c=i.params.spaceBetween;return typeof c=="string"&&c.indexOf("%")>=0?c=parseFloat(c.replace("%",""))/100*i.size:typeof c=="string"&&(c=parseFloat(c)),c};r("init",(()=>{a=i.params.grid&&i.params.grid.rows>1})),r("update",(()=>{const{params:c,el:d}=i,x=c.grid&&c.grid.rows>1;a&&!x?(d.classList.remove(`${c.containerModifierClass}grid`,`${c.containerModifierClass}grid-column`),s=1,i.emitContainerClasses()):!a&&x&&(d.classList.add(`${c.containerModifierClass}grid`),c.grid.fill==="column"&&d.classList.add(`${c.containerModifierClass}grid-column`),i.emitContainerClasses()),a=x})),i.grid={initSlides:c=>{const{slidesPerView:d}=i.params,{rows:x,fill:m}=i.params.grid,h=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:c.length;s=Math.floor(h/x),e=Math.floor(h/x)===h/x?h:Math.ceil(h/x)*x,d!=="auto"&&m==="row"&&(e=Math.max(e,d*x)),t=e/x},unsetSlides:()=>{i.slides&&i.slides.forEach((c=>{c.swiperSlideGridSet&&(c.style.height="",c.style[i.getDirectionLabel("margin-top")]="")}))},updateSlide:(c,d,x)=>{const{slidesPerGroup:m}=i.params,h=p(),{rows:n,fill:u}=i.params.grid,g=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:x.length;let f,b,S;if(u==="row"&&m>1){const y=Math.floor(c/(m*n)),E=c-n*m*y,P=y===0?m:Math.min(Math.ceil((g-y*n*m)/n),m);S=Math.floor(E/P),b=E-S*P+y*m,f=b+S*e/n,d.style.order=f}else u==="column"?(b=Math.floor(c/n),S=c-b*n,(b>s||b===s&&S===n-1)&&(S+=1,S>=n&&(S=0,b+=1))):(S=Math.floor(c/t),b=c-S*t);d.row=S,d.column=b,d.style.height=`calc((100% - ${(n-1)*h}px) / ${n})`,d.style[i.getDirectionLabel("margin-top")]=S!==0?h&&`${h}px`:"",d.swiperSlideGridSet=!0},updateWrapperSize:(c,d)=>{const{centeredSlides:x,roundLengths:m}=i.params,h=p(),{rows:n}=i.params.grid;if(i.virtualSize=(c+h)*e,i.virtualSize=Math.ceil(i.virtualSize/n)-h,i.params.cssMode||(i.wrapperEl.style[i.getDirectionLabel("width")]=`${i.virtualSize+h}px`),x){const u=[];for(let g=0;g<d.length;g+=1){let f=d[g];m&&(f=Math.floor(f)),d[g]<i.virtualSize+d[0]&&u.push(f)}d.splice(0,d.length),d.push(...u)}}}}function G2(l){const e=this,{params:t,slidesEl:s}=e;t.loop&&e.loopDestroy();const a=i=>{if(typeof i=="string"){const o=document.createElement("div");e1(o,i),s.append(o.children[0]),e1(o,"")}else s.append(i)};if(typeof l=="object"&&"length"in l)for(let i=0;i<l.length;i+=1)l[i]&&a(l[i]);else a(l);e.recalcSlides(),t.loop&&e.loopCreate(),t.observer&&!e.isElement||e.update()}function _2(l){const e=this,{params:t,activeIndex:s,slidesEl:a}=e;t.loop&&e.loopDestroy();let i=s+1;const o=r=>{if(typeof r=="string"){const p=document.createElement("div");e1(p,r),a.prepend(p.children[0]),e1(p,"")}else a.prepend(r)};if(typeof l=="object"&&"length"in l){for(let r=0;r<l.length;r+=1)l[r]&&o(l[r]);i=s+l.length}else o(l);e.recalcSlides(),t.loop&&e.loopCreate(),t.observer&&!e.isElement||e.update(),e.slideTo(i,0,!1)}function H2(l,e){const t=this,{params:s,activeIndex:a,slidesEl:i}=t;let o=a;s.loop&&(o-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const r=t.slides.length;if(l<=0)return void t.prependSlide(e);if(l>=r)return void t.appendSlide(e);let p=o>l?o+1:o;const c=[];for(let d=r-1;d>=l;d-=1){const x=t.slides[d];x.remove(),c.unshift(x)}if(typeof e=="object"&&"length"in e){for(let d=0;d<e.length;d+=1)e[d]&&i.append(e[d]);p=o>l?o+e.length:o}else i.append(e);for(let d=0;d<c.length;d+=1)i.append(c[d]);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(p+t.loopedSlides,0,!1):t.slideTo(p,0,!1)}function R2(l){const e=this,{params:t,activeIndex:s}=e;let a=s;t.loop&&(a-=e.loopedSlides,e.loopDestroy());let i,o=a;if(typeof l=="object"&&"length"in l){for(let r=0;r<l.length;r+=1)i=l[r],e.slides[i]&&e.slides[i].remove(),i<o&&(o-=1);o=Math.max(o,0)}else i=l,e.slides[i]&&e.slides[i].remove(),i<o&&(o-=1),o=Math.max(o,0);e.recalcSlides(),t.loop&&e.loopCreate(),t.observer&&!e.isElement||e.update(),t.loop?e.slideTo(o+e.loopedSlides,0,!1):e.slideTo(o,0,!1)}function q2(){const l=this,e=[];for(let t=0;t<l.slides.length;t+=1)e.push(t);l.removeSlide(e)}function V2(l){let{swiper:e}=l;Object.assign(e,{appendSlide:G2.bind(e),prependSlide:_2.bind(e),addSlide:H2.bind(e),removeSlide:R2.bind(e),removeAllSlides:q2.bind(e)})}function x1(l){const{effect:e,swiper:t,on:s,setTranslate:a,setTransition:i,overwriteParams:o,perspective:r,recreateShadows:p,getEffectParams:c}=l;let d;s("beforeInit",(()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),r&&r()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const x=o?o():{};Object.assign(t.params,x),Object.assign(t.originalParams,x)})),s("setTranslate _virtualUpdated",(()=>{t.params.effect===e&&a()})),s("setTransition",((x,m)=>{t.params.effect===e&&i(m)})),s("transitionEnd",(()=>{if(t.params.effect===e&&p){if(!c||!c().slideShadows)return;t.slides.forEach((x=>{x.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((m=>m.remove()))})),p()}})),s("virtualUpdate",(()=>{t.params.effect===e&&(t.slides.length||(d=!0),requestAnimationFrame((()=>{d&&t.slides&&t.slides.length&&(a(),d=!1)})))}))}function w1(l,e){const t=c1(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function T1(l){let{swiper:e,duration:t,transformElements:s,allSlides:a}=l;const{activeIndex:i}=e;if(e.params.virtualTranslate&&t!==0){let o,r=!1;o=a?s:s.filter((p=>{const c=p.classList.contains("swiper-slide-transform")?(d=>d.parentElement?d.parentElement:e.slides.find((x=>x.shadowRoot&&x.shadowRoot===d.parentNode)))(p):p;return e.getSlideIndex(c)===i})),o.forEach((p=>{f1(p,(()=>{if(r||!e||e.destroyed)return;r=!0,e.animating=!1;const c=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(c)}))}))}}function X2(l){let{swiper:e,extendParams:t,on:s}=l;t({fadeEffect:{crossFade:!1}}),x1({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:a}=e,i=e.params.fadeEffect;for(let o=0;o<a.length;o+=1){const r=e.slides[o];let p=-r.swiperSlideOffset;e.params.virtualTranslate||(p-=e.translate);let c=0;e.isHorizontal()||(c=p,p=0);const d=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(r.progress),0):1+Math.min(Math.max(r.progress,-1),0),x=w1(i,r);x.style.opacity=d,x.style.transform=`translate3d(${p}px, ${c}px, 0px)`}},setTransition:a=>{const i=e.slides.map((o=>c1(o)));i.forEach((o=>{o.style.transitionDuration=`${a}ms`})),T1({swiper:e,duration:a,transformElements:i,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function N2(l){let{swiper:e,extendParams:t,on:s}=l;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const a=(i,o,r)=>{let p=r?i.querySelector(".swiper-slide-shadow-left"):i.querySelector(".swiper-slide-shadow-top"),c=r?i.querySelector(".swiper-slide-shadow-right"):i.querySelector(".swiper-slide-shadow-bottom");p||(p=U("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(r?"left":"top")).split(" ")),i.append(p)),c||(c=U("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(r?"right":"bottom")).split(" ")),i.append(c)),p&&(p.style.opacity=Math.max(-o,0)),c&&(c.style.opacity=Math.max(o,0))};x1({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{el:i,wrapperEl:o,slides:r,width:p,height:c,rtlTranslate:d,size:x,browser:m}=e,h=C1(e),n=e.params.cubeEffect,u=e.isHorizontal(),g=e.virtual&&e.params.virtual.enabled;let f,b=0;n.shadow&&(u?(f=e.wrapperEl.querySelector(".swiper-cube-shadow"),f||(f=U("div","swiper-cube-shadow"),e.wrapperEl.append(f)),f.style.height=`${p}px`):(f=i.querySelector(".swiper-cube-shadow"),f||(f=U("div","swiper-cube-shadow"),i.append(f))));for(let y=0;y<r.length;y+=1){const E=r[y];let P=y;g&&(P=parseInt(E.getAttribute("data-swiper-slide-index"),10));let z=90*P,C=Math.floor(z/360);d&&(z=-z,C=Math.floor(-z/360));const L=Math.max(Math.min(E.progress,1),-1);let w=0,v=0,k=0;P%4==0?(w=4*-C*x,k=0):(P-1)%4==0?(w=0,k=4*-C*x):(P-2)%4==0?(w=x+4*C*x,k=x):(P-3)%4==0&&(w=-x,k=3*x+4*x*C),d&&(w=-w),u||(v=w,w=0);const M=`rotateX(${h(u?0:-z)}deg) rotateY(${h(u?z:0)}deg) translate3d(${w}px, ${v}px, ${k}px)`;L<=1&&L>-1&&(b=90*P+90*L,d&&(b=90*-P-90*L)),E.style.transform=M,n.slideShadows&&a(E,L,u)}if(o.style.transformOrigin=`50% 50% -${x/2}px`,o.style["-webkit-transform-origin"]=`50% 50% -${x/2}px`,n.shadow)if(u)f.style.transform=`translate3d(0px, ${p/2+n.shadowOffset}px, ${-p/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${n.shadowScale})`;else{const y=Math.abs(b)-90*Math.floor(Math.abs(b)/90),E=1.5-(Math.sin(2*y*Math.PI/360)/2+Math.cos(2*y*Math.PI/360)/2),P=n.shadowScale,z=n.shadowScale/E,C=n.shadowOffset;f.style.transform=`scale3d(${P}, 1, ${z}) translate3d(0px, ${c/2+C}px, ${-c/2/z}px) rotateX(-89.99deg)`}const S=(m.isSafari||m.isWebView)&&m.needPerspectiveFix?-x/2:0;o.style.transform=`translate3d(0px,0,${S}px) rotateX(${h(e.isHorizontal()?0:b)}deg) rotateY(${h(e.isHorizontal()?-b:0)}deg)`,o.style.setProperty("--swiper-cube-translate-z",`${S}px`)},setTransition:i=>{const{el:o,slides:r}=e;if(r.forEach((p=>{p.style.transitionDuration=`${i}ms`,p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((c=>{c.style.transitionDuration=`${i}ms`}))})),e.params.cubeEffect.shadow&&!e.isHorizontal()){const p=o.querySelector(".swiper-cube-shadow");p&&(p.style.transitionDuration=`${i}ms`)}},recreateShadows:()=>{const i=e.isHorizontal();e.slides.forEach((o=>{const r=Math.max(Math.min(o.progress,1),-1);a(o,r,i)}))},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function u1(l,e,t){const s=`swiper-slide-shadow${t?`-${t}`:""}${l?` swiper-slide-shadow-${l}`:""}`,a=c1(e);let i=a.querySelector(`.${s.split(" ").join(".")}`);return i||(i=U("div",s.split(" ")),a.append(i)),i}function Y2(l){let{swiper:e,extendParams:t,on:s}=l;t({flipEffect:{slideShadows:!0,limitRotation:!0}});const a=(i,o)=>{let r=e.isHorizontal()?i.querySelector(".swiper-slide-shadow-left"):i.querySelector(".swiper-slide-shadow-top"),p=e.isHorizontal()?i.querySelector(".swiper-slide-shadow-right"):i.querySelector(".swiper-slide-shadow-bottom");r||(r=u1("flip",i,e.isHorizontal()?"left":"top")),p||(p=u1("flip",i,e.isHorizontal()?"right":"bottom")),r&&(r.style.opacity=Math.max(-o,0)),p&&(p.style.opacity=Math.max(o,0))};x1({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:i,rtlTranslate:o}=e,r=e.params.flipEffect,p=C1(e);for(let c=0;c<i.length;c+=1){const d=i[c];let x=d.progress;e.params.flipEffect.limitRotation&&(x=Math.max(Math.min(d.progress,1),-1));const m=d.swiperSlideOffset;let h=-180*x,n=0,u=e.params.cssMode?-m-e.translate:-m,g=0;e.isHorizontal()?o&&(h=-h):(g=u,u=0,n=-h,h=0),d.style.zIndex=-Math.abs(Math.round(x))+i.length,r.slideShadows&&a(d,x);const f=`translate3d(${u}px, ${g}px, 0px) rotateX(${p(n)}deg) rotateY(${p(h)}deg)`;w1(r,d).style.transform=f}},setTransition:i=>{const o=e.slides.map((r=>c1(r)));o.forEach((r=>{r.style.transitionDuration=`${i}ms`,r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((p=>{p.style.transitionDuration=`${i}ms`}))})),T1({swiper:e,duration:i,transformElements:o})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach((i=>{let o=i.progress;e.params.flipEffect.limitRotation&&(o=Math.max(Math.min(i.progress,1),-1)),a(i,o)}))},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function F2(l){let{swiper:e,extendParams:t,on:s}=l;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),x1({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:a,height:i,slides:o,slidesSizesGrid:r}=e,p=e.params.coverflowEffect,c=e.isHorizontal(),d=e.translate,x=c?a/2-d:i/2-d,m=c?p.rotate:-p.rotate,h=p.depth,n=C1(e);for(let u=0,g=o.length;u<g;u+=1){const f=o[u],b=r[u],S=(x-f.swiperSlideOffset-b/2)/b,y=typeof p.modifier=="function"?p.modifier(S):S*p.modifier;let E=c?m*y:0,P=c?0:m*y,z=-h*Math.abs(y),C=p.stretch;typeof C=="string"&&C.indexOf("%")!==-1&&(C=parseFloat(p.stretch)/100*b);let L=c?0:C*y,w=c?C*y:0,v=1-(1-p.scale)*Math.abs(y);Math.abs(w)<.001&&(w=0),Math.abs(L)<.001&&(L=0),Math.abs(z)<.001&&(z=0),Math.abs(E)<.001&&(E=0),Math.abs(P)<.001&&(P=0),Math.abs(v)<.001&&(v=0);const k=`translate3d(${w}px,${L}px,${z}px)  rotateX(${n(P)}deg) rotateY(${n(E)}deg) scale(${v})`;if(w1(p,f).style.transform=k,f.style.zIndex=1-Math.abs(Math.round(y)),p.slideShadows){let M=c?f.querySelector(".swiper-slide-shadow-left"):f.querySelector(".swiper-slide-shadow-top"),D=c?f.querySelector(".swiper-slide-shadow-right"):f.querySelector(".swiper-slide-shadow-bottom");M||(M=u1("coverflow",f,c?"left":"top")),D||(D=u1("coverflow",f,c?"right":"bottom")),M&&(M.style.opacity=y>0?y:0),D&&(D.style.opacity=-y>0?-y:0)}}},setTransition:a=>{e.slides.map((i=>c1(i))).forEach((i=>{i.style.transitionDuration=`${a}ms`,i.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((o=>{o.style.transitionDuration=`${a}ms`}))}))},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function W2(l){let{swiper:e,extendParams:t,on:s}=l;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=i=>typeof i=="string"?i:`${i}px`;x1({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:i,wrapperEl:o,slidesSizesGrid:r}=e,p=e.params.creativeEffect,{progressMultiplier:c}=p,d=e.params.centeredSlides,x=C1(e);if(d){const m=r[0]/2-e.params.slidesOffsetBefore||0;o.style.transform=`translateX(calc(50% - ${m}px))`}for(let m=0;m<i.length;m+=1){const h=i[m],n=h.progress,u=Math.min(Math.max(h.progress,-p.limitProgress),p.limitProgress);let g=u;d||(g=Math.min(Math.max(h.originalProgress,-p.limitProgress),p.limitProgress));const f=h.swiperSlideOffset,b=[e.params.cssMode?-f-e.translate:-f,0,0],S=[0,0,0];let y=!1;e.isHorizontal()||(b[1]=b[0],b[0]=0);let E={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};u<0?(E=p.next,y=!0):u>0&&(E=p.prev,y=!0),b.forEach(((k,M)=>{b[M]=`calc(${k}px + (${a(E.translate[M])} * ${Math.abs(u*c)}))`})),S.forEach(((k,M)=>{let D=E.rotate[M]*Math.abs(u*c);S[M]=D})),h.style.zIndex=-Math.abs(Math.round(n))+i.length;const P=b.join(", "),z=`rotateX(${x(S[0])}deg) rotateY(${x(S[1])}deg) rotateZ(${x(S[2])}deg)`,C=g<0?`scale(${1+(1-E.scale)*g*c})`:`scale(${1-(1-E.scale)*g*c})`,L=g<0?1+(1-E.opacity)*g*c:1-(1-E.opacity)*g*c,w=`translate3d(${P}) ${z} ${C}`;if(y&&E.shadow||!y){let k=h.querySelector(".swiper-slide-shadow");if(!k&&E.shadow&&(k=u1("creative",h)),k){const M=p.shadowPerProgress?u*(1/p.limitProgress):u;k.style.opacity=Math.min(Math.max(Math.abs(M),0),1)}}const v=w1(p,h);v.style.transform=w,v.style.opacity=L,E.origin&&(v.style.transformOrigin=E.origin)}},setTransition:i=>{const o=e.slides.map((r=>c1(r)));o.forEach((r=>{r.style.transitionDuration=`${i}ms`,r.querySelectorAll(".swiper-slide-shadow").forEach((p=>{p.style.transitionDuration=`${i}ms`}))})),T1({swiper:e,duration:i,transformElements:o,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function U2(l){let{swiper:e,extendParams:t,on:s}=l;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),x1({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:a,activeIndex:i,rtlTranslate:o}=e,r=e.params.cardsEffect,{startTranslate:p,isTouched:c}=e.touchEventsData,d=o?-e.translate:e.translate;for(let x=0;x<a.length;x+=1){const m=a[x],h=m.progress,n=Math.min(Math.max(h,-4),4);let u=m.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(u-=a[0].swiperSlideOffset);let g=e.params.cssMode?-u-e.translate:-u,f=0;const b=-100*Math.abs(n);let S=1,y=-r.perSlideRotate*n,E=r.perSlideOffset-.75*Math.abs(n);const P=e.virtual&&e.params.virtual.enabled?e.virtual.from+x:x,z=(P===i||P===i-1)&&n>0&&n<1&&(c||e.params.cssMode)&&d<p,C=(P===i||P===i+1)&&n<0&&n>-1&&(c||e.params.cssMode)&&d>p;if(z||C){const v=(1-Math.abs((Math.abs(n)-.5)/.5))**.5;y+=-28*n*v,S+=-.5*v,E+=96*v,f=-25*v*Math.abs(n)+"%"}if(g=n<0?`calc(${g}px ${o?"-":"+"} (${E*Math.abs(n)}%))`:n>0?`calc(${g}px ${o?"-":"+"} (-${E*Math.abs(n)}%))`:`${g}px`,!e.isHorizontal()){const v=f;f=g,g=v}const L=n<0?""+(1+(1-S)*n):""+(1-(1-S)*n),w=`
        translate3d(${g}, ${f}, ${b}px)
        rotateZ(${r.rotate?o?-y:y:0}deg)
        scale(${L})
      `;if(r.slideShadows){let v=m.querySelector(".swiper-slide-shadow");v||(v=u1("cards",m)),v&&(v.style.opacity=Math.min(Math.max((Math.abs(n)-.5)/.5,0),1))}m.style.zIndex=-Math.abs(Math.round(h))+a.length,w1(r,m).style.transform=w}},setTransition:a=>{const i=e.slides.map((o=>c1(o)));i.forEach((o=>{o.style.transitionDuration=`${a}ms`,o.querySelectorAll(".swiper-slide-shadow").forEach((r=>{r.style.transitionDuration=`${a}ms`}))})),T1({swiper:e,duration:a,transformElements:i})},perspective:()=>!0,overwriteParams:()=>({_loopSwapReset:!1,watchSlidesProgress:!0,loopAdditionalSlides:e.params.cardsEffect.rotate?3:2,centeredSlides:!0,virtualTranslate:!e.params.cssMode})})}const K2=[k2,S2,E2,M2,C2,T2,z2,L2,P2,A2,D2,j2,I2,$2,B2,O2,V2,X2,N2,Y2,F2,W2,U2];V.use(K2);let Z2=async()=>{let t=(await(await fetch("https://saamirdamadi1.github.io/api-for-site-1/db.json")).json()).map(s=>`
            <div
            class="rounded-[10px] relative dark:bg-transparent inline-block p-5 border-1 border-[#817c7c] mt-5"
          >
            <div class=" cursor-pointer gap-3 rounded-[10px] text-[15px] bg-white dark:bg-transparent flex flex-col justify-center">
              <img
                src="${s.img}"
                class="w-[150px] rounded-[10px] h-[150px] mx-auto object-cover"
                alt="${s.img}"
              />
              <div class="w-full h-auto flex justify-center items-center">
                <h1
                  class="mt-3 text-center"
                  style="
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  "
                >
                  ${s.name}
                </h1>
              </div>
                <div class="flex flex-row-reverse items-center mx-auto gap-3 text-black text-3xl">
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] dark:text-white flex">
                        ${s.price}
                        <svg fill="#000000" class="dark:fill-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-[20px] h-[20px]" viewBox="0 0 537.607 537.607" xml:space="preserve">
                          <g>
                            <g>
                              <path d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
			c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
			c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
			c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
			c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
			c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
			c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
			c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
			c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
			c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"></path>
                              <path d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
			l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
			c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
			c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
			l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
			C325.972,397.667,326.415,396.745,326.663,395.782z"></path>
                              <path d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
			c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
			c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
			c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
			l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
			c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
			c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
			c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
			c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
			l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
			C204.576,127.492,209.139,118.088,207.951,109.154z"></path>
                              <path d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
			c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
			c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
			c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
			c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
			c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
			c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
			C538.15,304.98,520.43,284.062,519.709,283.224z"></path>
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-red-400">
                        ${s.discount}
                      </p>
                    </div>
                    <div class="w-10 h-5 bg-red-400 rounded-2xl text-white text-[13px] justify-center items-center flex">
                      ۱%
                    </div>
                  </div>
              <div class="w-full h-auto">
                <h4 class="mt-6 text-center">${s.cat}</h4>
                <a
                  href="https://bpm.shaparak.ir/pgwchannel/startpay.mellat"
                  class="rounded-2xl right-5 w-[50px] h-[30px] block leading-[30px] text-center absolute bottom-4 bg-green-400 dark:bg-gray-700"
                >
                  خرید
                </a>
              </div>
            </div>
          </div>
    `);document.querySelector(".card").insertAdjacentHTML("afterbegin",t.join(""))},J2=async()=>{let t=(await(await fetch("https://saamirdamadi1.github.io/api-for-site-3/db.json")).json()).map(s=>`
            <div
            class="rounded-[10px] relative dark:bg-transparent inline-block p-5 border-1 border-[#817c7c] mt-5"
          >
            <div class=" cursor-pointer gap-3 rounded-[10px] text-[15px] bg-white dark:bg-transparent flex flex-col justify-center">
              <img
                src="${s.img}"
                class="w-[150px] rounded-[10px] h-[150px] mx-auto object-cover"
                alt="${s.img}"
              />
              <div class="w-full h-auto flex justify-center items-center">
                <h1
                  class="mt-3 text-center"
                  style="
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  "
                >
                  ${s.name}
                </h1>
              </div>
                <div class="flex flex-row-reverse items-center mx-auto gap-3 text-black text-3xl">
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] dark:text-white flex">
                        ${s.price}
                        <svg fill="#000000" class="dark:fill-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-[20px] h-[20px]" viewBox="0 0 537.607 537.607" xml:space="preserve">
                          <g>
                            <g>
                              <path d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
			c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
			c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
			c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
			c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
			c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
			c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
			c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
			c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
			c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"></path>
                              <path d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
			l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
			c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
			c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
			l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
			C325.972,397.667,326.415,396.745,326.663,395.782z"></path>
                              <path d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
			c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
			c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
			c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
			l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
			c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
			c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
			c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
			c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
			l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
			C204.576,127.492,209.139,118.088,207.951,109.154z"></path>
                              <path d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
			c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
			c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
			c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
			c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
			c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
			c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
			C538.15,304.98,520.43,284.062,519.709,283.224z"></path>
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-red-400">
                        ${s.discount}
                      </p>
                    </div>
                    <div class="w-10 h-5 bg-red-400 rounded-2xl text-white text-[13px] justify-center items-center flex">
                      ۱%
                    </div>
                  </div>
              <div class="w-full h-auto">
                <h4 class="mt-6 text-center">${s.cat}</h4>
                <a
                  href="https://bpm.shaparak.ir/pgwchannel/startpay.mellat"
                  class="rounded-2xl right-5 w-[50px] h-[30px] block leading-[30px] text-center absolute bottom-4 bg-green-400 dark:bg-gray-700"
                >
                  خرید
                </a>
              </div>
            </div>
          </div>
    `);document.querySelector(".card2").insertAdjacentHTML("afterbegin",t.join(""))},Q2=async()=>{let t=(await(await fetch("https://saamirdamadi1.github.io/api-for-site-2/db.json")).json()).map(s=>`
            <div
            class="rounded-[10px] relative dark:bg-transparent inline-block p-5 border-1 border-[#817c7c] mt-5"
          >
            <div class=" cursor-pointer gap-3 rounded-[10px] text-[15px] bg-white dark:bg-transparent flex flex-col justify-center">
              <img
                src="${s.img}"
                class="w-[150px] rounded-[10px] h-[150px] mx-auto object-cover"
                alt="${s.img}"
              />
              <div class="w-full h-auto flex justify-center items-center">
                <h1
                  class="mt-3 text-center"
                  style="
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  "
                >
                  ${s.name}
                </h1>
              </div>
                <div class="flex flex-row-reverse items-center mx-auto gap-3 text-black text-3xl">
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] dark:text-white flex">
                        ${s.price}
                        <svg fill="#000000" class="dark:fill-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-[20px] h-[20px]" viewBox="0 0 537.607 537.607" xml:space="preserve">
                          <g>
                            <g>
                              <path d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
			c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
			c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
			c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
			c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
			c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
			c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
			c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
			c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
			c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"></path>
                              <path d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
			l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
			c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
			c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
			l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
			C325.972,397.667,326.415,396.745,326.663,395.782z"></path>
                              <path d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
			c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
			c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
			c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
			l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
			c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
			c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
			c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
			c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
			l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
			C204.576,127.492,209.139,118.088,207.951,109.154z"></path>
                              <path d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
			c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
			c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
			c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
			c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
			c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
			c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
			C538.15,304.98,520.43,284.062,519.709,283.224z"></path>
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-red-400">
                        ${s.discount}
                      </p>
                    </div>
                    <div class="w-10 h-5 bg-red-400 rounded-2xl text-white text-[13px] justify-center items-center flex">
                      ۱%
                    </div>
                  </div>
              <div class="w-full h-auto">
                <h4 class="mt-6 text-center">${s.cat}</h4>
                <a
                  href="https://bpm.shaparak.ir/pgwchannel/startpay.mellat"
                  class="rounded-2xl right-5 w-[50px] h-[30px] block leading-[30px] text-center absolute bottom-4 bg-green-400 dark:bg-gray-700"
                >
                  خرید
                </a>
              </div>
            </div>
          </div>
    `);document.querySelector(".card3").insertAdjacentHTML("afterbegin",t.join(""))},e0=(...l)=>{l.forEach(e=>{document.querySelector(".root").insertAdjacentHTML("beforeend",e)})},t0=`
<div class="loader"><div class="loader1"></div></div>
`,s0=()=>{document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{document.querySelector(".loader").remove(),document.querySelector("body").classList.remove("overflow-hidden"),document.querySelector("body").classList.add("overflow-auto")},5e3)})},l0=`
    <!--start-main-->
     <div class="w-full mt-5">
      <div class="flex md:flex-row flex-col">
      <img src="./assets/images/digital-img-middel-2.png" alt="hous-img-middle" class="ed:h-[400px] h-[250px] rounded-[10px] mx-auto mb-12 mt-[20px] bg-contain">
      <img src="./assets/images/digital-img-middel.png" alt="hous-img-middle" class="ed:h-[400px] h-[250px] rounded-[10px] mx-auto mb-12 mt-[20px] bg-contain">
      </div>
     <div class="digital2 w-full flex flex-col">
        <div
          class="w-[95%] ed:w-[97%] py-4 redSlider bg-[linear-gradient(451deg,#e92f54,#ee384e 41.68%,#eb3241)]  flex flex-col jd:flex-row items-center rounded-[10px] mx-auto"
        >
          <div class="w-[240px] h-[350px] flex jd:mt-0 mt-3 flex-col rounded-[10px] mx-auto">
            <p class="text-white text-2xl mb-2">لپ تاپ:</p>
            <div class="swiper cardSwiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-1.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    لپ تاپ 15.6 اینچی ام اس آی مدل Katana 15 B13UDXK-i7 13620H
                    16GB 1SSD RTX3050
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-2.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    لپ تاپ 15.6 اینچی لنوو مدل V15 G4 ABP-R7 7730U-16GB
                    DDR4-512GB SSD-TN
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-3.jpg"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    لپ تاپ 15.6 اینچی ایسوس مدل Expertbook B1
                    B1503CVA-I716512G7D-i7 1355U-16GB DDR5-512GB
                    SSD-TN-Fingerprint-Backlit
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-4.jpg"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    لپ تاپ 14 اینچی ایسوس مدل Zenbook 14 UX3405CA-U7512-Core
                    Ultra 7 255H-16GB LPDDR5X 8533MHz-512GB SSD-OLED
                    Touch-Backlit-Fingerprint-W
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-5.jpg"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    لپ تاپ 13.4 اینچی ایسوس مدل ROG Flow X13
                    GV302XA-X13.R9512-R9 7940HS 16GB 512SSD
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-6.jpg"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Gaming 3 15ACH6-R5
                    5500H-16GB DDR4-512GB SSD-RTX2050-FHD
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[240px] h-[350px] flex flex-col jd:mt-0 mt-3 rounded-[10px] mx-auto">
            <p class="text-white text-2xl mb-2">موبایل:</p>
            <div class="swiper cardSwiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide dark:bg-gray-600 cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slide-2-1.jpg"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    گوشی موبایل سامسونگ مدل Galaxy Z Fold 7 دو سیم‌کارت ظرفیت 1
                    ترابایت و رم 16 گیگابایت
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slide-2-2.jpg"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    گوشی موبایل شیائومی مدل Poco X7 Pro دو سیم کارت ظرفیت 512
                    گیگابایت و رم 12 گیگابایت - گلوبال
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slide-2-3.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    گوشی موبایل هانوفر مدل 5320 ظرفیت 128 مگابایت
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slide-2-4.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    گوشی موبایل هانوفر مدل 5720 ظرفیت 128 مگابایت
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slide-2-5.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    گوشی موبایل هانوفر مدل 8000N ظرفیت 32 مگابایت
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slide-2-6.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    گوشی موبایل هانوفر مدل 5300 2G دو سیم‌کارت
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[240px] h-[350px] flex flex-col rounded-[10px] jd:mt-0 mt-3 mx-auto">
            <p class="text-white text-2xl mb-2">سایر:</p>
            <div class="swiper cardSwiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-3-1.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    هدفون بلوتوثی رد استون مدل D9 OWS
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-3-3.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    هدفون بلوتوثی لیتو کد LB010 2024
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-3-4.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    کاور مدل پینترست مناسب برای گوشی موبایل اپل iPhone 13 Pro
                    max مجموعه 99 عددی
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-3-5.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    کاور اسپیگن مدل Ultra Hybrid مناسب برای گوشی موبایل اپل
                    iphone 15 pro max
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide dark:bg-gray-600 dark:text-white cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center"
                >
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider-3-6.jpg"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    هدفون مخصوص بازی بلوتوثی لنوو مدل RZA EARBUDS GLOBAL LP1S
                    POWER FULL
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-2 w-[95%] ed:w-[97%] grid-cols-2 items-center justify-items-center 
        grid-row ed:grid-cols-4 mx-auto h-[242px] mt-2">
          <img
            src="./assets/images/img-in-between-1.webp"
            alt="img-in-between"
            class="h-full object-cover rounded-[10px] cursor-pointer"
          />
          <img
            src="./assets/images/img-in-between-2.webp"
            alt="img-in-between"
            class=" h-full object-cover rounded-[10px] cursor-pointer"
          />
          <img
            src="./assets/images/img-in-between-3.webp"
            alt="img-in-between"
            class=" h-full object-cover rounded-[10px] ed:block hidden cursor-pointer"
          />
          <img
            src="./assets/images/img-in-between-4.webp"
            alt="img-in-between"
            class=" h-full object-cover rounded-[10px] ed:block hidden cursor-pointer"
          />
        </div>
        <div
          class="card grid gap-2 ad:mt-12 w-[95%] ed:w-[97%] grid-cols-1 md:grid-cols-2
        grid-col ed:grid-cols-4 mx-auto justify-center"
        ></div>
         <div class="flex flex-col md:flex-row items-center">
          <div class="w-[300px] h-[300px] mx-auto mt-[70px]">
            <div class="swiper brandsSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide p-[40px]">
                  <div class="w-[310px] h-[310px]">
                    <img
                      src="https://marketplace.s3.ir-thr-at1.arvanstorage.ir/brand/2024/5/0vG7O8M.png"
                      alt="sony"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
                <div class="swiper-slide p-[40px]">
                  <div class="w-[510px] h-[510px]">
                    <img
                      src="https://cdn.freebiesupply.com/logos/large/2x/asus-6630-logo-black-and-white.png"
                      alt="ASUS"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
                <div class="swiper-slide p-[40px]">
                  <div class="w-[510px] h-[510px]">
                    <img
                      src="https://empart.ir/wp-content/uploads/2024/02/lenovo.png"
                      alt="lenovo"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
                <div class="swiper-slide p-[40px]">
                  <div class="w-[210px] h-[210px]">
                    <img
                      src="https://fs.noorgram.ir/xen/2022/03/3320_0fbd4aa3fb265eb5d6b8e586cb8255c2.png"
                      alt="huawei"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="w-[300px] h-[300px] mx-auto mt-[70px]">
            <div class="swiper brandsSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide p-[40px]">
                  <div class="w-[510px] h-[510px]">
                    <img
                      src="https://koochebazaar.com/uploads/brands/G3buvYoL4oV2NkuGjCSuZ0izjV63FLtUoqUkLFn7.png"
                      alt="ADATA"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
                <div class="swiper-slide p-[40px]">
                  <div class="w-[510px] h-[510px]">
                    <img
                      src="https://parspng.com/wp-content/uploads/2022/06/samsungpng.parspng.com_.png"
                      alt="samsung"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
                <div class="swiper-slide p-[40px]">
                  <div class="w-[450px] h-[450px]">
                    <img
                      src="https://logoyab.com/wp-content/uploads/2024/06/LG-logo.png"
                      alt="olg"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
                <div class="swiper-slide p-[40px]">
                  <div class="w-[510px] h-[510px]">
                    <img
                      src="https://cdnfa.com/source-computer/f765/brand/22674_xiaomi.png"
                      alt="xiaomi"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
                <div class="swiper-slide p-[40px]">
                  <div class="w-[510px] h-[510px]">
                    <img
                      src="https://iranxvision.com/wp-content/uploads/2021/01/%D8%A8%D8%B1%D9%86%D8%AF-%D8%A7%DB%8C%DA%A9%D8%B3-%D9%88%DB%8C%DA%98%D9%86-%D9%85%D8%AD%D8%B5%D9%88%D9%84-%D8%B4%D8%B1%DA%A9%D8%AA-%D9%85%D8%A7%D8%AF%DB%8C%D8%B1%D8%A7%D9%86.png"
                      alt="xvision"
                      class="w-[510px] h-[510px]"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>      
      <div class="flex md:flex-row flex-col mt-10">
        <img src="./assets/images/hous-img-middle-2.png" alt="hous-img-middle" class="ed:h-[400px] h-[250px] rounded-[10px] mx-auto mb-12 mt-[20px] bg-contain">
        <img src="./assets/images/hous-img-middle.png" alt="hous-img-middle" class="ed:h-[400px] h-[250px] rounded-[10px] mx-auto mb-12 mt-[20px] bg-contain">
      </div>
      <div class="Household2 gap-5 w-full flex flex-col">
        <div
          class="w-[97%] py-4 redSlider bg-[linear-gradient(451deg,#e92f54,#ee384e 41.68%,#eb3241)] dark:bg-gray-900 flex items-center rounded-[10px] mx-auto"
        >
        <div class="swiper HouseholdSwiper w-[97%] py-4 h-[200px]">
      <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide2 dark:bg-gray-600 cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center ">
                     <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider2-1.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    پنکه برفاب مدل SF2020
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide swiper-slide2 dark:bg-gray-600 cursor-pointer gap-3 text-[15px] bg-white flex flex-col justify-center">
                          <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider2-2.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    یخچال فریزر دوقلو 34 فوت هیمالیا مدل NR440ip-HFZN337
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide swiper-slide2 cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center">
                          <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider2-3.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    ماشین لباسشویی 9 کیلوگرم اتوماتیک پاکشوما مدل BWF ۴۰۱۲۷ i
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide swiper-slide2 cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center">
                          <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider2-4.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    اتو بخار گوسونیک مدل GSI-294
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide swiper-slide2 cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center">
               <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider2-5.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    ماشین ظرفشویی 14 نفره دوو مدل DW-200S
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide swiper-slide2 cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center">
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider2-6.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    ماشین لباسشویی 5 کیلوگرم اتوماتیک آبسال مدل WRE5407
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide swiper-slide2 cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center">
                  <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider2-7.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                   اتوبخار سایا مدل Rhenium
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide swiper-slide2 cursor-pointer dark:bg-gray-600 gap-3 text-[15px] bg-white flex flex-col justify-center">
                 <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider2-8.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    یخچال و فریزر 30 فوت امرسان مدل FN15D-RH15D
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
    </div>
      </div>
        </div>
        <div class="grid gap-2 h-auto w-[95%] ed:w-[97%] grid-cols-2 items-center justify-items-center 
        grid-row ed:grid-cols-4 mx-auto mt-2"> 
          <img
          src="./assets/images/img-in-between-1-2.webp"
          alt="img-in-between"
          class="h-full object-cover rounded-[10px] cursor-pointer"
          />
          <img
          src="./assets/images/img-in-between-2-2.webp"
          alt="img-in-between"
          class="h-full object-cover rounded-[10px] cursor-pointer"
          />
          <img
          src="./assets/images/img-in-between-3-2.webp"
          alt="img-in-between"
          class="h-full object-cover rounded-[10px] cursor-pointer"
          />
          <img
          src="./assets/images/img-in-between-4-2.webp"
          alt="img-in-between"
          class="h-full object-cover rounded-[10px] cursor-pointer"
          />
        </div>
        <div
        class="card2 grid gap-2 ad:mt-18 w-[95%] ed:w-[97%] grid-cols-1 md:grid-cols-2
        grid-col ed:grid-cols-4 mx-auto justify-center">
      </div>
        <div class="w-[97%] h-[300px] justify-between hidden ed:flex rounded-[10px] mx-auto mt-8">
          <div class="w-[600px] rounded-[10px] h-full">
            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
          <div class="swiper-slide">
           <div class="w-[400px] h-[400px]">
           <img
                      src="https://logoyab.com/wp-content/uploads/2025/06/Kenwood-Logo-1030x1030.png"
                      alt="brand"
                      class="w-[110px] h-[110px]"
                      style="object-fit: contain"
                    />
            </div>
          </div>
          <div class="swiper-slide">
           <div class="w-[350px]">
           <img
                      src="https://logoyab.com/wp-content/uploads/2025/05/Philips-Logo.png"
                      alt="brand"
                      class="w-[110px] h-[110px]"
                      style="object-fit: contain"
                    />
            </div>
          </div>
          <div class="swiper-slide">
             <div class="w-[350px]">
               <img
                      src="https://download.logo.wine/logo/AEG/AEG-Logo.wine.png"
                      alt="brand"
                      class="w-[110px] h-[110px]"
                      style="object-fit: contain"
                    />
            </div>
          </div>
          <div class="swiper-slide">
              <div class="w-[200px] h-[200px]">
           <img
                      src="https://logoyab.com/wp-content/uploads/2025/05/Snowa-Logo.png"
                      alt="brand"
                      class="w-[110px] h-[110px]"
                      style="object-fit: contain"
                    />
                  </div>
          </div>
          <div class="swiper-slide">
           <div class="w-[200px] h-[200px]">
           <img
                      src="https://1000logos.net/wp-content/uploads/2018/08/Hisense-Logo.png"
                      alt="brand"
                      class="w-[110px] h-[110px]"
                      style="object-fit: contain"
                    />
            </div>
          </div>
     </div>
    <div class="swiper-pagination"></div>
         </div>
            </div>
            <div class="w-[600px] rounded-[10px] h-full">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="w-[300px] h-[300px]">
           <img
                      src="https://marketplace.s3.ir-thr-at1.arvanstorage.ir/brand/2024/5/0vG7O8M.png"
                      alt="brand"
                      class="w-[20px] h-[20px]"
                      style="object-fit: contain"
                    />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="w-[300px] h-[300px]">
           <img
                      src="https://parspng.com/wp-content/uploads/2022/06/samsungpng.parspng.com_.png"
                      alt="brand"
                      class="w-[60px] h-[60px]"
                      style="object-fit: contain"
                    />
                    </div>
          </div>
          <div class="swiper-slide">
            <div class="w-[200px] h-[200px]">
           <img
                      src="https://logoyab.com/wp-content/uploads/2024/06/LG-logo.png"
                      alt="brand"
                      class="w-[60px] h-[600px]"
                      style="object-fit: contain"
                    />
                    </div>
          </div>
          <div class="swiper-slide">
            <div class="w-[200px] h-[200px]">
           <img
                      src="https://logoyab.com/wp-content/uploads/2025/05/Bosch-Logo.png"
                      alt="brand"
                      class="w-[110px] h-[110px]"
                      style="object-fit: contain"
                    />
                    </div>
          </div>
          <div class="swiper-slide">
            <div class="w-[200px] h-[200px]">
           <img
                      src="https://cdn.nody.ir/files/2024/07/24/nody-%D9%84%D9%88%DA%AF%D9%BE%D8%A7%DA%A9%D8%B4%D9%88%D9%85%D8%A7--1721805016.png"
                      alt="brand"
                      class="w-[110px] h-[110px]"
                      style="object-fit: contain"
                    />
                    </div>
          </div>
     </div>
    <div class="swiper-pagination"></div>
         </div>
            </div>
         </div>
        </div>
        <div class="flex md:flex-row flex-col mt-10">
          <img src="./assets/images/other-img-middel.png" alt="hous-img-middle" class="ed:h-[400px] h-[250px] rounded-[10px] mx-auto mb-12 mt-[20px] bg-contain">
          <img src="./assets/images/other-img-middel-2.png" alt="hous-img-middle" class="ed:h-[400px] h-[250px] rounded-[10px] mx-auto mb-12 mt-[20px] bg-contain">
        </div>
        <div class="other2 w-full flex flex-col">
          <div
          class="w-[97%] py-4 redSlider flex-col md:flex-row flex items-center rounded-[10px] mx-auto"
          >
          <div class="w-[242px] mx-auto h-full">
            <div class="swiper otherSwiper">
        <div class="swiper-wrapper">
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] bg-white dark:bg-gray-600 flex flex-col justify-center swiper-slide3">
                   <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-1.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    دستبند زنجیری طلا 18 عیار زنانه طلای مستجابی مدل بیزانس کد E62
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] dark:bg-gray-600 bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-2.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    موتورسیکلت برقی دارویت مدل LS01 سال 1404
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                        fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 dark:bg-gray-600 text-[15px] bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-3.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                  کلاه کاسکت راپیدو مدل فک متحرک عینکدار کد RP-950
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>   
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] dark:bg-gray-600 bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-4.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                  کیف موتورسواری نادیاهوم مدل رو پایی
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] dark:bg-gray-600 bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-5.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                  ماشین بازی کنترلی مدل دودزا طرح KMRC کد K660-3A
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] dark:bg-gray-600 bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-6.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                  مایع لباسشویی چند منظوره واش لند مدل Deep and Turbo حجم 2.4 لیتر 
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
        </div>
      </div>
      </div>
          <div class="w-[242px] mx-auto h-full">
            <div class="swiper otherSwiper">
        <div class="swiper-wrapper">
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] bg-white dark:bg-gray-600 flex flex-col justify-center swiper-slide3">
                   <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-1.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    دستبند زنجیری طلا 18 عیار زنانه طلای مستجابی مدل بیزانس کد E62
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] dark:bg-gray-600 bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-2.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                    موتورسیکلت برقی دارویت مدل LS01 سال 1404
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                        fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 dark:bg-gray-600 text-[15px] bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-3.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                  کلاه کاسکت راپیدو مدل فک متحرک عینکدار کد RP-950
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>   
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] dark:bg-gray-600 bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-4.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                  کیف موتورسواری نادیاهوم مدل رو پایی
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] dark:bg-gray-600 bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-5.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                  ماشین بازی کنترلی مدل دودزا طرح KMRC کد K660-3A
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
      <div class="swiper-slide cursor-pointer gap-3 text-[15px] dark:bg-gray-600 bg-white flex flex-col justify-center swiper-slide3">
                            <div class="w-[150px] h-[150px]">
                    <img
                      src="./assets/images/red-slider3-6.webp"
                      class="w-[30px] h-[30px] rounded-2xl object-cover"
                      alt="slide-img"
                    />
                  </div>
                  <p
                    class="text-black px-[20px] dark:text-white"
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                  >
                  مایع لباسشویی چند منظوره واش لند مدل Deep and Turbo حجم 2.4 لیتر 
                  </p>
                  <div
                    class="flex flex-row-reverse items-center gap-3 text-black text-3xl"
                  >
                    <div class="flex flex-col gap-2">
                      <p class="text-[15px] flex">
                        ۷۷,۵۹۹,۰۰۰
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-[20px] h-[20px]"
                          viewBox="0 0 537.607 537.607"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M332.698,352.096h0.018c9.877,0,19.783-0.036,29.749-0.071l3.989-0.012c11.473-0.059,23.017-0.101,34.679-0.101
            c2.767,0,5.089-2.157,5.284-4.924c5.65-81.412-0.721-115.795-25.251-136.272c-0.951-0.786-2.151-1.221-3.381-1.221l-0.608,0.036
            c-1.454,0.157-2.784,0.931-3.653,2.107c-13.796,18.599-13.405,35.409,1.282,54.491c5.338,6.939,7.4,17.035,9.848,28.963
            c0.757,3.724,1.543,7.53,2.465,11.438c-8.529-0.018-16.805-0.071-25.162-0.124l-2.187-0.012
            c-8.784-0.06-17.302-0.112-25.647-0.112c-14.877,0-27.065,0.177-38.349,0.55l-1.744,0.023c-14.676,0-21.101-5.32-22.186-18.348
            c-1.422-17.212-3.05-37.438-4.593-56.752c-2.01-25.186-3.904-48.843-5.11-62.329c-2.086-23.356-15.034-61.363-16.524-65.684
            c-0.75-2.113-2.76-3.535-5.006-3.535c-2.264,0-4.28,1.439-4.998,3.582c-1.155,3.408-2.784,7.022-4.365,10.533
            c-3.831,8.521-7.785,17.327-6.918,26.323c1.894,19.367,5.405,38.784,8.863,57.899l0.119,0.641
            c2.157,11.937,4.395,24.282,6.167,36.426c1.773,12.202,3.1,25.082,4.262,36.451c1.472,14.387,2.991,29.259,5.423,44.029
            c3.706,22.562,16.349,35.199,35.604,35.583C298.941,351.966,314.174,352.096,332.698,352.096z"
                              />
                              <path
                                d="M326.663,395.782l21.007,23.962c0.945,1.094,2.312,1.749,3.381,1.773l0.614,0.053c1.342,0,2.625-0.508,3.612-1.431
            l22.827-21.319c2.092-1.957,2.258-5.185,0.378-7.336l-22.443-25.806c-0.939-1.076-2.246-1.715-3.995-1.82
            c-1.312,0-2.619,0.52-3.57,1.412l-23.046,21.249c-0.769,0.71-1.188,1.608-1.442,2.542l-20.859-24.707
            c-0.916-1.105-2.275-1.785-4.031-1.886c-1.329,0-2.601,0.491-3.569,1.377l-22.875,20.812c-2.131,1.934-2.332,5.173-0.443,7.371
            l22.78,26.475c0.934,1.082,2.281,1.75,3.877,1.838h0.137c1.329,0,2.601-0.496,3.558-1.371l22.639-20.569
            C325.972,397.667,326.415,396.745,326.663,395.782z"
                              />
                              <path
                                d="M207.951,109.154c-1.082-8.287-7.179-15.634-18.64-22.461c-4.354-2.604-8.316-6.446-12.507-10.516
            c-2.166-2.11-4.418-4.291-6.833-6.419c-0.961-0.86-2.214-1.333-3.523-1.333l-0.833,0.06c-1.581,0.254-2.938,1.2-3.724,2.568
            c-12.771,21.923-8.127,41.065-2.749,63.23l1.241,5.151c9.921,41.721,14.056,85.759,18.06,128.411l1.496,15.838
            c2.568,26.622-0.635,44.33-10.072,55.738c-9.83,11.869-27.054,18.347-55.854,21.007c-4.968,0.461-9.9,0.521-14.041,0.521
            l-10.326-0.06c-26.342-0.048-45.48-7.188-55.357-20.635c-4.788-6.525-6.597-12.146-6.047-18.813
            c0.642-7.755,8.506-32.911,20.623-51.329c1.779-2.695,2.397-5.929,1.744-9.094c-0.65-3.165-2.5-5.887-5.195-7.66
            c-5.405-3.567-13.249-1.892-16.71,3.369C11.726,280.67,3.566,314.503,2.091,321.123c-4.654,19.363-1.478,38.278,8.928,53.25
            c10.64,15.291,27.781,25.091,48.268,27.573c10.376,1.254,21.234,1.868,33.183,1.868c9.954,0,20.607-0.432,32.586-1.312
            c28.72-2.129,50.351-11.598,64.309-28.13c14.999-17.762,21.01-43.497,17.874-76.491c-2.657-28.064-5.958-56.205-9.153-83.419
            l-0.186-1.61c-2.32-19.828-4.717-40.297-6.83-60.458c-0.573-5.503,0.565-11.615,2.524-13.625
            C204.576,127.492,209.139,118.088,207.951,109.154z"
                              />
                              <path
                                d="M519.709,283.224l-3.127-3.742c-6.076-7.826-21.734-27.795-35.914-43.979c-6.88-7.844-19.896-8.716-27.763-1.836
            c-8.157,7.149-8.973,19.601-1.832,27.76c10.396,11.866,22.017,26.365,30.079,36.596c1.472,1.62,2.595,3.121,3.7,4.61
            c0.999,1.336,1.986,2.654,3.162,4.031c10.291,11.945,24.902,35.938,7.241,62.488c-32.51,48.848-70.09,73.625-111.69,73.625
            c-0.006,0-0.006,0-0.012,0c-3.269,0-6.613-0.153-9.953-0.449c-8.24-0.744-16.65-2.589-24.796-4.386
            c-1.708-0.378-3.57-0.757-5.379-1.123c-2.281-0.461-4.498-0.91-6.283-1.324c-4.208-0.981-7.146,2.128-8.098,4.563
            c-0.567,2.719,1.076,5.432,3.753,6.183c8.932,2.506,18.365,5.935,26.688,8.961c18.891,6.874,38.42,13.973,57.748,13.979
            c1.531,0,3.056-0.047,4.599-0.136c40.483-2.436,68.529-31.279,97.906-73.488c0.709-0.745,17.307-18.637,17.856-54.598
            C538.15,304.98,520.43,284.062,519.709,283.224z"
                              />
                            </g>
                          </g>
                        </svg>
                      </p>
                      <p class="text-[15px] line-through text-[#c0c0c1]">
                        ۷۸,۴۹۹,۰۰۰
                      </p>
                    </div>
                    <div
                      class="w-10 h-5 bg-red-400 rounded-2xl text-white leading- text-[13px] leading-[20px]"
                    >
                      ۱%
                    </div>
                  </div>
      </div>
        </div>
      </div>
      </div>
        </div>
         <div class="grid gap-2 h-auto w-[95%] ed:w-[97%] grid-cols-2 items-center justify-items-center 
        grid-row ed:grid-cols-4 mx-auto mt-2">
          <img
            src="./assets/images/img-in-between-1-3.webp"
            alt="img-in-between"
            class="h-full object-cover rounded-[10px] cursor-pointer"
          />
          <img
            src="./assets/images/img-in-between-2-3.webp"
            alt="img-in-between"
            class="w-[322h-full object-cover rounded-[10px] cursor-pointer"
          />
          <img
            src="./assets/images/img-in-between-3-3.webp"
            alt="img-in-between"
            class="w-[322h-full object-cover rounded-[10px] cursor-pointer"
          />
          <img
            src="./assets/images/img-in-between-4-3.webp"
            alt="img-in-between"
            class="w-[322h-full object-cover rounded-[10px] cursor-pointer"
          />
        </div>
        <div
          class="card3 grid gap-2 ad:mt-18 w-[95%] ed:w-[97%] grid-cols-1 md:grid-cols-2
        grid-col ed:grid-cols-4 mx-auto justify-center">
        </div>
      </div> 
    </div>
    <!--end-main-->
`,i0=`
    <header
      class="pd:w-[100%] pr-5 flex w-full pd:flex-row sm:flex-col sm:gap-[5px] sticky dark:bg-gray-900 flex-row items-center bg-white top-0 ed:relative z-50"
    >
      <a href="#">
        <div class="w-[76px] h-[76px]">
          <img src="./assets/images/shop-cart-apply-icon.png" alt="shop" />
        </div>
      </a>
          <div class="ed:inline-flex ed:flex-col pd:flex-row flex pd:gap-0 gap-7 items-center justify-center pd:justify-between pd:relative pd:w-[90%]">
      <div class=" flex flex-row mx-auto pd:absolute right-0 justify-center pd:justify-start">
        <div class="ed:flex hidden gap-8 items-center relative flex-row justify-center">
          <span></span>
          <div class="group/mega1 text-[13px] text-nowrap kalas">
            <p class="cursor-pointer">کالاها</p>
            <div
              class="w-[90%] top-4 group-hover/mega1:flex  flex-col right-[30px] pt-4 absolute hidden mega h-screen z-50"
            >
              <div class="w-[100%] h-[80%] relative bg-[#faf8f8f1] rounded-[10px] flex">
                <div class="bg-[aqua] rounded-r-[10px]">
                  <div class="w-[130px] flex cursor-pointer peer/1  hover:bg-[#fffdfd] text-red justify-center items-center h-1/8 rounded-tr-[10px]">
                    <p class="flex justify-center items-center gap-1">
                      <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]">
            <path fill-rule="evenodd" d="M7 1h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4a3 3 0 013-3zm0 2a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zm5 17a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
          </svg>
                      موبایل</p>
                  </div>
                  <div class="w-[130px] flex cursor-pointer peer/2 hover:bg-[#fffdfd] text-red justify-center items-center h-1/8">
                    <p class="flex justify-center items-center gap-1">
                      <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]">
             <path fill-rule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7zm-.434 2l-1.8 3h16.468l-1.8-3H5.566z" clip-rule="evenodd"></path>
          </svg>
                      لپ‌تاپ</p>
                  </div>
                  <div class="w-[130px] flex cursor-pointer peer/3  hover:bg-[#fffdfd] text-red justify-center items-center h-1/8">
                    <p class="flex justify-center items-center gap-1">
                     <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]">
            <path fill-rule="evenodd" d="M7 3h10c1.56 0 2.898 1.066 2.994 2.5l.006.167v2.869a3.5 3.5 0 011.001 6.627L21 18a2 2 0 01-2 2v1h-2v-1H7v1H5v-1a2 2 0 01-2-2v-2.837a3.5 3.5 0 011-6.628V5.667c0-1.461 1.28-2.581 2.821-2.662L7 3zm1 11h8v-2l.005-.192A3.501 3.501 0 0118 8.837v-3.17c0-.3-.35-.614-.867-.661L17 5H7c-.543 0-.936.292-.993.592L6 5.667l.001 3.17A3.5 3.5 0 018 12v2zm-5-2a1.5 1.5 0 013 0v3a1 1 0 001 1h10a1 1 0 001-1v-3l.007-.145A1.5 1.5 0 0121 12l-.007.145A1.5 1.5 0 0119.5 13.5H19V18H5v-4.5h-.5A1.5 1.5 0 013 12z" clip-rule="evenodd"></path>
          </svg>
                      خانه و آشپزخانه</p>
                  </div>
                  <div class="w-[130px] flex cursor-pointer peer/4 hover:bg-[#fffdfd] text-red justify-center items-center h-1/8">
                    <p class="flex justify-center items-center gap-1">
                      <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]">
          <path fill-rule="evenodd" d="M4.317 12.449L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.542-1.334l-5-2A1 1 0 0017 4h-2a1 1 0 00-.993.883l-.011.273C13.93 6.234 13.196 7 12 7c-1.253 0-2-.84-2-2a1 1 0 00-1-1H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543zm-.981-4.906L7.193 6h.92l.05.19C8.622 7.821 10.038 9 12 9c2.037 0 3.485-1.271 3.887-3h.92l3.858 1.543-1.21 2.721-2.138-.713A1 1 0 0016 10.5V19H8v-8.5a1 1 0 00-1.316-.949l-2.139.713-1.21-2.721z" clip-rule="evenodd"></path>
          </svg>
                      مد و پوشاک</p>
                  </div>
                  <div class="w-[130px] flex cursor-pointer peer/5 hover:bg-[#fffdfd] text-red justify-center items-center h-1/8">
                    <p class="flex justify-center items-center gap-1">
                      <svg viewBox="0 0 18 18" class="w-[20px] h-[20px]">
            <g clip-path="url(#clip0_966_244914)"><path d="M3.179 9.91c.073-.393.497-.638.91-.493.8.282 1.827.728 2.27 1.006.407.256.4.372.387.64l-.003.05c-.003.075-.072.137-.156.137H3.382c-.236 0-.415-.191-.377-.401l.174-.938zM13.912 9.417c.412-.145.837.1.91.494l.173.938c.039.21-.14.401-.377.401h-3.205c-.084 0-.152-.062-.156-.138l-.002-.049c-.014-.268-.02-.384.386-.64.443-.278 1.47-.724 2.271-1.006z"></path><path fill-rule="evenodd" d="M3.043 4.116A2.25 2.25 0 014.987 3h8.027c.8 0 1.54.425 1.943 1.116l1.475 2.529.54-.216a.75.75 0 01.557 1.392l-.484.194c.136.47.205.958.205 1.452V15a.75.75 0 01-.75.75h-.75A.75.75 0 0115 15v-1.51c-3.96.825-8.044.828-12 .011V15a.75.75 0 01-.75.75H1.5A.75.75 0 01.75 15v-2.625c0-.027.001-.052.003-.076a.945.945 0 01-.003-.072v-2.76c0-.494.07-.982.205-1.452L.472 7.82a.75.75 0 11.557-1.392l.54.216 1.474-2.529zm-.435 4.509h13.046c.064.275.096.557.096.842v2.316l-.275.065a28.06 28.06 0 01-13.225-.055V9.467c0-.285.033-.567.096-.842h.262zM4.987 4.5a.75.75 0 00-.648.372L3.025 7.125h11.95l-1.313-2.253a.75.75 0 00-.648-.372H4.987z" clip-rule="evenodd"></path></g><defs><clipPath id="clip0_966_244914"><path d="M0 0h18v18H0z"></path></clipPath></defs>
          </svg>
                      خودرو </p>
                  </div>
                  <div class="p-10 w-[82%] gap-5 flex-col h-full absolute left-0 top-0 bg-white peer-hover/1:flex hover:flex hidden">
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سامسونگ</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>شیایومی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>لنووو</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>اپل</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سونی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>هوآوی</p>
                    </div>
                  </div>
                  <div class="p-10 gap-5 flex-col w-[82%] h-full absolute left-0 top-0 bg-white peer-hover/2:flex hover:flex hidden">
                      <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>ای سوز</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>اچ پی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>لنووو</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>اپل</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سونی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>دل</p>
                    </div>
                  </div>
                  <div class="p-10 gap-5 flex-col  w-[82%] h-full absolute left-0 top-0 bg-white peer-hover/3:flex hover:flex hidden">
                      <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>ال‌جی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>شیایومی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>بوش</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سامسونگ</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سونی</p>
                    </div>
                  </div>
                  <div class="p-10 gap-27 flex-row w-[82%] h-full absolute left-0 top-0 bg-white peer-hover/4:flex hover:flex hidden">
                    <div class="flex flex-col gap-7">
                      <h1>مردانه</h1>
                        <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>تی شرت</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>شلولرک</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>شلوار</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پیراهن مردانه</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>جوراب مردانه</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>کراوات مردانه</p>
                    </div>
                    </div>
                    <div class="flex flex-col gap-7">
                      <h1>زنانه</h1>
                        <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>روسری</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پیراهن</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>مانتو</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>چادر</p>
                    </div>
                    </div>
                  </div>
                  <div class="p-10 gap-5 flex-col  w-[82%] h-full absolute left-0 top-0 bg-white peer-hover/5:flex hover:flex hidden">  
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پژو</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پراید</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>کوییک</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>تسلا</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پیکان</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>کمری</p>
                    </div></div>
                </div>
                <div class="">
                </div>
              </div>
            </div>
          </div>
          <span class="cursor-pointer bg-black dark:bg-white  hidden ad:block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap">ویژه ها</div>
          <span class="cursor-pointer bg-black dark:bg-white block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap">
            شما هم فروشنده باشید!
          </div>
          <span class="cursor-pointer bg-black dark:bg-white block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap">
            کالاهای کارکرده
          </div>
          <span class="cursor-pointer bg-black dark:bg-white blockn ad:block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap  block">سوالی دارید؟</div>
          <span class="cursor-pointer bg-black dark:bg-white hidden ed:block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap hidden ed:block">طلای دیجیتال</div>
        </div>
        <div class="w-[50px] h-[50px] flex ed:hidden justify-center items-center">
          <svg viewBox="0 0 24 24" class="menu cursor-pointer dark:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0" class="dark:stroke-white"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" class="dark:stroke-white" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g  clip-path="url(#000000clip0_105_1893)"> <circle class="dark:stroke-white" cx="12" cy="12" r="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect class="dark:stroke-white" height="0.01" stroke="#000000" stroke-linejoin="round" stroke-width="3" transform="rotate(90 12.01 12)" width="0.01" x="12.01" y="12"/> <rect height="0.01" class="dark:stroke-white" stroke="#000000" stroke-linejoin="round" stroke-width="3" transform="rotate(90 16.51 12)" width="0.01" x="16.51" y="12"/> <rect height="0.01" stroke="#000000" class="dark:stroke-white" stroke-linejoin="round" stroke-width="3" transform="rotate(90 7.51001 12)" width="0.01" x="7.51001" y="12"/> </g> <defs> <clipPath id="clip0_105_1893"> <rect fill="white" height="24" class="dark:stroke-white" transform="translate(0 0.000976562)" width="24"/> </clipPath> </defs> </g>

        </svg>
      </div>
    </div>
    <div class="pd:absolute relative flex justify-center gap-5 flex-row items-center pd:left-0">
      <div class="flex flex-row gap-5 jd:gap-5">
        <div class="w-[28px] h-full ml-2 rounded-[4px]">
            <a href="./weblog.html">
              <svg
                fill="#000000"
                class="dark:fill-white w-[28px] h-[28px]"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M333.187,237.405c32.761-23.893,54.095-62.561,54.095-106.123C387.282,58.893,328.389,0,256,0
			S124.718,58.893,124.718,131.282c0,43.562,21.333,82.23,54.095,106.123C97.373,268.57,39.385,347.531,39.385,439.795
			c0,39.814,32.391,72.205,72.205,72.205H400.41c39.814,0,72.205-32.391,72.205-72.205
			C472.615,347.531,414.627,268.57,333.187,237.405z M164.103,131.282c0-50.672,41.225-91.897,91.897-91.897
			s91.897,41.225,91.897,91.897S306.672,223.18,256,223.18S164.103,181.954,164.103,131.282z M400.41,472.615H111.59
			c-18.097,0-32.82-14.723-32.82-32.821c0-97.726,79.504-177.231,177.231-177.231s177.231,79.504,177.231,177.231
			C433.231,457.892,418.508,472.615,400.41,472.615z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <span class="bg-black hidden pd:block dark:bg-white w-[1px] h-[24px]"></span>
          <div class="w-[28px] h-full mr-2 pd:ml-10 rounded-[4px]">
            <a href="./shop.html">
              <svg
                fill="#000000"
                class="dark:fill-white w-[28px] h-[28px]"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 492.066 492.066"
                xml:space="preserve"
              >
                <g>
                  <g id="Icons_38_">
                    <path
                      d="M485.128,100.778c-7.25-10.449-19.168-16.69-31.902-16.69H212.607c-8.981,0-16.272,7.288-16.272,16.278
			c0,8.987,7.291,16.275,16.272,16.275h240.618c2.051,0,3.99,1,5.167,2.71c1.178,1.685,1.448,3.846,0.731,5.77L414.03,246.495
			c-0.906,2.454-3.29,4.108-5.899,4.108H155.277L115.001,78.741c-5.01-21.338-23.812-36.25-45.747-36.25h-44.84
			C10.92,42.491,0,53.42,0,66.906C0,80.395,10.92,91.32,24.414,91.32h43.38l54.232,231.405
			c4.908,20.918,23.108,35.574,44.474,36.146c-12.56,9.117-20.791,23.812-20.791,40.516c0,27.722,22.46,50.189,50.181,50.189
			c27.706,0,50.176-22.468,50.176-50.189c0-16.642-8.198-31.281-20.661-40.412h93.623c-12.481,9.131-20.679,23.77-20.679,40.412
			c0,27.722,22.471,50.189,50.175,50.189c27.723,0,50.198-22.468,50.198-50.189c0-16.642-8.204-31.281-20.678-40.412h22.757
			c13.495,0,24.416-10.928,24.416-24.415c0-13.486-10.92-24.414-24.416-24.414H169.232l-6.326-26.99h245.226
			c16.131,0,30.771-10.164,36.399-25.313l45.11-121.396C494.059,124.523,492.374,111.182,485.128,100.778z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
           <div class="hidden items-center ed:flex button2 justify-center">
          <svg
            class="w-[30px] cursor-pointer h-[30px] dark:fill-white"
            viewBox="0 0 24 24"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18H10"
              stroke="#000000"
              class="dark:stroke-white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L16 12"
              stroke="#000000"
              class="dark:stroke-white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              class="dark:stroke-white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      </div>
      <div class="w-1/2 menu h-screen hidden right-0 border-l-1 dark:bg-gray-900 p-10 flex-col gap-10 items-center bg-white absolute z-50 top-0">
        <svg height="80px" class="cursor-pointer menu h-[80px] block mb-3" width="80px" viewBox="0 0 40 40">
              <g>
                <g>
                  <g>
                    <path fill="#231815" class="dark:fill-white" d="M20,28.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S24.7,28.5,20,28.5z M20,12.5
				c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S24.1,12.5,20,12.5z"></path>
                  </g>
                  <g>
                    <path fill="#231815" class="dark:fill-white" d="M22.1,22.6c-0.1,0-0.3,0-0.4-0.1l-4.2-4.2c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l4.2,4.2
				c0.2,0.2,0.2,0.5,0,0.7C22.3,22.5,22.2,22.6,22.1,22.6z"></path>
                  </g>
                  <g>
                    <path fill="#231815" class="dark:fill-white" d="M17.9,22.6c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l4.2-4.2c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
				l-4.2,4.2C18.2,22.5,18,22.6,17.9,22.6z"></path>
                  </g>
                </g>
              </g>
            </svg>
          <div class="cursor-pointer text-[13px] text-nowrap">ویژه ها</div>
          <div class="cursor-pointer text-[13px] text-nowrap">
            شما هم فروشنده باشید!
          </div>
          <div class="cursor-pointer text-[13px] text-nowrap">
            کالاهای کارکرده
          </div>
          <div class="cursor-pointer text-[13px] text-nowrap  block">سوالی دارید؟</div>
          <div class="cursor-pointer text-[13px] text-nowrap hidden ed:block">طلای دیجیتال</div>
      </div>
        </header>
        <div
          class="w-[150px] top-0 pb-10 flex-col animate__animated overflow-auto items-center gap-5 bg-white  dark:bg-gray-900 left-0 hidden absolute mega2 h-screen z-50"
        >
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <svg
              height="80px"
              class="cursor-pointer close2 h-[80px] block mb-3"
              width="80px"
              viewBox="0 0 40 40"
            >
              <g>
                <g>
                  <g>
                    <path
                      fill="#231815"
                      class="dark:fill-white"
                      d="M20,28.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S24.7,28.5,20,28.5z M20,12.5
				c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S24.1,12.5,20,12.5z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#231815"
                      class="dark:fill-white"
                      d="M22.1,22.6c-0.1,0-0.3,0-0.4-0.1l-4.2-4.2c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l4.2,4.2
				c0.2,0.2,0.2,0.5,0,0.7C22.3,22.5,22.2,22.6,22.1,22.6z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#231815"
                      class="dark:fill-white"
                      d="M17.9,22.6c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l4.2-4.2c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
				l-4.2,4.2C18.2,22.5,18,22.6,17.9,22.6z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <img
              src="./assets/images/near-slider-1.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-1"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              مشاوره خرید لپتاپ گیمینگ
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-2.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-2"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              اقتصادی یعنی اونیکوما
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-3.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-3"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              تلویزیون چی بخریم؟!
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-4.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-4"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              کدوم رو بخریم۲
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-5.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-4"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              شارژر مگ سیف بیسوس Simple Mini 3
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-6.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-4"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              کیف لوازم آرایش جادار
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/cdc5c3bd9641e76ecb948e40020ca97e9931338a_1754937356.jpg"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-4"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              تلویزیون خونت میسوزه اگه این رو کار نذاری
            </p>
          </div>
        </div>
`,a0=`
<!--start-header-bottom-->
    <header
      class="bg-white sticky dark:bg-gray-900 flex-col ed:top-0 top-31 border-b-1 border-b-gray-300 z-40 w-full h-[55px] flex justify-center items-center gap-3"
      dir="ltr"
    >
      <div
        class="w-full h-auto flex px-5 shadow-2xl flex-row justify-center items-center gap-3"
      >
        <form action="#" class="flex w-[100%] gap-5 justify-center items-center">
          <input
            type="submit"
            name="submit"
            id="submit"
            value="جستجو"
            class="cursor-pointer"
          />
          <input
            type="search"
            name="search"
            id="search"
            required
            placeholder=""
            class="border-1 w-[70%] rounded-[5px] text-center"
          />
          <svg
            fill="#000000"
            height="24px"
            width="24px"
            version="1.1"
            class="dark:fill-white"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.4 488.4"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
        s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
        S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
        S381.9,104.65,381.9,203.25z"
                />
              </g>
            </g>
          </svg>
        </form>
      </div>
      </header>  
    <!--end-header-bottom-->
`,r0=`
<!--start-slider-->
    <div class="w-full h-113">
      <div class="swiper upswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./assets/images/slider-up-1.webp" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./assets/images/slider-up-2.webp" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./assets/images/slider-up-3.webp" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./assets/images/slider-up-4.webp" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./assets/images/slider-up-5.webp" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./assets/images/slider-up-6.webp" alt="" />
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span></span>
        </div>
      </div>
    </div>
    <!--end-slider-->
`,c0=()=>{let l=document.querySelector(".button2"),e=document.querySelector(".mega2"),t=document.querySelector(".close2"),s=document.querySelector("body"),[a,i,o]=document.querySelectorAll(".menu");a.addEventListener("click",()=>{i.classList.contains("hidden")?(i.classList.remove("hidden"),i.classList.add("flex"),s.classList.add("overflow-hidden")):(i.classList.add("hidden"),i.classList.remove("flex"),s.classList.remove("overflow-hidden"))}),o.addEventListener("click",()=>{i.classList.add("hidden"),i.classList.remove("flex"),s.classList.remove("overflow-hidden")}),l.addEventListener("click",()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),e.classList.add("flex","animate__jackInTheBox"),s.classList.add("overflow-hidden")):e.classList.contains("animate__rotateOut")&&(e.classList.remove("hidden","animate__rotateOut"),e.classList.add("flex","animate__jackInTheBox"),s.classList.add("overflow-hidden"))}),t.addEventListener("click",()=>{e.classList.remove("flex"),s.classList.remove("overflow-hidden"),e.classList.add("hidden","animate__rotateOut")})},n0=()=>{const l=document.querySelector(".autoplay-progress svg"),e=document.querySelector(".autoplay-progress span");new V(".upswiper",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{autoplayTimeLeft(t,s,a){l.style.setProperty("--progress",1-a),e.textContent=`${Math.ceil(s/1e3)}s`}}}),new V(".cardSwiper",{effect:"cards",grabCursor:!0}),new V(".HouseholdSwiper",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination"}}),new V(".mySwiper",{direction:"vertical",slidesPerView:1,spaceBetween:30,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new V(".brandsSwiper",{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}}),new V(".brandsSwiper2",{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}}),new V(".otherSwiper",{effect:"flip",grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},o0=`
    <!--start-read-->
    <div class="flex flex-col pt-20 h-auto gap-4 w-[95%] ed:w-[97%] mx-auto">
      <p class="text-2xl text-center w-full">خواندنی‌ها</p>
      <div class="grid w-[100%] mx-auto ed:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2">
        <div
          class="gap-2 pb-25 flex flex-col border-1 relative rounded-[10px] border-[#a1a3a8]"
        >
          <img
            src="https://www.digikala.com/mag/wp-content/uploads/2025/08/Google-Translate-AI-cover_cropped.webp"
            alt="read"
            class="rounded-t-[10px]"
          />
          <p class="text-[13px] p-3">
            آپدیت بزرگ گوگل ترنسلیت؛ به‌سادگی زبان جدید یاد بگیرید!
          </p>
          <div
            class="pr-3 bg-red-300 dark:bg-gray-500 cursor-pointer rounded-[10px] w-[130px] h-[30px] text-center absolute bottom-3 right-3 flex justify-center items-center"
            >ادامه مطلب...</div
          >
        </div>
        <div
          class="gap-2 pb-25 flex flex-col border-1 relative rounded-[10px] border-[#a1a3a8]"
        >
          <img
            src="https://www.digikala.com/mag/wp-content/uploads/2025/08/labubu-doll-guide-2.jpg"
            alt="read"
            class="rounded-t-[10px]"
          />
          <p class="text-[13px] p-3">
            چگونه عروسک لبوبو اصل را از تقلبی تشخیص دهیم؟
          </p>
          <div
            class="pr-3 bg-red-300 dark:bg-gray-500 cursor-pointer rounded-[10px] w-[130px] h-[30px] text-center absolute bottom-3 right-3 flex justify-center items-center"
            >ادامه مطلب...</div
          >
        </div>
        <div
          class="gap-2 pb-25 flex flex-col border-1 relative rounded-[10px] border-[#a1a3a8]"
        >
          <img
            src="https://www.digikala.com/mag/wp-content/uploads/2025/08/crispy-fried-chicken.jpg"
            alt="read"
            class="rounded-t-[10px]"
          />
          <p class="text-[13px] p-3">
            خوشمزه ترین طرز تهیه “مرغ سوخاری رستورانی” در خانه!
          </p>
          <div
            class="pr-3 bg-red-300 dark:bg-gray-500 cursor-pointer rounded-[10px] w-[130px] h-[30px] text-center absolute bottom-3 right-3 flex justify-center items-center"
            >ادامه مطلب...</div
          >
        </div>
        <div
          class="gap-2 pb-25 flex flex-col border-1 relative rounded-[10px] border-[#a1a3a8]"
        >
          <img
            src="https://www.digikala.com/mag/wp-content/uploads/2025/08/%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%AE%D9%88%D8%AF%DA%A9%D8%A7%D8%B1-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DA%AF%D8%B3%D8%AA%D8%B1.jpg"
            alt="read"
            class="rounded-t-[10px]"
          />
          <p class="text-[13px] p-3">داستان خودکار فضایی میلیون دلاری ناسا.</p>
          <div
            class="pr-3 bg-red-300 dark:bg-gray-500 cursor-pointer rounded-[10px] w-[130px] h-[30px] text-center absolute bottom-3 right-3 flex justify-center items-center"
            >ادامه مطلب...</div
          >
        </div>
      </div>
    </div>
    <!--end-read-->
`,d0=`
    <!--start-footer-->
   <span class="block mt-[30px] bg-[#a1a3a8] w-full h-[1px]"></span>
    <footer class="w-[96%] mx-auto mt-[20px]">
      <div class="flex w-full justify-center relative md:flex-row flex-col gap-4 items-center">
        <div class="">
        <img
          src="./assets/images/shop-cart-apply-icon.png"
          alt="online-shop-logo"
        />
        </div>
        <div class="">
         <a
          href="#"
          class="flex gap-2 border-1 p-3 md:absolute md:left-2 justify-center items-center text-[12px] text-[#a1a3a8] border-[#a1a3a8] rounded-[10px]"
          >بازگشت به بالا<svg
            class="w-[15px] h-[15px]"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#a1a3a8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="m 1 11 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 l 6 -6 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -5.292969 -5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0"
                fill="#a1a3a8"
              />
        </g>
      </svg>
        </a>
        </div>
      </div>
      <div class="flex mt-10 gap-4 ad:flex-row flex-col items-center">
        <div class="w-1/2 text-justify">
          <p class="text-2xl text-[#62646b] dark:text-[#f0f0f0] mb-2">
            بزرگترین فروشگاه اینترنتی ایران
          </p>
          <p class="text-[#81858b] text-[13px] dark:text-[#0fff]">
                به‌سوی خرید آنلاین خوش‌آمدید! تجربه‌ای سریع و آسان در انتظار شماست.
                محصولات با کیفیت و قیمت مناسب در فروشگاه ما موجود است. تخفیف‌های
                ویژه برای اعضای وفادار ارائه می‌شود. ارسال رایگان برای سفارش‌های
                بالای ۲۵۰ هزار تومان. پشتیبانی ۲۴ ساعته برای پاسخ به تمام سؤال‌های
                شما.
          </p>
          <p class="text-[#81858b] text-[13px] hidden text-big dark:text-[#0fff]">
 گارانتی یک ساله برای اطمینان کامل از خرید. نقد و بررسی‌های واقعی مشتریان برای هر محصول. دسته‌بندی‌های هوشمند برای یافتن سریع محصول دلخواه. امکان مقایسه ویژگی‌ها و قیمت‌ها بین محصولات. پرداخت آنلاین یا نقدی درب منزل، به‌دلخواه شما. کد تخفیف ویژه برای اولین خرید شما. محصولات جدید هر روز در فروشگاه اضافه می‌شوند. آموزش‌های ویدئویی استفاده از محصولات در دسترس است. امکان بازگشت کالا در صورت عدم رضایت. پیشنهادهای شخصی‌سازی‌شده بر اساس سلیقه شما. دسته‌بندی‌های لوازم خانگی، دیجیتال، مد و ... . فروش ویژه فصلی با تخفیف‌های چشمگیر. بسته‌های هدیه‌ای برای مناسبت‌های خاص. سبد خرید هوشمند؛ افزودن به سبد و پرداخت در زمان دلخواه. تخفیف‌های گروهی برای خریدهای بزرگ. پروفایل شخصی برای مشاهده تاریخچه خرید. خبرنامه ایمیلی برای دریافت جدیدترین تخفیف‌ها. چت‌ربات هوشمند برای راهنمایی لحظه‌ای. امنیت تراکنش‌ها با رمزنگاری پیشرفته. پیشنهادهای فصلی برای تابستان، نوروز و ... . محصولات با گواهی اصالت و برند معتبر. امکان فیلتر بر اساس قیمت، برند و امتیاز. جستجوی پیشرفته با کلیدواژه‌های دقیق. نمایش جزئیات کامل محصول، شامل ابعاد و وزن. امکان ذخیره لیست علاقه‌مندی‌ها برای خرید بعدی. تخفیف‌های ویژه برای دانشجویان و سربازان. برنامه وفاداری با امتیازهای خرید. امکان خرید به صورت اقساطی بدون بهره. تخفیف‌های ویژه در روزهای تعطیل و جشن‌ها. سرویس بسته‌بندی هدیه با کارت تبریک. امکان انتخاب زمان دقیق تحویل کالا. نمایش نظرات و امتیازهای کاربران برای هر محصول. قابلیت مقایسه چند محصول به‌صورت همزمان. اطلاع‌رسانی لحظه‌ای از وضعیت سفارش از طریق پیامک. امکان ثبت نظرسنجی برای بهبود خدمات. پشتیبانی فنی برای محصولات الکترونیکی. گارانتی تعویض در صورت نقص فنی. فروش ویژه محصولات بازگشت‌پذیر. تخفیف‌های ویژه برای خریدهای اول ماه. امکان خرید به‌صورت پیش‌سفارش برای محصولات جدید. برنامه ارجاع دوستان برای دریافت اعتبار خرید. نمایش تخفیف‌های لحظه‌ای در بنرهای صفحه اصلی. امکان پرداخت با کیف پول دیجیتال. سرویس مشاوره آنلاین برای انتخاب محصول مناسب. امکان مشاهده فیلم‌های معرفی محصول. نمایش مقایسه قیمت با رقبای داخلی. تخفیف‌های ویژه برای خریدهای ترکیبی. امکان افزودن کد تخفیف در سبد خرید. نمایش زمان تخمینی تحویل در صفحه محصول. امکان خرید از طریق اپلیکیشن موبایل. ارسال پیام‌های یادآوری برای سبدهای رها شده. تخفیف‌های ویژه برای خریدهای بزرگ تجاری. نمایش تاریخچه قیمت برای بررسی کاهش‌ها. امکان ثبت شکایت و پیگیری آسان. سرویس جستجوی صوتی برای راحتی کاربران. نمایش گرافیک‌های ۳D برای برخی محصولات. امکان افزودن نظرات تصویری به بررسی‌ها. برنامه‌ریزی خودکار تخفیف‌ها بر اساس موجودی. پشتیبانی چند زبانه برای کاربران بین‌المللی. امکان انتخاب بسته‌بندی سبز و دوست‌دار محیط. تخفیف‌های مخصوص برای خریدهای شبانه‌روز. نمایش تخفیف‌های محدود به تعداد برای فرصت‌های ویژه. امکان استفاده از امتیازهای وفاداری برای خریدهای بعدی. سرویس تحویل در همان روز برای شهرهای بزرگ. امکان انتخاب روش تحویل از بین پست، پیک و دی‌اکس. نمایش تخفیف‌های دوره‌ای برای محصولات پرطرفدار. برنامه تخفیف‌های ماهانه برای دسته‌بندی‌های خاص. امکان دریافت گواهی اصالت محصول به‌صورت دیجیتال. سرویس مشاوره تخصصی برای انتخاب لوازم خانگی. تخفیف‌های ویژه برای مشتریان بازگشت‌پذیر. نمایش تخفیف‌های ترکیبی برای خرید چند محصول. امکان تنظیم اعلان‌های تخفیف برای محصولات دلخواه. سرویس ذخیره‌سازی اطلاعات کارت بانکی به‌صورت امن. پشتیبانی از روش‌های پرداخت بین‌المللی. نمایش جزئیات مالیات و هزینه‌های جانبی برای هر محصول. امکان خرید به‌صورت هدیه برای دیگران. سرویس پیگیری سفارش تا لحظه تحویل. نمایش تخفیف‌های ویژه برای مناسبت‌های ملی. امکان دریافت فاکتور الکترونیکی بلافاصله پس از خرید. سرویس مشاوره سفارشی برای طراحی منزل با محصولات ما. نمایش نظرسنجی‌های کوتاه برای بهبود تجربه خرید. امکان دریافت کد تخفیف از طریق شبکه‌های اجتماعی. سرویس ارسال خودکار ایمیل تأیید سفارش. نمایش تخفیف‌های ویژه برای کاربران ثبت‌نام‌شده. امکان استفاده از کوپن‌های مخصوص در سبد خرید. سرویس اعلان پر شدن موجودی برای محصولات دلخواه. نمایش نظرسنجی‌های رضایت‌مندی پس از دریافت محصول. امکان افزودن یادآوری برای خریدهای دوره‌ای. سرویس تخفیف‌های ویژه برای خریدهای ترکیبی دیجیتال و لوازم خانگی. نمایش تخفیف‌های ویژه برای خریدهای اولین بار. امکان تنظیم فیلترهای شخصی‌سازی‌شده برای نمایش محصولات. سرویس پشتیبانی زنده با ویدئو چت برای مشکلات فنی. نمایش تخفیف‌های ویژه برای محصولات پرفروش. با ما تجربه‌ای متفاوت و لذت‌بخش از خرید آنلاین داشته باشید.
          </p>
          <button class="text-[14px] text-blue-500 cursor-pointer see-more">مشاهده همه
            <svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(270)" class="fill-blue-500 inline-block">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

        <g id="SVGRepo_iconCarrier"> <path d="m 1 11 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 l 6 -6 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -5.292969 -5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" /> </g>

        </svg>
          </button>
        </div>
        <div class="w-1/2 flex justify-end h-2">
          <form action="./registered.html" class="ad:w-[70%] w-full gap-3 flex ed:flex-row flex-col">
            <input
              type="email"
              name="email"
              required
              oninvalid="this.setCustomValidity('ایمیل خود را وارد کنید')"
              oninput="this.setCustomValidity('')"
              class="ad:w-[80%] w-[90%] bg-[aqua] pr-[5px] dark:bg-gray-700 py-3 h-fit rounded-[5px]"
              id="email"
              placeholder="ایمیل خود را وارد کنید." />
            <input
              type="submit"
              value="ثبت"
              class="p-3 bg-red-500 rounded-[5px] dark:bg-gray-900 h-fit w-fit" />
          </form>
        </div>
      </div>
      <div class="w-full h-[100px] mt-25 text-center flex justify-center items-center text-[#81858b]">
        Copyright © 2025 - All right reserved by we online shoping
      </div>
    </footer>
    <!--end-footer-->
`,p0=()=>{let l=document.querySelector(".see-more"),e=document.querySelector(".text-big");l.addEventListener("click",()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),e.classList.add("flex"),l.innerHTML=`بستن همه <svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(270)" class="fill-blue-500 inline-block">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

        <g id="SVGRepo_iconCarrier"> <path d="m 1 11 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 l 6 -6 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -5.292969 -5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" /> </g>
        </svg>`):(l.innerHTML=`مشاهده همه <svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(270)" class="fill-blue-500 inline-block">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

        <g id="SVGRepo_iconCarrier"> <path d="m 1 11 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 l 6 -6 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -5.292969 -5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" /> </g>
        </svg>`,e.classList.remove("flex"),e.classList.add("hidden"))})},u0=`
    <!-- start-bottom-btn-->
    <div class="w-full h-auto">
      <div
        class="sm:p-2 ed:p-0 ed:w-[50px] ed:h-[50px] ed:flex justify-center ed:bottom-10 bottom-6 right-6 ed:right-10 fixed items-center dark:bg-gray-900 bg-red-400 rounded-full cursor-pointer z-50 bottom-btn hidden"
      >
        <svg
          fill="#ffffff"
          width="30px"
          height="30px"
          class=""
          viewBox="0 -8.56 105 105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="_support-person_"
            data-name="
support-person
"
            d="M1183.552,975.061c.236-3.374.392-6.757.731-10.12a44.367,44.367,0,0,0-.771-11.4c-.483-3.069-.134-5.854,1.967-8.283a6.776,6.776,0,0,0,1.016-1.661,12.076,12.076,0,0,1,4.813-5.234c1.658-1.049,3.39-1.988,5.114-2.932a16.6,16.6,0,0,1,6.547-1.934c.87-.08,1.734-.241,2.6-.286a20.447,20.447,0,0,1,3.917-.036c2.064.306,4.058.644,6.12-.117a3.837,3.837,0,0,1,2.887.242,23.149,23.149,0,0,1,2.64,1.3,36.887,36.887,0,0,1,4.3,2.99,17.339,17.339,0,0,1,3.317,3.586,25.725,25.725,0,0,1,3.641,9.743,21.024,21.024,0,0,1-.465,9.708,3.788,3.788,0,0,0-.183,1.6,120.63,120.63,0,0,1,1.229,12.7c.013.217-.005.507.121.626.2.189.584.434.755.355,1.694-.764,3.373-1.56,5.014-2.43a1.389,1.389,0,0,0,.6-1.042c-.01-1.308-.135-2.615-.243-3.919-.081-.98-.244-1.95-.295-2.927a70.646,70.646,0,0,0-.683-7.5c-.568-3.554-.953-7.137-1.434-10.7a19.307,19.307,0,0,0-2.15-6.159,31.337,31.337,0,0,0-6.233-8.342c-3.627-3.5-8.188-4.909-12.8-6.25a5.848,5.848,0,0,0-3.536.055,27.893,27.893,0,0,1-7.032,1.437,46.179,46.179,0,0,0-13.118,3.89,14.007,14.007,0,0,0-5.933,5c-2.292,3.333-4.376,6.833-5.114,10.9-.466,2.568-.718,5.177-1.032,7.772-.21,1.73-.4,3.47-.514,5.208a13.927,13.927,0,0,0,0,3.592,34.561,34.561,0,0,1,.51,6.523c.049,5.575,0,11.152.059,16.73a15.48,15.48,0,0,1-1.157,5.738,3.93,3.93,0,0,1-2.431,2.489,21.86,21.86,0,0,1-3.778,1.011,12.125,12.125,0,0,1-6.1-.854,8.769,8.769,0,0,1-4.841-4.66c-.612-1.278-1.165-2.585-1.778-3.865a26.722,26.722,0,0,1-2.261-9.5,22.339,22.339,0,0,1,1.7-10.889,9.491,9.491,0,0,0,.784-2.15,7.2,7.2,0,0,1,3.212-4.744c.527-.385.963-.892,1.472-1.308,2.31-1.885,4.852-2.886,7.9-2.131.955.237,1.175.07,1.381-.861.26-1.174.352-2.381.657-3.537,1.754-6.67,3.853-13.206,7.818-18.97a19.253,19.253,0,0,1,1.617-2.06,30.434,30.434,0,0,1,15.1-9.335,64.713,64.713,0,0,1,16.821-2.182,7.858,7.858,0,0,1,1.958.1c4.755,1.294,9.463,2.706,13.244,6.125,1.052.951,2.173,1.826,3.226,2.774a19.993,19.993,0,0,1,5.4,8.486,26.389,26.389,0,0,1,1.656,6.987,2.4,2.4,0,0,0,.028.328,71.37,71.37,0,0,1,1.458,8.038,1.124,1.124,0,0,0,1.382,1.047c.754-.109,1.5-.3,2.249-.429a10.237,10.237,0,0,1,6.391.838,8.18,8.18,0,0,1,2.411,1.644,25.832,25.832,0,0,1,6.274,11.7,33.634,33.634,0,0,1,.653,10.419,5.14,5.14,0,0,1-.327,1.6c-1,2.406-2.005,4.816-3.105,7.177a12.51,12.51,0,0,1-3.113,3.773,5.655,5.655,0,0,1-2.9,1.415,24.286,24.286,0,0,1-6.844.431,14.578,14.578,0,0,1-2.569-.473,4.3,4.3,0,0,1-3.3-4.025c-.145-1.409-.074-2.84-.117-4.26a10.944,10.944,0,0,0-.153-1.944c-.048-.229-.547-.594-.695-.534-1.921.761-3.83,1.561-5.7,2.438-.308.145-.508.687-.6,1.082-.272,1.17-.522,2.345-.675,3.531a10.5,10.5,0,0,1-2.163,5.379c-.749.937-1.364,1.982-2.02,2.989a16.434,16.434,0,0,1-5.716,5.3c-2.649,1.514-5.377,2.893-8.041,4.383a13.085,13.085,0,0,1-6.935,1.543,22.215,22.215,0,0,1-7.373-1.284,40.4,40.4,0,0,0-4.384-1.3,4.925,4.925,0,0,1-2.467-1.509,53.25,53.25,0,0,1-5.887-7.86,4.021,4.021,0,0,1-.439-.878c-1.58-4.652-3.061-9.333-3.151-14.309-.034-1.86-.006-3.721-.006-5.576C1183.643,975.067,1183.6,975.063,1183.552,975.061Zm-16.178-2.088a1.193,1.193,0,0,0-.256.091c-.045.027-.058.108-.085.163l.244-.35c.408-.016.7-.155.7-.627a3.038,3.038,0,0,0,.931-.127c.543-.264,1.112-.375,1.4.189a2.089,2.089,0,0,1,.136,1.517,12.975,12.975,0,0,1-1.254,2.256c-1.087,1.742-2.217,3.455-3.281,5.206a7.315,7.315,0,0,0-.514,1.487c-.655.238-.539.832-.617,1.335a1.24,1.24,0,0,0-.233.1.424.424,0,0,0-.108.123l.248-.319a1.18,1.18,0,0,0,.633-1.3,4.958,4.958,0,0,0,1.1-.519c1.183-.954,2.324-1.966,3.492-2.94.247-.21.99.085,1.066.446a2.247,2.247,0,0,1,.053,1.252c-.523,1.2-1.138,2.353-1.755,3.508-.567,1.056-1.2,2.081-1.766,3.136a3.192,3.192,0,0,0-.245.922.6.6,0,0,0,.093.3c.127.291.3.314.5.057.795-1.036,1.565-2.094,2.388-3.1a1.719,1.719,0,0,1,1.816-.379,2,2,0,0,1,.879,1.652,6.156,6.156,0,0,1-.307,1.272c-.349.917-.754,1.812-1.107,2.724a2.513,2.513,0,0,0-.179.945c0,.164.23.463.351.461a5.562,5.562,0,0,0,1.592-.187c1.685-.541,2.169-1.147,1.881-2.9a28.9,28.9,0,0,1-.067-4.876c0-1.963.006-3.931-.078-5.89-.1-2.285-.312-4.566-.434-6.851-.089-1.634-.066-3.275-.18-4.907a13.61,13.61,0,0,0-.5-2.882,2.066,2.066,0,0,0-.98-1.216,5.134,5.134,0,0,0-4.432-.066,8.818,8.818,0,0,0-4.247,5.183c-.019.059.1.188.183.25s.214.1.26.061c.686-.528,1.327-1.125,2.047-1.6a13.809,13.809,0,0,1,2.289-1.22,2.04,2.04,0,0,1,1.994.837,1.361,1.361,0,0,1-.072,1.544c-.758,1.062-1.573,2.085-2.372,3.123-.33.428-.73.821-.569,1.441C1167.545,972.274,1167.379,972.548,1167.374,972.973Zm79.335,6.473a1.281,1.281,0,0,0,.6-1.349c.819-.22,1.629-.484,2.457-.645a1.426,1.426,0,0,1,1.571,1.294,4.826,4.826,0,0,1-.955,3.056c-.849,1.394-1.742,2.762-2.582,4.16-.34.565.2.717.551.921a1.126,1.126,0,0,0,1.486-.193,1.907,1.907,0,0,1,2.629-.411.932.932,0,0,0,1.168-.167,7.142,7.142,0,0,0,2.189-3.929,21.921,21.921,0,0,0,.355-10.02c-.543-2.77-1.112-5.538-1.69-8.305-.11-.529-.335-1.032-.481-1.558a6.656,6.656,0,0,0-2.256-3.133,4.323,4.323,0,0,0-3.408-.742c-1.086.07-.772,1.155-1.2,1.7a10.087,10.087,0,0,1-1.513,1.7,2.549,2.549,0,0,0-.928,2.617,7.953,7.953,0,0,0,.273.922,2.924,2.924,0,0,0,.825-.328c.764-.606,1.445-1.333,2.253-1.87a4.5,4.5,0,0,1,1.814-.621,1.458,1.458,0,0,1,1.453,1.982,16.073,16.073,0,0,1-.8,1.419q-.894,1.533-1.8,3.065a1.186,1.186,0,0,0-.235.121c-.039.032-.048.1-.072.155.076-.119.151-.24.225-.359a7.918,7.918,0,0,1,1.587.231c1.523.548,1.824,1.828,1.2,2.791-.766,1.174-1.54,2.339-2.3,3.515-.582.9-1.15,1.81-1.724,2.716a1.421,1.421,0,0,0-.6,1.366c-.431.007-.618.276-.7.654a5.515,5.515,0,0,0-.746.539c-.092.092-.062.312-.088.475.173-.065.44-.085.5-.2a4.441,4.441,0,0,0,.243-.9C1246.244,979.887,1246.477,979.665,1246.709,979.446Zm-18.155-15.5c-.065-1.408-.121-2.938-.214-4.467a15.763,15.763,0,0,0-.251-1.945,1.2,1.2,0,0,0-1.078-1.057c-.326-.038-.656-.008-.983-.036a18.713,18.713,0,0,1-13.158-6.47c-.5-.579-.963-1.193-1.493-1.742a.748.748,0,0,0-1.15.011c-.973,1.031-1.848,2.163-2.885,3.122a35.412,35.412,0,0,1-15.376,8.389c-3.317.859-2.86.714-2.854,3.962a8.982,8.982,0,0,0,.048.983,100.963,100.963,0,0,1,1.017,13.044,9.514,9.514,0,0,0,.136,1.633,44.14,44.14,0,0,0,5.5,15.654,9.606,9.606,0,0,0,3.787,3.993c1.742.882,3.529,1.675,5.3,2.495a1.737,1.737,0,0,0,.642.127,13.679,13.679,0,0,0,4.868-.3,28.853,28.853,0,0,0,10.681-5.5c2.843-2.435,4.464-5.579,5.918-8.885a.39.39,0,0,0,.007-.317c-.172-.237-.382-.641-.571-.637a14.575,14.575,0,0,0-2.927.256,38.882,38.882,0,0,1-7.368,1.451,1.223,1.223,0,0,0-.868.812,8.779,8.779,0,0,1-1.9,4.118c-1.287,1.854-4.862,2.579-6.57,1.852a10.98,10.98,0,0,1-4.906-3.7,6.052,6.052,0,0,1-.625-6.228,7.727,7.727,0,0,1,10.845-3.248,3.8,3.8,0,0,1,.539.373,2.835,2.835,0,0,0,3.293.449,17.237,17.237,0,0,1,4.728-1.221,20.763,20.763,0,0,0,5-1.452,2.639,2.639,0,0,0,1.912-2.718,18.9,18.9,0,0,1,.293-4.893C1228.66,969.268,1228.484,966.673,1228.554,963.944ZM1193.878,947.8l.17,0a28.26,28.26,0,0,0,.2,2.9,8,8,0,0,0,.731,2.109.894.894,0,0,0,.825.3.844.844,0,0,0,.405-.732,25.206,25.206,0,0,1-.689-6.084c0-.57-.525-1.133-.768-1.717-.123-.291-.25-.369-.477-.14-.148.146-.371.321-.377.488C1193.86,945.884,1193.878,946.842,1193.878,947.8Zm30.18-2.785a.931.931,0,0,0-.129-.431,3.7,3.7,0,0,0-3.6-1.692c-.216.031-.427.422-.541.69a.833.833,0,0,0,.1.613c.292.57.485.01.7-.1.286-.138.608-.5.819-.444a1.567,1.567,0,0,1,.974.729c.336.9.5,1.867.751,2.8a1.822,1.822,0,0,0,.3.471.991.991,0,0,0,.169-.273C1223.751,946.646,1223.887,945.907,1224.058,945.017Zm-8.35-3.566c.1.4.247,1,.4,1.6.794-.422.408-1.224.578-1.847a1.138,1.138,0,0,0-.13-.593c-.031-.087-.163-.221-.22-.207a.774.774,0,0,0-.453.232A3.008,3.008,0,0,0,1215.708,941.451Zm-13.013,7.216a5.882,5.882,0,0,0-.05-.628.9.9,0,0,0-.159-.269,3.038,3.038,0,0,0-.249.731c-.01.133.181.279.28.417C1202.576,948.836,1202.636,948.75,1202.695,948.667Z"
            transform="translate(-1157.5 -919.916)"
            fill-rule="evenodd"/>
        </svg>
      </div>
      <div
        class="w-[350px] h-[400px] animate__animated dark:bg-gray-900 flex-col fixed rounded-2xl cursor-auto hidden support z-50 bottom-18 ed:bottom-26 right-3 bg-red-700 border-1 border-[#a1a3a8]"
      >
        <div class="w-full h-1/6 flex">
          <svg
            height="80px"
            class="cursor-pointer close1 h-[80px] block mb-3 fill-white"
            width="80px"
            viewBox="0 0 40 40"
          >
            <g>
              <g>
                <g>
                  <path
                    fill=""
                    d="M20,28.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S24.7,28.5,20,28.5z M20,12.5
      c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S24.1,12.5,20,12.5z"
                  ></path>
                </g>
                <g>
                  <path
                    fill=""
                    d="M22.1,22.6c-0.1,0-0.3,0-0.4-0.1l-4.2-4.2c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l4.2,4.2
      c0.2,0.2,0.2,0.5,0,0.7C22.3,22.5,22.2,22.6,22.1,22.6z"
                  ></path>
                </g>
                <g>
                  <path
                    fill=""
                    d="M17.9,22.6c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l4.2-4.2c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
      l-4.2,4.2C18.2,22.5,18,22.6,17.9,22.6z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p class="text-center text-white mt-[7px] flex items-center">
            پشتیبانی آنلاین
          </p>
        </div>
        <div
          class="w-full px-8 py-3 h-5/6 bg-white dark:bg-gray-700 rounded-b-2xl overflow-auto"
        >
          <p>
            سلام👋👋
            <br />
            اینجا می‌توانید تعدادی از پرسش های متداول را ببینید!
          </p>
          <div class="">
            <p
              class="text-[#535353] text-sm flex items-center cursor-pointer mt-3 dark:text-[#b4afaf] question"
            >
              چگونه میتوانم یک پروفایل ایجاد کنم؟<svg
                id="expandMore"
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 fill-[#535353]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"
                ></path>
              </svg>
            </p>
            <div class="answer hidden text-justify mt-1">
              در وب سایت روی گزینه "ثبت نام" کلیک کنید. میتوانید با استفاده از
              شماره موبایل ثبت نام خود را انجام دهید. (کد فعال سازی برایتان
              پیامک میشود .) بعد از وارد نمودن کد فعالسازی ، ثبت نام انجام می
              شود. سپس روی گزینه تکمیل اطلاعات کلیک و اطلاعات خود را تکمیل
              نمایید.
            </div>
            <p
              class="text-[#535353] text-sm flex items-center cursor-pointer mt-3 dark:text-[#b4afaf] question2"
            >
              چطور در سایت سفارش خود را ثبت کنم ؟<svg
                id="expandMore"
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 fill-[#535353]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"
                ></path>
              </svg>
            </p>
            <div class="answer2 hidden text-justify mt-1">
              بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید اضافه کنید
              ، پس از انتخاب آدرس میتوانید نوع پرداخت خود را انتخاب کنید.بعد از
              اتمام ثبت سفارش ، سیستم کد سفارش شما را نمایش خواهد داد.
            </div>
            <p
              class="text-[#535353] text-sm flex items-center cursor-pointer mt-3 dark:text-[#b4afaf] question3"
            >
              کالایی را که در طرح پیشنهاد شگفت انگیز می باشد می توان با تعداد
              بیش از یک عدد خریداری کرد؟
              <svg
                id="expandMore"
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 fill-[#535353]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
              </svg>
            </p>
            <div class="answer3 hidden text-justify mt-1">
              به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است،
              دیجی‌کالا تعهدی در قبال سفارش‏‌های تعدادی ندارد و در صورتی که
              امکان فروش بیشتر از یک عدد وجود داشته باشد، هماهنگی‏‌های لازم با
              مشتری انجام خواهد شد.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end-bottom-btn-->
`,x0=()=>{let l=document.querySelector(".close1"),e=document.querySelector(".bottom-btn"),t=document.querySelector(".support"),s=document.querySelector(".question"),a=document.querySelector(".answer"),i=document.querySelector(".question2"),o=document.querySelector(".answer2"),r=document.querySelector(".question3"),p=document.querySelector(".answer3");e.addEventListener("click",()=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.remove("flex"),t.classList.add("hidden"))}),l.addEventListener("click",()=>{t.classList.remove("flex"),t.classList.add("hidden")}),s.addEventListener("click",()=>{a.classList.contains("hidden")?(a.classList.remove("hidden"),a.classList.add("flex")):(a.classList.remove("flex"),a.classList.add("hidden"))}),i.addEventListener("click",()=>{o.classList.contains("hidden")?(o.classList.remove("hidden"),o.classList.add("flex")):(o.classList.remove("flex"),o.classList.add("hidden"))}),r.addEventListener("click",()=>{p.classList.contains("hidden")?(p.classList.remove("hidden"),p.classList.add("flex")):(p.classList.remove("flex"),p.classList.add("hidden"))})},h0=`
    <!--start-dark-btn-->
    <div class="w-full h-auto flex justify-center items-center ed:block">
      <div
        class="sm:p-2 ed:p-0 ed:w-[50px] ed:h-[50px] justify-center ed:bottom-10 rounded-full ed:left-6 bottom-6 flex fixed items-center dark:bg-gray-500 bg-yellow-400 cursor-pointer z-40 dark-btn"
      >
<svg version="1.1" width="30px" height="30px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path style="fill:#000000;" d="M144.777,207.493h-14.94v-14.94c0-9.267-7.514-16.783-16.783-16.783s-16.783,7.515-16.783,16.783 v14.94H81.33c-9.269,0-16.783,7.515-16.783,16.783s7.514,16.783,16.783,16.783h14.941v14.94c0,9.267,7.514,16.783,16.783,16.783 c9.269,0,16.783-7.515,16.783-16.783v-14.94h14.94c9.269,0,16.783-7.515,16.783-16.783S154.046,207.493,144.777,207.493z"/> <path style="fill:transparent;" d="M423.941,79.796c-15.667-15.666-32.934-28.737-51.276-39.234 c53.224,92.95,40.166,213.516-39.211,292.892s-199.942,92.435-292.891,39.211c10.497,18.342,23.568,35.609,39.234,51.276 c95.031,95.031,249.113,95.031,344.144,0S518.974,174.827,423.941,79.796z"/> <path style="fill:#000000;" d="M441.124,430.321c1.307-1.385,2.605-2.777,3.877-4.186c0.06-0.067,0.119-0.136,0.178-0.201 c43.185-47.845,66.816-109.139,66.816-174.067s-23.63-126.22-66.815-174.065c-0.06-0.067-0.117-0.136-0.178-0.201 c-1.274-1.408-2.569-2.799-3.877-4.186c-0.228-0.242-0.45-0.488-0.678-0.73c-1.524-1.601-3.068-3.187-4.637-4.756 c-1.853-1.853-3.737-3.664-5.639-5.456c-0.361-0.339-0.72-0.68-1.082-1.017c-1.918-1.787-3.858-3.548-5.824-5.273 c-0.134-0.117-0.272-0.233-0.406-0.351c-2.037-1.781-4.1-3.528-6.188-5.241c-0.069-0.055-0.136-0.112-0.203-0.168 c-2.182-1.787-4.394-3.534-6.629-5.248c-0.069-0.054-0.139-0.106-0.21-0.159c-4.536-3.469-9.18-6.782-13.926-9.937 c-0.008-0.005-0.017-0.012-0.025-0.017c-9.665-6.424-19.748-12.203-30.219-17.281c-14.79-7.183-30.351-12.973-46.251-17.212 c-5.785-1.547-11.958,0.112-16.192,4.352c-4.234,4.236-5.889,10.407-4.345,16.193c11.368,42.569,10.174,87.194-3.456,129.048 c-2.87,8.814,1.948,18.286,10.761,21.154c8.813,2.871,18.285-1.947,21.154-10.761c12.525-38.459,15.901-78.952,10.056-118.639 c4.608,1.871,9.155,3.894,13.619,6.06c3.227,1.566,6.399,3.226,9.541,4.941c47.923,87.779,32.288,197.631-38.756,268.675 c-42.782,42.782-99.668,66.343-160.183,66.346c-37.986,0.002-75.396-9.558-108.518-27.636c-1.707-3.13-3.36-6.29-4.917-9.502 c-2.172-4.474-4.196-9.026-6.069-13.643c80.695,11.76,163.502-15.088,221.833-73.419c6.554-6.554,6.554-17.18,0-23.736 c-6.554-6.552-17.18-6.552-23.736,0c-57.017,57.02-140.889,79.499-218.888,58.668c-5.785-1.542-11.958,0.111-16.193,4.343 c-4.236,4.233-5.896,10.404-4.353,16.192c4.234,15.886,10.024,31.447,17.209,46.246c5.078,10.469,10.855,20.55,17.278,30.214 c0.01,0.017,0.022,0.034,0.032,0.049c3.148,4.736,6.455,9.37,9.915,13.896c0.06,0.081,0.123,0.161,0.183,0.24 c1.707,2.227,3.449,4.431,5.229,6.606c0.064,0.077,0.129,0.154,0.193,0.233c1.703,2.074,3.439,4.125,5.209,6.149 c0.126,0.143,0.248,0.289,0.374,0.431c1.72,1.959,3.474,3.892,5.255,5.803c0.346,0.371,0.695,0.74,1.042,1.109 c1.787,1.896,3.595,3.778,5.443,5.625c49.131,49.131,114.455,76.189,183.94,76.189c69.483,0,134.807-27.058,183.94-76.189 c1.569-1.569,3.113-3.155,4.637-4.756C440.676,430.81,440.896,430.563,441.124,430.321z M412.074,412.072 c-42.792,42.792-99.687,66.36-160.204,66.36c-60.52,0-117.414-23.568-160.206-66.36c-0.029-0.029-0.057-0.06-0.086-0.089 c22.63,6.285,46.137,9.517,69.829,9.516c69.478-0.003,134.794-27.057,183.915-76.178c67.315-67.316,91.299-164.984,66.694-253.715 c0.018,0.018,0.039,0.037,0.059,0.055c52.45,52.449,73.759,124.431,63.925,192.749c-1.035,7.191-2.415,14.342-4.14,21.425 c-0.863,3.541-1.811,7.067-2.846,10.571c-0.517,1.752-1.057,3.499-1.618,5.241c-1.121,3.482-2.329,6.945-3.623,10.38 c-1.294,3.435-2.675,6.846-4.14,10.227s-3.019,6.735-4.659,10.056c-0.819,1.661-1.661,3.313-2.524,4.958 c-1.725,3.288-3.538,6.542-5.434,9.759C437.523,383.115,425.877,398.27,412.074,412.072z"/> </g>
</svg>
      </div>
    </div>
    <!--end-dark-btn -->
`,g0=()=>{let l=document.querySelector("html"),e=document.querySelector(".dark-btn"),t=!0;e.addEventListener("click",()=>{t?(l.classList.add("dark"),e.innerHTML=`
             <svg width="30px" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.984 511.984" xml:space="preserve" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <path style="fill:#000000;" d="M255.992,85.333c-5.891,0-10.656-4.781-10.656-10.671V10.664C245.336,4.773,250.102,0,255.992,0 c5.906,0,10.672,4.773,10.672,10.664v63.998C266.664,80.552,261.898,85.333,255.992,85.333z"/> <path style="fill:#000000;" d="M255.992,511.984C255.992,511.984,256.008,511.984,255.992,511.984 c-5.875,0-10.656-4.781-10.656-10.656v-63.997c0-5.906,4.781-10.688,10.672-10.688l0,0c5.891,0,10.656,4.781,10.656,10.688v63.997 C266.664,507.203,261.898,511.984,255.992,511.984z"/> </g> <g> <path style="fill:#000000;" d="M135.324,135.316c-4.172,4.164-10.922,4.164-15.078,0L74.982,90.06 c-4.156-4.164-4.156-10.914,0-15.078c4.172-4.172,10.922-4.172,15.094,0l45.248,45.248 C139.496,124.394,139.496,131.152,135.324,135.316z"/> <path style="fill:#000000;" d="M437.018,437.003L437.018,437.003c-4.172,4.172-10.922,4.172-15.094,0l-45.249-45.25 c-4.172-4.172-4.172-10.921,0-15.077l0,0c4.172-4.172,10.922-4.172,15.094,0l45.249,45.249 C441.174,426.081,441.174,432.831,437.018,437.003z"/> </g> <g> <path style="fill:#000000;" d="M85.342,255.992c0,5.891-4.781,10.664-10.672,10.664H10.672c-5.891,0-10.656-4.773-10.672-10.664 c0-5.891,4.781-10.664,10.672-10.664H74.67C80.56,245.328,85.342,250.101,85.342,255.992z"/> <path style="fill:#000000;" d="M511.984,255.992L511.984,255.992c0,5.891-4.766,10.664-10.656,10.664h-63.997 c-5.891,0-10.672-4.773-10.672-10.664l0,0c0-5.891,4.781-10.664,10.672-10.664h63.997 C507.219,245.328,511.984,250.101,511.984,255.992z"/> </g> <g> <path style="fill:#000000;" d="M135.324,376.676c4.172,4.156,4.172,10.905,0,15.077l-45.248,45.25 c-4.172,4.172-10.922,4.172-15.094,0c-4.156-4.172-4.156-10.922,0-15.078l45.264-45.249 C124.402,372.504,131.152,372.504,135.324,376.676z"/> <path style="fill:#000000;" d="M437.018,74.974C437.018,74.982,437.018,74.974,437.018,74.974c4.155,4.171,4.155,10.921,0,15.085 l-45.265,45.256c-4.156,4.164-10.906,4.164-15.078,0l0,0c-4.172-4.164-4.172-10.922,0-15.086l45.249-45.256 C426.096,70.81,432.846,70.81,437.018,74.974z"/> <path style="fill:transparent;" d="M255.992,394.643c-76.45,0-138.651-62.186-138.651-138.651c0-76.458,62.201-138.66,138.651-138.66 c76.467,0,138.668,62.202,138.668,138.66C394.66,332.458,332.459,394.643,255.992,394.643z"/> </g> <path style="fill:#000000;" d="M255.992,106.661c-82.466,0-149.323,66.857-149.323,149.331c0,82.466,66.857,149.339,149.323,149.339 c82.482,0,149.34-66.873,149.34-149.339C405.332,173.518,338.474,106.661,255.992,106.661z M346.505,346.489 c-24.171,24.187-56.311,37.498-90.513,37.498c-34.187,0-66.326-13.312-90.497-37.498c-24.171-24.155-37.499-56.311-37.499-90.497 s13.328-66.334,37.499-90.505c24.171-24.178,56.311-37.491,90.497-37.491c34.202,0,66.342,13.313,90.513,37.491 c24.171,24.171,37.483,56.319,37.483,90.505C383.988,290.179,370.676,322.334,346.505,346.489z"/> </g>
</svg>
    `,t=!1):(l.classList.remove("dark"),e.innerHTML=`
      <svg version="1.1" width="30px" height="30px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path style="fill:#000000;" d="M144.777,207.493h-14.94v-14.94c0-9.267-7.514-16.783-16.783-16.783s-16.783,7.515-16.783,16.783 v14.94H81.33c-9.269,0-16.783,7.515-16.783,16.783s7.514,16.783,16.783,16.783h14.941v14.94c0,9.267,7.514,16.783,16.783,16.783 c9.269,0,16.783-7.515,16.783-16.783v-14.94h14.94c9.269,0,16.783-7.515,16.783-16.783S154.046,207.493,144.777,207.493z"/> <path style="fill:transparent;" d="M423.941,79.796c-15.667-15.666-32.934-28.737-51.276-39.234 c53.224,92.95,40.166,213.516-39.211,292.892s-199.942,92.435-292.891,39.211c10.497,18.342,23.568,35.609,39.234,51.276 c95.031,95.031,249.113,95.031,344.144,0S518.974,174.827,423.941,79.796z"/> <path style="fill:#000000;" d="M441.124,430.321c1.307-1.385,2.605-2.777,3.877-4.186c0.06-0.067,0.119-0.136,0.178-0.201 c43.185-47.845,66.816-109.139,66.816-174.067s-23.63-126.22-66.815-174.065c-0.06-0.067-0.117-0.136-0.178-0.201 c-1.274-1.408-2.569-2.799-3.877-4.186c-0.228-0.242-0.45-0.488-0.678-0.73c-1.524-1.601-3.068-3.187-4.637-4.756 c-1.853-1.853-3.737-3.664-5.639-5.456c-0.361-0.339-0.72-0.68-1.082-1.017c-1.918-1.787-3.858-3.548-5.824-5.273 c-0.134-0.117-0.272-0.233-0.406-0.351c-2.037-1.781-4.1-3.528-6.188-5.241c-0.069-0.055-0.136-0.112-0.203-0.168 c-2.182-1.787-4.394-3.534-6.629-5.248c-0.069-0.054-0.139-0.106-0.21-0.159c-4.536-3.469-9.18-6.782-13.926-9.937 c-0.008-0.005-0.017-0.012-0.025-0.017c-9.665-6.424-19.748-12.203-30.219-17.281c-14.79-7.183-30.351-12.973-46.251-17.212 c-5.785-1.547-11.958,0.112-16.192,4.352c-4.234,4.236-5.889,10.407-4.345,16.193c11.368,42.569,10.174,87.194-3.456,129.048 c-2.87,8.814,1.948,18.286,10.761,21.154c8.813,2.871,18.285-1.947,21.154-10.761c12.525-38.459,15.901-78.952,10.056-118.639 c4.608,1.871,9.155,3.894,13.619,6.06c3.227,1.566,6.399,3.226,9.541,4.941c47.923,87.779,32.288,197.631-38.756,268.675 c-42.782,42.782-99.668,66.343-160.183,66.346c-37.986,0.002-75.396-9.558-108.518-27.636c-1.707-3.13-3.36-6.29-4.917-9.502 c-2.172-4.474-4.196-9.026-6.069-13.643c80.695,11.76,163.502-15.088,221.833-73.419c6.554-6.554,6.554-17.18,0-23.736 c-6.554-6.552-17.18-6.552-23.736,0c-57.017,57.02-140.889,79.499-218.888,58.668c-5.785-1.542-11.958,0.111-16.193,4.343 c-4.236,4.233-5.896,10.404-4.353,16.192c4.234,15.886,10.024,31.447,17.209,46.246c5.078,10.469,10.855,20.55,17.278,30.214 c0.01,0.017,0.022,0.034,0.032,0.049c3.148,4.736,6.455,9.37,9.915,13.896c0.06,0.081,0.123,0.161,0.183,0.24 c1.707,2.227,3.449,4.431,5.229,6.606c0.064,0.077,0.129,0.154,0.193,0.233c1.703,2.074,3.439,4.125,5.209,6.149 c0.126,0.143,0.248,0.289,0.374,0.431c1.72,1.959,3.474,3.892,5.255,5.803c0.346,0.371,0.695,0.74,1.042,1.109 c1.787,1.896,3.595,3.778,5.443,5.625c49.131,49.131,114.455,76.189,183.94,76.189c69.483,0,134.807-27.058,183.94-76.189 c1.569-1.569,3.113-3.155,4.637-4.756C440.676,430.81,440.896,430.563,441.124,430.321z M412.074,412.072 c-42.792,42.792-99.687,66.36-160.204,66.36c-60.52,0-117.414-23.568-160.206-66.36c-0.029-0.029-0.057-0.06-0.086-0.089 c22.63,6.285,46.137,9.517,69.829,9.516c69.478-0.003,134.794-27.057,183.915-76.178c67.315-67.316,91.299-164.984,66.694-253.715 c0.018,0.018,0.039,0.037,0.059,0.055c52.45,52.449,73.759,124.431,63.925,192.749c-1.035,7.191-2.415,14.342-4.14,21.425 c-0.863,3.541-1.811,7.067-2.846,10.571c-0.517,1.752-1.057,3.499-1.618,5.241c-1.121,3.482-2.329,6.945-3.623,10.38 c-1.294,3.435-2.675,6.846-4.14,10.227s-3.019,6.735-4.659,10.056c-0.819,1.661-1.661,3.313-2.524,4.958 c-1.725,3.288-3.538,6.542-5.434,9.759C437.523,383.115,425.877,398.27,412.074,412.072z"/> </g>

</svg>
    `,t=!0)})};e0(t0,i0,a0,r0,l0,o0,u0,d0,h0);n0();c0();Z2();J2();Q2();p0();g0();x0();s0();
