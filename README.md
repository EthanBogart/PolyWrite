# PolyWrite
PolyWrite desktop application. This project is now dead. As of [Google's Docs update](https://techcrunch.com/2017/08/16/google-updates-docs-sheets-and-slides-with-new-collaboration-features) that allows versioning, PolyWrite has become redundant. It was originally intended to be a sort of version control system made easy for non-geeks, and that mission is over after about a month of development. Credits to Calvin Wan ([@TheChosenZygote](https://github.com/thechosenzygote)) for implementing Myers algorithm very nicely in C++.

The backend service is located in the [PolyWriteService repo.](https://github.com/EthanBogart/PolyWriteService) It is obviously far from usability but the basic framework is there.

# Install
To install and run, it is easiest if you have yarn installed. npm works fine too, the instructions below will work if you substitute `npm` for `yarn`.

Once you have cloned and are inside the PolyWrite directory, run `yarn install`.

# Run the app
Simply use `yarn start` command to run the app. If you are making styling changes, it makes more sense to use the `yarn sass-start` which will build the css files for you before opening the app.

# Build
The build process is fairly simple. Just run the command `yarn dist-mac` to build for Mac 64-bit. Otherwise, run `yarn dist` to build for Mac, Windows and Linux all at once.

## Styling
Sass is used for styling the app. Please remember that changing the `styles.css` file <b>will not persist</b>, because that file is simply compiled sass.
