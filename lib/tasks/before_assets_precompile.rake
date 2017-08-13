namespace :before_assets_precompile do
  system('npm install; npm run heroku-postbuild')
end
