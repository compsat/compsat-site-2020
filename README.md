# Getting Started

## For macOS, install homebrew first in order to easily install other packages
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Next, install yarn 
```bash
#For macOS
brew install yarn
```
For windows, follow the instructions for Yarn installation: https://classic.yarnpkg.com/en/docs/install/#windows-stable

## Install all dependencies in the repository
```bash
cd compsat-site-2020

#yes, run yarn only
yarn
```

## Install and initialize git flow
For windows, first check if your git version is 2.5.3 and above. \
If not, download the latest version: https://git-scm.com/download/win
```bash
#For macOS
brew install git-flow

#Initialize git flow
git flow init

#Create a feature branch
git flow feature start name-of-branch
```
There will be a series of prompts. Just click enter on all of them.\
**Create feature branches for the sites you're working on**\
**Create pull request to develop after you're done with your branch**\
**NEVER push to develop or to master**\
For more info on git-flow: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

## Run the development server:

```bash
#if you have npm
npm run dev 
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To access your deployed branch (make sure you push your branch before checking) [http://feature-name-of-branch--compsat.netlify.app](http://feature-name-of-branch--compsat.netlify.app)

Open [http://compsat.netlify.app/admin](http://compsat.netlify.app/admin) with your browser to access the Netlify CMS.

