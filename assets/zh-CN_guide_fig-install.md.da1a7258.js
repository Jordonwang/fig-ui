import{_ as s,c as a,o as n,e as l}from"./app.fcddb301.js";const h=JSON.parse('{"title":"\u4F7F\u7528 fig-ui","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u73AF\u5883\u652F\u6301","slug":"\u73AF\u5883\u652F\u6301"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"1. \u4F7F\u7528\u5305\u7BA1\u7406\u5668","slug":"_1-\u4F7F\u7528\u5305\u7BA1\u7406\u5668"},{"level":2,"title":"\u5FEB\u901F\u5F00\u59CB","slug":"\u5FEB\u901F\u5F00\u59CB"},{"level":3,"title":"1. \u5B8C\u6574\u5F15\u5165","slug":"_1-\u5B8C\u6574\u5F15\u5165"},{"level":3,"title":"2. \u6309\u9700\u5F15\u5165","slug":"_2-\u6309\u9700\u5F15\u5165"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"zh-CN/guide/fig-install.md"}'),p={name:"zh-CN/guide/fig-install.md"},e=l(`<h1 id="\u4F7F\u7528-fig-ui" tabindex="-1">\u4F7F\u7528 <code>fig-ui</code> <a class="header-anchor" href="#\u4F7F\u7528-fig-ui" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 fig-ui\u3002</p><h2 id="\u73AF\u5883\u652F\u6301" tabindex="-1">\u73AF\u5883\u652F\u6301 <a class="header-anchor" href="#\u73AF\u5883\u652F\u6301" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u5F53\u524D\u5C01\u88C5\u6240\u4F7F\u7528\u7684\u5E93\u7248\u672C</p><ul><li>vue \u7248\u672C\u4E3A\uFF1A <code>3.2.+</code></li></ul></div><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="_1-\u4F7F\u7528\u5305\u7BA1\u7406\u5668" tabindex="-1">1. \u4F7F\u7528\u5305\u7BA1\u7406\u5668 <a class="header-anchor" href="#_1-\u4F7F\u7528\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># NPM</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install fig-ui</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn install fig-ui</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm install fig-ui</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h2><h3 id="_1-\u5B8C\u6574\u5F15\u5165" tabindex="-1">1. \u5B8C\u6574\u5F15\u5165 <a class="header-anchor" href="#_1-\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a></h3><p><code>fig-ui</code> \u5C06\u4F1A\u5728Vue\u5E94\u7528\u4E2D\u8FDB\u884C<strong>\u5168\u5C40\u7EC4\u4EF6\u6CE8\u518C</strong>\u3002</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> figUi </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fig-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fig-ui/dist/style.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(figUi)</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-\u6309\u9700\u5F15\u5165" tabindex="-1">2. \u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#_2-\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u9700\u8981\u5728\u4F7F\u7528\u7EC4\u4EF6\u7684\u5730\u65B9\u624B\u52A8\u5BF9 <code>fig-ui</code> \u8FDB\u884C\u5BFC\u5165\u3002</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fig-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">\u5173\u4E8E\u539F\u751F\u5E93</p><p>\u7EC4\u4EF6\u5E93\u6253\u5305\u65F6\u4F1A\u5BF9\u7B2C\u4E09\u65B9\u5305\u5982 <code>vue</code> \u8FDB\u884C <code>externals</code> \u5904\u7406\uFF0C\u6240\u4EE5\u52A1\u5FC5\u4FDD\u8BC1\u4F7F\u7528\u7EC4\u4EF6\u7684\u9879\u76EE\u4E2D\u5BFC\u5165\u5FC5\u987B\u8981\u7684\u7B2C\u4E09\u65B9\u5E93\u3002</p></div>`,16),o=[e];function t(c,i,r,D,y,d){return n(),a("div",null,o)}var A=s(p,[["render",t]]);export{h as __pageData,A as default};