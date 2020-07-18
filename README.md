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
For windows, follow the instructions for Yarn installation here 
https://classic.yarnpkg.com/en/docs/install/#windows-stable

## Install all dependencies in the repository
```bash
cd compsat-site-2020

#yes, run yarn only
yarn
```

## Install and initialize git flow
```bash
#For macOS
brew install git-flow

#For windows, first check if your git version is 2.5.3 and above. If not, download the latest version below
https://git-scm.com/download/win


#Initialize git flow
git flow init
```
There will be a series of prompts. Just click enter on all of them. 
**Create feature branches for the sites you're working on**
**Create pull request to develop after you're done with your branch**
**NEVER push to develop or to master**

## Run the development server:

```bash
#if you have npm
npm run dev 
# or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://compsat.netlify.app/admin](http://compsat.netlify.app/admin) with your browser to access the Netlify CMS.

