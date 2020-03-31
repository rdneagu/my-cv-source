import store from '../store/index';

function show(el, binding) {
  if (el.getAttribute('unbinding')) return;
  store.commit('showTooltip', { element: el, type: binding.value.type, text: binding.value.text });
}

function hide() {
  store.commit('hideTooltip');
}

const tooltipDirective = {
  bind(el, binding) {
    el.addEventListener('mouseenter', show.bind(null, el, binding));
    el.addEventListener('mouseleave', hide.bind(null));
    // danielandrewstewart@gmail.com
  },
  unbind(el) {
    el.setAttribute('unbinding', true);
    // If a tooltip is active, hide it if belongs to the unbound element
    if (!store.getters.getTooltip) return;
    if (el === store.getters.getTooltip.element) {
      hide();
    }
  },
};

export default tooltipDirective;
