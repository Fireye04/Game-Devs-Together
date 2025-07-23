Hi! You're probably either here to join the webring or actually contribute. Either way, welcome!

# Joining the webring!

At the minimum you'll need to do the following:

1. Fork the repo. This is done in github via the big 'ol "fork" button on the project's github homepage.
2. Clone your fork (not the main repo) locally via `git clone <url>`, and `cd` into it.
3. Make your changes. This should involve adding the following snippet of code to the `members.json` file (shown [here](https://github.com/Fireye04/Game-Devs-Together/blob/main/assets/members.json)). Please put it in the "sites" list, at the bottom. Don't worry if you think you've messed it up, it'll be reviewed before making its way to the actual repo.
```json
{
  "name": "your-name-or-screenname-here",
  "url": "https://your-website-url-here",
  "description": "Describe your website!",
  "button_url": "https://url-of-your-button-here/mysillybutton.webp"
}
```
4. Perform the git 3-hit-combo: `git add --all`, `git commit -m "Add <website> to webring"`, `git push`
5. Navigate back to github and open a pull request from your fork. It should look like this:
```
Fireye04/Game-Devs-Together | main <- Your-Username-Here/Game-Devs-Together | main
```
6. Give it an appropriate name and description, then click the big green button.
7. From here your PR will either be merged immediately, or reviewed. You will be pinged within the PR if further action is required.
8. Once the PR merges, the site builds with the new file automatically, and you should see yourself in the members list. Welcome in!
