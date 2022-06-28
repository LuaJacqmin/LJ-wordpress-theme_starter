/* Import all files available in SRC folder. Feel free to add extension if you need file types that are not here, but pay attention that you have to change webpack.config.js if you do that */
//don't delete me !

const importAll = (r) => {
  r.keys().forEach(r);
}

importAll(require.context('src', true, /\.(html|php|ico|png|jpe?g|gif|svg|wav|mp3|mp4|ogg|json|pdf|xml|webmanifest|ttf|otf|woff|woff2)$/));