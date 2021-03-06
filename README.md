# User search

[![Codecov Coverage](https://img.shields.io/codecov/c/github/kg782/user-search-example/master.svg?style=flat-square)](https://codecov.io/gh/kg782/user-search-example/)

## Notes

- I made filter algorithm by my assumption. A user entry has attributes - `administrator`, `favorite` and `archived`. Side navigation is filtering by them. Then text search is searching within those filtered users.
- Business logics are decoupled and reusable as memoized selectors.
- Used prettier/eslint to keep code sanitized.
- Mobile first styling.
- I picked up icons from material design library.

## Potential improvements

I think there are potential improvements from this.

- Use `redux` or some other state management tools.
- Server side rendering.
- Accessibility.

## How to run

```sh
yarn
yarn start
```

## How to perform unit test

```sh
yarn test --coverage
```
