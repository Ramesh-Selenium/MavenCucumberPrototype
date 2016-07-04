Feature: Logging into STSOnline

In order to work 
As a admin person
I want to login


Scenario Outline: login to stsonline
    Given I go to "loginURL" on "Mozilla"
    And I enter "loginusername" as "<UserName>"
		And I enter "loginpassword" as "<Password>"
		And I click on "loginButton"

 Examples:
|   UserName            		|     Password 	   |
|   ramesh.pothuraju1       |     strawberry2  |