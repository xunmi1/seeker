(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{223:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-简要总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-简要总结","aria-hidden":"true"}},[s._v("#")]),s._v(" Git 简要总结")]),s._v(" "),a("h2",{attrs:{id:"主流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主流程","aria-hidden":"true"}},[s._v("#")]),s._v(" 主流程")]),s._v(" "),a("ol",[a("li",[s._v("克隆仓库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git clone [<options>] [--] <repo> [<dir>]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆 dev 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone -b dev git@github.com:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".git dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("将文件变更记录写入到本地的索引库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git add [<options>] [--] <pathspec>...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加当前目录下所有文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加部分文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add src/main.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("提交变更到工作区")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git commit [<options>] [--] <pathspec>...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"feat: an ordinary commit"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 追加提交")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置上次提交的 author 和 message")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend --reset-author \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("推送代码到远程仓库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push [<options>] [<repository> [<refspec>...]]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交本地当前分支到 origin 远程仓库的 master 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交本地 dev 分支到 origin 远程仓库的 master 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master:dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作原理","aria-hidden":"true"}},[s._v("#")]),s._v(" 工作原理")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Git_operations.svg/1280px-Git_operations.svg.png",alt:"image.png"}})]),s._v(" "),a("ul",[a("li",[s._v("工作区 "),a("code",[s._v("Working Files")])]),s._v(" "),a("li",[s._v("暂存区"),a("code",[s._v("Stage")])]),s._v(" "),a("li",[s._v("分支"),a("code",[s._v("Branches")])]),s._v(" "),a("li",[s._v("本地仓库"),a("code",[s._v("Local")])]),s._v(" "),a("li",[s._v("远程仓库"),a("code",[s._v("Remote")])])]),s._v(" "),a("p",[s._v("工作流程")]),s._v(" "),a("ol",[a("li",[s._v("在工作目录中修改文件。")]),s._v(" "),a("li",[s._v("暂存文件，将文件的快照放入暂存区域。")]),s._v(" "),a("li",[s._v("提交更新，找到暂存区域的文件，将快照永久性存储到本地仓库的分支中")]),s._v(" "),a("li",[s._v("推送并合并到远程仓库的分支")])]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("h3",{attrs:{id:"git-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-init","aria-hidden":"true"}},[s._v("#")]),s._v(" git init")]),s._v(" "),a("p",[s._v("创建一个空白的 git 仓库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"git-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-add","aria-hidden":"true"}},[s._v("#")]),s._v(" git add")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git add [<options>] [--] <pathspec>...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"git-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit","aria-hidden":"true"}},[s._v("#")]),s._v(" git commit")]),s._v(" "),a("ol",[a("li",[s._v("提交")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git commit [<options>] [--] <pathspec>...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("追加提交，修改上一个 commit 的信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new message'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"git-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-remote","aria-hidden":"true"}},[s._v("#")]),s._v(" git remote")]),s._v(" "),a("p",[s._v("操作远程 git 仓库。")]),s._v(" "),a("ol",[a("li",[s._v("查看远程仓库信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("看远程仓库详细信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("添加远程仓库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote add [-t <branch>] [-m <master>] [-f] [--tags | --no-tags] [--mirror=<fetch|push>] <name> <url>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加别名为 origin 的远程仓库，别名为必填")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote add origin https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("REPO"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote add origin git@github.com:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("REPO"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("修改远程仓库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote set-url origin <URL>")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("删除远程仓库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote remove <name>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除别名为 origin 的远程仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote remove origin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"git-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-branch","aria-hidden":"true"}},[s._v("#")]),s._v(" git branch")]),s._v(" "),a("ol",[a("li",[s._v("列出本地存在的分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("列出远程分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -r\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("创建本地分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git branch [branchName] (remoteBranch)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基于远程仓库的 remote-branch 分支(可选), 创建本地仓库的 my-branch 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch my-branch remote-branch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("重命名分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git branch [<options>] (-m | -M) [<old-branch>] <new-branch>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 my-branch 分支(可省略)重命名为 new-branch")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -M my-branch new-branch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("删除本地分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git branch -d | -D [branch-name]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制删除 my-branch 分支（大写为强制删除）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D my-branch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("删除远程分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git branch [<options>] [-r] (-d | -D) <branch-name>.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 my-branch 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete my-branch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[s._v("关联跟踪上游分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git branch (--set-upstream | -u) <localBranch> <remote>/<remoteBranch>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地 dev 分支将跟踪 origin 远程仓库的 dev 分支，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream dev origin/dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"git-checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout","aria-hidden":"true"}},[s._v("#")]),s._v(" git checkout")]),s._v(" "),a("ol",[a("li",[s._v("切换分支:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git checkout [<options>] <branch>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换当前分支到 dev 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基于当前分支创建 test 分支，并且将当前分支切换到 test 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("恢复初始状态")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git checkout [<tree-ish>] [--] <pathspec>…")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 index.js、others 恢复到当前 commit 的初始的状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout index.js others.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"git-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge","aria-hidden":"true"}},[s._v("#")]),s._v(" git merge")]),s._v(" "),a("p",[s._v("合并分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并远程仓库的 master 分支到当前分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge origin/master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase","aria-hidden":"true"}},[s._v("#")]),s._v(" git rebase")]),s._v(" "),a("p",[s._v("重新提交记录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以 dev 分支重新为起点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 是弹出交互界面进行编辑，[startpoint] [endpoint]则指定了一个编辑区间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("startpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑近三次提交")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~3\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pick：保留该 commit（缩写:p）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reword：保留该 commit，修改提交信息（缩写:r）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# edit：保留该 commit, 但我要停下来修改该提交（缩写:e）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# squash：将该 commit 和前一个 commit 合并（缩写:s）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fixup：将该 commit 和前一个 commit 合并，但不会保留该提交的信息（缩写:f）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exec：执行其他 bash 命令（缩写:x）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# drop：丢弃该 commit（缩写:d）")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"git-cherry-pick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick","aria-hidden":"true"}},[s._v("#")]),s._v(" git cherry-pick")]),s._v(" "),a("p",[s._v("提取已有提交记录，合并到当前分支上。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git cherry-pick [<options>] <commit-ish>...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 xxxxxx 提交记录合并到当前分支下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick xxxxxx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 xxxxxx 到 yyyyyy 的所有提交记录合并到当前分支下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick xxxxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("yyyyyy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"git-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-push","aria-hidden":"true"}},[s._v("#")]),s._v(" git push")]),s._v(" "),a("p",[s._v("推送到远程仓库，同步本地仓库的提交历史到远程仓库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push [<options>] [<repository> [<refspec>...]]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交本地仓库当前分支到远程仓库的 master 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交本地仓库 dev 分支到远程的 master 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master:dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"git-pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-pull","aria-hidden":"true"}},[s._v("#")]),s._v(" git pull")]),s._v(" "),a("p",[s._v("拉取远程仓库某个分支，并和本地分支进行合并")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git pull <远程仓库别名> <远程分支名>:<本地分支名>，若存在追踪关系，可省略远程分支名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git pull [<options>] [<repository> [<refspec>...]]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认的 pull 行为等同于 git fetch && git merge")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 即 git fetch origin master && git merge origin/master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过变基的方式来拉取代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等同于 git fetch origin master && git rebase origin/master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"git-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-reset","aria-hidden":"true"}},[s._v("#")]),s._v(" git reset")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("HEAD")]),s._v("的位置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git reset [--hard|soft|mixed|merge|keep] [<commit>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到 xxxxxx，丢弃之后的提交内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard xxxxxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用 revert 反向创建新记录，重做之后的提交内容")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"git-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-tag","aria-hidden":"true"}},[s._v("#")]),s._v(" git tag")]),s._v(" "),a("ol",[a("li",[s._v("创建标签")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.1.0 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'备注'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("列出已有的标签")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("将标签推送到 origin 远程仓库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送单个标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送所有标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("删除本地标签")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v1.0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("删除 origin 远程仓库的标签")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Git version > v1.7.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete v1.0.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v1.0.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/v1.0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("git stash\n将当前工作区更改的内容暂存，需要时再将重新弹出工作区。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时存放，临时存放区是一个栈的结构，支持多次临时存放")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有存储内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新弹出到工作区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除储存内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash drop stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定储存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"仓库元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库元数据","aria-hidden":"true"}},[s._v("#")]),s._v(" 仓库元数据")]),s._v(" "),a("p",[s._v("每一个代码仓库目录下，都会有一个 "),a("code",[s._v(".git")]),s._v(" 的文件夹，其中主要文件如下：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("文件(夹)")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("含义")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("config")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("配置文件")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("description")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("描述，仅供 Git Web 程序使用")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("HEAD")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("当前被检出的分支")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("index")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("暂存区信息")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("hooks/")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("客户端或服务端的钩子脚本（hook scripts）")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("info/")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("全局排除 global exclude 文件, 不被记录在 .gitignore 文件中的忽略模式ignored patterns")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("refs/")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("数据（分支）的提交对象的指针")])])])]),s._v(" "),a("h2",{attrs:{id:"技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技巧","aria-hidden":"true"}},[s._v("#")]),s._v(" 技巧")]),s._v(" "),a("h3",{attrs:{id:"添加指定文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加指定文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加指定文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-files src/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\.css$'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"删除所有提交中的指定文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除所有提交中的指定文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除所有提交中的指定文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --force --index-filter "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git rm --cached --ignore-unmatch -r build'")]),s._v(" --prune-empty --tag-name-filter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -- --all\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 触发 GC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog expire --expire"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("now --all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gc --prune"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("now --aggressive\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("h3",{attrs:{id:"learngitbranching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learngitbranching","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LearnGitBranching"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"git-的奇技淫巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-的奇技淫巧","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 的奇技淫巧"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=e.exports}}]);