(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["guide/dropdown"],{a540:function(s,a,t){"use strict";t.r(a);const n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("h1",{staticClass:"uk-h1 tm-heading-fragment"},[s._v("Dropdown")]),t("p",{staticClass:"uk-text-lead"},[s._v("Defines different styles for a toggleable dropdown.")]),s._v(" "),s._m(0),s._m(1),s._v(" "),s._m(2),t("p",[s._v("Basically, a dropdown is a Drop component providing it own styling. The following sections shows the Dropdown specific features, for the rest make sure to read about the "),t("router-link",{staticClass:"tm-internal-link",attrs:{to:"drop"}},[s._v("Drop component")]),s._v(".")],1),s._v(" "),t("hr",{staticClass:"uk-margin-large"}),s._m(3),t("p",[s._v("A dropdown can contain a nav from the "),t("router-link",{staticClass:"tm-internal-link",attrs:{to:"nav"}},[s._v("Nav component")]),s._v(". Simply use the "),t("code",[s._v("vk-nav-dropdown")]),s._v(" component.")],1),s._v(" "),s._m(4),t("md-code-example-23")],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"usage"}},[t("a",{attrs:{href:"#usage"}},[s._v("Usage")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("Any content, like a button, can toggle a dropdown. Add the "),t("code",[s._v("vk-dropdown")]),s._v(" component to a block element following the toggle.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"uk-margin-medium"},[t("pre",[t("code",{staticClass:"lang-html hljs"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"nav-in-dropdown"}},[t("a",{attrs:{href:"#nav-in-dropdown"}},[s._v("Nav in dropdown")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"uk-margin-medium"},[t("pre",[t("code",{staticClass:"lang-html hljs"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-dropdown")]),s._v(">")]),s._v("..."),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-dropdown")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")])])])])}],data:function(){return{}},scrollToTop:!0,sections:[{id:"usage",title:"Usage"},{id:"nav-in-dropdown",title:"Nav in dropdown"}],components:{"md-code-example-23":{render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"uk-position-relative uk-margin-medium"},[t("vk-tabs",{staticClass:"uk-margin"},[t("vk-tabs-item",{attrs:{title:"Preview"}},[t("vk-button",[s._v("Hover")]),s._v(" "),t("vk-dropdown",[t("vk-nav-dropdown",[t("vk-nav-item",{attrs:{title:"Active",active:""}}),s._v(" "),t("vk-nav-item",{attrs:{title:"Item"}}),s._v(" "),t("vk-nav-item-header",{attrs:{title:"Header"}}),s._v(" "),t("vk-nav-item",{attrs:{title:"Item"}}),s._v(" "),t("vk-nav-item",{attrs:{title:"Item"}}),s._v(" "),t("vk-nav-item-divider"),s._v(" "),t("vk-nav-item",{attrs:{title:"Item"}})],1)],1)],1),s._v(" "),t("vk-tabs-item",{attrs:{title:"Markup"}},[t("pre",[t("code",{staticClass:"lang-html hljs",attrs:{id:"23"}},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),s._v("Hover"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-dropdown")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Active"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("active")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Item"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item-header")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Header"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item-header")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Item"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Item"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item-divider")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item-divider")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Item"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-nav-dropdown")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")])])])])],1)],1)},data:function(){return{}}}}};a["default"]=n}}]);
//# sourceMappingURL=dropdown.944b5e02.js.map