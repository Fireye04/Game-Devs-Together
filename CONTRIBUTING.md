# Contributing!

Hi! You're probably either here to join the webring or actually contribute. Either way, welcome!

## Joining the webring!

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

## Contributing

### GDT

Have an idea for a community project, meeting, or other improvement? Please feel free to open up a discussion [here](https://github.com/Fireye04/Game-Devs-Together/discussions) so we can discuss it!

### The website

The site itself is written in hugo, which is a go-based static site generator. The template (raw HTML, CSS, etc...) was taken from my [main website](https://github.com/Fireye04/coffee), and slightly modified to fit GDT's needs. I'm certaintly not opposed to diverging the two codebases if anyone happens to have any good ideas though! 

Small fixes and features, QOL improvements, docs, or general tidying up of the codebase are welcome as pull requests, but if you want to do a larger refactor or feature addition, open up a discussion [here](https://github.com/Fireye04/Game-Devs-Together/discussions) first to discuss the details with the community.

#### Design intentions

I'm a big fan of scalable, performant, responsive websites. I'm not against personality or eye candy (much the opposite), however changes should be written cleanly, commit history should approximate something sane (rebases over merges, squash repeteitive commits when possible, etc...), images and icons should be optimized for filesize and load times, and it should be a good experience to use it on any sane platform (sorry smartfridge users).

Things can always be improved though, so even if you think your code is shit, please open a pull request, and I'm happy to help make it better.
