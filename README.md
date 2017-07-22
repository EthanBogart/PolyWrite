# PolyWrite
PolyWrite desktop application

# Install
To install and run, it is easiest if you have yarn installed. npm works fine too, the instructions below will work if you substitute `npm` for `yarn`.

Once you have cloned and are inside the PolyWrite directory, run `yarn install`. Then, build the dependencies with `yarn build-deps`.

# Run the app
Simply use `yarn start` command to run the app. If you are making styling changes, it makes more sense to use the `yarn sass-start` which will build the css files for you before opening the app.

## Styling
Sass is used for styling the app. Please remember that changing the `styles.css` file <b>will not persist</b>, because that file is simply compiled sass.
