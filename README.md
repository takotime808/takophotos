t a k o p h o t o s
====================

>---> [My Demo.](https://cmutnik.github.io/takophotos/ "DEMO")  <---<br>


----------
### Usage ###

**Before you begin: Change the URL and the BASEURL as well as the internal nav links in the `_config.yml`**

The **URL** should say `https://yourusername.github.io`

The **BASEURL** should say `/repositoryname`

**Internal nav** should say

  nav:

  - GALLERY: `"https://yourusername.github.io/repositoryname/gallery/"`
  - JOURNAL: `"https://yourusername.github.io/repositoryname/journal/"`
  - ABOUT: `"https://yourusername.github.io/repositoryname/about/`"

If there are problems with loading assets like CSS files and images, make sure that both **URL** and **BASEURL** are set correctly.

### Progressive Web App

This project ships with a basic service worker and web app manifest so it can be installed as a Progressive Web App. The site is automatically built and deployed to GitHub Pages via a GitHub Actions workflow.

----

**Not for HTTPS served repos.**

If you want to use your **own domain** go to the root of your project's repository, create a CNAME file and add a line with your domain name, e.g. `www.yourdomain.com`.

Go to your domain name registrar and add a CNAME record pointing your domain to GitHub Pages:
- type: CNAME
- host: www.yourdomainname.com
- answer: yourusername.github.io/repositoryname
- TTL: 300

----
## Usage ##

### Quick Start ###

1. [Fork this repository](https://github.com/cmutnik/takophotos/fork) to get started. 
2. Go to `https://github.com/yourusername/takophotos/settings`
3. Rename the repository to your new project, e.g. *myphotoblog*
2. Create a new branch called `gh-pages` in your repository. 
3. Go to the branches directory at `https://github.com/yourusername/repositoryname/branches` and *change* **default branch** to **gh-pages**.
4. Delete **master** branch. 
3. GitHub will build your site automatically and publish it at `https://yourusername.github.io/repositoryname/`.  

---
### Add New Image Gallery ###
1. Images are stored in a gallery dir, such as [`img/galleries/gallery13_uvivf`](./img/galleries/gallery13_uvivf)

2. Resize images and convert to `*.webp` format using the python sctipt [`manipulate_images_for_web.py`](./scripts/manipulate_images_for_web.py)
```sh
python manipulate_images_for_web.py -i test/* -o test/. -oe webp -sf 0.5
```
  - **NOTE:** Sometimes there is a pathing issue.  To get around this, the easiest way is to copy the script into the dir with the images, run the script there, then remove original images and the script.
    ```sh
    mkdir -p ./img/galleries/gallery13_uvivf
    scp ./scripts/manipulate_images_for_web.py ./img/galleries/gallery13_uvivf/.
    cd ./img/galleries/gallery13_uvivf
    python manipulate_images_for_web.py -sf 0.5
    ```

3. Make a new gallery [`index.html`](gallery/gallery13/index.html).  Sticking with the `gallery13` example:
    ```sh
    mkdir gallery/gallery13/
    scp gallery/gallery03/index.html gallery/gallery13/.
    ```
and modify the header of the file to be consistent with the newly added image paths.

4. Add a new background image to the repo and fix the `index.html` path.

5. Modify [`gallery/index.html`](gallery/index.html) to reflect newly added gallery, with proper image thumbnail path.

6. Push to repo for auto build and deployment, after making sure paths are correct for:
- BANNERS: `img/banners/`
- ALBUMS: `img/galleries/albums/`
- BACKGROUNDS: `img/galleries/backgrounds/`
- NEWLY_ADDED_GALLERY: `img/galleries/gallery13_uvivf/`

<!-- ---
---
### To Do ###

> :soon: Add galleries for: UVIVF, macro, takos, and Oregon (possibly add to 'main land' gallery).

> :soon: Write README docs with step-by-step instructions on how to add new galleries to site. (Modify ___ with gallery name, resize images and convert to `*.webp` with blah, yaddah, yaddah, yaddah.) -->
