# FAST Curriculum for learning with Fluent Web

## Lesson 01
Getting your environment up and running with the basic global applications and configurations required for web development.

### Install and configure Git
1. Install the latest stable versions of [Git](https://git-scm.com/download).
2. Configure git user credentials for [every respository](https://help.github.com/articles/setting-your-username-in-git/#setting-your-git-username-for-every-repository-on-your-computer) or [single repository](https://help.github.com/articles/setting-your-username-in-git/#setting-your-git-username-for-a-single-repository) as shown:
    - Set user name:
        ```
        $ git config user.name "Jane Doe"
        ```
    - Set user email:
        ```
        $ git config user.email "jane.doe@email.com"
        ```
    - Set credential manager:
        - For Mac:
            ```
            $ git config credential.helper osxkeychain
            ```
        - For Windows:
            ```
            $ git config credential.helper wincred
            ```
    - Set configuration so renaming files is a tracked change:
        ```
        $ git config core.ignorecase false
        ```

### Install and configure Node
1. Install the LTS - Long Term Supported version of [Node](https://nodejs.org/en).