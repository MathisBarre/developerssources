# Website informations :

[Visit the site homepage](https://developerssources.now.sh)

# Contribution guide

## Don't know how to do a pull request ?

[See this 2 minutes video by fireship](https://youtu.be/8lGpZkjnkt4)

## Adding courses

Changes are made in these two files
 - `/data/website.json` : Lists of all websites that contain courses
 - `/data/courses.json` : Lists of all courses ( linked to his website )

### First step : add the site on which the course is located on

To add a new course, you must first check if the site on which the course is located already exists in the `websites.json` file.

If not, add the site data according to the following template:
```json
  {
    "id": "websiteid",
    "title": "Website ID",
    "img": "images/websiteid.svg",
    "url": "https://www.website.id"
  },
```
Be free to watch the existing websites and reproduce the same pattern.

IMPORTANT NOTES:
  - `"id"`  must be the website home secondary & top-level domain with lower case letter only. Example : `https://www.youtube.com` will be `youtubecom`
  - `"img"` must be the path location to an img ( in `public/images/` ), be free to add an image or just write `false` instead of the path

### Second step : 

Now, to add a new course, go to the courses.json file and add your course according to the following template :
```json
  {
    "websiteId": "websiteid",
    "title": "Random guide",
    "url": "https://www.website.id/guide",
    "desc": "This is the course description",
    "languages": ["english", "french"],
    "likes": [],
    "level": { "from": "easy", "to" : "advances" },
    "technologiesId": [ "htmlcss" ]
  },
```
IMPORTANT NOTES:
  - `"languages"` must be an array of lower case string. We currently support "english" & "french"
  - `"likes"` must be an empty array
  - `"level"` must be an object with an required "from" property and an optionnal "to" property. The value of this property are simple lower case string (the string you want but try to be consistent with the existing one)
  - `"technologiesId"` must be an array of technologies ID, the existing available technologies id are : "htmlcss", "javascript", "react", "vuejs", "angular". Note that if the documention is outdated, you can see a full list of ids in `componenets/layout.js` page ( `navigation` array )



## Third step : test your changes locally

First, run the development server:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Then...

The website work locally ? You can do a pull request !

# Credit
This is a [Next.js](https://nextjs.org/) project desploy with [Vercel](https://vercel.com)