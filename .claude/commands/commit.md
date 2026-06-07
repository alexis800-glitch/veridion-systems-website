Analyze the current git changes and create a conventional commit.

Steps:
1. Run `git status` to see what files have changed.
2. Run `git diff` and `git diff --staged` to understand what changed and why.
3. Stage all changed files except `.env`: run `git add .` then `git reset HEAD -- .env` (if .env exists in staging).
4. Based on the diff, write a concise conventional commit message using this format:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `style:` for CSS/visual changes with no logic change
   - `refactor:` for code restructuring
   - `content:` for copy/text/asset updates
   - `chore:` for config, tooling, or maintenance tasks
   - `docs:` for documentation changes
   The subject line should be under 72 characters and describe the *what and why*, not the how.
5. Commit using: `git commit -m "<type>: <subject>"`
6. Report what was committed and the final commit message.

Do not commit `.env` under any circumstances. Do not use `--no-verify`. Do not amend previous commits.
