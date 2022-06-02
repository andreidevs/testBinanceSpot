exports.ids = [1];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiffList.vue?vue&type=template&id=5b6d48ff&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('a-tag',{staticClass:"w-full mx-2",attrs:{"color":"#108ee9"}},[_vm._v(" Symbol = "+_vm._s(_vm.currentSymbol)+" ")]),_vm._ssrNode(" "),_c('a-select',{staticClass:"ml-2 mt-4",staticStyle:{"width":"220px"},attrs:{"default-value":"BTCUSDT"},on:{"select":_vm.select},model:{value:(_vm.currentSymbol),callback:function ($$v) {_vm.currentSymbol=$$v},expression:"currentSymbol"}},_vm._l((_vm.options),function(item,index){return _c('a-select-option',{key:index,attrs:{"value":item}},[_vm._v("\n      "+_vm._s(item)+"\n    ")])}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DiffList.vue?vue&type=template&id=5b6d48ff&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiffList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DiffListvue_type_script_lang_js_ = ({
  name: "DiffList",
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT"
  }),
  methods: {
    select(val) {
      this.$emit("select");
      this.$bus.$emit("symbol", this.currentSymbol);
    }

  }
});
// CONCATENATED MODULE: ./components/DiffList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiffListvue_type_script_lang_js_ = (DiffListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/DiffList.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiffListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5b6d48ff",
  "9390df14"
  
)

/* harmony default export */ var DiffList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=diff-list.js.map