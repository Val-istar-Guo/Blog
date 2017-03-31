import xs from 'xstream';
import { h2, ul, li, a, span } from '@cycle/dom';

const articleList = [
  {
    id: 1,
    title: 'article title1',
    des: 'descriptions',
  },
  {
    id: 2,
    title: 'article title',
    des: 'descriptions',
  },
];

function intent(sources) {
  return sources;
}

function model(actions) {
  return actions;
}

function view(state$) {
  return state$.map((list) => {
    const articleNodes = list
      .map(({ id, title, des }) => li('.article-list-item .mdl-list__item mdl-list__item--two-line', [
        span('.mdl-list__item-primary-content', [
          span(title),
          span('.mdl-list__item-sub-title', des),
        ]),
        a({ href: id }),
      ]));
    return ul('.mdl-list', articleNodes);
  });
}

export default function () {
  const source$ = xs.of(articleList);
  return { DOM: view(model(intent(source$))) };
}
