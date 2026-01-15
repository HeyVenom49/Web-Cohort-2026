.git Folder
Hidden folder in your project; stores the entire Git history.

Contains:

objects/ → stores all data (blobs, trees, commits)

refs/ → pointers to branches

HEAD → shows current branch

logs/ → records actions (commits, switches)

config → project-specific settings

Deleting .git removes Git history but keeps code files intact.

Git Objects

Blob: stores file content; named by content hash

Tree: stores folder structure and links to blobs

Commit: snapshot linking to tree + parent, stores author, timestamp, message

Chain: Commit → Tree → Blob; commits form project history.

How Git Tracks Changes

git add filename → stages file; creates blob

git commit -m "message" → creates tree + commit; links to parent; updates branch

Every change creates new blobs/commits; old ones are retained

Hashes ensure integrity; any content change creates a new hash

Workflow Example

Create login.js → working directory

git add login.js → staged

git commit -m "Add login functionality" → snapshot saved

Modify → git add + git commit → new blob, commit linked to previous

Git history grows safely; old versions can be reverted anytime

In short: Git stores safe, efficient, versioned history using blobs, trees, and commits in .git. Every commit links to the previous one, and hashes keep data secure.

[For more details click here link 🔗](https://heyvenom-git-for-beginner.hashnode.dev/inside-git-how-it-works-and-the-role-of-the-git-folder)
