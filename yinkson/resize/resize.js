var m_pos;
function resize(e) {
  var parent = resize_el.parentNode;
  var dx = m_pos - e.x;
  m_pos = e.x;
  parent.style.width = parseInt(getComputedStyle(parent, "").width) + dx + "px";
}

var resize_el = document.getElementById("resize");
resize_el.addEventListener(
  "mousedown",
  function (e) {
    m_pos = e.x;
    document.addEventListener("mousemove", resize, false);
  },
  true
);
document.addEventListener(
  "mouseup",
  function () {
    document.removeEventListener("mousemove", resize, false);
  },
  false
);

function resizing(e, direction="x") {
  m_pos
  e.addEventListener(
    "mousedown",
    function (e) {
      m_pos = direction === 'y' ? e.y: e.x;
      document.addEventListener("mousemove", resize, false);
    },
    true
  );
  document.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", resize, false);
    },
    false
  );
  function resize() {
    let rect = e.getBoundingClientRect();
    var parent = resize_el.parentNode;
    let newAxis = direction === 'y' ? e.y: e.x;
    var dx = m_pos - newAxis;
    m_pos = newAxis;
   parent.style.left = parseInt(rect.x) + 'px';
   parent.style.removeProperty('right');
    parent.style.width = parseInt(getComputedStyle(parent, "").width) - dx + "px";
  } 