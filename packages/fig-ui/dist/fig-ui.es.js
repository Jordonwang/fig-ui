import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createStaticVNode, createTextVNode } from "vue";
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
function _bem(prefixName, blockName, elementName, modifierName) {
  if (blockName) {
    prefixName += `-${blockName}`;
  }
  if (elementName) {
    prefixName += `__${elementName}`;
  }
  if (modifierName) {
    prefixName += `--${modifierName}`;
  }
  return prefixName;
}
function createBEM(prefixName) {
  const b = (blockName) => _bem(prefixName, blockName, "", "");
  const e = (elementName) => elementName ? _bem(prefixName, "", elementName, "") : "";
  const m = (modifierName) => modifierName ? _bem(prefixName, "", "", modifierName) : "";
  const be = (blockName, elementName) => blockName && elementName ? _bem(prefixName, blockName, elementName, "") : "";
  const bm = (blockName, modifierName) => blockName && modifierName ? _bem(prefixName, blockName, "", modifierName) : "";
  const em = (elementName, modifierName) => elementName && modifierName ? _bem(prefixName, "", elementName, modifierName) : "";
  const bem = (blockName, elementName, modifierName) => blockName && elementName && modifierName ? _bem(prefixName, blockName, elementName, modifierName) : "";
  const is = (name, state) => state ? `is-${name}` : "";
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  };
}
const createNamespace = (name) => {
  const prefixName = `f-${name}`;
  return createBEM(prefixName);
};
var delete1_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '*[data-v-4ccd9970]{box-sizing:border-box}.f-button__delete[data-v-4ccd9970]{position:relative;border:none;outline:none;background:none;padding:10px 24px;border-radius:7px;min-width:142px;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;cursor:pointer;display:flex;color:var(--text);background:var(--btn, var(--background));box-shadow:0 var(--shadow-y, 4px) var(--shadow-blur, 8px) var(--shadow);transform:scale(var(--scale, 1));transition:transform .3s,box-shadow .3s,background .3s}.f-button__delete--primary[data-v-4ccd9970]{--background: #2B3044;--background-hover: #1E2235;--text: #fff;--shadow: rgba(0, 9, 61, .2);--paper: #5C86FF;--paper-lines: #fff;--trash: #E1E6F9;--trash-lines: #BBC1E1;--check: #fff;--check-background: #5C86FF}.f-button__delete--danger[data-v-4ccd9970]{--background: #f56c6c;--background-hover: #f89898;--text: #fff;--shadow: rgba(0, 9, 61, .2);--paper: #5C86FF;--paper-lines: #fff;--trash: #E1E6F9;--trash-lines: #BBC1E1;--check: #fff;--check-background: #5C86FF}.f-button__delete span[data-v-4ccd9970]{display:block;font-size:14px;line-height:25px;font-weight:600;opacity:var(--span-opacity, 1);transform:translate(var(--span-x, 0)) translateZ(0);transition:transform .4s ease var(--span-delay, .2s),opacity .3s ease var(--span-delay, .2s)}.f-button__delete .trash[data-v-4ccd9970]{display:block;position:relative;left:-8px;transform:translate(var(--trash-x, 0),var(--trash-y, 1px)) translateZ(0) scale(var(--trash-scale, .64));transition:transform .5s}.f-button__delete .trash[data-v-4ccd9970]:before,.f-button__delete .trash[data-v-4ccd9970]:after{content:"";position:absolute;height:8px;width:2px;border-radius:1px;background:var(--icon, var(--trash));bottom:100%;transform-origin:50% 6px;transform:translate(var(--x, 3px),2px) scaleY(var(--sy, .7)) rotate(var(--r, 0deg));transition:transform .4s,background .3s}.f-button__delete .trash[data-v-4ccd9970]:before{left:1px}.f-button__delete .trash[data-v-4ccd9970]:after{right:1px;--x: -3px}.f-button__delete .trash .top[data-v-4ccd9970]{position:absolute;overflow:hidden;left:-4px;right:-4px;bottom:100%;height:40px;z-index:1;transform:translateY(2px)}.f-button__delete .trash .top[data-v-4ccd9970]:before,.f-button__delete .trash .top[data-v-4ccd9970]:after{content:"";position:absolute;border-radius:1px;background:var(--icon, var(--trash));width:var(--w, 12px);height:var(--h, 2px);left:var(--l, 8px);bottom:var(--b, 5px);transition:background .3s,transform .4s}.f-button__delete .trash .top[data-v-4ccd9970]:after{--w: 28px;--h: 2px;--l: 0;--b: 0;transform:scaleX(var(--trash-line-scale, 1))}.f-button__delete .trash .top .paper[data-v-4ccd9970]{width:14px;height:18px;background:var(--paper);left:7px;bottom:0;border-radius:1px;position:absolute;transform:translateY(-16px);opacity:0}.f-button__delete .trash .top .paper[data-v-4ccd9970]:before,.f-button__delete .trash .top .paper[data-v-4ccd9970]:after{content:"";width:var(--w, 10px);height:2px;border-radius:1px;position:absolute;left:2px;top:var(--t, 2px);background:var(--paper-lines);transform:scaleY(.7);box-shadow:0 9px 0 var(--paper-lines)}.f-button__delete .trash .top .paper[data-v-4ccd9970]:after{--t: 5px;--w: 7px}.f-button__delete .trash .box[data-v-4ccd9970]{width:20px;height:25px;border:2px solid var(--icon, var(--trash));border-radius:1px 1px 4px 4px;position:relative;overflow:hidden;z-index:2;transition:border-color .3s}.f-button__delete .trash .box[data-v-4ccd9970]:before,.f-button__delete .trash .box[data-v-4ccd9970]:after{content:"";position:absolute;width:4px;height:var(--h, 20px);top:0;left:var(--l, 50%);background:var(--b, var(--trash-lines))}.f-button__delete .trash .box[data-v-4ccd9970]:before{border-radius:2px;margin-left:-2px;transform:translate(-3px) scale(.6);box-shadow:10px 0 0 var(--trash-lines);opacity:var(--trash-lines-opacity, 1);transition:transform .4s,opacity .4s}.f-button__delete .trash .box[data-v-4ccd9970]:after{--h: 16px;--b: var(--paper);--l: 1px;transform:translate(-.5px,-16px) scaleX(.5);box-shadow:7px 0 0 var(--paper),14px 0 0 var(--paper),21px 0 0 var(--paper)}.f-button__delete .trash .check[data-v-4ccd9970]{padding:4px 3px;border-radius:50%;background:var(--check-background);position:absolute;left:2px;top:24px;opacity:var(--check-opacity, 0);transform:translateY(var(--check-y, 0)) scale(var(--check-scale, .2));transition:transform var(--check-duration, .2s) ease var(--check-delay, 0s),opacity var(--check-duration-opacity, .2s) ease var(--check-delay, 0s)}.f-button__delete .trash .check svg[data-v-4ccd9970]{width:8px;height:6px;display:block;fill:none;stroke-width:1.5;stroke-dasharray:9px;stroke-dashoffset:var(--check-offset, 9px);stroke-linecap:round;stroke-linejoin:round;stroke:var(--check);transition:stroke-dashoffset .4s ease var(--checkmark-delay, .4s)}.f-button__delete.is-delete[data-v-4ccd9970]{--span-opacity: 0;--span-x: 16px;--span-delay: 0s;--trash-x: 46px;--trash-y: 2px;--trash-scale: 1;--trash-lines-opacity: 0;--trash-line-scale: 0;--icon: #fff;--check-offset: 0;--check-opacity: 1;--check-scale: 1;--check-y: 16px;--check-delay: 1.7s;--checkmark-delay: 2.1s;--check-duration: .55s;--check-duration-opacity: .3s}.f-button__delete.is-delete .trash[data-v-4ccd9970]:before,.f-button__delete.is-delete .trash[data-v-4ccd9970]:after{--sy: 1;--x: 0}.f-button__delete.is-delete .trash[data-v-4ccd9970]:before{--r: 40deg}.f-button__delete.is-delete .trash[data-v-4ccd9970]:after{--r: -40deg}.f-button__delete.is-delete .trash .top .paper[data-v-4ccd9970]{animation:paper-4ccd9970 1.5s linear forwards .5s}.f-button__delete.is-delete .trash .box[data-v-4ccd9970]:after{animation:cut-4ccd9970 1.5s linear forwards .5s}.f-button__delete.is-delete[data-v-4ccd9970],.f-button__delete[data-v-4ccd9970]:hover{--btn: var(--background-hover);--shadow-y: 5px;--shadow-blur: 9px}.f-button__delete[data-v-4ccd9970]:active{--shadow-y: 2px;--shadow-blur: 5px;--scale: .94}@keyframes paper-4ccd9970{10%,to{opacity:1}20%{transform:translateY(-16px)}40%{transform:translateY(0)}70%,to{transform:translateY(24px)}}@keyframes cut-4ccd9970{0%,40%{transform:translate(-.5px,-16px) scaleX(.5)}to{transform:translate(-.5px,24px) scaleX(.5)}}\n')();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="trash" data-v-4ccd9970><div class="top" data-v-4ccd9970><div class="paper" data-v-4ccd9970></div></div><div class="box" data-v-4ccd9970></div><div class="check" data-v-4ccd9970><svg viewBox="0 0 8 6" data-v-4ccd9970><polyline points="1 3.4 2.71428571 5 7 1" data-v-4ccd9970></polyline></svg></div></div>', 1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u5220\u9664");
const __default__ = defineComponent({
  name: "DeleteButtonV1",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    type: {
      type: String,
      default: "primary"
    }
  },
  emits: ["update:collapse"],
  setup(__props, { emit }) {
    const bem = createNamespace("button");
    const hasActive = ref(false);
    function onClick() {
      hasActive.value = true;
      setTimeout(() => hasActive.value = false, 3200);
      emit("click");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([unref(bem).is("delete", hasActive.value), unref(bem).e("delete"), unref(bem).em("delete", __props.type)]),
        onClick
      }, [
        _hoisted_1,
        createElementVNode("span", null, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_2
          ], true)
        ])
      ], 2);
    };
  }
});
var DeleteV1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ccd9970"]]);
const DeleteButtonV1 = withInstall(DeleteV1);
export { DeleteButtonV1 };
