import{r as x,v as S,c as b,a as l,u as o,w as n,F as m,o as i,X as j,b as d,t as c,d as t,g as B,e as C,f as O,n as p,h as y,i as A,j as D,O as N}from"./app-c29ccfd3.js";import{P as V}from"./PrimaryButton-8b9535d3.js";import{H as v}from"./HeadRow-ac76cc75.js";import{_ as I}from"./Paginate-47414170.js";import{A as T}from"./AuthenticatedLayout-d57ac5a1.js";import{f as $}from"./helper-449b5e06.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                                */const E={class:"my-3 p-3 bg-body rounded shadow-sm"},F=["onSubmit"],H={class:"row mb-3"},K={class:"col-md-3"},L={class:"form-floating mb-3"},M=t("label",{for:"keywordInput"},"Keyword",-1),P={class:"col-12"},z=t("i",{class:"bi bi-search"},null,-1),G={class:"d-grid gap-2 d-md-flex justify-content-md-end mb-3"},R=t("i",{class:"bi bi-plus"},null,-1),U={class:"table table-bordered table-striped table-hover"},X={width:"10%"},q=t("i",{class:"bi bi-pencil"},null,-1),J=["onClick"],Q=t("i",{class:"bi bi-trash"},null,-1),W=[Q],it={__name:"Index",props:{header:{type:Object},filters:{type:Object},list:{type:Object,default:()=>({})}},setup(a){const w=a,u="annoucements",_=x("Annoucements"),s=S(w.filters),g=r=>{s.sort.field=r,s.sort.direction=s.sort.direction==""||s.sort.direction=="desc"?"asc":"desc",h()},h=()=>{s.get(route(u+".index"),{preserveScroll:!0})},k=(r,f)=>{confirm(`Delete this annoucement ${f} ?`)&&N.delete(route(u+".destroy",r))};return(r,f)=>(i(),b(m,null,[l(o(j),{title:_.value},null,8,["title"]),l(T,null,{header:n(()=>[d(c(_.value),1)]),default:n(()=>[t("div",E,[t("form",{onSubmit:B(h,["prevent"])},[t("div",H,[t("div",K,[t("div",L,[C(t("input",{"onUpdate:modelValue":f[0]||(f[0]=e=>o(s).keyword=e),type:"text",class:"form-control",id:"keywordInput",placeholder:"Keyword",autocomplete:"off"},null,512),[[O,o(s).keyword]]),M])]),t("div",P,[l(V,{type:"submit",disabled:o(s).processing},{default:n(()=>[z,d(" Search ")]),_:1},8,["disabled"])])])],40,F),t("div",G,[l(o(p),{class:"btn btn-outline-primary btn-sm",href:r.route(u+".create")},{default:n(()=>[R,d(" Create ")]),_:1},8,["href"])]),t("table",U,[t("thead",null,[t("tr",null,[l(v,null,{default:n(()=>[d("Actions")]),_:1}),(i(!0),b(m,null,y(a.header,e=>(i(),A(v,{field:e.field,sort:e.sortable?a.filters.sort:null,onSortEvent:g,disabled:o(s).processing},{default:n(()=>[d(c(e.title),1)]),_:2},1032,["field","sort","disabled"]))),256))])]),t("tbody",null,[(i(!0),b(m,null,y(a.list.data,(e,Y)=>(i(),b("tr",null,[t("td",X,[l(o(p),{href:r.route(u+".edit",e.id),class:"btn btn-sm btn-link"},{default:n(()=>[q]),_:2},1032,["href"]),t("button",{onClick:Z=>k(e.id,e.code),class:"btn btn-sm btn-link"},W,8,J)]),t("td",{class:D(e.active==0?"text-danger":"")},c(e.title),3),t("td",null,c(e.content),1),t("td",null,c(o($)(e.created_at)),1)]))),256))])]),l(I,{data:a.list},null,8,["data"])])]),_:1})],64))}};export{it as default};
