const _self = {}
const eventPreventer = (event) => {
  return event.preventDefault()
}

const LockTargetSelector = (event) => {
  if (_self.exEl.contains(event.target)) {
    return event.stopPropagation()
  }
  return eventPreventer(event)
}
/**
 * @desc 全要素のスクロール禁止
 */
export const ScrollLock = () => {
  // スクロール禁止(SP)
  document.addEventListener('touchmove', eventPreventer, { passive: false })
  // スクロール禁止(PC)
  document.addEventListener('mousewheel', eventPreventer, { passive: false })
}
/**
 * @desc ↑のEvent削除
 */
export const ScrollPermit = () => {
  // スクロール禁止(SP)を削除
  document.removeEventListener('touchmove', eventPreventer, { passive: false })
  // スクロール禁止(PC)を削除
  document.removeEventListener('mousewheel', eventPreventer, { passive: false })
}
/**
 * @desc 1要素のみスクロールを許可し、それ以外の要素はスクロール禁止
 */
export const ScrollLockWithTheEx = (exEl) => {
  document.body.setAttribute('overflow', 'hidden')
  document.body.style.position = 'fixed'
  _self.exEl = exEl
  // スクロール禁止(SP)
  document.addEventListener('touchmove', LockTargetSelector, { passive: false })
  // スクロール禁止(PC)
  document.addEventListener('mousewheel', LockTargetSelector, {
    passive: false,
  })
}
/**
 * @desc ↑のEvent削除
 */
export const ScrollPermitWithTheEx = (exEl) => {
  document.body.removeAttribute('overflow')
  document.body.style.position = ''
  _self.exEl = exEl
  // スクロール禁止(SP)を削除
  document.removeEventListener('touchmove', LockTargetSelector, {
    passive: false,
  })
  // スクロール禁止(PC)を削除
  document.removeEventListener('mousewheel', LockTargetSelector, {
    passive: false,
  })
}
