$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\cucumber\\mavenCucumberPrototype\\Navigate to Student enrolment notification .feature");
formatter.feature({
  "id": "navigating-to-student-enrolment-notification",
  "description": "\r\nIn order to create CID \r\nI want to navigate Student enrolment notification page",
  "name": "Navigating to Student enrolment notification",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "navigating-to-student-enrolment-notification;navigation-to-student-enrolment-notification;;2",
  "tags": [
    {
      "name": "@Navigation",
      "line": 6
    }
  ],
  "description": "",
  "name": "Navigation to Student enrolment notification",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I enter \"loginusername\" as \"ramesh.pothuraju1\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"strawberry2\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I click on \"login_button\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I click on \"Test_JBOSS_link\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I enter \"legalOrgId\" as \"327489\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"rtow_Go_button\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click on \"RTO_Contract_Services_link\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I click on \"Student_enrolment_notification_link\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I click on \"Enquiry_and_notification_one_at_a_time_link\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on \"Next_button\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "\"Student_enrolment_notification\" page opened",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "STSLogin.I_go_to_login_url_on_mozilla(String,String)"
});
formatter.result({
  "duration": 5620814206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "ramesh.pothuraju1",
      "offset": 28
    }
  ],
  "location": "STSLogin.I_enter(String,String)"
});
formatter.result({
  "duration": 117065250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "strawberry2",
      "offset": 28
    }
  ],
  "location": "STSLogin.I_enter(String,String)"
});
formatter.result({
  "duration": 58211206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login_button",
      "offset": 12
    }
  ],
  "location": "STSLogin.I_Click_On(String)"
});
formatter.result({
  "duration": 3035477381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test_JBOSS_link",
      "offset": 12
    }
  ],
  "location": "STSLogin.I_Click_On(String)"
});
formatter.result({
  "duration": 768112124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "legalOrgId",
      "offset": 9
    },
    {
      "val": "327489",
      "offset": 25
    }
  ],
  "location": "STSLogin.I_enter(String,String)"
});
formatter.result({
  "duration": 74158067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rtow_Go_button",
      "offset": 12
    }
  ],
  "location": "STSLogin.I_Click_On(String)"
});
formatter.result({
  "duration": 8320514308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RTO_Contract_Services_link",
      "offset": 12
    }
  ],
  "location": "STSLogin.I_Click_On(String)"
});
formatter.result({
  "duration": 1488803516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Student_enrolment_notification_link",
      "offset": 12
    }
  ],
  "location": "STSLogin.I_Click_On(String)"
});
formatter.result({
  "duration": 5921660843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enquiry_and_notification_one_at_a_time_link",
      "offset": 12
    }
  ],
  "location": "STSLogin.I_Click_On(String)"
});
formatter.result({
  "duration": 5093379142,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"html/body/div[1]/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div[2]/a[1]/div/div[2]/span/strong\"}\nCommand duration or timeout: 5.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u00274437E694EE35P\u0027, ip: \u0027192.168.10.157\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_67\u0027\n*** Element info: {Using\u003dxpath, value\u003dhtml/body/div[1]/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div[2]/a[1]/div/div[2]/span/strong}\nSession ID: 1f3a280a-88f3-4903-9df3-0e1a092e234f\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d24.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.cucumber.mavenCucumberPrototype.util.WebConnector.click(WebConnector.java:95)\r\n\tat com.cucumber.mavenCucumberPrototype.STSLogin.I_Click_On(STSLogin.java:28)\r\n\tat ✽.And I click on \"Enquiry_and_notification_one_at_a_time_link\"(com\\cucumber\\mavenCucumberPrototype\\Navigate to Student enrolment notification .feature:17)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"html/body/div[1]/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div[2]/a[1]/div/div[2]/span/strong\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u00274437E694EE35P\u0027, ip: \u0027192.168.10.157\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_67\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/RPOTHU~1/AppData/Local/Temp/anonymous5105559564536950453webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/RPOTHU~1/AppData/Local/Temp/anonymous5105559564536950453webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Next_button",
      "offset": 12
    }
  ],
  "location": "STSLogin.I_Click_On(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Student_enrolment_notification",
      "offset": 1
    }
  ],
  "location": "NavStudentEnrolmentNotification.page_opened(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://online11.test.det.nsw.edu.au/rtow/apl/enrolMaintenance.do?method\u003dgoToQuoteEnquiry");
formatter.embedding("image/png", "embedded0.png");
formatter.write("Current Page URL is ");
});