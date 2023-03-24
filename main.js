import { loadDefaultJapaneseParser } from 'budoux'

const parser = loadDefaultJapaneseParser();

const budouxSelectors = [
  '.budou-this',
  '.budou-this p',
  '.budou-this span',
  '.budou-this h1',
  '.budou-this h2',
  '.budou-this h3',
  '.budou-this h4',
  '.budou-this h5',
  '.budou-this h6',
  '.budou-this a',
  '.budou-this button',
  '.budou-this strong',
].join(', ')

const applyBudoux = () => {
  document
    .querySelectorAll(budouxSelectors)
    .forEach(elem => {
      parser.applyElement(elem)
    })
}

const applyBudouxStyles = () => {
  const elStyle = document.createElement('style')
  elStyle.innerHTML = budouxSelectors + ` {
  \tword-break: keep-all;
  \toverflow-wrap: break-word;
  }`
  document.head.appendChild(elStyle)
}

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
    return;
  }
  document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  applyBudoux()
  applyBudouxStyles()
})