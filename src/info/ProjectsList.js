export const ALL_FILTER_TYPE = 'all';
export const ANDROID_FILTER_TYPE = 'android';
export const WEBSITES_FILTER_TYPE = 'Websites';
export const WEB_APPS_FILTER_TYPE = 'webApps';
export const TOOLS_FILTER_TYPE = 'tools';
export const FILTERED_PROJECTS_FILTER_TYPE = 'filtered';

export const ALL_PROJECTS_ID = 'All Projects';

export default function getProjectsList() {
  return [
    {
      id: 1,
      name: 'Autohub',
      createdAt: 'Github : 2019',
      description: 'Flutter Application : Open Source Built Based on Flutter, Vortex, Github Api V3, With Navigation Component',
      longDescription: "Flutter Application is created to view Github Account Information with Authentication Basic Auth Username and Password Powered By Github Api V3 and the Base Structure of the Project is Flutter with Navigation Components and Kotlin Programming Language",
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/autohub_preview.webp',
      imageProject: "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub.png?raw=true",
      type: ANDROID_FILTER_TYPE,
      link: "https://github.com/Yazan98/Github-Client",
      tags: [
          "Kotlin Courotines",
          "Multi Modular App",
          "Vortex",
          "Flutter",
          "Github Api",
          "Kotlin",
          "Retrofit",
          "RxJava 2"
      ],
      images: [
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_1.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_2.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_3.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_4.png?raw=true"
      ]
    },
    {
      id: 2,
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Flutter Application : Open Source Built Based on Flutter, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Flutter Application Built to show Restaurants and Food Delivery App The Idea of this project is to Build a Food Delivery Api and see the Results on Mobile App and the Mobile App Built with Kotlin and Flutter",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_preview.webp",
      tags: [
        "Kotlin Courotines",
        "Multi Modular App",
        "Vortex",
        "Flutter",
        "Kotlin",
        "Retrofit",
        "RxJava 2"
      ],
      images: [
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_1.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_2.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_3.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_4.png?raw=true"
      ]
    },
    {
      id: 3,
      name: 'Portfolio',
      createdAt: 'Github : 2020',
      description: 'My Personal Website Built With React.js, And Support PWAs and Some of SEO Techniques For Google Search Console and SPA with Typescript, Jsx, And SASS To Write Clear Css, React Router To Change Pages, Client Side Rendering Also Dark / White Mode Supported in All Pages Inside The Repository You Can Find The First and Second Version of The Website',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/portfolio_preview.webp',
      type: WEBSITES_FILTER_TYPE,
      longDescription: "My Personal Website Built With React.js, And Support PWAs and Some of SEO Techniques For Google Search Console and SPA with Typescript, Jsx, And SASS To Write Clear Css, React Router To Change Pages, Client Side Rendering Also Dark / White Mode Supported in All Pages Inside The Repository You Can Find The First and Second Version of The Website",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/portfolio_preview.webp",
      link: "https://github.com/Yazan98/portfolio",
      tags: [
        "React.js",
        "SASS Styling",
        "React Hooks",
        "Dark, White Mode",
        "Responsive Design",
        "Flex - Grid System",
        "Material UI"
      ],
      images: [
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_1.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_2.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_3.png?raw=true"
      ]
    },
    {
      id: 4,
      name: 'Drasati',
      createdAt: '2020',
      description: 'Android Application : Closed Source An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/drasati_preview.webp',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Android Application : Closed Source An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan Built With Java / Kotlin With MVP",
      imageProject: "https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_main.png?raw=true",
      tags: [
        "Kotlin Courotines",
        "Single Modular App",
        "MVP",
        "Kotlin",
        "Retrofit",
        "RxJava 2",
        "Java",
        "Firebase"
      ],
      images: [
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_1.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_2.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_3.png?raw=true"
      ]
    },
    {
      id: 5,
      name: 'Wintrop',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/wintrop_preview.webp',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Android Application : Open Source Built to Communicate with Open Weather Api to check the Weather Status of current Country and list all the response Built with Kotlin Programming Language and Local Caching in Realm Database",
      imageProject: "https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_main.png?raw=true",
      link: "https://github.com/Yazan98/Wintrop",
      tags: [
        "Kotlin Courotines",
        "Realm Database",
        "Multi Modular App",
        "Retrofit",
        "Kotlin"
      ],
      images: [
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_1.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_2.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_3.png?raw=true"
      ]
    },
    {
      id: 6,
      name: 'Shopie Api',
      createdAt: 'Github : 2021',
      description: 'Api - Open Source Api Built With PHP - Laravel To Calculate The Database Relations And Logic For Shop Application and Website to Manage Accounts, Recipes, Restaurants, Bearer Tokens, Phone Number Verification, User Addresses, Categories This Project Mainly Built to Apply PHP Skills into a Project in PHP Training Path',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/shopie_preview.webp',
      longDescription: "Api - Open Source Api Built With PHP - Laravel To Calculate The Database Relations And Logic For Shop Application and Website to Manage Accounts, Recipes, Restaurants, Bearer Tokens, Phone Number Verification, User Addresses, Categories This Project Mainly Built to Apply PHP Skills into a Project in PHP Training Path",
      type: WEB_APPS_FILTER_TYPE,
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/shopie_preview.webp",
      link: "https://github.com/Yazan98/shop-api",
      tags: [
        "PHP Laravel",
        "Mysql Database",
        "Json Response"
      ]
    },
    {
      id: 7,
      name: 'Vortex',
      createdAt: 'Github : 2019',
      description: 'Android Library : Open Source Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases This Library is Not Just Base Code it\'s also help you to get the target as soon as possible with ready techniques',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/vortex_preview.webp',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Android Library : Open Source Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases This Library is Not Just Base Code it\'s also help you to get the target as soon as possible with ready techniques",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/vortex_preview.webp",
      link: "https://github.com/Yazan98/vortex",
      tags: [
        "Android Library",
        "Multi Modular Library",
        "Flutter Structure",
        "Bintray (JCenter)",
        "Utility Classes"
      ]
    },
    {
      id: 8,
      name: 'Netflix Clone',
      createdAt: 'Github : 2021',
      description: 'Website - Open Source a React.js Project Built to show Movies Based on MoviesDB Api And React Hooks, Typescript',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/netflex_preview.webp',
      type: WEBSITES_FILTER_TYPE,
      longDescription: "Website Built with React.js and React Router with Movies Database and Training on Material UI, Firebase Deployment, Single Page Application and Introduction to Typescript Language and SASS Styling",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/netflex_preview.webp",
      link: "https://github.com/Yazan98/Netflix-Clone",
      tags: [
        "Movies DB Database",
        "React Router Dom",
        "React.js",
        "SASS Styling",
        "Grid System",
        "Flex System",
        "Material UI"
      ],
      images: [
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_1.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_2.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_3.png?raw=true"
      ]
    },
    {
      id: 9,
      name: 'Github Clone',
      createdAt: 'Github : 2021',
      description: 'Website - Open Source a React.js Project With Github Api V3 Project To Show Popular Repos, PWA, Show Profile Repos, Information, Profile View With Github UserName, Grid - Linear List Toggle',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/github_preview.webp',
      type: WEBSITES_FILTER_TYPE,
      longDescription: "Website Built with React.js and React Router To Build Single Page Application with React Hooks and Grid / Flex System and Github Api V3, Axios",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/github_preview.webp",
      link: "https://github.com/Yazan98/github-clone",
      tags: [
        "React.js",
          "Firebase Deployment",
          "Grid System",
          "Flex System",
          "React Hooks",
          "Axios",
          "Github Api V3"
      ],
      images: [
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_1.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_2.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_3.png?raw=true"
      ]
    },
    {
      id: 10,
      name: 'Autohub V2.0',
      createdAt: 'Github : 2022',
      description: 'Android Application : Closed Source Multi Modular Application With Jetpack Compose',
      longDescription: "Android Application Built With Navigation Component and Jetpack Compose, Hilt Dependency Injection, Firebase Crashlytics, Navigation Between Modules, UseCases, Retrofit With Coroutines, Github Api, Vanite",
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/projects/autohub_2.webp',
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/projects/autohub_2.webp",
      type: ANDROID_FILTER_TYPE,
      link: "",
      tags: [
        "Kotlin Coroutines",
        "Multi Modular App",
        "Vanite",
        "Flutter",
        "Github Api",
        "Kotlin",
        "Retrofit",
        "Compose",
        "Hilt",
        "Navigation Component",
      ],
      images: [
        "https://user-images.githubusercontent.com/29167110/176329704-ea3b64eb-d42f-4f1f-932a-45cce82caf3f.png",
        "https://user-images.githubusercontent.com/29167110/176329706-ff7efbe1-9b53-4134-96a1-4f12e0a0b89f.png",
        "https://user-images.githubusercontent.com/29167110/176329707-1042d0a4-df15-43e7-a5e6-51f7ec2ba7b6.png",
        "https://user-images.githubusercontent.com/29167110/176329708-78d3db2b-76bc-4e4b-b8bb-2e902be77363.png"
      ]
    },
    {
      id: 11,
      name: 'Destiny Api',
      createdAt: 'Github : 2021',
      description: 'Api - Open Source Spring Boot Project To Manage Firebase Admin SDK, Mysql, JWT Tokens, Mainly To Manage Mobile Applications and Built With Kotlin, Kotlin-Jackson',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_api_preview.webp',
      type: WEB_APPS_FILTER_TYPE,
      longDescription: "Web Application Built with Spring Boot Framework to Manage Food Ordering System with Firebase Admin SDK and Mysql Database with OAuth JWT Authentication and Kotlin Programming Language, Firebase Realtime Database, Exception Handling",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_api_preview.webp",
      link: "https://github.com/Yazan98/destiny-api",
      tags: [
        "Spring Boot Api",
        "JWT Authentication",
        "Json Response",
        "MySql Database",
        "Firebase Admin"
      ]
    },
    {
      id: 12,
      name: 'Legora',
      createdAt: 'Github : 2021',
      description: 'Android Application - Training Project to Test Vanite Source Code Library Built With Riot Api',
      image: 'https://user-images.githubusercontent.com/29167110/202738494-ca1a57ed-6b1f-4ecf-b69f-026c1ec4da3f.png',
      type: WEB_APPS_FILTER_TYPE,
      longDescription: "Android Application Built With Navigation Components and ViewBinding, Vanite, Coroutines, Retrofit, Moshi, Multi Modular Application To Show Summoners Information and Champions, Items, Deeplinks, Skins Built with Riot Api",
      imageProject: "https://user-images.githubusercontent.com/29167110/202738494-ca1a57ed-6b1f-4ecf-b69f-026c1ec4da3f.png",
      link: "https://play.google.com/store/apps/details?id=com.yazantarifi.league.client",
      tags: [
        "Kotlin",
          "View Binding",
          "Coroutines",
          "Vanite",
          "Retrofit"
      ],
      images: [
        "https://user-images.githubusercontent.com/29167110/202739048-0663af37-2394-4a2f-9fd4-173bc4f64aeb.png",
        "https://user-images.githubusercontent.com/29167110/202739066-614a7921-d53f-4ef2-a67f-ca8b3f884902.png",
        "https://user-images.githubusercontent.com/29167110/202739084-f6c93f09-cdff-4044-9c0d-de35d86f1277.png",
        "https://user-images.githubusercontent.com/29167110/202739101-406bb5a2-4448-404e-8c16-2e8cd55f4744.png",
        "https://user-images.githubusercontent.com/29167110/202739117-b79c40dc-2648-43fe-ab59-ae3d6ca0283b.png",
        "https://user-images.githubusercontent.com/29167110/202739136-50685847-133d-450e-b107-f709f39b532a.png",
        "https://user-images.githubusercontent.com/29167110/202739167-76fe2730-986d-4fdb-ac34-493819797005.png",
      ]
    },
    {
      id: 13,
      name: 'All Projects',
      createdAt: 'View All Projects Open, Closed Source',
      description: 'Show All Projects In One List with All Links Required to Each Project with Description and More Filters',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/all_preview.webp',
      type: FILTERED_PROJECTS_FILTER_TYPE,
    },
  ];
}

export function getProjectsListByFilter(filter) {
  return getProjectsList().filter((e) => e.type === filter);
}

export function getProjectsListByName(filter) {
  return getProjectsList().filter((e) => e.name === filter);
}
