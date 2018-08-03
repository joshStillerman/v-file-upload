module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader??ref--4-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/FileUpload.vue?vue&type=style&index=0&lang=stylus& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/*!************************************!*\
  !*** multi ./src/v-file-upload.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jas/NDM/v-file-upload/src/v-file-upload.js */4);


/***/ }),
/* 2 */
/*!****************************************************************!*\
  !*** ./src/FileUpload.vue?vue&type=style&index=0&lang=stylus& ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_4_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader??ref--4-oneOf-2-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/stylus-loader??ref--4-oneOf-2-2!../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=style&index=0&lang=stylus& */ 0);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_4_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_4_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_4_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */,
/* 4 */
/*!******************************************!*\
  !*** ./src/v-file-upload.js + 7 modules ***!
  \******************************************/
/*! exports provided: FileUploadService, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/FileUpload.vue?vue&type=template&id=b603d272&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"file-upload"},[(_vm.thumbUrl(_vm.anexo))?_c('div',{staticClass:"thumb-preview"},[_c('div',{staticClass:"thumb-preview-item"},[_c('img',{attrs:{"src":_vm.thumbUrl(_vm.anexo)}})])]):_vm._e(),_c('div',{staticClass:"input-wrapper",style:(_vm.inputWrapperStyle)},[_c('input',{attrs:{"id":"file-upload-input","type":"file","name":"file","accept":_vm.accept,"multiple":false,"disabled":_vm.uploading},on:{"change":_vm.onChangeInputFile}}),_c('label',{staticClass:"file-upload-label",attrs:{"for":"file-upload-input"}},[_c('span',{staticClass:"file-upload-icon",class:{'file-upload-icon-pulse': _vm.uploading}},[_vm._v("⇪")]),_c('div',[_vm._v(_vm._s(_vm.uploading ? _vm.btnUploadingLabel : _vm.btnLabel))])]),_c('div',{staticClass:"file-upload-progress",style:(_vm.progressStyle)})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/FileUpload.vue?vue&type=template&id=b603d272&lang=pug&

// CONCATENATED MODULE: ./src/FileUpload.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FileUpload =
/*#__PURE__*/
function () {
  function FileUpload(url) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var onProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    _classCallCheck(this, FileUpload);

    this.url = url;
    this.headers = headers;
    this.onProgress = onProgress;
  }

  _createClass(FileUpload, [{
    key: "upload",
    value: function upload(file) {
      var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      console.log("in upload- multipart");
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json'; // Headers

      xhr.open('POST', this.url, true);

      this._setXhrHeaders(xhr); // Events


      xhr.upload.addEventListener('progress', this.onProgress, false);
      var promise = new Promise(function (resolve, reject) {
        xhr.onload = function (e) {
          return xhr.status >= 200 && xhr.status < 400 ? resolve(e) : reject(e);
        };

        xhr.onerror = function (e) {
          return reject(e);
        };
      }); //    var reader = new FileReader()
      //    reader.onloadend = ((evt) => {
      //      xhr.send(evt.target.result)
      //    })
      //    reader.readAsBinaryString(file)
      // Start upload

      var formData = new FormData();
      formData.append('file', file);
      Object.keys(additionalData).forEach(function (p) {
        formData.append(p, additionalData[p]);
      });
      xhr.send(file); //

      return promise;
    }
  }, {
    key: "_setXhrHeaders",
    value: function _setXhrHeaders(xhr) {
      var _this = this;

      Object.keys(this.headers).forEach(function (p) {
        return xhr.setRequestHeader(p, _this.headers[p]);
      });
    }
  }]);

  return FileUpload;
}();

/* harmony default export */ var src_FileUpload = (FileUpload);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileUpload.vue?vue&type=script&lang=js&
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

/* harmony default export */ var FileUploadvue_type_script_lang_js_ = ({
  props: {
    url: {
      type: String,
      required: true
    },
    thumbUrl: {
      type: Function,
      default: function _default() {}
    },
    accept: {
      type: String,
      default: '.png,.jpg'
    },
    headers: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    btnLabel: {
      type: String,
      default: 'Select a file'
    },
    btnUploadingLabel: {
      type: String,
      default: 'Uploading file'
    },
    maxSize: {
      type: Number,
      default: 15728640
    },
    // 15Mb
    additionalData: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      progress: 0,
      anexo: {}
    };
  },
  computed: {
    uploading: function uploading() {
      return this.progress > 0;
    },
    progressStyle: function progressStyle() {
      return {
        width: "".concat(this.progress, "%"),
        display: this.uploading ? 'block' : 'none'
      };
    },
    inputWrapperStyle: function inputWrapperStyle() {
      return {
        opacity: this.uploading ? '0.7' : '1'
      };
    }
  },
  methods: {
    onChangeInputFile: function onChangeInputFile(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var file = files[0];
      console.log(file);
      this.$emit('update:filename', file.name);

      if (file.size > this.maxsize) {
        this.$emit('error', {
          code: 'max_size_exceded',
          message: "File max size exceded, upload a file smaller than ".concat(this.maxSize)
        });
        return;
      }

      this.upload(file);
    },
    upload: function upload(file) {
      var _this = this;

      this.progress = 0.1;
      var fileUpload = new src_FileUpload(this.url, this.headers, this.onProgress);
      fileUpload.upload(file, this.additionalData).then(function (e) {
        _this.anexo = e.target.response;

        _this.onChangeAnexo();

        _this.$emit('success', e);

        _this.progress = 0;

        _this.cleanInput();
      }).catch(function (e) {
        _this.$emit('error', e);

        _this.progress = 0;

        _this.cleanInput();
      });
    },
    cleanInput: function cleanInput() {
      var input = window.document.getElementById('file-upload-input');

      if (input) {
        input.value = '';
      }
    },
    onProgress: function onProgress(e) {
      this.progress = parseInt(e.loaded * 100 / e.total);
      this.$emit('progress', this.progress);
    },
    onChangeAnexo: function onChangeAnexo() {
      this.$emit('change', this.anexo);
    }
  }
});
// CONCATENATED MODULE: ./src/FileUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_FileUploadvue_type_script_lang_js_ = (FileUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/FileUpload.vue?vue&type=style&index=0&lang=stylus&
var FileUploadvue_type_style_index_0_lang_stylus_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/FileUpload.vue






/* normalize component */

var component = normalizeComponent(
  src_FileUploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_FileUpload_0 = (component.exports);
// CONCATENATED MODULE: ./src/v-file-upload.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return src_FileUpload; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// need to use require instead of import (changes from babel 5 to 6)



/* harmony default export */ var v_file_upload = __webpack_exports__["default"] = (_objectSpread({}, src_FileUpload_0, {
  install: function install(vue) {
    return vue.component('file-upload', src_FileUpload_0);
  }
}));

/***/ })
/******/ ]);