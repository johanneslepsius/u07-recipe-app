# RecipeApp

A very simple app built with Angular and Bootstrap that gets recipe data from the Edamam-API and lets you filter recipes and save them on lists. Via an User-API which i built, too, you can register an account, create lists and save recipes there.

To try it:

1. clone the repo: git clone https://github.com/chas-academy/u07-recipe-app-johanneslepsius
2. npm install (might need --legacy-peer-deps)
3. Add your edamam api key to /.env (create this file yourself):

RECIPE_API=https://api.edamam.com
APP_ID={your edamam app id}
APP_KEY={your edamam app key}
USER_API=https://ipa-epicer.herokuapp.com/api

4. Run `ng serve`, go to `http://localhost:4200/` and you should be good to go!
