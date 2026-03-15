# Hosted Projects Directory

This directory (`public/projects`) is a hub for your standalone/static projects.

## Directory Structure
- **index.html**: The "Hub" page. You can edit this file to link to ANY project, whether it's inside this folder or not.
- **[project-folder]/**: If you drop a project folder here (e.g. `game`), it will be accessible at `yourdomain.com/projects/game`.

## How to "Give Access" (Linking)

### 1. Projects Hosted Inside This Folder
If you place a folder named `my-game` inside `public/projects/`:
- **URL**: `/projects/my-game/`
- **Link in index.html**: `<a href="./my-game/">My Game</a>`

### 2. Projects Hosted at the Root
If you place a folder named `old-site` directly in `public/` (not in `projects/`):
- **URL**: `/old-site/` (The .htaccess allows this!)
- **Link in index.html**: `<a href="/old-site/">Old Site</a>`

### 3. External Projects
If you have a project hosted on another domain or subdomain:
- **URL**: `https://subdomain.hostingersite.com`
- **Link in index.html**: `<a href="https://subdomain.hostingersite.com" target="_blank">External Project</a>`

## Summary
You can list **anything** in `index.html`. It is just a standard HTML file. Access depends on where the files are actually located.
