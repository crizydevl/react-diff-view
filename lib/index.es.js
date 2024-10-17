import { m, e as c, j as l } from "./vendor-IlggoPES.js";
import { useRef as s, useEffect as u } from "react";
function p({
  oldValue: e,
  newValue: i,
  height: a = 400,
  language: f = "json"
}) {
  const r = s(null), o = s();
  u(() => {
    console.log("init ", m), r.current && (o.current = E(r.current));
  }, [r]), u(() => {
    o.current && o.current.setModel({
      original: n(e, f),
      modified: n(i, f)
    });
  }, [e, i]);
  function n(t, d) {
    return c.createModel(t, d);
  }
  function E(t) {
    return c.createDiffEditor(t, {
      readOnly: !0
    });
  }
  return /* @__PURE__ */ l.jsx("div", { className: "diff-editor", ref: r, style: { height: a } });
}
export {
  p as DiffCodeEditor
};
