$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('MyProject\CucumberTestCases\Pages\LoginTestcases.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Login functionality of Orange HRM application",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing login functionality with valid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"Admin\" in UserName field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"admin123\" in Password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should enter into an application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 18976690900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "LoginTestCases_StepDefinations.EnterUserName(String)"
});
formatter.result({
  "duration": 88880600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 13
    }
  ],
  "location": "LoginTestCases_StepDefinations.EnterPassword(String)"
});
formatter.result({
  "duration": 91436400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.ClickLogin_button()"
});
formatter.result({
  "duration": 5069477500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.CheckIfUserisLoggedIn()"
});
formatter.result({
  "duration": 35200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Testing login functionality with Invalid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters Pranoday in UserName field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters Dingare in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login Error:Invalid credentials should appear",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 11052813000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pranoday",
      "offset": 12
    }
  ],
  "location": "LoginTestCases_StepDefinations.EnterUserName1(String)"
});
formatter.result({
  "duration": 99892600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dingare",
      "offset": 12
    }
  ],
  "location": "LoginTestCases_StepDefinations.EnterPassword1(String)"
});
formatter.result({
  "duration": 70980400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.ClickLogin_button()"
});
formatter.result({
  "duration": 1332474900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 12
    }
  ],
  "location": "LoginTestCases_StepDefinations.Login_Error_Password_cannot_be_empty_should_appear(String)"
});
formatter.result({
  "duration": 536661400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Testing login functionality with Invalid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters  in UserName field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters admin123 in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login Error:Username cannot be empty should appear",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 18766165300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "LoginTestCases_StepDefinations.EnterUserName1(String)"
});
formatter.result({
  "duration": 77283300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "LoginTestCases_StepDefinations.EnterPassword1(String)"
});
formatter.result({
  "duration": 90699600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.ClickLogin_button()"
});
formatter.result({
  "duration": 55005600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 12
    }
  ],
  "location": "LoginTestCases_StepDefinations.Login_Error_Password_cannot_be_empty_should_appear(String)"
});
formatter.result({
  "duration": 39943800,
  "status": "passed"
});
});