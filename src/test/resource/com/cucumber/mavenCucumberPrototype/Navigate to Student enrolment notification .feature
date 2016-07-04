Feature: Navigating to Student enrolment notification

In order to create CID 
I want to navigate Student enrolment notification page

@Navigation
Scenario Outline: Navigation to Student enrolment notification
    Given I go to "loginURL" on "Mozilla"
    And I enter "loginusername" as "<UserName>"
		And I enter "loginpassword" as "<Password>"
		And I click on "login_button"
		And I click on "Test_JBOSS_link"
		And I enter "legalOrgId" as "<legalOrgId>"
		And I click on "rtow_Go_button" 
		And I click on "RTO_Contract_Services_link"
		And I click on "Student_enrolment_notification_link"
		And I click on "Enquiry_and_notification_one_at_a_time_link"
		And I click on "Next_button"
		Then "Student_enrolment_notification" page opened		
		

 Examples:
|   UserName            		|     Password 	   | legalOrgId  |
|   ramesh.pothuraju1       |     strawberry2  | 327489      |
 
 