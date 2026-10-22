// VO2 Group deck chrome for reveal.js. Load BEFORE Reveal.initialize().
// - Navy ground on every <section class="vo2-dark"> (flat, via data-background-color).
// - Sirius circle field on cover / section / outro slides (decorative, aria-hidden).
// - Footer on every slide: note bottom-left, VO2 Group logo bottom-right (white on navy).
// Footer text: data-vo2-footer on the .reveal element (default "VO2 Group - Confidential").
(function () {
  var NAVY = '#142765';
  var root = document.querySelector('.reveal');
  if (!root) return;
  var note = root.getAttribute('data-vo2-footer');
  if (note === null) note = 'VO2 Group - Confidential';
  var base = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');

  Array.prototype.forEach.call(document.querySelectorAll('.reveal .slides > section'), function (s) {
    var dark = s.classList.contains('vo2-dark');
    if (dark && !s.hasAttribute('data-background-color')) s.setAttribute('data-background-color', NAVY);

    if (dark) {
      var field = document.createElement('div');
      field.className = 'sfield';
      field.setAttribute('aria-hidden', 'true');
      field.innerHTML = '<i></i><i></i><i></i><i></i><i></i>';
      s.insertBefore(field, s.firstChild);
    }

    var foot = document.createElement('div');
    foot.className = 'vo2-foot';
    foot.innerHTML = (note ? '<span></span>' : '') +
      '<img alt="VO2 Group" src="' + base + 'brand/vo2-wordmark-' + (dark ? 'white' : 'black') + '.svg">';
    if (note) foot.firstChild.textContent = note;
    var notes = s.querySelector('aside.notes');
    s.insertBefore(foot, notes);
  });
})();
