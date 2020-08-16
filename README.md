# react-clean-badges

> React badges for your Profile and Projects.

using https://github.com/Ileriayo/markdown-badges

## Install

```bash
npm i react-clean-badges
```

```bash
yarn add react-clean-badges
```

## Usage

```tsx
import React from 'react'

import Badge, {ExpressjsBadge, DigitalOceanBadge, ReactBadge} from 'react-clean-badges'

const App = () => {
  return (
    <>
      <Badge.Nodejs style={{width: 200}} />
      <Badge.JavaScript />
      <Badge.TypeScript style={{borderRadius: 10}} />
      <Badge.React />
      <ReactBadge />
      <ExpressjsBadge style={{padding: 15}} />
      <DigitalOceanBadge />

    </>
  )
}

export default App
```


### Badges

| Name         | Badge                                                                                                                            | JSX                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Node.js      | <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>             | <Badge.Nodejs />       |
| JavaScript   | <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>   | <Badge.JavaScript />   |
| TypeScript   | <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>       | <Badge.TypeScript />   |
| HTML5        | <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>                 | <Badge.HTML5 />        |
| CSS3         | <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>                   | <Badge.CSS3 />         |
| Python       | <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/>               | <Badge.Python />       |
| C            | <img src="https://img.shields.io/badge/c%20-%2300599C.svg?&style=for-the-badge&logo=c&logoColor=white"/>                         | <Badge.C />            |
| C++          | <img src="https://img.shields.io/badge/c++%20-%2300599C.svg?&style=for-the-badge&logo=c%2B%2B&ogoColor=white"/>                  | <Badge.Cplusplus />    |
| C#           | <img src="https://img.shields.io/badge/c%23%20-%23239120.svg?&style=for-the-badge&logo=c-sharp&logoColor=white"/>                | <Badge.Csharp />       |
| Java         | <img src="https://img.shields.io/badge/java%20-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white"/>                   | <Badge.Java />         |
| PHP          | <img src="https://img.shields.io/badge/php%20-%23777BB4.svg?&style=for-the-badge&logo=php&logoColor=white"/>                     | <Badge.PHP />          |
| R            | <img src="https://img.shields.io/badge/r%20-%23276DC3.svg?&style=for-the-badge&logo=r&logoColor=white"/>                         | <Badge.R />            |
| Swift        | <img src="https://img.shields.io/badge/swift%20-%23FA7343.svg?&style=for-the-badge&logo=swift&logoColor=white"/>                 | <Badge.Swift />        |
| Kotlin       | <img src="https://img.shields.io/badge/kotlin%20-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white"/>               | <Badge.Kotlin />       |
| Go           | <img src="https://img.shields.io/badge/go%20-%2300ADD8.svg?&style=for-the-badge&logo=go&logoColor=white"/>                       | <Badge.Go />           |
| Ruby         | <img src="https://img.shields.io/badge/ruby%20-%23CC342D.svg?&style=for-the-badge&logo=ruby&logoColor=white"/>                   | <Badge.Ruby />         |
| Scala        | <img src="https://img.shields.io/badge/scala%20-%23DC322F.svg?&style=for-the-badge&logo=scala&logoColor=white"/>                 | <Badge.Scala />        |
| Rust         | <img src="https://img.shields.io/badge/rust%20-%23000000.svg?&style=for-the-badge&logo=rust&logoColor=white"/>                   | <Badge.Rust />         |
| Dart         | <img src="https://img.shields.io/badge/dart%20-%230175C2.svg?&style=for-the-badge&logo=dart&logoColor=white"/>                   | <Badge.Dart />         |
| Lua          | <img src="https://img.shields.io/badge/lua%20-%232C2D72.svg?&style=for-the-badge&logo=lua&logoColor=white"/>                     | <Badge.Lua />          |
| Perl         | <img src="https://img.shields.io/badge/perl%20-%2339457E.svg?&style=for-the-badge&logo=perl&logoColor=white"/>                   | <Badge.Perl />         |
| Elixir       | <img src="https://img.shields.io/badge/elixir%20-%234B275F.svg?&style=for-the-badge&logo=elixir&logoColor=white"/>               | <Badge.Elixir />       |
| Markdown     | <img src="https://img.shields.io/badge/markdown%20-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>           | <Badge.Markdown />     |
| Shell Script | <img src="https://img.shields.io/badge/shell_script%20-%23121011.svg?&style=for-the-badge&logo=gnu-bash&logoColor=white"/>       | <Badge.ShellScript />  |
| Express.js   | <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>                                       | <Badge.Expressjs />    |
| React        | <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>             | <Badge.React />        |
| Vue.js       | <img src="https://img.shields.io/badge/vuejs%20-%2335495e.svg?&style=for-the-badge&logo=vue.js&logoColor=%234FC08D"/>            | <Badge.Vuejs />        |
| Angular      | <img src="https://img.shields.io/badge/angular%20-%23DD0031.svg?&style=for-the-badge&logo=angular&logoColor=white"/>             | <Badge.Angular />      |
| Angular.js   | <img src="https://img.shields.io/badge/angular-js%20-%23E23237.svg?&style=for-the-badge&logo=angularjs&logoColor=white"/>        | <Badge.Angularjs />    |
| TailwindCSS  | <img src="https://img.shields.io/badge/tailwind-css%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"/>   | <Badge.TailwindCSS />  |
| Bootstrap    | <img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>         | <Badge.Bootstrap />    |
| Material UI  | <img src="https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white"/>   | <Badge.MaterialUI />   |
| Redux        | <img src="https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white"/>                 | <Badge.Redux />        |
| jQuery       | <img src="https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/>               | <Badge.JQuery />       |
| Django       | <img src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/>               | <Badge.Django />       |
| Rails        | <img src="https://img.shields.io/badge/rails%20-%23CC0000.svg?&style=for-the-badge&logo=ruby-on-rails&logoColor=white"/>         | <Badge.Rails />        |
| Laravel      | <img src="https://img.shields.io/badge/laravel%20-%23FF2D20.svg?&style=for-the-badge&logo=laravel&logoColor=white"/>             | <Badge.Laravel />      |
| Spring       | <img src="https://img.shields.io/badge/spring%20-%236DB33F.svg?&style=for-the-badge&logo=spring&logoColor=white"/>               | <Badge.Spring />       |
| Flask        | <img src="https://img.shields.io/badge/flask%20-%23000.svg?&style=for-the-badge&logo=flask&logoColor=white"/>                    | <Badge.Flask />        |
| Git          | <img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>                     | <Badge.Git />          |
| GitLab       | <img src="https://img.shields.io/badge/gitlab%20-%23181717.svg?&style=for-the-badge&logo=gitlab&logoColor=white"/>               | <Badge.GitLab />       |
| GitHub       | <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>               | <Badge.GitHub />       |
| Bitbucket    | <img src="https://img.shields.io/badge/bitbucket%20-%230047B3.svg?&style=for-the-badge&logo=bitbucket&logoColor=white"/>         | <Badge.Bitbucket />    |
| AWS          | <img src="https://img.shields.io/badge/AWS%20-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/>              | <Badge.AWS />          |
| Google Cloud | <img src="https://img.shields.io/badge/Google%20Cloud%20-%234285F4.svg?&style=for-the-badge&logo=google-cloud&logoColor=white"/> | <Badge.GoogleCloud />  |
| Azure        | <img src="https://img.shields.io/badge/azure%20-%230072C6.svg?&style=for-the-badge&logo=azure-devops&logoColor=white"/>          | <Badge.Azure />        |
| Heroku       | <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>               | <Badge.Heroku />       |
| Glitch       | <img src="https://img.shields.io/badge/glitch%20-%233333FF.svg?&style=for-the-badge&logo=glitch&logoColor=white"/>               | <Badge.Glitch />       |
| Vercel       | <img src="https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"/>               | <Badge.Vercel />       |
| OpenStack    | <img src="https://img.shields.io/badge/Openstack-%23f01742.svg?&style=for-the-badge&logo=openstack&logoColor=white"/>            | <Badge.OpenStack />    |
| DigitalOcean | <img src="https://img.shields.io/badge/DigitalOcean-%230167ff.svg?&style=for-the-badge&logo=digitalOcean&logoColor=white"/>      | <Badge.DigitalOcean /> |
| Apache       | <img src="https://img.shields.io/badge/apache%20-%23D42029.svg?&style=for-the-badge&logo=apache&logoColor=white"/>               | <Badge.Apache />       |
| Nginx        | <img src="https://img.shields.io/badge/nginx%20-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"/>                 | <Badge.Nginx />        |
| Jenkins      | <img src="https://img.shields.io/badge/jenkins%20-%232C5263.svg?&style=for-the-badge&logo=jenkins&logoColor=white"/>             | <Badge.Jenkins />      |
| MySQL        | <img src="https://img.shields.io/badge/mysql-%2300000f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>                    | <Badge.MySQL />        |
| Postgres     | <img src="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>            | <Badge.Postgres />     |
| MongoDB      | <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>                | <Badge.MongoDB />      |
| SQLite       | <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?&style=for-the-badge&logo=sqlite&logoColor=white"/>                  | <Badge.SQLite />       |
| TravisCI     | <img src="https://img.shields.io/badge/travis-ci%20-%232B2F33.svg?&style=for-the-badge&logo=travis&logoColor=white"/>            | <Badge.TravisCI />     |
| CircleCI     | <img src="https://img.shields.io/badge/CIRCLECI%20-%23161616.svg?&style=for-the-badge&logo=circleci&logoColor=white"/>           | <Badge.CircleCI />     |
| Docker       | <img src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"/>               | <Badge.Docker />       |
| Kubernetes   | <img src="https://img.shields.io/badge/kubernetes%20-%23326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white"/>       | <Badge.Kubernetes />   |
| Rancher      | <img src="https://img.shields.io/badge/rancher%20-%230075A8.svg?&style=for-the-badge&logo=rancher&logoColor=white"/>             | <Badge.Rancher />      |
| Vagrant      | <img src="https://img.shields.io/badge/vagrant%20-%231563FF.svg?&style=for-the-badge&logo=vagrant&logoColor=white"/>             | <Badge.Vagrant />      |
| Ansible      | <img src="https://img.shields.io/badge/ansible%20-%231A1918.svg?&style=for-the-badge&logo=ansible&logoColor=white"/>             | <Badge.Ansible />      |


