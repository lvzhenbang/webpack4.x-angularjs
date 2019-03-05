import '@css/index.scss';

export const appComponent = {
  template: `
  <header></header>
  <header class="sj_nav-fixed" navfixed></header>
  
  <div ui-view="app"></div>
  
  <map></map>
  <footer></footer>
  <backtop></backtop>
  `
}