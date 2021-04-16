# RecipeApp

A very simple app built with Angular 11 and Bootstrap 5 (via CDN, don't worry) that gets recipe data from the edamam-API and lets you filter recipes and save them while you are on the page.

To try it:

1. clone the repo: git clone https://github.com/chas-academy/u07-recipe-app-johanneslepsius
2. npm install
3. Add your edamam api key to \src\environments\environment.ts (create this folder and file yourself):

export const environment = {
production: false,
app_id: 'your_id',
app_key: 'your_key'
};

4. Run `ng serve`, go to `http://localhost:4200/` and you should be good to go!
