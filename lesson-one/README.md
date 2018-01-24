# FAST Curriculum for learning with Fluent Web

## Lesson One
Getting your environment up and running with the basic global applications and configurations required for web development.

### Install and configure Git
1. Install the latest stable versions of [Git](https://git-scm.com/download).
1. Configure git user credentials for [every respository](https://help.github.com/articles/setting-your-username-in-git/#setting-your-git-username-for-every-repository-on-your-computer) or [single repository](https://help.github.com/articles/setting-your-username-in-git/#setting-your-git-username-for-a-single-repository) as shown:
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

### Install and configure NPM
Configure feed authentication so the application can call into private dependencies.

1. Click on [Connect to feed](https://fluentweb.visualstudio.com/Fluent%20Web/_packaging?feed=ms.fw&_a=feed) to launch into a dialog containing more detailed instructions.
1. Select `npm` on the left navigation.
1. Create or edit the .npmrc file using Git Bash in the home folder
    ```
    $ vi ~/.npmrc
    ```
1. Add registry information into the .npmrc. This step can be skipped if the source repository already includes an .npmrc file with the registry information. If you run into problems, try to remove the `always-auth=true` to follow.
    ```
    registry=registry=https://fluentweb.pkgs.visualstudio.com/_packaging/ms.fw/npm/registry/
    always-auth=true
    ```
1.  Add credentials to your user .npmrc file manually by clicking on the "Generate npm credentials" link and copying the contents revealed in the text area. It will look similar to this example:
    ```
    ; begin auth token
    //fluentweb.pkgs.visualstudio.com/_packaging/ms.fw@Release/npm/registry/:_authToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im9PdmN6NU1fN3AtSGpJS2xGWHo5M3VfVjBabyJ9.eyJuYW1laWQiOiI4N2JlZDgyNi05NmVlLTRkMzYtYTUzOS04Y2UxOTNlNGE0MjYiLCJzY3AiOiJ2c28uZHJvcF93cml0ZSB2c28ucGFja2FnaW5nX3dyaXRlIiwiYXVpIjoiN2NmZGI2ZmYtZDkzYi00Yk1NGItZjlkZmUwOGE4ZDcyIiwic2lkIjoiMDMwODhlOTYtYmFhMi00MzIyLWFiY2EtZDJmNjYxMjUwYTcwIiwiaXNzIjoiYXBwLnZzc3BzLnZpc3VhbHN0dWRpby5jb20iLCJhdWQiOiJhcHAudnNzcHMudmlzdWFsc3R1ZGlvLmNvbXx2c286ODFjODQ1NDktOTg5ZC00MWVhLWFhMjgtNmFjODhhMmFkZDibmJmIjoxNTA0MjA3NjYzLCJleHAiOjE1MTE5ODM2NjN9.zkHHSxN2AN2jjfgTHdwYltIzdKxxdHoQjXem-Sb-_M9y31R2oF0z-srl153S4iqNpB6BlgQK-peqn93mwKd9FwH4W9baDsufIZRLpMBbCz7c0BVHBdCEHJhPC961JcY8WXq0_-hxmhmgagxjmk9N4Xt6wUpOADsGiRTzjnslfVYSJ0Y1F1lE6BIrVbn4BOGEuT8nvD6VDA-vRwTtEw88d4LjOeJsLXUeQL7sUKOeG9d2UnTOvU6Alees0pC_GXeG00D46gKND85EJ2USkxrH_eH8n96hstKQYuz29xQKJeaIngNy-Dq2U_3Jo8uKr9NbJ8dV1CEDCAirpobQH9x1TQ
    //fluentweb.pkgs.visualstudio.com/_packaging/ms.fw@Release/npm/:_authToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im9PdmN6NU1fN3AtSGpJS2xGWHo5M3VfVjBabyJ9.eyJuYW1laWQiOiI4N2JlZDgyNi05NmVlLTRkMzYtY04Y2UxOTNlNGE0MjYiLCJzY3AiOiJ2c28uZHJvcF93cml0ZSB2c28ucGFja2FnaW5nX3dyaXRlIiwiYXVpIjoiN2NmZGI2ZmYtZDkzYi00Y2MyLTk1NGItZjlkZmUwOGE4ZDcyIiwic2lkIjoiMDMwODhlOTYtYmFhMi00MzIyLWFiY2EtZDJmNjYxMjUwYTcwIiwiaXNzIjoiYXBwLnZzc3BzLnZpc3VhbHN0dWRpby5jb20iLQiOiJhcHAudnNzcHMudmlzdWFsc3R1ZGlvLmNvbXx2c286ODFjODQ1NDktOTg5ZC00MWVhLWFhMjgtNmFjODhhMmFkZDQ3IiwibmJmIjoxNTA0MjA3NjYzLCJleHAiOjE1MTE5ODM2NjN9.zkHHSxN2AN2jjfgTHdwYltIzdKxxdHoQjXem-Sb-_M9y31R2oF0z-srl153S4iqNpB6BlgQK-peqn93mwKd9FwH4W9baDsufIZRLpMBbCz7c0BVHBdCEHJhPC961JcY8WXq0_-hxmhmgagxjmk9N4Xt6wUpOADsGiRTzjnslfVYSJ0Y1F1lE6BIrVbn4BOGEuT8nvD6VDA-vRwTtEw88d4LjOeJsLXUeQL7sUKOeG9d2UnTOvU6Alees0pC_GXeG00D46gKND85EJ2USkxrH_eH8n96hstKQYuz29xQKJeaIngNy-Dq2U_3Jo8uKr9NbJ8dV1CEDCAirpobQH9x1TQ
    ; end auth token

### Install and configure TypeScript
Install the latest version of TypeScript globally using NPM
```
npm install -g typescript
```