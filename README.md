# PolyWrite
PolyWrite desktop application

# Install
To install and run, it is easiest if you have yarn installed. npm works fine too, the instructions below will work if you substitute `npm` for `yarn`.

Once you have cloned and are inside the PolyWrite directory, simply run `yarn install`.

# Run the app
Simply use `yarn start` command to run the app. If you are making styling changes, it makes more sense to use the `yarn sass-start` which will build the css files for you before opening the app.

# Build
The build process is fairly simple. Just run the command `yarn dist-mac` to build for Mac 64-bit. Otherwise, run `yarn dist` to build for Mac, Windows and Linux all at once.

## Styling
Sass is used for styling the app. Please remember that changing the `styles.css` file <b>will not persist</b>, because that file is simply compiled sass.
