# Using Git and GitHub for Open Ocean Science

## GHRSST Science Team Meeting 2022

Organizers
- Chelle Gentemann @cgentemann
- Ed Armstrong @Edshred2000

## Task 1

Add your information to the `people.json` file to make your name, organization, and GitHub id appear in the *Participants* section of the website.

A [JSON](https://www.json.org/) file uses braces, quotations, and commas to separate out the information. Copy an existing person's information as a template for your own. 

## Task 2

Add your organization and favourite ocean feature to the `places.geojson` file.  This will make a marker appear on the map with the location, type, and description information in a pop up.  If the type is "Organization", the marker will get a different symbol color.

A [GeoJSON](https://geojson.org/) file is a type of JSON file that is used for encoding a variety of geographic data. 
 Please note that is GeoJSON the coordinates are given by [ *longitude*, *latitude* ].

 The website https://geojson.org has a **very** useful editor that can be used to find the coordinates of any feature by using the tools provided.  Copy and paste the entire `places.geojson` into this editor and then copy it back to GitHub to commit your changes.

## Task 3 (if we have time)

Create your own website that will look like [my website](https://cgentemann.github.io/)

### Setting Up your Jekyll Academic Repository:
- From your main profile page in GitHub click on New Repository
- Give your repository the following name [username].github.io *
- Click on Create Repository
- Click on the Import Code button under the "...or import code from another repository" section
- Paste the following URL in the “Your old repository’s clone URL" section https://github.com/NCSU-Libraries/jekyll-academic
- Click on Begin Import
- Once import is complete navigate to [username.github.io] in your web browser
*Note: For for GitHub Pages site to work correctly, the repository name must exactly match the format of [username].github.io. For example if your GitHub username is student1234 your GitHub Pages repository must be named student1234.github.io

### See your Live Website
- Open your web browser and go to [username].github.io

### Edit Site Files via GitHub Browser Editor
- Open a second web browser tab that shows the files in your repository github.com/[username]/[username].github.io
- Edit the main settings file for your website to add your name, and to link your accounts
- Click on the _config.yml file in your repository to see the contents of that file
- Click on the ‘Edit This File’ button
- Edit the following entries of the _config.yml file
- Title
- Name
- Bio
- Email (enter your full email address)
- Edit the following entries to provide links to social media platforms by replacing #username with your actual username on that platform.
- Twitter
- Facebook
- GitHub
- ... etc.
### Commit Changes to GitHub*
After making changes to the file, make a note under the ‘Commit Changes’ section documenting the changes that you made (e.g. Updated social media usernames)
- Click ‘Commit changes’
Refresh the browser tab that contains your live website ([username].github.io) and confirm that changes were made to your site
