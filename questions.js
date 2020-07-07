const questions = [
    {
        type: "input",
        name: "title",
        message: "What is title of your project?"
    },
    {
        type: "input",
        name: "descriptionShort",
        message: "Give a one-line short description of your project"
    },
    {
        type: "input",
        name: "descriptionExtended",
        message: "Explain the what, why, and how. What was your motivation? Why did you build this project?"
    },
    {
        type: "input",
        name: "images",
        message: "If you want to include images with your extended description, input them here, using the format ![GitHub Logo](/images/logo.png). Be sure to include the exact relative file path. To include a caption, leave 2 spaces after each image and 2 spaces also after writing your caption."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for how to use the application, and give examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license that lets other developers know what they can and cannot do with your project.",
        choices: [
            "a [MIT License](https://opensource.org/licenses/MIT).",
            "a [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).",
            "an [AGPL v3 License](https://www.gnu.org/licenses/agpl-3.0).",
            "an [LGPL v3 License](https://www.gnu.org/licenses/lgpl-3.0).",
            "a [MPL 2.0 License](https://opensource.org/licenses/MPL-2.0).",
            "an [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).",
            "a [Boost Software License](https://www.boost.org/LICENSE_1_0.txt).",
        ]
    },
    {
        type: "list",
        name: "licenseBadge",
        message: "Choose a badge that corresponds to the type of license you chose in the previous question.",
        choices: [
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
            "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "If you created an application or package and would like other developers to contribute to it, add guidelines here for how to do so."
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application. Then provide examples on how to run them."
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is you Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address, so that people can reach you?"
    }
];

module.exports = {
    questions:questions
}